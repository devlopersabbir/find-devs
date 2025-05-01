import { Table, getTableName, sql } from "drizzle-orm";
import { DB, db, pool } from "./index";
import * as schema from "@/schemas";
import user_seed from "./seeds/user";

async function resetTable(db: DB, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`)
  );
}

for (const table of [schema.users]) {
  // await db.delete(table); // clear tables without truncating / resetting ids
  (async () => {
    await resetTable(db, table);
  })();
}

(async () => {
  await user_seed(db);

  await pool.end();
})();
