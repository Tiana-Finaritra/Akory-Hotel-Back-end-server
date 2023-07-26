import express, { Router } from "express";
import getHotelFunction from "./get/get.hotel.js";
import getElemtFunction from "./get/getById.js";
import insertFunction from "./post/post.js";
import updateFunction from "./update/putById.js";
import E from "./delete/deletes.js";
export const router = express.Router();


// EASY-LINES:
// -------------------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------------------
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
router.get("/AnaliseBeneficPromotion", getHotelFunction.getAnaliseBeneficPromotion);

// hard-line12:
// DISPLAY THE AVERAGE NUMBER OF RESERVATIONS PER HOTEL FOR EACH MONTH OF A GIVEN YEAR 
router.get("/AverageResNumberMonthsByHotelAndYear", getHotelFunction.getAverageResNumberMonthsByHotelAndYear);

// hard-line13:
// DISPLAY AVERAGE NUMBER OF RESERVATIONS PER HOTEL, PER DAY, ALL PERIODS COMBINED
router.get("/AverageResNumberDaysByHotel", getHotelFunction.getAverageResNumberDaysByHotel);



// POSTS===============================================================
// Insertion for new province
router.post("/province", insertFunction.newProvince);

// Insertion for new hotel
router.post("/hotel", insertFunction.newHotel);

//Insertion for new promotion
router.post("/promotion", insertFunction.newPromotion);

// Insertion for new season
router.post("/season", insertFunction.newSeason);

//Insertion for new price
router.post("/price", insertFunction.newPrice);

//Insertion for new rooom_features
router.post("/room_features", insertFunction.newRoom_features);

//Insertion for new room
router.post("/room", insertFunction.newRoom);

//Insertion for new affiliate
router.post("/affiliate", insertFunction.newAffiliate);

//Insertion for new receptionist
router.post("/receptionist", insertFunction.newReceptionist);

//Insertion for new customer
router.post("/customer", insertFunction.newCustomer);

//Insertion for new feed_back
router.post("/feed_back", insertFunction.newFeed_back);

//Insertion for new reservation
router.post("/reservation", insertFunction.newReservation);

//Insertion for new service
router.post("/service", insertFunction.newService);

//Insertion for new buy
router.post("/buy", insertFunction.newBuy);

//Insertion for new customer_status
router.post("/customer_status", insertFunction.newCustomer_status);

//Insertion for new payment_method
router.post("/payment_method", insertFunction.newPayment_method);

//Insertion for new payment
router.post("/payment", insertFunction.newPayment);


// ----------------------------------------------------------------------------------------------------------
// GET ELEMENT BY ID
router.get("/province/:id", getElemtFunction.getProvinceAvailableById);

router.get("/hotel/:id", getElemtFunction.getHotelById);

router.get("/receptionist/:id", getElemtFunction.getReceptionistById);

router.get("/customer/:id", getElemtFunction.getCustomerById);

router.get("/customerstatus/:id", getElemtFunction.getCustomerStatusById);

router.get("/service/:id", getElemtFunction.getServiceById);

router.get("/season/:id", getElemtFunction.getSeasonById);

router.get("/price/:id", getElemtFunction.getPriceById);

router.get("/roomfeatures/:id", getElemtFunction.getRoomFeaturesById);

router.get("/room/:id", getElemtFunction.getRoomById);

router.get("/paymentmethod/:id", getElemtFunction.getPaymentMethodById);

router.get("/payment/:id", getElemtFunction.getPaymentById);

router.get("/affilate/:id", getElemtFunction.getAffilateById);

router.get("/buy/:id", getElemtFunction.getBuyById);

router.get("/feedback/:id", getElemtFunction.getFeedbackById);

router.get("/promotion/:id", getElemtFunction.getPromotionById);

router.get("/reservation/:id", getElemtFunction.getReservationById);

// ----------------------------------------------------------------------------------------------------------
// UPDATE
router.put("/province/:id", updateFunction.updateProvinceAvailable);

router.put("/hotel/:id", updateFunction.updateHotel);

router.put("/receptionist/:id", updateFunction.updateReceptionist);

router.put("/customer/:id", updateFunction.updateCustomer);

router.put("/customer/:id", updateFunction.updateCustomerStatus);

router.put("/service/:id", updateFunction.updateService);

router.put("/season/:id", updateFunction.updateSeason);

router.put("/price/:id", updateFunction.updatePrice);

router.put("/roomfeatures/:id", updateFunction.updateRoomFeatures);

router.put("/room/:id", updateFunction.updateRoom);

router.put("/paymentmethod/:id", updateFunction.updatePaymentMethod);

router.put("/payment/:id", updateFunction.updatePayment);

router.put("/affilate/:id", updateFunction.updateAffilate);

router.put("/buy/:id", updateFunction.updateBuy);

router.put("/feedback/:id", updateFunction.updateFeedBack);

router.put("/promotion/:id", updateFunction.updatePromotion);

router.put("/reservation/:id", updateFunction.updateReservation);

router.put("/promotion/:id", updateFunction.updatePromotion);

router.put("/reservation/:id", updateFunction.updateReservation);


// ----------------------------------------------------------------------------------------------------------
// DELETE:

router.delete("/province/:id", E.delProvince_available);

router.delete("/hotel/:id", E.delHotel);

router.delete("/season/:id", E.delSeason);

router.delete("/promotion/:id", E.delPromotion);

router.delete("/price/:id", E.delPrice);

router.delete("/room_features/:id", E.delRoomFeatures);

router.delete("/room/:id", E.delRoom);

router.delete("/affiliate/:id", E.delAffiliate);

router.delete("/receptionist/:id", E.delReceptionist);

router.delete("/customer/:id", E.delCustomer);

router.delete("/feed_back/:id", E.delFeedBack);

router.delete("/reservation/:id", E.delReservation);

router.delete("/service/:id", E.delService);

router.delete("/buy/:id", E.delBuy);

router.delete("/customer_status/:id", E.delCustomerStatus);

router.delete("/payment_method/:id", E.delPaymentMethod);

router.delete("/payment/:id", E.delPayment);