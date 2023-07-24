import { handlePromiseUpdate } from "../promiseHandler.js";
import queries from "../../Queries/allUpdate/allUpdate.js";
import { generalUpdate } from "../../DAO/update.js";
import getElemtFunction from "../get/getById.js";

let updateFunction;

const updateProvinceAvailable = (req, res) => {
    const oldElem = getElemtFunction.getProvinceAvailableById;
    console.log(oldElem);
    res.end();
    // handlePromiseUpdate(generalUpdate(queries.updateProvinceAvailable, []), res);
}

export default updateFunction = {
    updateProvinceAvailable,
}