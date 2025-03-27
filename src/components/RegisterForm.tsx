"use client";
import React, { useState } from "react";
import NotificationConter from "./NotificationContext";

interface RegisterFormProps {
  onRegistrationSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegistrationSuccess }) => {
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_GREENSHOP_API}/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, surname, username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setNotification({ message: data.message || "Registration failed.", type: "error" });
        setLoading(false);
        return;
      }
      localStorage.setItem("registered", "true");
      localStorage.setItem("registrationToken", data.token);
      setNotification({ message: "Registration successful! Please log in.", type: "success" });
      onRegistrationSuccess();
    } catch (error) {
      setNotification({ message: "Something went wrong.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-gray-600 text-sm mb-1">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm mb-1">Surname <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm mb-1">Username <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
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
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      {notification && (
        <NotificationConter message={notification.message} type={notification.type} />
      )}
    </>
  );
};


export default RegisterForm;
