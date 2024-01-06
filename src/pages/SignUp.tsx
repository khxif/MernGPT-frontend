import { Suspense, lazy } from "react";

const SignUpForm = lazy(() => import("@/components/auth/SignUpForm"));

export default function SignUp() {
  return (
    <main className="h-[70vh] flex flex-col items-center justify-center space-y-8 mt-4">
      <h1 className="font-bold text-2xl">Sign up to use ChatGPT!</h1>

      <Suspense fallback={null}>
        <SignUpForm />
      </Suspense>
    </main>
  );
}
