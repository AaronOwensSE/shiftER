"use strict";

const USER_ID_MAX_LENGTH = 30;
const USER_NAME_MAX_LENGTH = 60;
const USER_EMAIL_MAX_LENGTH = 254;

// Environment Variables
require("dotenv").config();
let env = process.env;

// PostgreSQL
const pg = require("pg");

// Exports
const pool = new pg.Pool({
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
});

async function createTables() {
    console.log("Attempting to create tables:");
    await createUsersTable();
    await createSessionsTable();
    console.log();
}

async function insertTestData() {
    console.log("Attempting to insert test data:");
    await insertUsersTestData();
    await insertSessionsTestData();
    console.log();
}

async function deleteData() {
    console.log("Attempting to delete data:");
    await deleteTableData("sessions");
    await deleteTableData("users");
    console.log();
}

async function dropTables() {
    console.log("Attempting to drop tables:");
    await dropTable("sessions");
    await dropTable("users");
    console.log();
}

module.exports = { pool, createTables, insertTestData, deleteData, dropTables };

// Helper Functions
async function createUsersTable() {
    try {
        await pool.query(`
            CREATE TABLE users (
                id VARCHAR(${USER_ID_MAX_LENGTH.toString()}) PRIMARY KEY,
                salt TEXT,
                hash TEXT,
                name VARCHAR(${USER_NAME_MAX_LENGTH.toString()}),
                email VARCHAR(${USER_EMAIL_MAX_LENGTH.toString()})
            );
        `);
    } catch (err) {
        console.log(`Failed to create table users: ${err.message}`);

        return false;
    }

    console.log("Table users created.");

    return true;
}

async function createSessionsTable() {
    try {
        await pool.query(`
            CREATE TABLE sessions (
                id TEXT PRIMARY KEY,
                expires DATE,
                user_id VARCHAR(${USER_ID_MAX_LENGTH.toString()}) REFERENCES users (id) ON DELETE CASCADE
            );
        `);
    } catch (err) {
        console.log(`Failed to create table sessions: ${err.message}`);

        return false;
    }

    console.log("Table sessions created.");

    return true;
}

async function insertUsersTestData() {
    try {
        await pool.query(`
            INSERT INTO users (id, salt, hash, name, email) VALUES
            ('bob1', '1234salt', '1234hash', 'Bob Jones', 'bob@example.com'),
            ('sally2', '1234salt', '1234hash', 'Sally Sitwell', 'sally@example.com'),
            ('jimmy3', '1234salt', '1234hash', 'Jimmy Slim', 'jimmy@example.com'),
            ('max4', '1234salt', '1234hash', 'Max Robespierre', 'max@example.com'),
            ('jane5', '1234salt', '1234hash', 'Jane Cobb', 'jane@example.com');
        `);
    } catch (err) {
        console.log(`Test data insertion to table users failed: ${err.message}`);

        return false;
    }

    console.log("Test data inserted to table users.");

    return true;
}

async function insertSessionsTestData() {
    try {
        await pool.query(`
            INSERT INTO sessions (id, expires, user_id) VALUES
            ('123sally321', '2025-07-12', 'sally2'),
            ('123jimmy321', '2025-07-13', 'jimmy3'),
            ('123jane321', '2025-07-14', 'jane5');
        `);
    } catch (err) {
        console.log(`Test data insertion to table sessions failed: ${err.message}`);

        return false;
    }

    console.log("Test data inserted to table sessions.");
}

async function deleteTableData(tableName) {
    try {
        await pool.query(`DELETE FROM ${tableName};`);
    } catch (err) {
        console.log(`Data deletion from table ${tableName} failed: ${err.message}`);

        return false;
    }

    console.log(`Data deleted from table ${tableName}.`);

    return true;
}

async function dropTable(tableName, cascade = false) {
    try {
        if (cascade) {
            await pool.query(`DROP TABLE ${tableName};`);
        } else {
            await pool.query(`DROP TABLE ${tableName} CASCADE;`);
        }
    } catch (err) {
        console.log(`Dropping table ${tableName} failed: ${err.messsage}`);

        return false;
    }

    console.log(`Table ${tableName} dropped.`);

    return true;
}
