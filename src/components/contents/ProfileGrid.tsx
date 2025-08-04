import { db } from "@/database";
import { users } from "@/schemas";
import ProfileCard from "./ProfileCard";
import Paginations from "../pagination/Paginations";
import { ilike, sql, SQL } from "drizzle-orm";
import Notfound from "../shared/Notfound";
import Search from "../shared/search/Search";

type Props = {
  page: string;
  searchParams?: string;
};

const ProfileGrid = async ({ page, searchParams }: Props) => {
  const currentPage = parseInt(page, 10) || 1;
  const itemsPerPage = 5;
  const offset = (currentPage - 1) * itemsPerPage;

  const whereConditions: SQL[] = [];

  const searchQuery = searchParams?.trim().toLowerCase() || "";
  const searchTokens = searchQuery ? searchQuery.split(/[\s,]+/) : [];

  // Text field search
  if (searchQuery) {
    whereConditions.push(
      ilike(users.name, `%${searchQuery}%`),
      ilike(users.location, `%${searchQuery}%`),
      ilike(users.description, `%${searchQuery}%`)
    );

    const skillConditions = searchTokens
      .map((token) => `skill ILIKE '%${token}%'`)
      .join(" OR ");

    if (skillConditions) {
      whereConditions.push(
        sql.raw(`
        EXISTS (
          SELECT 1 FROM json_array_elements_text("skills") AS skill
          WHERE ${skillConditions}
        )
      `)
      );
    }
  }

  const whereClause = whereConditions.length
    ? sql`(${sql.join(whereConditions, sql` OR `)})`
    : undefined;

  const [countResult, profiles] = await Promise.all([
    db
      .select({ count: sql<number>`count(*)` })
      .from(users)
      .where(whereClause),
    db
      .select()
      .from(users)
      .where(whereClause)
      .orderBy(sql.raw("RANDOM()"))
      .limit(itemsPerPage)
      .offset(offset),
  ]);

  const count = countResult[0]?.count ?? 0;

  return (
    <div className="lg:mt-32 mt-[10rem] mb-8 border-t-orange-500 lg:ml-[20rem] px-4 lg:px-6 relative">
      <Search />
      <div className="flex-center flex-col gap-3">
        {profiles.length ? (
          profiles.map((profile, i) => (
            <ProfileCard key={i} profile={profile} />
          ))
        ) : (
          <Notfound />
        )}
      </div>
      <Paginations
        hasNextPage={currentPage < Math.ceil(count / itemsPerPage)}
        hasPrevPage={currentPage > 1}
        search={searchParams}
      />
    </div>
  );
};

export default ProfileGrid;
