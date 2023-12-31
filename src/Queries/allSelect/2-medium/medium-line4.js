// DISPLAY THE TOTAL NUMBER OF RESERVATIONS BY ROOM TYPE

const TotalResNumberByRoomTypeQ = `
    SELECT r.room_type,
        COUNT(*) AS total_reservations_per_type 
    FROM room r INNER JOIN reservation res ON r.id = res.id_room 
    GROUP BY r.room_type;
`;

export default TotalResNumberByRoomTypeQ;