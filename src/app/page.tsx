import ProfileGrid from "@/components/contents/ProfileGrid";
import Search from "@/components/shared/search/Search";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import { db } from "@/database";
import { users } from "@/schemas";

type PageProps = {
  searchParams: {
    page: string;
  };
};

export default async function Home({
  searchParams: { page = "1" },
}: PageProps) {
  const profiles = await db.select().from(users).limit(3).offset(6);
  // console.log("///////////////////////////////////////////////////");
  // console.log("pro", profiles);
  return (
    <div className="w-full">
      {/* sidebar */}
      <div className="w-[20rem] fixed left-0 top-0 my-8 px-8 border-r-2 border-gray-200 h-[90vh] z-20">
        <Sidebar />
      </div>
      {/* search bar */}
      <div className="backdrop-blur-3xl fixed top-0 left-[20rem] right-0 z-10">
        <Search />
      </div>
      {/* scrolling content */}
      <div className="mt-32 mb-8 border-t-orange-500 ml-[20rem] px-6 overflow-y-scroll">
        <ProfileGrid profiles={profiles} page={page} />
      </div>
    </div>
  );
}
