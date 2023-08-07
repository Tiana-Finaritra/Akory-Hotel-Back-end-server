/**
 * Importation of All queries in each file
 * and putting it in one object (here: queries)
 * to facilitate impotation in other file (
 * such: get.hotel.js; post.js,...).
 */

// SELECTS:
import ReceptionistsListInWhichHotelQ from "./1-easy/easy-line2.js";
import ReservationListDescByHotelQ from "./1-easy/easy-line3.js";
import AllRoomsByTypeAndHotelNameQ from "./1-easy/easy-line4.js";
import OffersBySeasonAnDHotelQ from "./1-easy/easy-line5.js";
import ReservationOfGivenCustomerQ from "./1-easy/easy-line6.js";
import CustomersListNotPaidFullFeesQ from "./1-easy/easy-line7.js";
import TotalPayReceidByGivenMethodQ from "./1-easy/easy-line8.js";
import ResNumberByCustomerAndPeriodQ from "./1-easy/easy-line9.js";
import HotelsListByProvinceQ from "./1-easy/easy-line10.js";
import RoomsListByPriceIntervalQ from "./1-easy/easy-line11.js";
import RoomsListByDescPriceQ from "./1-easy/easy-line12.js";
import RoomsListByFeaturesQ from "./1-easy/easy-line13.js";
import HotelsListContainsRoomByBeuturesQ from "./1-easy/easy-line14.js";
import RoomsDetailsByOccupedGivenGuestQ from "./1-easy/easy-line15.js";
import HotelWithTheNumberResQ from "./1-easy/easy-line16-17.js";
import CustomersNegCommentForHotelQ from "./1-easy/easy-line18.js";
import BookingNumberByCustomerQ from "./2-medium/medium-line2.js";
import RoomsListAvailableTommorowQ from "./2-medium/medium-line3.js";
import TotalResNumberByRoomTypeQ from "./2-medium/medium-line4.js";
import RoomsByMultipleCriteriaQ from "./2-medium/medium-line5.js";
import TotalResForHotelQ from "./2-medium/medium-line6.js";
import CustomerListWithResCancelNumberQ from "./2-medium/medium-line7.js";
import HotelAndNumberOfRoomsQ from "./2-medium/medium-line8.js";
import CurrentlyOccupiedRoomsListQ from "./2-medium/medium-line9.js";
import LeastMostReservedRoomByHotelQ from "./2-medium/medium-line10-11.js";
import CurrentPrommotionsListQ from "./2-medium/medium-line12.js";
import PayementListAllInfoQ from "./2-medium/medium-line14.js";
import DisplayInvoicesTotalAmountPayed from "./3-hard/hard-line2.js";
import CollectedPayForAllHotelsByYearQ from "./3-hard/hard-line5.js";
import TotalPayForRoomsHotelsQ from "./3-hard/hard-line6.js";
import TotalConferencePaymentInIntervalDateQ from "./3-hard/hard-line7.js";
import AnaliseBeneficPromotionQ from "./3-hard/hard-line9.js";
import AverageResNumberMonthsByHotelAndYearQ from "./3-hard/hard-line12.js";
import AverageResNumberDaysByHotelQ from "./3-hard/hard-line13.js";

// INSERTS:
import provinceQ from "../allInsert/1-province.js";
import hotelQ from "../allInsert/2-hotel.js";
import seasonQ from "../allInsert/3-season.js";
import promotionQ from "../allInsert/3-promotion.js";
import priceQ from "../allInsert/5-price.js";
import room_featuresQ from "../allInsert/6-room_features.js";
import roomQ from "../allInsert/7-room.js";
import affiliateQ from "../allInsert/8-affiliate.js";
import receptionistQ from "../allInsert/9-receptionist.js";
import customerQ from "../allInsert/10-customer.js";
import feed_backQ from "../allInsert/11-feed_back.js";
import reservationQ from "../allInsert/12-reservation.js";
import serviceQ from "../allInsert/13-service.js";
import buyQ from "../allInsert/14-buy.js";
import customer_statusQ from "../allInsert/15-customer_status.js";
import payment_methodQ from "../allInsert/16-payment_method.js";
import paymentQ from "../allInsert/17-payment.js";
import roomsListNetAndGrosPriceQ from "./2-medium/medium-line15.js";


let queries;

export default queries = {
  // SELECTS:
  ReceptionistsListInWhichHotelQ,
  ReservationListDescByHotelQ,
  AllRoomsByTypeAndHotelNameQ,
  OffersBySeasonAnDHotelQ,
  ReservationOfGivenCustomerQ,
  CustomersListNotPaidFullFeesQ,
  TotalPayReceidByGivenMethodQ,
  ResNumberByCustomerAndPeriodQ,
  HotelsListByProvinceQ,
  RoomsListByPriceIntervalQ,
  RoomsListByDescPriceQ,
  RoomsListByFeaturesQ,
  HotelsListContainsRoomByBeuturesQ,
  RoomsDetailsByOccupedGivenGuestQ,
  HotelWithTheNumberResQ,
  CustomersNegCommentForHotelQ,
  BookingNumberByCustomerQ,
  RoomsListAvailableTommorowQ,
  TotalResNumberByRoomTypeQ,
  RoomsByMultipleCriteriaQ,
  TotalResForHotelQ,
  CustomerListWithResCancelNumberQ,
  HotelAndNumberOfRoomsQ,
  CurrentlyOccupiedRoomsListQ,
  LeastMostReservedRoomByHotelQ,
  CurrentPrommotionsListQ,
  PayementListAllInfoQ,
  CollectedPayForAllHotelsByYearQ,
  TotalPayForRoomsHotelsQ,
  TotalConferencePaymentInIntervalDateQ,
  AnaliseBeneficPromotionQ,
  AverageResNumberMonthsByHotelAndYearQ,
  AverageResNumberDaysByHotelQ,
  roomsListNetAndGrosPriceQ,
  DisplayInvoicesTotalAmountPayed,
  
  
  // INSERTS:
  provinceQ,
  hotelQ,
  seasonQ,
  promotionQ, 
  priceQ, 
  room_featuresQ, 
  roomQ, 
  affiliateQ, 
  receptionistQ, 
  customerQ, 
  feed_backQ, 
  reservationQ, 
  serviceQ, 
  buyQ,
  customer_statusQ, 
  payment_methodQ,
  paymentQ
};
