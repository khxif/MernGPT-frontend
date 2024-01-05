import { useAppStore } from "@/store/store";
import ReactAvatar from "react-avatar";

export default function UserAvatar() {
  const [user] = useAppStore((state) => [state.user]);
  return (
    <ReactAvatar
      name={user?.username}
      round={true}
      size="40"
      className="text-xs"
    />
  );
}
