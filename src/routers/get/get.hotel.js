import { handlePromise } from "../promiseHandler.js";
import queries from "../../Queries/allSelect/allQueries.js";
import {generalDisplay} from "../../DAO/displays.js";

let getHotelFunction;

// EASY-LINES:
// ------------------------------------------------------------------------------------------------------------------------
// easy-line2:
// DISPLAY THE LIST OF RECEPTIONISTS WITH THE HOTEL TO WHICH THEY ARE ATTACHED 
const getReceptionistsListInWhichHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/ReceptionistsListInWhichHotel
    handlePromise(generalDisplay(queries.ReceptionistsListInWhichHotelQ), res);
}

const getReservationListDescByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/ReservationListDescByHotel
    const hotel_name = "Grand Hotel";
    // const hotel_name = req.body;
    handlePromise(generalDisplay(queries.ReservationListDescByHotelQ, hotel_name), res);
}

const getAllRoomsByTypeAndHotelName = (req, res) => {
    // FOR TEST: http://localhost:8000/AllRoomsByTypeAndHotelName
    const room_type = "double";
    const hotel_id = 80;
    // const {room_type, hotel_id} = req.body;
    handlePromise(generalDisplay(queries.AllRoomsByTypeAndHotelNameQ, [room_type, hotel_id]), res);
}

const getOffersBySeasonAnDHotel = (req, res) => {
    //FOR TEST: http://localhost:8000/OffersBySeasonAnDHotel
    handlePromise(getOffersBySeasonAnDHotel(), res);
}

const getReservationOfGivenCustomer = (req, res) => {
    // FOR TEST: http://localhost:8000/ReservationOfGivenCustomer
    // const customer_id = req.body;
    const customer_id = 79;
    handlePromise(getReservationOfGivenCustomer({ customer_id }), res);
}

const getCustomersListNotPaidFullFees = (req, res) => {
    // FOR TEST: http://localhost:8000/CustomersListNotPaidFullFees
    handlePromise(getCustomersListNotPaidFullFees(), res);
}

const getTotalPayReceidByGivenMethod = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalPayReceidByGivenMethod
    handlePromise(getTotalPayReceidByGivenMethod(), res);
}

const getResNumberByCustomerAndPeriod = (req, res) => {
    // FOR TEST: http://localhost:8000/ResNumberByCustomerAndPeriod
    const customer_name = "Mason";
    const period = "2023-07-15 10:00:00";
    // const {customer_name, period} = req.body;
    handlePromise(getResNumberByCustomerAndPeriod({ customer_name, period }), res);
}

const getHotelsListByProvince = (req, res) => {
    // FOR TEST: http://localhost:8000/HotelsListByProvince
    // const {provice} = req.body;
    const province = "Antananarivo";
    handlePromise(getHotelsListByProvince({ province }), res);
}

const getRoomsListByPriceInterval = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListByPriceInterval
    // const {min_price, max_price} = req.body;
    const min_price = 12100;
    const max_price = 12200;
    handlePromise(getRoomsListByPriceInterval({ min_price, max_price }), res);
}

const getRoomsListByDescPrice = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListByDescPrice
    handlePromise(getRoomsListByDescPrice(), res);
}

const getRoomsListByFeatures = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListByFeatures
    let keyword = "VIP";
    // let keyword = req.body;
    handlePromise(getRoomsListByFeatures({ keyword }), res);
}

const getHotelsListContainsRoomByBeutures = (req, res) => {
    //FOR TEST: http://localhost:8000/HotelsListContainsRoomByBeutures
    let keyword = "VIP";
    // let keyword = req.body;
    handlePromise(getHotelsListContainsRoomByBeutures({ keyword }), res);
}

const getRoomsDetailsByOccupedGivenGuest = (req, res) => {
    //FOR TEST: http://localhost:8000/RoomsDetailsByOccupedGivenGuest
    let customer_name = "William";
    let customer_id = 78;
    // let {customer_name, customer_id} = req.body;
    handlePromise(getRoomsDetailsByOccupedGivenGuest({ customer_name, customer_id }), res);
}

const getHotelWithTheNumberRes = (req, res) => {
    // FOR TEST: http://localhost:8000/HotelWithTheNumberRes
    handlePromise(getHotelWithTheNumberRes(), res);
}

const getCustomersNegCommentForHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/CustomersNegCommentForHotel
    handlePromise(getCustomersNegCommentForHotel(), res);
}

const getBookingNumberByCustomer = (req, res) => {
    // FOR TEST: http://localhost:8000/BookingNumberByCustomer
    const customer_id = 45;
    // const customer_id = req.body;
    handlePromise(getBookingNumberByCustomer({ customer_id }), res);
}

const getRoomsListAvailableTommorow = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListAvailableTommorow
    handlePromise(getRoomsListAvailableTommorow(), res);
}

