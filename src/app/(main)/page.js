import { Ultra } from "next/font/google";

const getCategories =async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
 
}
export default async function Home() {

  const categories = await 
  getCategories();
  console.log(categories.news_category);
   
  return (
   <>
    <div className="container mx-auto grid grid-cols-12 gap-4 my-16">
      <div className=" col-span-3">
        <h2 className="font-bold text-xl ">All Categories</h2>
       
       {
        categories.news_category.map(category => <ul key={category.category_id} className="flex flex-col gap-3 mt-6">
          <li className="bg-slate-100 p-2 rounded-md text-lg text-center font-medium">{category.category_name}</li>
        </ul>)
       }
      </div>
      <div className="font-bold text-3xl bg-green-200 col-span-6">All News</div>
      <div className="font-bold text-3xl bg-purple-200 col-span-3">Social icon</div>

    </div>
   
   </>
  );
}
