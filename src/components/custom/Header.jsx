import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-lg">
        <Link to={'/'}><img src="/logo.svg" width={40} height={40} /></Link>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={'/dashboard'}>
            <Button className="bg-purple-600 hover:bg-purple-500 outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className="bg-purple-600 hover:bg-purple-500">Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
