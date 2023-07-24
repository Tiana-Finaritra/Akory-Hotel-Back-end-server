import { db } from "../database.js";

let allDisplay;


export const generalDisplay = (query, params) => {
    try {
        return params ? (db.query(query, params)) : (db.query(query));
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}