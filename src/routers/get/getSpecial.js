import { handlePromise } from "../promiseHandler.js";
import express, { Router } from "express";
import { generalDisplay } from "../../DAO/displays.js";
import queries from '../../Queries/allSpecial/allSpecialSelect.js';

const routerSpecial = express.Router();
export default routerSpecial;

// ROUTER SPECIAL FOR FRONT APP
// RoomsAvailableForAHotel
routerSpecial.get("/RoomsAvailableForAHotel", (req, res) => {
    handlePromise(generalDisplay(queries.RoomsAvailableForAHotel), res);
});

// ResrvationsWithCustomerInfo
routerSpecial.get("/ReservationsWithCustomerInfo", (req, res) => {
    handlePromise(generalDisplay(queries.ResrvationsWithCustomerInfo), res);
})