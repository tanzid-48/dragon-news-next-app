"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

const handleRegister = (data) =>{
console.log(data);

}
const RegisterPage = () => {

  const {register,handleSubmit,} = useForm()
    return (
    <div className="mt-5">
            <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
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
              name="name"
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
              name="photo"
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
          <div className="flex items-center gap-2">
          <input type="checkbox"/> 
             <p className='text-sm text-slate-500'> Accept Term & Conditions</p>
          </div>
         <button className="btn bg-black/50 text-white mt-4 mb-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
    );
};

export default RegisterPage;