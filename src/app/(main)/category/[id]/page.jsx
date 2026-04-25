import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import RightSidebar from "@/components/homePage/news/RightSidebar";
import React from "react";
import { getCategories, getNewsByCategoryId } from "../../../../lib/data";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "id");

  const categories = await getCategories();
  console.log(categories.news_category);

  const news = await getNewsByCategoryId(id);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-16">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>

      <div className="col-span-6 ">
        <h2 className=" font-bold text-xl mb-4"> News By Category </h2>
        <div className="space-y-4">
          {news.length > 0 ? news.map((n) => {
            return (
              <div key={n._id} className="p-6 rounded-md border-2">
                {n.title}
              </div>
            );
          }) : <h2 className="text-4xl text-center bg-purple-200">No news found</h2>}
        </div>
      </div>

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
