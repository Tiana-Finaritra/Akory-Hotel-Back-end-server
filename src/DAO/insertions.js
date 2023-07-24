import { db } from "../database.js";

let allInsert;

const addProvinceAvailable = (data) => {
    const {province_name, code_province} = data;

    db.one(
        `
            INSERT INTO "province_available" (province_name, code_province) VALUES ($1, $2);
        `,
        [province_name, code_province]
    );
};

export default allInsert = {
    addProvinceAvailable,
}
