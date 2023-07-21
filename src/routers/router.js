import express from "express";
import { handlePromise } from "./promiseHandler.js";
import {
  getCurrentlyOccupiedRoomsList,
  getHotelAndNumberOfRooms,
  getHotelsListContainsRoomByBeutures
  , getLeastMostReservedRoomByHotel, getRoomsDetailsByOccupedGivenGuest
  , getRoomsListByDescPrice
  , getRoomsListByFeatures,
  getTotalConferencePaymentInIntervalDate,
  getTotalPayForRoomsHotel
}
  from "../DAO/displays.js";


export const router = express.Router();

// easy-line12:
// DESPLAY ALL ROOM ORDER BY PRICE DESC:
router.get("/RoomsListByDescPrice", (req, res) => {
  handlePromise(getRoomsListByDescPrice(), res)
});


// easy-line13:
// DISPLAY A LIST OF ROOMS WHOSE DESCRIPTIONS MATCH SPECIFUIC KEYWORDS
router.get("/RoomsListByFeatures", (req, res) => {
  // const keyword = req.query.keyword;
  let keyword = "mini_bar"; // Juste pour les tests
  handlePromise(getRoomsListByFeatures(keyword), res);
});

// easy-line14:
// DISPLAY THE LIST PF HOTELS THAT CONTAIN ROOMS
// WHOSE DESCRIPTION CORRESPONDS TO GIVEN KEYWORD
router.get("/HotelsListContainsRoomByBeutures", (req, res) => {
  // const keyword = req.query.keyword;
  let keyword = "VIP";
  handlePromise(getHotelsListContainsRoomByBeutures(keyword), res);
});


// easy-line15:
// DISPLAY DETAILS OF THE ROOM CURRENTLY OCCUPID BY A GIVEN GUEST
router.get("/RoomsDetailsByOccupedGivenGuest", (req, res) => {
  // const [customer_name, customer_id] = req.query.keyword;
  let customer_name = "William";
  let customer_id = 78;
  handlePromise(getRoomsDetailsByOccupedGivenGuest(customer_name, customer_id), res);
});


// medium-line8:
// DISPLAY HOTEL WITH ROOMS NUMBRER BY HOTEL
router.get("/HotelAndNumberOfRooms",(req, res) => {
  handlePromise(getHotelAndNumberOfRooms(), res);
});


// medium-line9:
// SHOW LIST OF CURENTLY OCCUPIED ROOMS:
router.get("/CurrentyOccupiedRoomsList", (req, res) => {
  handlePromise(getCurrentlyOccupiedRoomsList(),res);
});


// medium-line10-11:
// DISPLAY LEAST/MOST RESERVED ROOM IN GIVEN HOTEL
router.get("/LeastMostReservedRoomByHotel", (req, res) => {
  // const hotel_name = req.query.keyword;
  let hotel_name ="Tranquil Bay Resort" ;
   handlePromise(getLeastMostReservedRoomByHotel(hotel_name),res );
});


// hard-line6:
// DISPLAY TOTAL  OF PAYMANT ONLY FOR ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL

router.get("/TotalPayForRoomsHotel", (req, res) => {
  // const [start_period, end_period] = req.query.keyword;
  let start_period = '2000-08-01';
  let end_period = '2025-12-30';
  handlePromise(getTotalPayForRoomsHotel(start_period, end_period), res);
});



// hard-line7:
// DISPLAY TOTAL  OF PAYMANT ONLY FOR CONFERENCES ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL
router.get("/TotalConferencePaymentInIntervalDate/:start_period/:end_period/:room_type", (req, res) => {
  const { start_period, end_period, room_type } = req.params; // Get parameters from req.params
  handlePromise(getTotalConferencePaymentInIntervalDate({ start_period, end_period, room_type }), res);
});