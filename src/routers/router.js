import express, { Router } from "express";
import { handlePromise, handlePromiseInsertion } from "./promiseHandler.js";
import allInsert from "../DAO/insertions.js";
import getHotelFunction from "./get/get.hotel.js";
import allDisplay from "../DAO/displays.js";


export const router = express.Router();


// EASY-LINES:
// --------------------------------------------------------------------------------
router.get("/ReceptionistsListInWhichHotel", getHotelFunction.getReceptionistsListInWhichHotel);


// easy-line3:
// DISPLAY THE LIST OF RESERVATIONS STARTING WITH THE MOST RECENT FOR A GIVEN HOTEL
router.get("/ReservationListDescByHotel", getHotelFunction.getReservationListDescByHotel);

// easy-line4:
// LIST OF ROOM TYPE GIVE AND HOTEL GIVE
router.get("/AllRoomsByTypeAndHotelName", getHotelFunction.getAllRoomsByTypeAndHotelName);

// easy-line5:
// DISPLAY SPECIAL OFFERS BY SEASON (PERIOD), ALL HOTEL COMBINED
router.get("/OffersBySeasonAnDHotel", getHotelFunction.getOffersBySeasonAnDHotel);


// easy-line6:
// LIST OF RESERVATIONS OF A GIVEN CLIENT
router.get("/ReservationOfGivenCustomer", getHotelFunction.getReservationOfGivenCustomer);


// easy-line7:
// VIEW THE LIST OF CUSTOMERS WHO HAVE NOT YET PAID THEIR FEES IN FULL
router.get("/CustomersListNotPaidFullFees", getHotelFunction.getCustomersListNotPaidFullFees);


// easy-line8:
// TOTAL PAYMENTS RECEIVED BY MOBILE MONEY  
// GENERALISE::::::::::::::
router.get("/TotalPayReceidByGivenMethod", getHotelFunction.getTotalPayReceidByGivenMethod);


// easy-line9:
// DISPLAY THE NUMBER OF RESERVATIONS MADE BY A GIVEN CUSTOMER DURING A GINVEN PERIOD
router.get("/ResNumberByCustomerAndPeriod", getHotelFunction.getResNumberByCustomerAndPeriod);


// easy-line10:
// DISPLAY THE LIST OF HOTELS IN A GIVEN LOCATION (PROVINCE)
router.get("/HotelsListByProvince", getHotelFunction.getHotelsListByProvince);


// easy-line11:
// DISPLAY THE LIST OF ROOMS THAT CORRESPOND TO A PRICE RANGE GIVEN BY THE CUSTOMER 
router.get("/RoomsListByPriceInterval", getHotelFunction.getRoomsListByPriceInterval);

// easy-line12:
// DESPLAY ALL ROOM ORDER BY PRICE DESC:
router.get("/RoomsListByDescPrice", getHotelFunction.getRoomsListByDescPrice);


// easy-line13:
// DISPLAY A LIST OF ROOMS WHOSE DESCRIPTIONS MATCH SPECIFUIC KEYWORDS
router.get("/RoomsListByFeatures", getHotelFunction.getRoomsListByFeatures);

// easy-line14:
// DISPLAY THE LIST PF HOTELS THAT CONTAIN ROOMS
// WHOSE DESCRIPTION CORRESPONDS TO GIVEN KEYWORD
router.get("/HotelsListContainsRoomByBeutures", getHotelFunction.getHotelsListContainsRoomByBeutures);


// easy-line15:
// DISPLAY DETAILS OF THE ROOM CURRENTLY OCCUPID BY A GIVEN GUEST
router.get("/RoomsDetailsByOccupedGivenGuest", getHotelFunction.getRoomsDetailsByOccupedGivenGuest);


// easy-line16/17:
// GENERALISE::::::::
// SHOW THE HOTEL WITH THE MOST RESERVATIONS
router.get("/HotelWithTheNumberRes", getHotelFunction.getHotelWithTheNumberRes);


// easy-line18:
// SHOW THE CUSTOMERS WITH THE MOST NEGATIVE REVIEWS WRITTEN FOR HOTELS
router.get("/CustomersNegCommentForHotel", getHotelFunction.getCustomersNegCommentForHotel);


