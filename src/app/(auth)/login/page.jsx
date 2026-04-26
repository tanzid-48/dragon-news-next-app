"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    // console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Login Successfully!");
    reset();

    // e.preventDefault();
    // const formData = new FormData(e.currentTarget)
    //  const userData = Object.fromEntries(formData.entries());
    // console.log(userData,"hi");
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
              name="email"
              {...register("email")}
              type="email"
              className="input validator"
              placeholder="Enter your email address"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>

          <label className="fieldset">
            <span className="label text-sm font-semibold text-black">
              Password
            </span>
            <input
              name="password"
              {...register("password")}
              type="password"
              className="input validator"
              placeholder="Enter your password"
              required
            />
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
