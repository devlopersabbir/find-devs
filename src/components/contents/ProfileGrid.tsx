import React from "react";
import { db } from "@/database";
import { users } from "@/schemas";
import ProfileCard from "./ProfileCard";
import Paginations from "../pagination/Paginations";
import {
  ilike,
  or,
  sql,
  arrayContained,
  arrayContains,
  arrayOverlaps,
} from "drizzle-orm";
import Notfound from "../shared/Notfound";
import Search from "../shared/search/Search";

type Props = {
  page: string;
  searchParams?: string;
};

const ProfileGrid = async ({ page, searchParams }: Props) => {
  const currentPage = parseInt(page); // like 1
  const itemPerPage = 5; // we want to show 5 item in per pages
  const offset = (currentPage - 1) * itemPerPage; // (1 - 1) * 3 = 0
  const searchSkills = searchParams ? searchParams.split(/[\s,]+/) : []; // regular expression to accept inputs separated by comma, space or both

  // In order to get rid of the "error: operator does not exist: json @> json" I mannually cast the skills column to JSONB
  const skillsCondition = searchSkills.length > 0 
  ? sql.raw(`"skills"::JSONB @> '${JSON.stringify(searchSkills)}'::JSONB`) 
  : undefined;

  const [lengths, profiles] = await Promise.all([
    db.select({ count: sql<number>`count(*)` }).from(users),
    searchParams
      ? db
          .select()
          .from(users)
          .where(
            or(
              ilike(users.name, `%${searchParams}%`),
              ilike(users.location, `%${searchParams}%`),
              ilike(users.description, `%${searchParams}%`),
              skillsCondition
            ),
          )
          .limit(itemPerPage)
          .offset(offset)
      : db
          .select()
          .from(users)
          .orderBy(sql.raw("RANDOM()"))
          .limit(itemPerPage)
          .offset(offset),
  ]);

  const count = lengths[0].count;
  return (
    <div className="lg:mt-32 mt-[10rem] mb-8 border-t-orange-500 lg:ml-[20rem] px-4 lg:px-6 overflow-y-scroll relative">
      <Search />
      <div className="flex-center flex-col gap-3">
        {count <= 0 || profiles.length === 0 ? (
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
        search={searchParams}
      />
    </div>
  );
};

export default ProfileGrid;
