"use client";
import React, { useEffect, useState } from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  const [show, setShow] = useState(isOpen);
  const [animationClass, setAnimationClass] = useState("translate-y-[-100%] opacity-0");

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => {
        setAnimationClass("translate-y-0 opacity-100");
      }, 50);
    } else {
      setAnimationClass("translate-y-[-100%] opacity-0");
      setTimeout(() => setShow(false), 500);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-green-900 bg-opacity-40 backdrop-blur-md transition-opacity duration-300"
      ></div>
      <div
        className={`relative z-10 bg-white/70 backdrop-blur-lg border border-green-200 rounded-3xl shadow-2xl w-full max-w-lg px-8 py-10 transform transition-all duration-500 ease-out ${animationClass}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-green-600 text-white rounded-full p-2 hover:bg-green-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;