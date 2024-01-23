"use client";
import { trpc } from "@/tRPC/client";
import React from "react";
import ProfileCard from "./ProfileCard";
import Paginations from "../pagination/Paginations";
import ProfileCardSkeleton from "@/constants/skeleton/ProfileCardSkeleton";
import { TUserSchema } from "@/types";

type Props = {
  page: string;
  profiles?: TUserSchema[];
};

const ProfileGrid = ({ page, profiles }: Props) => {
  return (
    <>
      <h1>hello</h1>
      {/* {!profiles ? (
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
      )} */}
    </>
  );
};

export default ProfileGrid;
