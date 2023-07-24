import { db } from "../database.js";

export const generalDisplay = (query, params) => {
    try {
        return params ? (db.query(query, params)) : (db.query(query));
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}
