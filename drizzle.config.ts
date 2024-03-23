import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE_URI) throw new Error("DATABASE_URL is missing");
export const DATABASE_URI = process.env.DATABASE_URI;

export default defineConfig({
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver: "pg",
  strict: true,
  dbCredentials: {
    connectionString: DATABASE_URI,
  },
});
