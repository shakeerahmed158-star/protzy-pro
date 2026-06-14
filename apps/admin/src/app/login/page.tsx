"use client";

import { useState } from "react";
import { useLogin } from "@/hooks/useAuth";

export default function LoginPage() {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const loginMutation =
    useLogin();

  const handleLogin = () => {
    if (!username || !password) {
      alert(
        "Please enter username and password"
      );

      return;
    }

    loginMutation.mutate({
      username,
      password,
    });
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    "
    >
      <div
        className="
        w-[420px]
        bg-white
        rounded-3xl
        p-10
        shadow-xl
      "
      >
        <h1
          className="
          text-5xl
          font-black
          mb-8
          text-center
        "
        >
          Goopsy Admin
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          className="
          w-full
          border
          rounded-xl
          p-4
          mb-4
        "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="
          w-full
          border
          rounded-xl
          p-4
          mb-6
        "
        />

        <button
          onClick={handleLogin}
          disabled={
            loginMutation.isPending
          }
          className="
          w-full
          bg-black
          text-white
          p-4
          rounded-xl
          font-semibold
        "
        >
          {loginMutation.isPending
            ? "Logging In..."
            : "Login"}
        </button>
      </div>
    </div>
  );
}