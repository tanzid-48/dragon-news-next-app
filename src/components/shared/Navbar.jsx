import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <>
      <div className=" w-11/12 mx-auto mt-7 flex items-center justify-between ">
        <div></div>
        <ul className="flex  items-center text-gray-700 gap-4">
          <li>
            <NavLink href={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink href={`/about`}>About</NavLink>
          </li>
          <li>
            <NavLink href={`/career`}>Career</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Image
            src={userAvatar}
            alt="user-avatar"
            width={50}
            height={50}
          ></Image>
         <Link
          href="/login"
          className="bg-purple-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-600 transition"
        >
          Login
        </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
