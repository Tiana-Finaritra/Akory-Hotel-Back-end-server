// DISPLAY THE LIST OF RECEPTIONISTS WITH THE HOTEL TO WHICH THEY ARE ATTACHED 

const ReceptionistsListInWhichHotelQ = `
    SELECT re.*, h.name, h.address
    FROM receptionist re
    INNER JOIN hotel h ON id_hotel = h.id;
`;

export default ReceptionistsListInWhichHotelQ;