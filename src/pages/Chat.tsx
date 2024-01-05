import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Chat() {
  return (
    <ProtectedRoute>
      <h1>Chat</h1>
    </ProtectedRoute>
  );
}
