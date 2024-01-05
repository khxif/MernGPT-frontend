import { Suspense, lazy } from "react";
import { Skeleton } from "../ui/skeleton";
import Logo from "./Logo";

const DarkModeButton = lazy(() => import("./DarkModeButton"));
const UserButton = lazy(() => import("./UserButton"));

export default function Header() {
  return (
    <header
      className="py-4 px-6 md:px-10 flex justify-between items-center w-full border
   border-b border-b-zinc-400/40 shadow-sm"
    >
      <Logo />

      <div className="flex items-center space-x-5">
        <Suspense
          fallback={<Skeleton className="w-8 h-8 rounded-md bg-slate-400/40" />}
        >
          <DarkModeButton />
        </Suspense>
        <Suspense
          fallback={
            <Skeleton className="w-10 h-10 rounded-full bg-slate-400/40" />
          }
        >
          <UserButton />
        </Suspense>
      </div>
    </header>
  );
}
