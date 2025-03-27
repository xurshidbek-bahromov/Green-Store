"use client";
import React, { useEffect, useState } from "react";

interface UserProfile {
  name: string;
  surname: string;
  username: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token not found. Please log in.");
      setLoading(false);
      return;
    }
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_GREENSHOP_API}/api/user/account-details?access_token=64bebc1e2c6d3f056a8c85b7`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          setError("Failed to fetch profile information.");
          setLoading(false);
          return;
        }
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Surname:</strong> {user?.surname}
      </p>
      <p>
        <strong>Username:</strong> {user?.username}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  );
};

export default ProfilePage;
