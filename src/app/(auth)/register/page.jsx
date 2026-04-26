"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

  const handleRegister = async (data) => {
    console.log(data);

    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.photo,
      callbackURL: "/",
    });
    if (error) {
      console.log("Error details:", error.message);
      return;
    }
    alert("Sign Up Successfully!");
    console.log(res, error);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="mt-5">
      <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
        <div className="p-4 rounded-xl  bg-white">
          <h2 className="font-medium text-2xl text-center mb-6">
            Register your account
          </h2>
          <div className="divider"></div>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
          >
            <fieldset className="fieldset">
              <label className="label text-sm font-semibold text-black">
                Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="input validator"
                placeholder="Enter your name"
                required
              />
              <p className="validator-hint hidden">Required</p>
            </fieldset>

            <fieldset className="fieldset">
              <label className="label text-sm font-semibold text-black">
                Photo URL
              </label>
              <input
                {...register("photo")}
                type="text"
                className="input validator"
                placeholder="Enter your photo URL"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label text-sm font-semibold text-black">
                Email address
              </label>
              <input
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
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type="password"
                className="input validator"
                placeholder="Enter your password (min 8 chars)"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
              <span className="validator-hint hidden">Required</span>
            </label>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-sm text-slate-500">Accept Term & Conditions</p>
            </div>
            <button
              className="btn bg-black/50 text-white mt-4 mb-2"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
