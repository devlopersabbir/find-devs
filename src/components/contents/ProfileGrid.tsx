"use client";
import { trpc } from "@/tRPC/client";
import React from "react";
import ProfileCard from "./ProfileCard";
import Paginations from "../pagination/Paginations";
import ProfileCardSkeleton from "@/constants/skeleton/ProfileCardSkeleton";

type Props = {
  page: string;
};

const ProfileGrid = ({ page }: Props) => {
  const profiles = trpc.index.useQuery();
  const perPage = 5;

  /** mocked, skipped and limited in the real app */
  const start = (Number(page) - 1) * perPage; // 0, 5, 10
  const end = start + perPage; // 5, 10, 15
  const entries = profiles.data?.slice(start, end);

  return (
    <div className="mt-32 mb-8 border-t-orange-500 ml-[20rem] px-6 overflow-y-scroll">
      {!profiles.isLoading ? (
        <div className="flex-center flex-col gap-3">
          {entries?.map((item, i: number) => (
            <ProfileCard
              key={i}
              role={item.role}
              description={item.description}
              location={item.location}
              name={item.name}
              portfolio={item.portfolio as string}
              skill={item.skills}
              profileImage={item.profileImage as string}
              social={item.social as any}
            />
          ))}
          <Paginations
            hasNextPage={end < Number(profiles.data?.length)}
            hasPrevPage={start > 0}
          />
        </div>
      ) : (
        <div className="flex-center flex-col gap-3">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
            <ProfileCardSkeleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileGrid;
