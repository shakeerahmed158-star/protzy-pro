"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "@/services/auth.service";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      return authService.login(
        username,
        password
      );
    },

    onSuccess: (data: any) => {
      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(data.admin)
      );

      router.push("/");
    },

    onError: (error) => {
      console.error(
        "LOGIN ERROR:",
        error
      );

      alert(
        "Invalid username or password"
      );
    },
  });
};