import React from "react";

const CategoriesLoading = () => {
  return (
    // <div className="space-y-3 p-4">
    //     {[...Array(6)].map((_, index) => (
    //         <div
    //             key={index}
    //             className="h-10 bg-gray-300 rounded-md animate-pulse"
    //         ></div>
    //     ))}
    // </div>

    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <span className="loading loading-spinner text-success w-12"></span>
      <h1 className="text-xl font-semibold">Loading...</h1>
    </div>
  );
};

export default CategoriesLoading;
