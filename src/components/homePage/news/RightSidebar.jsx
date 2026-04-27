'use client'

import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import swimming from "@/assets/swimming.png";
import classroom from "@/assets/class.png";
import playground from "@/assets/playground.png";

import fb from "@/assets/fb.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";

const RightSidebar = () => {

  const handleLoginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleLoginWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <div className="space-y-6">

      {/* Login With */}
      <div className="border rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Login With</h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleLoginWithGoogle}
            className="btn border-blue-500 text-blue-500 font-medium w-full flex items-center justify-center gap-2"
          >
            <FaGoogle /> Login with Google
          </button>

          <button
            onClick={handleLoginWithGithub}
            className="btn font-medium w-full flex items-center justify-center gap-2"
          >
            <FaGithub /> Login with GitHub
          </button>
        </div>
      </div>

      {/* Find Us On */}
      <div className="border rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Find Us On</h2>

        <div className="flex flex-col gap-3">

          <Link
            href="https://facebook.com"
            target="_blank"
            className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-slate-50 transition"
          >
            <Image src={fb} alt="Facebook" width={24} height={24} />
            <span className="text-gray-700 font-medium">Facebook</span>
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-slate-50 transition"
          >
            <Image src={twitter} alt="Twitter" width={24} height={24} />
            <span className="text-gray-700 font-medium">Twitter</span>
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="flex items-center gap-3 border rounded-lg px-4 py-2 hover:bg-slate-50 transition"
          >
            <Image src={instagram} alt="Instagram" width={24} height={24} />
            <span className="text-gray-700 font-medium">Instagram</span>
          </Link>

        </div>
      </div>

      {/* Q-Zone */}
      <div className="border rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Q-Zone</h2>

        <div className="flex flex-col gap-4">

          <div>
            <Image
              src={swimming}
              alt="Swimming"
              className="w-full object-cover rounded-lg"
            />
            <p className="text-center text-gray-700 font-medium mt-2">
              Swimming
            </p>
          </div>

          <div>
            <Image
              src={classroom}
              alt="Class"
              className="w-full object-cover rounded-lg"
            />
            <p className="text-center text-gray-700 font-medium mt-2">
              Class
            </p>
          </div>

          <div>
            <Image
              src={playground}
              alt="Play Ground"
              className="w-full object-cover rounded-lg"
            />
            <p className="text-center text-gray-700 font-medium mt-2">
              Play Ground
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};export default RightSidebar;