// DISPLAY LEAST/MOST RESERVED ROOM IN GIVEN HOTEL

const LeastMostReservedRoomByHotelQ = `
    SELECT COUNT(re.id) reservation_s_number, ro.number as room_reference, h.name as hotel FROM room ro
    INNER JOIN reservation re ON ro.id = re.id_room
    INNER JOIN hotel h ON h.id = ro.id_hotel
    WHERE h.name = $1
    GROUP BY ro.number, h.name
    ORDER BY reservation_s_number ASC;
`;

export default LeastMostReservedRoomByHotelQ;