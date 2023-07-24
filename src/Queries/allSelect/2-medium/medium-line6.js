// SHOW THE TOTAL NUMBER OF RESERVATIONS PER HOTEL

const TotalResForHotelQ = `
    SELECT h.name, 
        COUNT(*) AS total_reservations
    FROM hotel h
    INNER JOIN room r ON h.id = r.id_hotel
    INNER JOIN reservation res ON r.id = res.id_room
    GROUP BY h.name;
`;

export default TotalResForHotelQ;