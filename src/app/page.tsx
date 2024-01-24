import { Suspense } from "react";
import ProfileGrid from "@/components/contents/ProfileGrid";
import ProfileCardSkeleton from "@/constants/skeleton/ProfileCardSkeleton";
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
  return (
    <div className="mt-32 mb-8 border-t-orange-500 ml-[20rem] px-6 overflow-y-scroll">
      <Suspense
        fallback={
          <div className="flex-center flex-col gap-3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
              <ProfileCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <ProfileGrid page={page} />
      </Suspense>
    </div>
  );
}
