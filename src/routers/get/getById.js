import { handlePromise } from "../promiseHandler.js";
import queries from "../../Queries/OneSelect/allOneSelect.js";
import { generalGetbyId } from "../../DAO/displayById.js";

let getElemtFunction;

const getProvinceAvailableById = (req, res) => {
    handlePromise(generalGetbyId(queries.getProvinceAvailableById, req.params.id), res);
}

const getHotelById = (req, res) => {
    handlePromise(generalGetbyId(queries.getHotelById, req.params.id), res);
}

const getReceptionistById = (req, res) => {
    handlePromise(generalGetbyId(queries.getReceptionistById, req.params.id), res);
}

const getCustomerById = (req, res) => {
    handlePromise(generalGetbyId(queries.getCustomerById, req.params.id), res);
}

const getCustomerStatusById = (req, res) => {
    handlePromise(generalGetbyId(queries.getCustomerStatusById, req.params.id), res);
}

const getServiceById = (req, res) => {
    handlePromise(generalGetbyId(queries.getServiceById, req.params.id), res);
}

const getSeasonById = (req, res) => {
    handlePromise(generalGetbyId(queries.getSeasonById, req.params.id), res);
}

const getPriceById = (req, res) => {
    handlePromise(generalGetbyId(queries.getPriceById, req.params.id), res);
}

const getRoomFeaturesById = (req, res) => {
    handlePromise(generalGetbyId(queries.getRoomFeaturesById, req.params.id), res);
}

const getRoomById = (req, res) => {
    handlePromise(generalGetbyId(queries.getRoomById, req.params.id), res);
}

const getPaymentMethodById = (req, res) => {
    handlePromise(generalGetbyId(queries.getPaymentMethodById, req.params.id), res);
}

const getPaymentById = (req, res) => {
    handlePromise(generalGetbyId(queries.getPaymentById, req.params.id), res);
}

const getAffilateById = (req, res) => {
    handlePromise(generalGetbyId(queries.getAffilateById, req.params.id), res);
}

const getBuyById = (req, res) => {
    handlePromise(generalGetbyId(queries.getBuyById, req.params.id), res);
}

const getFeedbackById = (req, res) => {
    handlePromise(generalGetbyId(queries.getFeedbackById, req.params.id), res);
}

const getPromotionById = (req, res) => {
    handlePromise(generalGetbyId(queries.getPromotionById, req.params.id), res);
}

const getReservationById = (req, res) => {
    handlePromise(generalGetbyId(queries.getReservationById, req.params.id), res);
}

export default getElemtFunction = {
    getProvinceAvailableById,
    getHotelById,
    getReceptionistById,
    getCustomerById,
    getCustomerStatusById,
    getServiceById,
    getSeasonById,
    getPriceById,
    getRoomFeaturesById,
    getRoomById,
    getPaymentMethodById,
    getPaymentById,
    getAffilateById,
    getBuyById,
    getFeedbackById,
    getPromotionById,
    getReservationById,
}