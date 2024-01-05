import Header from "@/components/Header/Header";
import Chat from "@/pages/Chat";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import { ThemeProvider } from "next-themes";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Toaster richColors position="bottom-center" />
      </ThemeProvider>
    </>
  );
}
