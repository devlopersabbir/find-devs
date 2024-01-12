import ProfileCard from "@/components/contents/ProfileCard";
import Paginations from "@/components/pagination/Paginations";
import Search from "@/components/search/Search";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default async function Home() {
  return (
    <div className="w-full">
      <Sidebar />
      {/* search bar */}
      <Search />
      {/* scrolling content */}
      <div className="mt-32 mb-8 border-t-orange-500 ml-[20rem] px-6 flex-center overflow-y-scroll flex-col gap-3">
        {[0, 1, 2, 3, 4, 5, 6].map((_, i) => (
          <ProfileCard key={i} />
        ))}
        <Paginations />
      </div>
    </div>
  );
}
