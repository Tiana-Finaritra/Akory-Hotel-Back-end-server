import { router } from "../router.js";
import { handlePromise } from "../promiseHandler.js";
import allDisplay from "../../DAO/displays.js";

let getHotelFunction;

// EASY-LINES:
// ------------------------------------------------------------------------------------------------------------------------
// easy-line2:
// DISPLAY THE LIST OF RECEPTIONISTS WITH THE HOTEL TO WHICH THEY ARE ATTACHED 
const getReceptionistsListInWhichHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/ReceptionistsListInWhichHotel
    handlePromise(allDisplay.getReceptionistsListInWhichHotel(), res);
}

const getReservationListDescByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/ReservationListDescByHotel
    const hotel_name = "Grand Hotel";
    // const hotel_name = req.body;
    handlePromise(allDisplay.getReservationListDescByHotel({ hotel_name }), res);
  }

export default getHotelFunction = {
    getReceptionistsListInWhichHotel,
    getReservationListDescByHotel,
}