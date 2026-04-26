"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, reset, handleSubmit } = useForm();
 
  const handleLogin = async (data) => {
 
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
  if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Login Successfully!");
     reset();
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-medium text-2xl text-center mb-6">
          Login your account
        </h2>
        <div className="divider"></div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold text-black">
              Email address
            </label>
            <input
 
           {...register("email")}
              type="email"
              className="input validator w-full"
              placeholder="Enter your email address"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>

          <label className="fieldset">
            <span className="label text-sm font-semibold text-black">
              Password
            </span>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className="input validator w-full"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <span className="validator-hint hidden">Required</span>
          </label>

          <button
            className="btn bg-black/50 text-white mt-4 mb-2"
            type="submit"
          >
            Login
          </button>
        </form>
        <span className="m-5">
          Do not Have An Account?{" "}
          <Link href="/register" className="text-purple-500">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
