import { generalDelete } from "../../DAO/delete.js";
import Ex from "../../Queries/allDelete/alldeletes.js";
import { handelPromiseDelete } from "../promiseHandler.js";

// province_available
const delProvince_available = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.province_availableD,[id]), res);
}



// hotel
const delHotel = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.hotelD,[id]), res);
}

// season
const delSeason = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.seasonD, [id]), res);
}

// promotion
const delPromotion = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.promotionD, [id]), res);
}

// price
const delPrice = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.priceD, [id]), res);
}

// room_features
const delRoomFeatures = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.room_featuresD, [id]), res);
}

// room
const delRoom = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.roomD, [id]), res);
}

// affiliate
const delAffiliate = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.affiliateD, [id]), res);
}

// receptionist
const delReceptionist = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.receptionistD, [id]), res);
}

// customer
const delCustomer = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.customerD, [id]), res);
}

// feed_back
const delFeedBack = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.feed_backD, [id]), res);
}

// reservation
const delReservation = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.reservationD, [id]), res);
}

// service
const delService = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.serviceD, [id]), res);
}

// buy
const delBuy = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.buyD, [id]), res);
}

// customer_status
const delCustomerStatus = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.customer_statusD, [id]), res);
}

// payment_method
const delPaymentMethod = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.payment_methodD, [id]), res);
}

// payment
const delPayment = (req, res) => {
    const id = req.params.id;
    handelPromiseDelete(generalDelete(Ex.paymentD, [id]), res);
}


let E;
export default E = {
    delProvince_available,
    delHotel,
    delSeason,
    delPromotion,
    delPrice,
    delRoomFeatures,
    delRoom,
    delAffiliate,
    delReceptionist,
    delCustomer,
    delFeedBack,
    delReservation,
    delService,
    delBuy,
    delCustomerStatus,
    delPaymentMethod,
    delPayment,
}

