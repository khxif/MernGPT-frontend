import { Suspense, lazy } from "react";

const LoginForm = lazy(() => import("@/components/auth/LoginForm"));

export default function Login() {
  return (
    <main className="h-[70vh] flex flex-col items-center justify-center space-y-8">
      <h1 className="font-bold text-2xl">Login to use ChatGPT!</h1>

      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
