import { redirect } from "next/navigation";

export const metadata = {
  title: "Home",
  description: "Welcome to Dragon News - Get the latest trending news on technology, programming, and global topics."
};

const default_category_id = "01";

export default async function Home() {

  redirect(`/category/${default_category_id}`);
  return <></>;
}
