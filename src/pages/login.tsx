import { useRouter } from "next/router";
import React, { useState } from "react";
import { login } from "@../../../src/components/utils";
import { setCookie } from "cookies-next";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(formData.email, formData.password);
      if (response?.user) {
        // Store the user's authentication token and status in cookies
        setCookie("userAuth", {
          token: response.user.authentication_token,
          status: response.user.status,
        });

        console.log(response);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed, please try again.");
    }
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
            className="w-full rounded-md bg-blue-500 p-2 text-white transition duration-300 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
