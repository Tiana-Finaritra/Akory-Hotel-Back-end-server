import { router } from "../router";

// EASY-LINES:
// ------------------------------------------------------------------------------------------------------------------------
// easy-line2:
// DISPLAY THE LIST OF RECEPTIONISTS WITH THE HOTEL TO WHICH THEY ARE ATTACHED 
router.get("/ReceptionistsListInWhichHotel", (req, res) => {
    // FOR TEST: http://localhost:8000/ReceptionistsListInWhichHotel
    handlePromise(getReceptionistsListInWhichHotel(), res);
});