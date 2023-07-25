import { handlePromise } from "../promiseHandler.js";
import queries from "../../Queries/OneSelect/allOneSelect.js";
import { generalDisplay } from "../../DAO/displays.js";

let getElemtFunction;

const getAllProvinceAvailables = (req, res) => {
    handlePromise(generalDisplay(queries.getAllProvinceAvailables), res);
}

const getAllHotels = (req, res) => {
    handlePromise(generalDisplay(queries.getAllHotels), res);
}

const getAllReceptionists = (req, res) => {
    handlePromise(generalDisplay(queries.getAllReceptionists), res);
}

const getAllCustomers = (req, res) => {
    handlePromise(generalDisplay(queries.getAllCustomers), res);
}

const getAllCustomerStatus = (req, res) => {
    handlePromise(generalDisplay(queries.getAllCustomerStatus), res);
}

const getAllServices = (req, res) => {
    handlePromise(generalDisplay(queries.getAllServices), res);
}

const getAllSeasons = (req, res) => {
    handlePromise(generalDisplay(queries.getAllSeasons), res);
}

const getAllPrices = (req, res) => {
    handlePromise(generalDisplay(queries.getAllPrices), res);
}

const getAllRoomFeatures = (req, res) => {
    handlePromise(generalDisplay(queries.getAllRoomFeatures), res);
}

const getAllRooms = (req, res) => {
    handlePromise(generalDisplay(queries.getAllRooms), res);
}

const getAllPaymentMethods = (req, res) => {
    handlePromise(generalDisplay(queries.getAllPaymentMethods), res);
}

const getAllPayments = (req, res) => {
    handlePromise(generalDisplay(queries.getAllPayments), res);
}

const getAllAffilates = (req, res) => {
    handlePromise(generalDisplay(queries.getAllAffilates), res);
}

const getAllBuys = (req, res) => {
    handlePromise(generalDisplay(queries.getAllBuys), res);
}

const getAllFeedbacks = (req, res) => {
    handlePromise(generalDisplay(queries.getAllFeedbacks), res);
}

const getAllPromotions = (req, res) => {
    handlePromise(generalDisplay(queries.getAllPromotions), res);
}

const getAllReservations = (req, res) => {
    handlePromise(generalDisplay(queries.getAllReservations), res);
}

export default getElemtFunction = {
    getAllProvinceAvailables,
    getAllHotels,
    getAllReceptionists,
    getAllCustomers,
    getAllCustomerStatus,
    getAllServices,
    getAllSeasons,
    getAllPrices,
    getAllRoomFeatures,
    getAllRooms,
    getAllPaymentMethods,
    getAllPayments,
    getAllAffilates,
    getAllBuys,
    getAllFeedbacks,
    getAllPromotions,
    getAllReservations,
}