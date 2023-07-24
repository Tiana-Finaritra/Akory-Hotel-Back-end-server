// DISPLAY THE LIST OF RESERVATIONS STARTING WITH THE MOST RECENT FOR A GIVEN HOTEL

const ReservationListDescByHotelQ = `
    SELECT res.id, res.date_arrived, res.leaving_date, res.number_of_person 
    FROM reservation res INNER JOIN room r ON r.id = res.id_room 
    INNER JOIN hotel h ON r.id_hotel = h.id 
    WHERE h.name = $1
    ORDER BY res.date_arrived DESC;
`;

export default ReservationListDescByHotelQ;