import { handlePromiseUpdate } from "../promiseHandler.js";
import queriesUp from "../../Queries/allUpdate/allUpdate.js";
import queriesOne from "../../Queries/OneSelect/allOneSelect.js";
import { generalUpdate } from "../../DAO/update.js";
import getElemtFunction from "../get/getById.js";
import { db } from "../../database.js";

let updateFunction;

const updateProvinceAvailable = (req, res) => {
    const id = req.params.id;
    const new_name = req.body.province_name;
    const new_code = req.body.code_province;

    db.query(queriesOne.getProvinceAvailableById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Province not exist");
            } else {
                console.log(oldElem);
                let { province_name, code_province } = oldElem;

                console.log(new_name);
                console.log(new_code);

                new_name ? province_name = new_name : null;
                new_code ? code_province = new_code : null;

                console.log(province_name);
                console.log(code_province);

                handlePromiseUpdate(generalUpdate(queriesUp.updateProvinceAvailable, [id, province_name, code_province]), res);
            }
        })
        .catch(e => console.log(e));
}

const updateHotel = (req, res) => {
    const id = req.params.id;
    const new_name = req.body.name;
    const new_adress = req.body.address;
    const new_id_province = req.body.id_province;

    db.query(queriesOne.getHotelById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Hotel not exist");
            } else {
                let { name, address, id_province } = oldElem;

                new_name ? name = new_name : null;
                new_adress ? address = new_adress : null;
                new_id_province ? id_province = new_id_province : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateHotel, [id, name, address, id_province]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateReceptionist = (req, res) => {
    const id = req.params.id;
    const new_first_name = req.body.first_name;
    const new_last_name = req.body.last_name;
    const new_password = req.body.password;
    const new_email = req.body.email;
    const new_work_contact = req.body.work_contact;
    const new_id_hotel = req.body.id_hotel;

    db.query(queriesOne.getReceptionistById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Receptionsit not exist");
            } else {
                let { first_name, last_name, password, email, work_contact, id_hotel } = oldElem;

                new_first_name ? first_name = new_first_name : null;
                new_last_name ? last_name = new_last_name : null;
                new_password ? password = new_password : null;
                new_email ? email = new_email : null;
                new_work_contact ? work_contact : null;
                new_id_hotel ? id_hotel : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateReceptionist, [
                    id,
                    first_name,
                    last_name,
                    password,
                    email,
                    work_contact,
                    id_hotel
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateCustomer = (req, res) => {
    const id = req.params.id;
    const new_name = req.body.name;
    const new_last_name = req.body.last_name;
    const new_principal_contact = req.body.principal_contact;
    const new_address = req.body.address;
    const new_emergency_number = req.body.emergency_number;
    const new_gender = req.body.gender;
    const new_cin = req.body.cin;
    const new_email = req.body.email;
    const new_password = req.body.password;
    const new_id_receptionist = req.body.id_receptionist;

    db.query(queriesOne.getCustomerById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Customer not exist");
            } else {
                let { name, last_name, principal_contact, address, emergency_number, gender, cin, email, password, id_receptionist } = oldElem;

                new_name ? name = new_name : null;
                new_last_name ? last_name = new_last_name : null;
                new_principal_contact ? principal_contact = new_principal_contact : null;
                new_address ? address = new_address : null;
                new_emergency_number ? emergency_number : null;
                new_gender ? gender = new_gender : null;
                new_cin ? cin = new_cin : null;
                new_email ? email = new_email : null;
                new_password ? password = new_password : null;
                new_id_receptionist ? id_receptionist = new_id_receptionist : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateCustomer, [
                    id,
                    name,
                    last_name,
                    principal_contact,
                    address,
                    emergency_number,
                    gender,
                    cin,
                    email,
                    password,
                    id_receptionist
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateCustomerStatus = (req, res) => {
    const id = req.params.id;
    const new_status_arrived = req.body.status_arrived;
    const new_status_missing = req.body.status_missing;
    const new_is_fidelity = req.body.is_fidelity;
    const new_is_blacklist = req.body.is_blacklist;
    const new_id_customer = req.body.id_customer;

    db.query(queriesOne.getCustomerStatusById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("CustomerStatus not exist");
            } else {
                let { status_arrived, status_missing, is_fidelity, is_blacklist, id_customer } = oldElem;

                new_status_arrived ? status_arrived = new_status_arrived : null;
                new_status_missing ? status_missing = new_status_arrived : null;
                new_is_fidelity ? is_fidelity = new_is_fidelity : null;
                new_is_blacklist ? is_blacklist = new_is_blacklist : null;
                new_id_customer ? id_customer = new_id_customer : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateCustomerStatus, [
                    id,
                    status_arrived,
                    status_missing,
                    is_fidelity,
                    is_blacklist,
                    id_customer
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateService = (req, res) => {
    const id = req.params.id;
    const new_service_name = req.body.service_name;
    const new_description = req.body.description;
    const new_price = req.body.price;
    const new_reduction = req.body.reduction;

    db.query(queriesOne.getServiceById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Service not exist");
            } else {
                let { service_name, description, price, reduction } = oldElem;

                new_service_name ? service_name = new_service_name : null;
                new_description ? description = new_description : null;
                new_price ? price = new_price : null;
                new_reduction ? reduction = new_reduction : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateService, [
                    id,
                    service_name,
                    description,
                    price,
                    reduction
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateSeason = (req, res) => {
    const id = req.params.id;
    const new_items = req.body.items;
    const new_start_date = req.body.start_date;
    const new_end_date = req.body.end_date;

    db.query(queriesOne.getSeasonById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Season not exist");
            } else {
                let { items, start_date, end_date } = oldElem;

                new_items ? items = new_items : null;
                new_start_date ? start_date = new_start_date : null;
                new_end_date ? end_date = new_end_date : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateSeason, [
                    id,
                    items,
                    start_date,
                    end_date
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updatePrice = (req, res) => {
    const id = req.params.id;
    const new_cost_per_night = req.body.cost_per_night;
    const new_id_season = req.body.id_season;

    db.query(queriesOne.getPriceById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Price not exist");
            } else {
                let { cost_per_night, id_season } = oldElem;

                new_cost_per_night ? cost_per_night = new_cost_per_night : null;
                new_id_season ? id_season = new_id_season : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updatePrice, [id, cost_per_night, id_season]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateRoomFeatures = (req, res) => {
    const id = req.params.id;
    const new_sea_view = req.body.sea_view;
    const new_vip_category = req.body.vip_category;
    const new_hot_water = req.body.hot_water;
    const new_wifi_available = req.body.wifi_available;
    const new_room_service = req.body.room_service;
    const new_mini_bar = req.body.mini_bar;
    const new_flat_screen = req.body.flat_screen;

    db.query(queriesOne.getRoomFeaturesById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("RoomFeatures not exist");
            } else {
                let { sea_view, vip_category, hot_water, wifi_available, room_service, mini_bar, flat_screen } = oldElem;

                new_sea_view ? sea_view = new_sea_view : null;
                new_vip_category ? vip_category = new_vip_category : null;
                new_hot_water ? hot_water = new_hot_water : null;
                new_wifi_available ? wifi_available = new_wifi_available : null;
                new_room_service ? room_service = new_room_service : null;
                new_mini_bar ? mini_bar = new_mini_bar : null;
                new_flat_screen ? flat_screen = new_flat_screen : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateRoomFeatures, [
                    id,
                    sea_view,
                    vip_category,
                    hot_water,
                    wifi_available,
                    room_service,
                    mini_bar,
                    flat_screen
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateRoom = (req, res) => {
    const id = req.params.id;
    const new_number = req.body.number;
    const new_room_type = req.body.room_type;
    const new_capacity_room = req.body.capacity_room;
    const new_id_hotel = req.body.id_hotel;
    const new_id_price = req.body.id_price;
    const new_id_room_features = req.body.id_room_features;

    db.query(queriesOne.getRoomById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Room not exist");
            } else {
                let { number, room_type, capacity_room, id_hotel, id_price, id_room_features } = oldElem;

                new_number ? number = new_number : null;
                new_room_type ? room_type = new_room_type : null;
                new_capacity_room ? capacity_room = new_capacity_room : null;
                new_id_hotel ? id_hotel = new_id_hotel : null;
                new_id_price ? id_price = new_id_price : null;
                new_id_room_features ? id_room_features = new_id_room_features : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateRoom, [
                    id,
                    number,
                    room_type,
                    capacity_room,
                    id_hotel,
                    id_price,
                    id_room_features
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updatePaymentMethod = (req, res) => {
    const id = req.params.id;
    const new_name = req.body.name;

    db.query(queriesOne.getPaymentMethodById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("PaymentMethod not exist");
            } else {
                let { name } = oldElem;

                new_name ? name = new_name : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updatePaymentMethod, [id, name]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updatePayment = (req, res) => {
    const id = req.params.id;
    const new_payment_date = req.body.payment_date;
    const new_amount_paid = req.body.amount_paid;
    const new_number_night = req.body.number_night;
    const new_room_occuped = req.body.room_occuped;
    const new_deadline_payment = req.body.deadline_payment;
    const new_lending_status = req.body.lending_status;
    const new_total_amount_status = req.body.total_amount_status;
    const new_id_customer = req.body.id_customer;
    const new_id_payment_method = req.body.id_payment_method;
    const new_id_receptionist = req.body.id_receptionist;

    db.query(queriesOne.getPaymentById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Payment not exist");
            } else {
                let { payment_date, amount_paid, number_night, room_occuped, deadline_payment, lending_status, total_amount_status, id_customer, id_payment_method, id_receptionist } = oldElem;

                new_payment_date ? payment_date = new_payment_date : null;
                new_amount_paid ? amount_paid = new_amount_paid : null;
                new_number_night ? number_night = new_number_night : null;
                new_room_occuped ? room_occuped = new_room_occuped : null;
                new_deadline_payment ? deadline_payment = new_deadline_payment : null;
                new_lending_status ? lending_status = new_lending_status : null;
                new_total_amount_status ? total_amount_status = new_total_amount_status : null;
                new_id_customer ? id_customer = new_id_customer : null;
                new_id_payment_method ? id_payment_method = new_id_payment_method : null;
                new_id_receptionist ? id_receptionist = new_id_receptionist : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updatePayment, [
                    id,
                    payment_date,
                    amount_paid,
                    number_night,
                    room_occuped,
                    deadline_payment,
                    lending_status,
                    total_amount_status,
                    id_customer,
                    id_payment_method,
                    id_receptionist
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateAffilate = (req, res) => {
    const id = req.params.id;
    const new_id_promotion = req.body.id_promotion;
    const new_id_room = req.body.id_room;

    db.query(queriesOne.getAffilateById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Affilate not exist");
            } else {
                let { id_promotion, id_room } = oldElem;

                new_id_promotion ? id_promotion = new_id_promotion : null;
                new_id_room ? id_room = new_id_room : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateAffilate, [id, id_promotion, id_room], res));
            }
        })
        .catch((e) => console.log(e));
}

const updateBuy = (req, res) => {
    const id = req.params.id;
    const new_id_customer = req.body.id_customer;
    const new_id_service = req.body.id_service;

    db.query(queriesOne.getBuyById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Buy not exist");
            } else {
                let { id_customer, id_service } = oldElem;

                new_id_customer ? id_customer = new_id_customer : null;
                new_id_service ? id_service = new_id_service : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateBuy, [id, id_customer, id_service], res));
            }
        })
        .catch((e) => console.log(e));
}

const updateFeedBack = (req, res) => {
    const id = req.params.id;
    const new_comment = req.body.comment;
    const new_rating = req.body.rating;
    const new_id_customer = req.body.id_customer;
    const new_id_hotel = req.body.id_hotel;

    db.query(queriesOne.getFeedbackById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Feedback not exist");
            } else {
                let { comment, rating, id_customer, id_hotel } = oldElem;

                new_comment ? comment = new_comment : null;
                new_rating ? rating = new_rating : null;
                new_id_customer ? id_customer = new_id_customer : null;
                new_id_hotel ? id_hotel = new_id_hotel : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateFeedBack, [id, comment, rating, id_customer, id_hotel], res));
            }
        })
        .catch((e) => console.log(e));
}

const updatePromotion = (req, res) => {
    const id = req.params.id;
    const new_name = req.body.name;
    const new_begin = req.body.begin;
    const new_end = req.body.end;
    const new_percent = req.body.percent;

    db.query(queriesOne.getPromotionById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Promotion not exist");
            } else {
                let { name, begin, end, percent } = oldElem;

                new_name ? name = new_name : null;
                new_begin ? begin = new_begin : null;
                new_end ? end = new_end : null;
                new_percent ? percent = new_percent : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updatePromotion, [id, name, begin, end, percent]), res);
            }
        })
        .catch((e) => console.log(e));
}

const updateReservation = (req, res) => {
    const id = req.params.id;
    const new_date_arrived = req.body.date_arrived;
    const new_leaving_date = req.body.leaving_date;
    const new_number_of_person = req.body.number_of_person;
    const new_is_cancelled = req.body.is_cancelled;
    const new_id_customer = req.body.id_customer;
    const new_id_room = req.body.id_room;

    console.log(typeof(new_is_cancelled));

    db.query(queriesOne.getReservationById, [id])
        .then((result) => {
            const oldElem = result[0];
            if (!oldElem) {
                res.status(400).send("Reservation not exist");
            } else {
                let { date_arrived, leaving_date, number_of_person, is_cancelled, id_customer, id_room } = oldElem;

                new_date_arrived ? date_arrived = new_date_arrived : null;
                new_leaving_date ? leaving_date = new_leaving_date : null;
                new_number_of_person ? number_of_person = new_number_of_person : null;
                is_cancelled = new_is_cancelled;
                new_id_customer ? id_customer = new_id_customer : null;
                new_id_room ? id_room = new_id_room : null;

                handlePromiseUpdate(generalUpdate(queriesUp.updateReservation, [
                    id,
                    date_arrived,
                    leaving_date,
                    number_of_person,
                    is_cancelled,
                    id_customer,
                    id_room
                ]), res);
            }
        })
        .catch((e) => console.log(e));
}

export default updateFunction = {
    updateProvinceAvailable,
    updateHotel,
    updateReceptionist,
    updateCustomer,
    updateCustomerStatus,
    updateService,
    updateSeason,
    updatePrice,
    updateRoomFeatures,
    updateRoom,
    updatePaymentMethod,
    updatePayment,
    updateAffilate,
    updateBuy,
    updateFeedBack,
    updatePromotion,
    updateReservation,
}