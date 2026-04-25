import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn border-blue-500 text-blue-500 font-medium">
        <FaGoogle/> Login with google
        </button>
        <button className="btn font-medium">
          <FaGithub/> Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
