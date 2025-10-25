"use strict";

// Internal Modules
import errorHandling from "../../error-handling.js";
import pool from "../pool.js";
import updateQuery from "./update-query.js";

/*

!!! Cut FK draft_id from database schema. It should not be necessary. Not writing functions for it.
Update diagrams. !!!

start_time
end_time

*/

// Exports
async function createShift(startTime, endTime, scheduleId) {	// user_id not known at creation.
	let result = new errorHandling.Result();
	
	try {
		const queryResult = await pool.query(
            `INSERT INTO shifts (start_time, end_time, schedule_id)
            VALUES ($1, $2, $3) RETURNING id;`,
            [ startTime, endTime, scheduleId ]
        );

		result.ok = true;
		result.value = queryResult.rows[0].id;
	} catch (error) {
		result.ok = false;
		result.message = error.message;
	}
	
	return result;
}

async function readShift(id) {
	let result = new errorHandling.Result();
	
	try {
		const queryResult = await pool.query("SELECT * FROM shifts WHERE id = $1;", [id]);
		
		if (result.rowCount > 0) {
			result.ok = true;
			result.value = queryResult;
		} else {
			result.ok = false;
			result.message = "Shift does not exist.";
		}
	} catch (error) {
		result.ok = false;
		result.message = error.message;
	}
	
	return result;
}

async function readShiftsByScheduleId(scheduleId) {
	let result = new errorHandling.Result();
	
	try {
		const queryResult = await pool.query(
            "SELECT * FROM shifts WHERE schedule_id = $1;",
            [scheduleId]
        );

		result.ok = true;
		result.value = queryResult;
	} catch (error) {
		result.ok = false;
		result.message = error.message;
	}
	
	return result;
}

async function readShiftsByUserId(userId) {
	let result = new errorHandling.Result();
	
	try {
		const queryResult = await pool.query("SELECT * FROM shifts WHERE user_id = $1;", [userId]);
		result.ok = true;
		result.value = queryResult;
	} catch (error) {
		result.ok = false;
		result.message = error.message;
	}
	
	return result;
}

async function updateShift(id, updates) {
	const result = updateQuery("shifts", {id}, updates);
	
	return result;
}

async function deleteShift(id) {
	let result = new errorHandling.Result();
	
	try {
		const queryResult = await pool.query("DELETE FROM shifts WHERE id = $1;", [id]);
		
		if (queryResult.rowCount > 0) {
			result.ok = true;
		} else {
			result.ok = false;
			result.message = "Shift does not exist.";
		}
	} catch (error) {
		result.ok = false;
		result.message = error.message;
	}
	
	return result;
}

async function deleteShiftsByScheduleId(scheduleId) {
	let result = new errorHandling.Result();
	
	try {
		const queryResult = await pool.query(
            "DELETE FROM shifts WHERE schedule_id = $1;",
            [scheduleId]
        );

		result.ok = true;
		result.value = queryResult;
	} catch (error) {
		result.ok = false;
		result.message = error.message;
	}
	
	return result;
}

async function deleteShiftsByUserId(userId) {
	let result = new errorHandling.Result();
	
	try {
		const queryResult = await pool.query("DELETE FROM shifts WHERE user_id = $1;", [userId]);
		result.ok = true;
		result.value = queryResult;
	} catch (error) {
		result.ok = false;
		result.message = error.message;
	}
	
	return result;
}

// Production
const shiftModel = {
    createShift,
    readShift,
    readShiftsByScheduleId,
    readShiftsByUserId,
    updateShift,
    deleteShift,
    deleteShiftsByScheduleId,
    deleteShiftsByUserId
};

export default shiftModel;

// Testing
const testing =
	process.env.NODE_ENV == "test" ?
	{
        createShift,
        readShift,
        readShiftsByScheduleId,
        readShiftsByUserId,
        updateShift,
        deleteShift,
        deleteShiftsByScheduleId,
        deleteShiftsByUserId
    }
	: {};
