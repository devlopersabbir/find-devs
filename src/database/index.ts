import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users } from "@/schemas/user";
dotenv.config();

const DATABASE_URI = process.env.DATABASE_URI;
if (!DATABASE_URI) throw new Error("Database url not found!");

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
