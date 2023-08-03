import { handlePromise } from "../promiseHandler.js";
import queries from "../../Queries/allSelect/allQueries.js";
import { generalDisplay } from "../../DAO/displays.js";

let getHotelFunction;
 
const getReceptionistsListInWhichHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/ReceptionistsListInWhichHotel
    handlePromise(generalDisplay(queries.ReceptionistsListInWhichHotelQ), res);
}

const getReservationListDescByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/ReservationListDescByHotel
    const hotel_name = "Akory100";
    // const hotel_name = req.body;
    handlePromise(generalDisplay(queries.ReservationListDescByHotelQ, hotel_name), res);
}

const getAllRoomsByTypeAndHotelName = (req, res) => {
    // FOR TEST: http://localhost:8000/AllRoomsByTypeAndHotelName
    const room_type = "twin";
    const hotel_id = 8;
    // const {room_type, hotel_id} = req.body;
    handlePromise(generalDisplay(queries.AllRoomsByTypeAndHotelNameQ, [room_type, hotel_id]), res);
}

const getOffersBySeasonAnDHotel = (req, res) => {
    //FOR TEST: http://localhost:8000/OffersBySeasonAnDHotel
    handlePromise(generalDisplay(queries.OffersBySeasonAnDHotelQ), res);
}

const getReservationOfGivenCustomer = (req, res) => {
    // FOR TEST: http://localhost:8000/ReservationOfGivenCustomer
    // const customer_id = req.body;
    const customer_id = 19;
    handlePromise(generalDisplay(queries.ReservationOfGivenCustomerQ, [customer_id]), res);
}

const getCustomersListNotPaidFullFees = (req, res) => {
    // FOR TEST: http://localhost:8000/CustomersListNotPaidFullFees
    handlePromise(generalDisplay(queries.CustomersNegCommentForHotelQ), res);
}

const getTotalPayReceidByGivenMethod = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalPayReceidByGivenMethod
    handlePromise(generalDisplay(queries.TotalPayReceidByGivenMethodQ), res);
}

const getResNumberByCustomerAndPeriod = (req, res) => {
    // FOR TEST: http://localhost:8000/ResNumberByCustomerAndPeriod
    const customer_name = "David";
    const period = "2023-07-15 10:00:00";
    // const {customer_name, period} = req.body;
    handlePromise(generalDisplay(queries.ResNumberByCustomerAndPeriodQ, [customer_name, period]), res);
}

const getHotelsListByProvince = (req, res) => {
    // FOR TEST: http://localhost:8000/HotelsListByProvince
    // const {provice} = req.body;
    const province = "Antananarivo";
    handlePromise(generalDisplay(queries.HotelsListByProvinceQ, [province]), res);
}

const getRoomsListByPriceInterval = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListByPriceInterval
    // const {min_price, max_price} = req.body;
    const min_price = 12000;
    const max_price = 500000;
    handlePromise(generalDisplay(queries.RoomsListByPriceIntervalQ, [min_price, max_price]), res);
}

const getRoomsListByDescPrice = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListByDescPrice
    handlePromise(generalDisplay(queries.RoomsListByDescPriceQ), res);
}

const getRoomsListByFeatures = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListByFeatures
    let keyword = "VIP";
    // let keyword = req.body;
    handlePromise(generalDisplay(queries.RoomsListByFeaturesQ, [keyword]), res);
}

const getHotelsListContainsRoomByBeutures = (req, res) => {
    //FOR TEST: http://localhost:8000/HotelsListContainsRoomByBeutures
    let keyword = "VIP";
    // let keyword = req.body;
    handlePromise(generalDisplay(queries.HotelsListContainsRoomByBeuturesQ, [keyword]), res);
}

const getRoomsDetailsByOccupedGivenGuest = (req, res) => {
    //FOR TEST: http://localhost:8000/RoomsDetailsByOccupedGivenGuest
    let customer_name = "William";
    let customer_id = 78;
    // let {customer_name, customer_id} = req.body;
    handlePromise(generalDisplay(queries.RoomsDetailsByOccupedGivenGuestQ, [customer_name, customer_id]), res);
}

const getHotelWithTheNumberRes = (req, res) => {
    // FOR TEST: http://localhost:8000/HotelWithTheNumberRes
    handlePromise(generalDisplay(queries.HotelWithTheNumberResQ), res);
}

const getCustomersNegCommentForHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/CustomersNegCommentForHotel
    handlePromise(generalDisplay(queries.CustomersNegCommentForHotelQ), res);
}

const getBookingNumberByCustomer = (req, res) => {
    // FOR TEST: http://localhost:8000/BookingNumberByCustomer
    const customer_id = 45;
    // const customer_id = req.body;
    handlePromise(generalDisplay(queries.BookingNumberByCustomerQ, [customer_id]), res);
}

