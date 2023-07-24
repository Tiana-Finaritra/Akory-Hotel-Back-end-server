import { db } from "../database.js";

export const generalPost = async (query, params) => {
    try {
        return  db.one(query, params);
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}