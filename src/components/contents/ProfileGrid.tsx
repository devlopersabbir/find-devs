import React from "react";
import { db } from "@/database";
import { users } from "@/schemas";
import ProfileCard from "./ProfileCard";
import Paginations from "../pagination/Paginations";
import { sql } from "drizzle-orm";
import Notfound from "../shared/Notfound";

type Props = {
  page: string;
};

const ProfileGrid = async ({ page }: Props) => {
  const currentPage = parseInt(page); // like 1
  const itemPerPage = 5; // we want to show 5 item in per pages
  const offset = (currentPage - 1) * itemPerPage; // (1 - 1) * 3 = 0

  const [lengths, profiles] = await Promise.all([
    db.select({ count: sql<number>`count(*)` }).from(users),
    db.select().from(users).limit(itemPerPage).offset(offset),
  ]);
  const count = lengths[0].count;
  return (
    <>
      <div className="flex-center flex-col gap-3">
        {count <= 0 ? (
          <Notfound />
        ) : (
          profiles.map((item, index: number) => (
            <ProfileCard
              key={index}
              role={item.role}
              description={item.description}
              location={item.location}
              name={item.name}
              portfolio={item.portfolio as string}
              skill={item.skills}
              profileImage={item.profileImage as string}
              social={item.social as any}
            />
          ))
        )}
      </div>
      <Paginations
        hasNextPage={currentPage < Math.ceil(count / itemPerPage)}
        hasPrevPage={currentPage !== 1}
      />
    </>
  );
};

export default ProfileGrid;
