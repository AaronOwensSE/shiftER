// Environment Variables
import "dotenv/config";

// Imports
import pool from "./backend/db/pool.js";
import createSchema from "./backend/db/setup/schema/create-schema.js";
import deleteSchema from "./backend/db/setup/schema/delete-schema.js";
import seedData from "./backend/db/setup/data/seed-data.js";
import deleteData from "./backend/db/setup/data/delete-data.js";

await createSchema();
await seedData();
//await deleteData();
//await deleteSchema();
await pool.end();
