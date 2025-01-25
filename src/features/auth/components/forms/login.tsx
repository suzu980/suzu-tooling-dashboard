import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { authWithPassword } from "../../api/api";
import { localStorageKeys } from "@/config/constants";
import toast from "react-hot-toast";
import DarkModeToggle from "@/components/ui/dark-mode-toggle/nav-dark-mode-toggle";

type LoginFormInputs = {
  username: string;
  password: string;
};
const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const tryAuth = authWithPassword({
      identity: data.username,
      password: data.password,
    });
    toast.promise(tryAuth, {
      loading: "Logging in",
      success: (data) => `Welcome back ${data.record.name}!`,
      error: (err) => err.message,
    });
    tryAuth
      .then((responseData) => {
        localStorage.setItem(
          localStorageKeys.auth.authToken,
          responseData.token
        );
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="flex flex-col my-4 gap-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        placeholder="user@email.com"
        {...register("username", { required: true })}
        type="email"
      />
      {errors.username && (
        <span className="text-sm text-red-500">Email is required</span>
      )}
      <input
        placeholder="password..."
        {...register("password", { required: true })}
        type="password"
      />
      {errors.password && (
        <span className="text-sm text-red-500">Password is required</span>
      )}
      <button type="submit">Login</button>
      <div className="flex justify-end">
        <DarkModeToggle className="mt-4 cursor-pointer" />
      </div>
    </form>
  );
};
export default LoginForm;
