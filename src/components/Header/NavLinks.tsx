import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function NavLinks() {
  return (
    <Link to="/login">
      <Button>Login</Button>
    </Link>
  );
}
