import { generalPost } from "../../DAO/insertions.js";
import queries from "../../Queries/allSelect/allQueries.js";
import { handlePromiseInsertion } from "../promiseHandler.js";

let insertFunction;

const newProvince = (req, res) => {
    const { province_name, code_province } = req.body;
    handlePromiseInsertion(generalPost(queries.provinceQ,[province_name, code_province]), res);
}


export default insertFunction = {
    newProvince,
}