import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-xl">All Categories</h2>

      <ul className="flex flex-col gap-3 mt-6">
        {categories.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`p-2 rounded-md text-lg text-center font-medium transition ${
              activeId === category.category_id
                ? "bg-slate-200 text-purple-600"
                : "hover:bg-slate-100"
            }`}
          >
            <Link href={`/category/${category.category_id}`}
            className="block p-2">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;