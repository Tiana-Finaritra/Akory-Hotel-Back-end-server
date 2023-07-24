import { db } from "../database.js";

export const generalGetbyId = (query, id) => {
    try {
        return db.query(query, id);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}
