import React, { Suspense } from "react";
import ProfileGrid from "@/components/contents/ProfileGrid";
import { SearchBardSkeleton, ProfileCardSkeleton } from "@/constants";

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
            <div className="lg:mt-32 mb-8 border-t-orange-500 lg:ml-[20rem] lg:px-6 overflow-y-scroll p-5 lg:p-0">
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
