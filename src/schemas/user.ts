import { roleEnum } from "@/utils";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom().unique(),

  role: roleEnum("role").default("DEVELOPER"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
