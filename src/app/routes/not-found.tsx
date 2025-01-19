import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-y-2">
      <div className="text-xl">Error 404 : No Page Found</div>
      <NavLink
        className={"cursor-pointer hover:underline flex items-center gap-x-2"}
        to={"/"}
      >
        Return to home
        <ArrowRight className="h-4 w-4" />
      </NavLink>
    </div>
  );
};
export default NotFoundPage;
