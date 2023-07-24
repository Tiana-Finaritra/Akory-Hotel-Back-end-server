// LIST OF ROOM TYPE GIVE AND HOTEL GIVE

const AllRoomsByTypeAndHotelNameQ = ` 
    SELECT * FROM "room" ro
    WHERE ro.room_type = $1 
    AND ro.id_hotel = $2;
`;

export default AllRoomsByTypeAndHotelNameQ;