import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DATABASE_URI } from "../../drizzle.config";
import { users } from "@/schemas/user";

export const pool = new Pool({
  connectionString: DATABASE_URI,
});

export const db = drizzle(pool, {
  schema: {
    users,
  },
});
export type DB = typeof db;
export default db;
