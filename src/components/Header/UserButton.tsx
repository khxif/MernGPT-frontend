import { useUser } from "@/hooks/useUser";
import { BASE_URL } from "@/lib/constants";
import RevealAnimation from "@/motion/RevealAnimation";
import { useAppStore } from "@/store/store";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import NavLinks from "./NavLinks";
import UserAvatar from "./UserAvatar";

export default function UserButton() {
  const navigate = useNavigate();
  const [user, setUser] = useAppStore((state) => [state.user, state.setUser]);
  const { data } = useUser();

  const handleLogOut = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/user/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUser(null);
      navigate("/login");
      toast.info(data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    data &&
      setUser({
        _id: data?._id,
        username: data?.username,
        email: data?.email,
      });
  }, [data]);

  return (
    <>
      {user?.username ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <RevealAnimation>
              <UserAvatar />
            </RevealAnimation>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{user?.username}</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogOut}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <NavLinks />
      )}
    </>
  );
}
