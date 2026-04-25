import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import RightSidebar from "@/components/homePage/news/RightSidebar";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};
export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);

  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-4 my-16">
        <div className=" col-span-3">
          <LeftSidebar categories={categories} activeId={null}></LeftSidebar>
        </div>

        <div className="font-bold text-3xl bg-green-200 col-span-6">
          All News
        </div>

        <div className="col-span-3">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </>
  );
}
