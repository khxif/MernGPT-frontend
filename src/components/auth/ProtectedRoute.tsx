"use client";
import { useAppStore } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const user = useAppStore((state) => state.user);

  useEffect(() => {
    if (!user?.username) return navigate("/login");
  }, [user]);

  return <>{children}</>;
}
