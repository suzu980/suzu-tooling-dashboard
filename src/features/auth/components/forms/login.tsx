import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { authWithPassword } from "../../api/api";
import { useLocalStorage } from "@/hooks/use-local-storage";

type LoginFormInputs = {
  username: string;
  password: string;
};
const LoginForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useLocalStorage<string | null>(
    "userAuthToken",
    null
  );
  console.log(value);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    authWithPassword({ identity: data.username, password: data.password })
      .then((responseData) => {
        console.log(responseData);
        setValue(responseData.token);
        navigate("dashboard");
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
    </form>
  );
};
export default LoginForm;
