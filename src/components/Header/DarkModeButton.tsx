import { Button } from "@/components/ui/button";
import RevealAnimation from "@/motion/RevealAnimation";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <RevealAnimation>
        {theme === "light" ? (
          <MoonIcon className="h-5 w-5 transition-all" />
        ) : (
          <SunIcon className="h-5 w-5  transition-all " />
        )}
      </RevealAnimation>
    </Button>
  );
}
