import RevealAnimation from "@/motion/RevealAnimation";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <RevealAnimation>
      <Link to="/">
        <img
          src="/logo.png"
          alt="logo"
          width={50}
          height={25}
          className="filter invert backdrop-invert dark:filter-none"
        />
      </Link>
    </RevealAnimation>
  );
}
