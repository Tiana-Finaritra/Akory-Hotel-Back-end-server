import express from "express";
import { handlePromise } from "./promiseHandler.js";
import {
  getCurrentlyOccupiedRoomsList,
  getHotelAndNumberOfRooms,
  getHotelsListContainsRoomByBeutures
  , getRoomsDetailsByOccupedGivenGuest
  , getRoomsListByDescPrice
  , getRoomsListByFeatures
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

