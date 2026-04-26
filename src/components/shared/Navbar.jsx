"use client";
import Link from "next/link";
import React, { useState } from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <>
      <div className="container mx-auto mt-7 flex items-center justify-between">
        <div></div>
        <ul className="flex items-center text-gray-700 gap-4">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/career">Career</NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <>
              <h2 className="text-sm text-gray-700">Hello, {user.name}</h2>
              <Image
                src={
                  user.image && user.image.startsWith("http")
                    ? user.image
                    : userAvatar
                }
                alt="user-avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Image
                src={userAvatar}
                alt="user-avatar"
                width={50}
                height={50}
              />
              <Link
                href="/login"
                className="bg-purple-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-600 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
