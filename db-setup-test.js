"use strict";

import * as db from "./db-setup.js";

await db.createTables();
await db.insertTestData();
//await db.deleteData();
//await db.dropTables();
await db.pool.end();
