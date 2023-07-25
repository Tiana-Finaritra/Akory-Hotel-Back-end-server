import { handlePromiseUpdate } from "../promiseHandler.js";
import queriesUp from "../../Queries/allUpdate/allUpdate.js";
import queriesOne from "../../Queries/OneSelect/allOneSelect.js";
import { generalUpdate } from "../../DAO/update.js";
import getElemtFunction from "../get/getById.js";
import { db } from "../../database.js";

let updateFunction;

const updateProvinceAvailable = (req, res) => {
    // const new_name = req.query.province_name;
    // const new_code = req.query.code_province;
    const new_name =  req.body.province_name;
    const new_code = req.body.code_province;

    db.query(queriesOne.getProvinceAvailableById, [req.params.id], (error, result) => {
        const oldElem = result.rows;
        if(!oldElem.length){
            res.status(400).send("Province not exits");
        } else {
            let id = req.params.id
            let final_name = oldElem[0].province_name;
            let final_code = oldElem[0].code_province;

            new_name ? final_name = new_name : null;
            new_code ? final_code = new_code : null;

            handlePromiseUpdate(generalUpdate(queriesUp.updateProvinceAvailable, [id, final_name, final_code]), res);
        }
    });
}

const updateHotel = (req, res) => {
    const new_name = req.body.name;
    const new_adress = req.body.address;
    const new_id_province = req.body.id_province;
    
    db.query(queriesOne.getHotelById, [req.params.id], (error, result) => {
        const oldElem = result.rows;
        if(!oldElem.length){
            res.status(400).send("Hotel not exits");
        } else {
            let id = req.params.id;
            let final_name = oldElem[0].name;
            let final_address = oldElem[0].address;
            let final_id_province = oldElem[0].id_province;

            new_name ? final_name = new_name : null;
            new_adress ? final_address = new_adress : null;
            new_id_province ? final_id_province = new_id_province : null;

            handlePromiseUpdate(generalUpdate(queriesUp.updateHotel, [id, final_name, final_address, final_id_province]), res);
        }
    })
}

const updateReceptionist = (req, res) => {
    const new_first_name = req.body.first_name;
    const new_last_name = req.body.last_name;
    const new_password = req.body.password;
    const new_email = req.body.email;
    const new_work_contact = req.body.work_contact;
    const new_id_hotel = req.body.id_hotel;

    db.query(queriesOne.getReceptionistById, [req.params.id], (error, result) => {
        const oldElem = result.rows;
        if(!oldElem.length){
            res.status(400).send("Receptionsit not exits");
        } else {
            let id = req.params.id;
            let final_first_name = oldElem[0].first_name;
            let final_last_name = oldElem[0].last_name;
            let final_password = oldElem[0].password;
            let final_email = oldElem[0].email;
            let final_work_contact = oldElem[0].work_contact;
            let final_id_hotel = oldElem[0].id_hotel;

            new_first_name ? final_first_name = new_first_name : null;
            new_last_name ? final_last_name = new_last_name : null;
            new_password ? final_password = new_password : null;
            new_email ? final_email = new_email : null;
            new_work_contact ? final_work_contact : null;
            new_id_hotel ? final_id_hotel : null;

            handlePromiseUpdate(generalUpdate.updateReceptionist, [
                id,
                final_first_name,
                final_last_name,
                final_password,
                final_email,
                final_work_contact,
                final_id_hotel
            ], res);
        }
    })
}

const updateCustomer = (req, res) => {
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

    pool.query(queriesOne.getCustomerById, [req.params.id], (error, result) => {
        const oldElem = result.rows;
        if(!oldElem.length){
            res.status(400).send("Customer not exits");
        } else {
            let id = req.params.id;
            let final_name = oldElem[0].name;
            let final_last_name = oldElem[0].last_name;
            let final_principal_contact = oldElem[0].principal_contact;
            let final_address = oldElem[0].address;
            let final_emergency_number = oldElem[0].emergency_number;
            let final_gender = oldElem[0].gender;
            let final_cin = oldElem[0].cin;
            let final_email = oldElem[0].email;
            let final_password = oldElem[0].password;
            let final_id_receptionist = oldElem[0].id_receptionist;

            new_name ? final_name = new_name : null;
            new_last_name ? final_last_name = new_last_name : null;
            new_principal_contact ? final_principal_contact = new_principal_contact : null;
            new_address ? final_address = new_address : null;
            new_emergency_number ? final_emergency_number : null;
            new_gender ? final_gender = new_gender : null;
            new_cin ? final_cin = new_cin : null;
            new_email ? final_email = new_email : null;
            new_password ? final_password = new_password : null;
            new_id_receptionist ? final_id_receptionist = new_id_receptionist : null;

            handlePromiseUpdate(generalUpdate.upadateCustomer, [
                id,
                final_name,
                final_last_name,
                final_principal_contact,
                final_address,
                final_emergency_number,
                final_gender,
                final_cin,
                final_email,
                final_password,
                final_id_receptionist
            ], res);
        }
    })
}

const updateCustomerStatus = (req, res) => {
    
}

const updateService = (req, res) => {

}

const updateSeason = (req, res) => {

}

const updatePrice = (req, res) => {

}

const updateRoomFeatures = (req, res) => {

}

const updateRoom = (req, res) => {

}

const updatePaymentMethod = (req, res) => {

}

const updatePayment = (req, res) => {

}

const updateAffilate = (req, res) => {

}

const updateBuy = (req, res) => {

}

const updateFeedBack = (req, res) => {

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
}