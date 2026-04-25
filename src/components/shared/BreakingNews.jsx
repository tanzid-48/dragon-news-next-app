import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  { id: 1, title: "Breaking News: Global Markets See Sudden Drop Amid Economic Uncertainty" },
  { id: 2, title: "Breaking News: New AI Technology Revolutionizes Software Development" },
  { id: 3, title: "Breaking News: Major Cybersecurity Breach Affects Millions of Users" },
  { id: 4, title: "Breaking News: Climate Change Report Warns of Rising Sea Levels" },
  { id: 5, title: "Breaking News: Tech Giants Announce Collaboration on Open Source AI" },
  { id: 6, title: "Breaking News: Breakthrough in Renewable Energy Achieves Record Efficiency" },
  { id: 7, title: "Breaking News: International Summit Focuses on Global Peace Efforts" },
  { id: 8, title: "Breaking News: New Smartphone Launch Sets Benchmark for Innovation" }
];


const BreakingNews = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-200 py-3 px-3 container mx-auto">
      
      <button className="bg-red-600 text-white px-4 py-1 rounded font-semibold whitespace-nowrap">
        Latest News
      </button>

      <Marquee pauseOnHover speed={60}>
        <div className="flex gap-10">
          {news.map((n) => (
            <span key={n.id} className="font-medium text-gray-800">
              🔴 {n.title}
            </span>
          ))}
        </div>
      </Marquee>

    </div>
  );
};

export default BreakingNews;
