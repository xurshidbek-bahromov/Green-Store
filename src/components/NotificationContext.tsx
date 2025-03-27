"use client";
import React, { useEffect, useState } from "react";

interface SimpleNotificationProps {
  message: string;
  type?: "success" | "error" | "info";
}

const NotificationProvider: React.FC<SimpleNotificationProps> = ({ message, type = "info" }) => {
  const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }, []);

  if (!visible) return null;

  let bgColor = "bg-red-500";
  if (type === "success") bgColor = "bg-green-500";
  else if (type === "info") bgColor = "bg-blue-500";

  return (
    <div className={`fixed -top-40 left-1/2 transform -translate-x-1/2 transition-transform duration-30000 z-50 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className={`px-10 py-2 ${bgColor} text-white rounded-lg border-gray-200 shadow-md`}>
        {message}
      </div>
    </div>
  );
};

export default NotificationProvider;