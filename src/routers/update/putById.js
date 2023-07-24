import { handlePromiseUpdate } from "../promiseHandler.js";
import queriesUp from "../../Queries/allUpdate/allUpdate.js";
import queriesOne from "../../Queries/OneSelect/allOneSelect.js";
import { generalUpdate } from "../../DAO/update.js";
import getElemtFunction from "../get/getById.js";
import { pool } from "../../database.js";

let updateFunction;

const updateProvinceAvailable = (req, res) => {
    // const new_name = req.query.province_name;
    // const new_code = req.query.code_province;
    const new_name =  req.body.province_name;
    const new_code = req.body.code_province;

    pool.query(queriesOne.getProvinceAvailableById, [req.params.id], (error, result) => {
        const oldElem = result.rows;
        if(!oldElem.length){
            res.send("Province not exits");
        } else {
            let id = req.params.id
            let final_name = oldElem[0].province_name;
            let final_code = oldElem[0].code_province;

            if (new_name){
                final_name = new_name;
            }
            if (new_code){
                final_code = new_code;
            }
            handlePromiseUpdate(generalUpdate(queriesUp.updateProvinceAvailable, [id, final_name, final_code]), res);
        }
    });
}

const updateHotel = (req, res) => {
    
}

export default updateFunction = {
    updateProvinceAvailable,
    updateHotel,
}