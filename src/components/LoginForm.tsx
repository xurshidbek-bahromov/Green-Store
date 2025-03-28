"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NotificationConter from "./NotificationContext";

interface LoginFormProps {
    onSuccess: () => void;
  }
  
  const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
    const router = useRouter();
    const [notification, setNotification] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!localStorage.getItem("registered")) {
        setNotification({ message: "Please register first.", type: "error" });
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_GREENSHOP_API}/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) {
          setNotification({ message: data.message || "Login failed.", type: "error" });
          setLoading(false);
          return;
        }
        localStorage.setItem("token", data.token);
        setNotification({ message: "Login successful!", type: "success" });
        onSuccess();
        setTimeout(() => {
          window.location.reload(); 
        }, 500);
        router.push("/profile");
      } catch (error) {
        setNotification({ message: "Something went wrong.", type: "error" });
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Password <span className="text-red-500">*</span></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        {notification && (
          <NotificationConter message={notification.message} type={notification.type} />
        )}
      </>
    );
  };
  
  export default LoginForm;
  