const getRoomsListAvailableTommorow = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListAvailableTommorow
    handlePromise(generalDisplay(queries.RoomsListAvailableTommorowQ), res);
}

const getTotalResNumberByRoomType = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalResNumberByRoomType
    handlePromise(generalDisplay(queries.TotalResNumberByRoomTypeQ), res);
}

const getRoomsByMultipleCriteria = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsByMultipleCriteria
      const sea_view = true;
      const vip_category = true;
      const hot_water = true;
      const wifi_available = true;
      const room_service = true;
      const mini_bar = true;
      const flat_screen = true;
    // const criteria = req.body;
    handlePromise(generalDisplay(queries.RoomsByMultipleCriteriaQ, [sea_view, vip_category, hot_water, wifi_available, room_service, mini_bar, flat_screen]), res);
}

const getTotalResForHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalResForHotel
    handlePromise(generalDisplay(queries.TotalResForHotelQ), res);
}

const getCustomerListWithResCancelNumber = (req, res) => {
    // FOR TEST: http://localhost:8000/CustomerListWithResCancelNumber
    handlePromise(generalDisplay(queries.CustomerListWithResCancelNumberQ), res);
}

const getHotelAndNumberOfRooms = (req, res) => {
    // for test: http://localhost:8000/HotelAndNumberOfRooms
    handlePromise(generalDisplay(queries.HotelAndNumberOfRoomsQ), res);
}

const getCurrentlyOccupiedRoomsList = (req, res) => {
    // FOR TEST: http://localhost:8000/CurrentyOccupiedRoomsList
    handlePromise(generalDisplay(queries.CurrentlyOccupiedRoomsListQ), res);
}

const getLeastMostReservedRoomByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/LeastMostReservedRoomByHotel
    let hotel_name = "Akory201";
    // const hotel_name = req.body;
    handlePromise(generalDisplay(queries.LeastMostReservedRoomByHotelQ, [hotel_name]), res);
}

const getCurrentPrommotionsList = (req, res) => {
    // FOR TEST: http://localhost:8000/CurrentPrommotionsList
    handlePromise(generalDisplay(queries.CurrentPrommotionsListQ), res);
}

const getPayementListAllInfo = (req, res) => {
    // FOR TEST: http://localhost:8000/PayementListAllInfo
    handlePromise(generalDisplay(queries.PayementListAllInfoQ), res);
}

const getCollectedPayForAllHotelsByYear = (req, res) => {
    // FOR TEST: http://localhost:8000/CollectedPayForAllHotelsByYear
    const year = '2023';
    // const year = '2023';
    handlePromise(generalDisplay(queries.CollectedPayForAllHotelsByYearQ, [year]), res);
}

const getTotalPayForRoomsHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalPayForRoomsHotel
    const start_period = "2023-08-01";
    const end_period = "2024-12-30";
    // const { start_period, end_period } = req.params;
    handlePromise(generalDisplay(queries.TotalPayForRoomsHotelsQ, [start_period, end_period]), res);
}

const getTotalConferencePaymentInIntervalDate = (req, res) => {
    // FOR TEST: http://localhost:8000/TotalConferencePaymentInIntervalDate
    const start_period = "2000-08-01";
    const end_period = "2025-12-30";
    const room_type = "solo";
    // const { start_period, end_period, room_type } = req.body;
    handlePromise(generalDisplay(queries.TotalConferencePaymentInIntervalDateQ, [start_period, end_period, room_type]), res);
}

const getAnaliseBeneficPromotion = (req, res) => {
    // FOR TEST: http://localhost:8000/AnaliseBeneficPromotion
    handlePromise(generalDisplay(queries.AnaliseBeneficPromotionQ), res);
}

const getAverageResNumberMonthsByHotelAndYear = (req, res) => {
    // FOR TEST: http://localhost:8000/AverageResNumberMonthsByHotelAndYear
    const year = "2023";
    // const year = req.body;
    handlePromise(generalDisplay(queries.AverageResNumberMonthsByHotelAndYearQ, [year]), res);
}

const getRoomsListNetAndGrosPrice = (req, res) => {
    // FOR TEST: http://localhost:8000/roomsListNetAndGrosPrice
    handlePromise(generalDisplay(queries.roomsListNetAndGrosPriceQ), res);
}


const getAverageResNumberDaysByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/RoomsListNetAndGrosPrice
    handlePromise(generalDisplay(queries.AverageResNumberDaysByHotelQ), res);
}

export default getHotelFunction = {
    getRoomsListNetAndGrosPrice,
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