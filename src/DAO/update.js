import { db } from "../database.js";

export const generalUpdate = (query, params) => {
    try {
        return db.query(query, params);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}
