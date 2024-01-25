import React, { Suspense } from "react";
import ProfileGrid from "@/components/contents/ProfileGrid";
import ProfileCardSkeleton from "@/constants/skeleton/ProfileCardSkeleton";
import Search from "@/components/shared/search/Search";
import SearchBardSkeleton from "@/constants/skeleton/SearchBardSkeleton";

type PageProps = {
  searchParams: {
    page: string;
    search?: string;
  };
};

export default async function Home({
  searchParams: { page = "1", search },
}: PageProps) {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <>
            <SearchBardSkeleton />
            <div className="mt-32 mb-8 border-t-orange-500 ml-[20rem] px-6 overflow-y-scroll">
              <div className="flex-center flex-col gap-3">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                  <ProfileCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </>
        }
      >
        <ProfileGrid page={page} searchParams={search} />
      </Suspense>
    </React.Fragment>
  );
}
