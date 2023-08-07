import { db } from "../database.js";

export const generalDelete = (query, params) => {
    try {
        return db.result(query, params);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}