// MEDIUM-LINES:
// --------------------------------------------------------------------------------------------------------------------
// medium-line2:
// SHOW HOW MANY TIMES A CUSTOMER HAS BOOKED IN OUR HOTEL
router.get("/BookingNumberByCustomer", getHotelFunction.getBookingNumberByCustomer);



// Medium-line3:
// DISPLAY THE LIST OF ROOMS AVAILABLE TOMORROW
router.get("/RoomsListAvailableTommorow", getHotelFunction.getRoomsListAvailableTommorow);

// medium-line4:
// DISPLAY THE TOTAL NUMBER OF RESERVATIONS BY ROOM TYPE
router.get("/TotalResNumberByRoomType", getHotelFunction.getTotalResNumberByRoomType);

// medium-line5:
// LIST OF ROOMS THAT MEET MULTIPLE CRITERIA
router.get("/RoomsByMultipleCriteria", getHotelFunction.getRoomsByMultipleCriteria);


// medium-line6:
// SHOW THE TOTAL NUMBER OF RESERVATIONS PER HOTEL
router.get("/TotalResForHotel", getHotelFunction.getTotalResForHotel);


// medium-line7:
// CUSTOMER LIST WITH RESERVATION CANCELLATION NUMBER
router.get("/CustomerListWithResCancelNumber", getHotelFunction.getCustomerListWithResCancelNumber);


// medium-line8:
// DISPLAY HOTEL WITH ROOMS NUMBRER BY HOTEL
router.get("/HotelAndNumberOfRooms", getHotelFunction.getHotelAndNumberOfRooms);



// medium-line9:
// SHOW LIST OF CURENTLY OCCUPIED ROOMS:
router.get("/CurrentyOccupiedRoomsList", getHotelFunction.getCurrentlyOccupiedRoomsList);


// medium-line10-11:
// DISPLAY LEAST/MOST RESERVED ROOM IN GIVEN HOTEL
router.get("/LeastMostReservedRoomByHotel", getHotelFunction.getLeastMostReservedRoomByHotel);


// medium-line12:
// DISPLAY THE LIST OF CURRENT PROMOTIONS: 
router.get("/CurrentPrommotionsList", getHotelFunction.getCurrentPrommotionsList);

// medium-line14:
// DISPLAY LIST OF PAYMENT WITH NAME AND FIRST-NAME WHO WAS RECEIVE IT:
router.get("/PayementListAllInfo", getHotelFunction.getPayementListAllInfo);

// HARD-LINES:
// ------------------------------------------------------------------------------------------------------------------------------
// hard-line5:
// TOTAL PAYMENTS COLLECTED IN A YE:AR FOR EACH HOTEL
router.get("/CollectedPayForAllHotelsByYear", getHotelFunction.getCollectedPayForAllHotelsByYear);


// hard-line6:
// DISPLAY TOTAL  OF PAYMANT ONLY FOR ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL

router.get("/TotalPayForRoomsHotel", getHotelFunction.getTotalPayForRoomsHotel);



// hard-line7:
// DISPLAY TOTAL  OF PAYMANT ONLY FOR CONFERENCES ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL
router.get("/TotalConferencePaymentInIntervalDate", getHotelFunction.getTotalConferencePaymentInIntervalDate);


// hard-line9:
// FOR EACH PROMOTION, DISPLAY THE TOTAL NUMBER OF RESERVATIONS THAT BENEFITED FROM THE PROMOTION, BY HOTEL
// (TO KNOW IF IT WORKED OR NOT)
// router.get("/AnaliseBeneficPromotion", getHotelFunction.getAnaliseBeneficPromotion);


// hard-line12:
// DISPLAY THE AVERAGE NUMBER OF RESERVATIONS PER HOTEL FOR EACH MONTH OF A GIVEN YEAR 
router.get("/AverageResNumberMonthsByHotelAndYear", getHotelFunction.getAverageResNumberMonthsByHotelAndYear);


// hard-line13:
// DISPLAY AVERAGE NUMBER OF RESERVATIONS PER HOTEL, PER DAY, ALL PERIODS COMBINED
router.get("/AverageResNumberDaysByHotel", getHotelFunction.getAverageResNumberDaysByHotel);

// Insertion for new province
router.post("/province", (req, res) => {
  // FOR TEST: http://localhost:8000/province
  const data =  req.body;
  handlePromiseInsertion(allInsert.addProvinceAvailable(data), res)
});