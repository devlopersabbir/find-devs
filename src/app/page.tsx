import ProfileCard from "@/components/contents/ProfileCard";
import ProfileGrid from "@/components/contents/ProfileGrid";
import Paginations from "@/components/pagination/Paginations";
import Search from "@/components/search/Search";
import Sidebar from "@/components/sidebar/Sidebar";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense } from "react";

type PageProps = {
  searchParams: {
    page: string;
  };
};

export default async function Home({
  searchParams: { page = "1" },
}: PageProps) {
  return (
    <div className="w-full">
      <Sidebar />
      {/* search bar */}
      <Search />
      {/* scrolling content */}
      <ProfileGrid page={page} />
    </div>
  );
}
