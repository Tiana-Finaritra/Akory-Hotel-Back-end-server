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


// New Promotion:
const newPromotion = (req, res) => {
    const { name, begin, end, percent } = req.body;
    handlePromiseInsertion(generalPost(queries.promotionQ, [name, begin, end, percent]), res);
}

// New season:
const newSeason = (req, res) => {
    const { items, start_date, end_date } = req.body;
    handlePromiseInsertion(generalPost(queries.seasonQ, [items, start_date, end_date]), res);
}

// New price:
const newPrice = (req, res) => {
    const { cost_per_night, id_season } = req.body;
    handlePromiseInsertion(generalPost(queries.priceQ, [cost_per_night, id_season]), res);
}

// New room_features:
const newRoom_features = (req, res) => {
    const { sea_view, VIP_category, hot_water, wifi_available, room_service, mini_bar, flat_screen } = req.body;
    handlePromiseInsertion(generalPost(queries.room_featuresQ, [sea_view, VIP_category, hot_water, wifi_available, room_service, mini_bar, flat_screen]), res);
}

// New Room:
const newRoom = (req, res) => {
    const { number, room_type, capacity_room, id_hotel, id_price, id_room_features } = req.body;
    handlePromiseInsertion(generalPost(queries.roomQ, [number, room_type, capacity_room, id_hotel, id_price, id_room_features]), res);
}

// New affiliate:
const newAffiliate = (req, res) => {
    const { id_promotion, id_room } = req.body;
    handlePromiseInsertion(generalPost(queries.affiliateQ, [id_promotion, id_room]), res);
}

// New receptionist:
const newReceptionist = (req, res) => {
    const { first_name, last_name, password, email, work_contact, id_hotel } = req.body;
    handlePromiseInsertion(generalPost(queries.receptionistQ, [first_name, last_name, password, email, work_contact, id_hotel]), res);
}

// New customer:
const newCustomer = (req, res) => {
    const { name, last_name, principal_contact, address, emergency_number, gender, CIN, email, password, id_receptionist } = req.body;
    handlePromiseInsertion(generalPost(queries.customerQ, [name, last_name, principal_contact, address, emergency_number, gender, CIN, email, password, id_receptionist]), res);
}

// New feed_back:
const newFeed_back = (req, res) => {
    const { comment, rating, id_customer, id_hotel } = req.body;
    handlePromiseInsertion(generalPost(queries.feed_backQ, [comment, rating, id_customer, id_hotel]), res);
}

// New reservation:
const newReservation = (req, res) => {
    const { date_arrived, leaving_date, number_of_person, is_cancelled, id_customer, id_room } = req.body;
    handlePromiseInsertion(generalPost(queries.reservationQ, [date_arrived, leaving_date, number_of_person, is_cancelled, id_customer, id_room]), res);
}

// New service:
const newService = (req, res) => {
    const { service_name, description, price, reduction } = req.body;
    handlePromiseInsertion(generalPost(queries.serviceQ, [service_name, description, price, reduction]), res);
}

// New buy:
const newBuy = (req, res) => {
    const { id_customer, id_service } = req.body;
    handlePromiseInsertion(generalPost(queries.buyQ, [id_customer, id_service]), res);
}

// New customer_status:
const newCustomer_status = (req, res) => {
    const { status_arrived, status_missing, is_fidelity, is_blacklist, id_customer } = req.body;
    handlePromiseInsertion(generalPost(queries.customer_statusQ, [status_arrived, status_missing, is_fidelity, is_blacklist, id_customer]), res);
}

// New payment_method:
const newPayment_method = (req, res) => {
    const { mobile_money, credit_card, cash } = req.body;
    handlePromiseInsertion(generalPost(queries.payment_methodQ, [mobile_money, credit_card, cash]), res);
}

// New payment:
const newPayment = (req, res) => {
    const { payment_date, amount_paid, number_night, room_occuped, deadline_payment, lending_status, total_amount_status, id_customer, id_payment_method, id_receptionist } = req.body;
    handlePromiseInsertion(generalPost(queries.paymentQ, [payment_date, amount_paid, number_night, room_occuped, deadline_payment, lending_status, total_amount_status, id_customer, id_payment_method, id_receptionist]), res);
}





export default insertFunction = {
    newProvince,
    newHotel,
    newSeason,
    newPromotion,
    newPrice,
    newRoom_features,
    newRoom,
    newAffiliate,
    newReceptionist,
    newCustomer,
    newFeed_back,
    newReservation,
    newBuy,
    newService,
    newCustomer_status,
    newPayment_method,
    newPayment
}