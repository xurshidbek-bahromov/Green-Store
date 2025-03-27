"use client";
import React, { useState } from "react";
import CustomModal from "./CustomModal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const handleRegistrationSuccess = () => {
    setActiveTab("login");
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="mb-4 flex justify-center border-b border-gray-200">
        <button
          onClick={() => setActiveTab("login")}
          className={`px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${
            activeTab === "login" ? "text-green-700 border-b-2 border-green-700" : "text-gray-500"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${
            activeTab === "register" ? "text-green-700 border-b-2 border-green-700" : "text-gray-500"
          }`}
        >
          Register
        </button>
      </div>
      {activeTab === "login" ? (
        <LoginForm onSuccess={onClose} />
      ) : (
        <RegisterForm onRegistrationSuccess={handleRegistrationSuccess} />
      )}
    </CustomModal>
  );
};

export default AuthModal;