const getTotalResNumberByRoomType = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalResNumberByRoomType
    handlePromise(getTotalResNumberByRoomType(), res);
}

const getRoomsByMultipleCriteria = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsByMultipleCriteria
    const criteria = {
      sea_view: true,
      vip_category: true,
      hot_water: true,
      wifi_available: false,
      room_service: true,
      mini_bar: true,
      flat_screen: false,
    };
    // const criteria = req.body;
    handlePromise(getRoomsByMultipleCriteria(criteria), res);
}

const getTotalResForHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalResForHotel
    handlePromise(getTotalResForHotel(), res);
}

const getCustomerListWithResCancelNumber = (req, res) => {
    // FOR TEST: http://localhost:8000/CustomerListWithResCancelNumber
    handlePromise(getCustomerListWithResCancelNumber(), res);
}

const getHotelAndNumberOfRooms = (req, res) => {
    // for test: http://localhost:8000/HotelAndNumberOfRooms
    handlePromise(getHotelAndNumberOfRooms(), res);
}

const getCurrentlyOccupiedRoomsList = (req, res) => {
    // FOR TEST: http://localhost:8000/CurrentyOccupiedRoomsList
    handlePromise(getCurrentlyOccupiedRoomsList(), res);
}

const getLeastMostReservedRoomByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/LeastMostReservedRoomByHotel
    let hotel_name = "Tranquil Bay Resort";
    // const hotel_name = req.body;
    handlePromise(getLeastMostReservedRoomByHotel(hotel_name), res);
}

const getCurrentPrommotionsList = (req, res) => {
    // FOR TEST: http://localhost:8000/CurrentPrommotionsList
    handlePromise(getCurrentPrommotionsList(), res);
}

const getPayementListAllInfo = (req, res) => {
    // FOR TEST: http://localhost:8000/PayementListAllInfo
    handlePromise(getPayementListAllInfo(), res);
}

const getCollectedPayForAllHotelsByYear = (req, res) => {
    // FOR TEST: http://localhost:8000/CollectedPayForAllHotelsByYear
    const year = '2023';
    // const year = '2023';
    handlePromise(getCollectedPayForAllHotelsByYear({ year }), res);
}

const getTotalPayForRoomsHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalPayForRoomsHotel
    const start_period = "2000-08-01";
    const end_period = "2025-12-30";
    // const { start_period, end_period } = req.params;
    handlePromise(getTotalPayForRoomsHotel({ start_period, end_period }), res);
}

const getTotalConferencePaymentInIntervalDate = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalConferencePaymentInIntervalDate
    const start_period = "2000-08-01";
    const end_period = "2025-12-30";
    const room_type = "communicante";
    // const { start_period, end_period, room_type } = req.body;
    handlePromise(getTotalConferencePaymentInIntervalDate({ start_period, end_period, room_type }), res);
}

const getAnaliseBeneficPromotion = (req, res) => {
    // FOR TEST: http://localhost:8000/AnaliseBeneficPromotion
    handlePromise(getAnaliseBeneficPromotion(), res);
}

const getAverageResNumberMonthsByHotelAndYear = (req, res) => {
    // FOR TEST: http://localhost:8000/AverageResNumberMonthsByHotelAndYear
    const year = "2023";
    // const year = req.body;
    handlePromise(getAverageResNumberMonthsByHotelAndYear({year}), res);
}

const getAverageResNumberDaysByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/AverageResNumberDaysByHotel
    handlePromise(getAverageResNumberDaysByHotel(), res);
}

export default getHotelFunction = {
    getAverageResNumberDaysByHotel,
    getAverageResNumberMonthsByHotelAndYear,
    getTotalConferencePaymentInIntervalDate,
    getTotalPayForRoomsHotel,
    getCollectedPayForAllHotelsByYear,
    getPayementListAllInfo,
    getCurrentPrommotionsList,
    getLeastMostReservedRoomByHotel,
    getCurrentlyOccupiedRoomsList,
    getHotelAndNumberOfRooms,
    getCustomerListWithResCancelNumber,
    getTotalResForHotel,
    getRoomsByMultipleCriteria,
    getTotalResNumberByRoomType,
    getRoomsListAvailableTommorow,
    getBookingNumberByCustomer,
    getReceptionistsListInWhichHotel,
    getReservationListDescByHotel,
    getAllRoomsByTypeAndHotelName,
    getOffersBySeasonAnDHotel,
    getReservationOfGivenCustomer,
    getCustomersListNotPaidFullFees,
    getTotalPayReceidByGivenMethod,
    getResNumberByCustomerAndPeriod,
    getHotelsListByProvince,
    getRoomsListByPriceInterval,
    getRoomsListByDescPrice,
    getRoomsListByFeatures,
    getHotelsListContainsRoomByBeutures,
    getRoomsDetailsByOccupedGivenGuest,
    getHotelWithTheNumberRes,
    getCustomersNegCommentForHotel,
    getAnaliseBeneficPromotion,
  }