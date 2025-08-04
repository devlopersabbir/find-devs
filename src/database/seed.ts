import { Table, getTableName, sql } from "drizzle-orm";
import { DB, db } from "./index";
import * as schema from "@/schemas";
import { usersData } from "./faker";

async function resetTable(db: DB, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`),
  );
}

for (const table of [schema.users]) {
  // await db.delete(table); // clear tables without truncating / resetting ids
  (async () => {
    await resetTable(db, table);
  })();
}

(async () => {
  await Promise.all(
    usersData.map(async (user) => await db.insert(schema.users).values(user)),
  );
  console.log("🎉 seed finished.");
})();
