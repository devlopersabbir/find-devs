import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE_URI) throw new Error("DATABASE_URL is missing");

export default defineConfig({
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver: "pg",
  strict: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URI,
  },
});
