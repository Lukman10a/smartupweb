import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { login } from "@/components/utils";
import { UserResponse } from "@/lib/apiTypes";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationFn: ({ email, password }: FormData) =>
      login(email, password) as Promise<UserResponse>,
    onSuccess: (response) => {
      if (response?.user) {
        router.push("/dashboard");
      } else {
        alert("Login failed, please try again.");
      }
    },
    onError: (error: unknown) => {
      console.error("Login failed:", error);
      alert("Login failed, please try again.");
    },
  });

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email: formData.email, password: formData.password });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-80 rounded-md bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleData}
            name="email"
            className="mb-4 w-full rounded-md border border-gray-300 p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleData}
            name="password"
            className="mb-6 w-full rounded-md border border-gray-300 p-2"
          />
          <button
            type="submit"
            className={`w-full rounded-md p-2 text-white transition duration-300 ${
              mutation.isPending
                ? "bg-gray-500"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
