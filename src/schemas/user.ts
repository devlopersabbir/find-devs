import {
  pgTable,
  serial,
  uuid,
  timestamp,
  text,
  varchar,
  json,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().unique(),

  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  skills: json("skills").$type<string[]>().notNull(),
  role: text("role", { enum: ["SYSTEM_ADMIN", "DEVELOPER", "ADMIN"] })
    .notNull()
    .default("DEVELOPER"),
  description: text("descriptions").notNull(),
  social: json("social").$type<{ network: string; link: string }>(),
  portfolio: text("portfolio"),
  profileImage: text("profile_image"),
  // nameSlug: varchar("name_slug", { length: 255 }).notNull().unique(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
