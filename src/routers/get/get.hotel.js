import { router } from "../router.js";
import { handlePromise } from "../promiseHandler.js";
import { getReceptionistsListInWhichHotel } from "../../DAO/displays.js";

// EASY-LINES:
// ------------------------------------------------------------------------------------------------------------------------
// easy-line2:
// DISPLAY THE LIST OF RECEPTIONISTS WITH THE HOTEL TO WHICH THEY ARE ATTACHED 
export const getHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/ReceptionistsListInWhichHotel
    handlePromise(getReceptionistsListInWhichHotel(), res);
  }
