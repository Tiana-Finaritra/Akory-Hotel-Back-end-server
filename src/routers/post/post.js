import { generalPost } from "../../DAO/insertions.js";
import queries from "../../Queries/allSelect/allQueries.js";
import { handlePromiseInsertion } from "../promiseHandler.js";

let insertFunction;

// New Province:
const newProvince = (req, res) => {
    const { province_name, code_province } = req.body;
    handlePromiseInsertion(generalPost(queries.provinceQ, [province_name, code_province]), res);
}

// New Hotel:
const newHotel = (req, res) => {
    const { name, address, id_province } = req.body;
    handlePromiseInsertion(generalPost(queries.hotelQ, [name, address, id_province]), res);
}

// New season:
const newSeason = (req, res) => {
    const { items, start_date, end_date } = req.body;
    handlePromiseInsertion(generalPost(queries.seasonQ, [items, start_date, end_date]), res);
}

// New Promotion:
const newPromotion = (req, res) => {
    const { name, begin, end, percent } = req.body;
    handlePromiseInsertion(generalPost(queries.promotionQ, [name, begin, end , percent]), res);
}


export default insertFunction = {
    newProvince,
    newHotel,
    newSeason,
    newPromotion
}