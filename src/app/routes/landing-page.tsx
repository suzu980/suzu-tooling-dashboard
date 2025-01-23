import { Card, CardDescription, CardTitle } from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";
import { bgColors, textColors } from "@/config/app-data";
import LoginForm from "@/features/auth/components/forms/login";
import { cn } from "@/utils/utils";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "min-h-screen w-full flex justify-center items-center",
        bgColors,
        textColors
      )}
    >
      <Card className="basis-full sm:basis-2/5 h-screen sm:h-auto">
        <CardTitle>Login</CardTitle>
        <Separator className="my-2" />
        <CardDescription>Login to your account</CardDescription>
        <LoginForm />
      </Card>
    </div>
  );
};
export default LandingPage;
