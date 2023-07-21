import { db } from "../database.js";

// easy-line12:
// DESPLAY ALL ROOM ORDER BY PRICE DESC:
export const getRoomsListByDescPrice = () => {
    const RoomsListByDescPriceQ = `
    -->
        SELECT r.id, r.number, r.room_type, r.capacity_room, h.name AS hotel, p.cost_per_night,
        CONCAT_WS(', ',
            CASE WHEN rf.sea_view = true THEN 'sea_view' ELSE NULL END,
            CASE WHEN rf.VIP_category = true THEN 'VIP_category' ELSE NULL END,
            CASE WHEN rf.hot_water = true THEN 'hot_water' ELSE NULL END,
            CASE WHEN rf.wifi_available = true THEN 'wifi_available' ELSE NULL END,
            CASE WHEN rf.room_service = true THEN 'room_service' ELSE NULL END,
            CASE WHEN rf.mini_bar = true THEN 'mini_bar' ELSE NULL END,
            CASE WHEN rf.flat_screen = true THEN 'flat_screen' ELSE NULL END
        ) AS features
        FROM room r
        INNER JOIN price p ON r.id_price = p.id
        INNER JOIN hotel h ON h.id = r.id_hotel
        INNER JOIN room_features rf ON rf.id = r.id_room_features
        ORDER BY p.cost_per_night DESC;
                                -->
    `;

    return db.query(RoomsListByDescPriceQ);
};

// easy-line13:
// DISPLAY A LIST OF ROOMS WHOSE DESCRIPTIONS MATCH SPECIFUIC KEYWORDS
export const getRoomsListByFeatures = (keyword) => {
    const RoomsListByFeaturesQ = `
    -->
        SELECT r.id, r.number, r.room_type, r.capacity_room, h.name AS hotel, p.cost_per_night,
        CONCAT_WS(', ',
            CASE WHEN rf.sea_view = true THEN 'sea_view' ELSE NULL END,
            CASE WHEN rf.VIP_category = true THEN 'VIP_category' ELSE NULL END,
            CASE WHEN rf.hot_water = true THEN 'hot_water' ELSE NULL END,
            CASE WHEN rf.wifi_available = true THEN 'wifi_available' ELSE NULL END,
            CASE WHEN rf.room_service = true THEN 'room_service' ELSE NULL END,
            CASE WHEN rf.mini_bar = true THEN 'mini_bar' ELSE NULL END,
            CASE WHEN rf.flat_screen = true THEN 'flat_screen' ELSE NULL END
        ) AS features
        FROM room r
        INNER JOIN price p ON r.id_price = p.id
        INNER JOIN hotel h ON h.id = r.id_hotel
        INNER JOIN room_features rf ON rf.id = r.id_room_features
        WHERE CONCAT_WS(', ',
            CASE WHEN rf.sea_view = true THEN 'sea_view' ELSE NULL END,
            CASE WHEN rf.VIP_category = true THEN 'VIP_category' ELSE NULL END,
            CASE WHEN rf.hot_water = true THEN 'hot_water' ELSE NULL END,
            CASE WHEN rf.wifi_available = true THEN 'wifi_available' ELSE NULL END,
            CASE WHEN rf.room_service = true THEN 'room_service' ELSE NULL END,
            CASE WHEN rf.mini_bar = true THEN 'mini_bar' ELSE NULL END,
            CASE WHEN rf.flat_screen = true THEN 'flat_screen' ELSE NULL END
        ) ILIKE '%' || $1 || '%'; --<-- Set keyword here
                                -->
    `;
    return db.query(RoomsListByFeaturesQ, [keyword]);
}

// easy-line14:
// DISPLAY THE LIST PF HOTELS THAT CONTAIN ROOMS
// WHOSE DESCRIPTION CORRESPONDS TO GIVEN KEYWORD
export const getHotelsListContainsRoomByBeutures = (keyword) => {
    const HotelsListContainsRoomByBeuturesQ = `
    -->
    SELECT h.*
    FROM hotel h
    WHERE h.id IN (
        SELECT r.id_hotel
        FROM room r
        INNER JOIN room_features rf ON rf.id = r.id_room_features
        WHERE CONCAT_WS(', ',
            CASE WHEN rf.sea_view THEN 'sea_view' END,
            CASE WHEN rf.VIP_category THEN 'VIP_category' END,
            CASE WHEN rf.hot_water THEN 'hot_water' END,
            CASE WHEN rf.wifi_available THEN 'wifi_available' END,
            CASE WHEN rf.room_service THEN 'room_service' END,
            CASE WHEN rf.mini_bar THEN 'mini_bar' END,
            CASE WHEN rf.flat_screen THEN 'flat_screen' END
        ) ILIKE '%'|| $1 || '%'
    ); 
                                -->
    `
    return db.query(HotelsListContainsRoomByBeuturesQ, [keyword]);
}

// easy-line15:
// DISPLAY DETAILS OF THE ROOM CURRENTLY OCCUPID BY A GIVEN GUEST
export const getRoomsDetailsByOccupedGivenGuest = (customer_name, customer_id) => {
    const RoomsDetailsByOccupedGivenGuestQ = `
    -->
    SELECT ro.id, ro.number, ro.room_type, ro.capacity_room, h.name,
    CONCAT(pr.cost_per_night, ' Ar') AS cost_per_night,
    CONCAT_WS(', ',
        CASE WHEN rf.sea_view = true THEN 'sea_view' ELSE NULL END,
        CASE WHEN rf.VIP_category = true THEN 'VIP_category' ELSE NULL END,
        CASE WHEN rf.hot_water = true THEN 'hot_water' ELSE NULL END,
        CASE WHEN rf.wifi_available = true THEN 'wifi_available' ELSE NULL END,
        CASE WHEN rf.room_service = true THEN 'room_service' ELSE NULL END,
        CASE WHEN rf.mini_bar = true THEN 'mini_bar' ELSE NULL END,
        CASE WHEN rf.flat_screen = true THEN 'flat_screen' ELSE NULL END
        ) AS features
    FROM room ro
    INNER JOIN hotel h ON h.id = ro.id_hotel
    INNER JOIN room_features rf ON rf.id = ro.id_room_features
    INNER JOIN price pr ON pr.id = ro.id_price
    WHERE 
        ro.id IN (
        SELECT res.id_room  
        FROM reservation res
        INNER JOIN customer c ON c.id = res.id_customer
        WHERE res.leaving_date > CURRENT_DATE
            AND c.name = $1
            AND c.id = $2
    );    
                    -->
    `
    return db.query(RoomsDetailsByOccupedGivenGuestQ, [customer_name, customer_id]);
}

// medium-line8:
// DISPLAY HOTEL WITH ROOMS NUMBRER BY HOTEL
export const getHotelAndNumberOfRooms = () => {
    const HotelAndNumberOfRoomsQ = `
    -->
    SELECT h.id AS hotel_id, h.name AS hotel_name, COUNT(r.id) AS number_of_rooms
    FROM hotel h 
    LEFT JOIN room r ON h.id = r.id_hotel
    GROUP BY h.id, h.name;
                        --->
    ` 
    return db.query(HotelAndNumberOfRoomsQ);
}

// medium-line9:
// SHOW LIST OF CURENTLY OCCUPIED ROOMS:
export const getCurrentlyOccupiedRoomsList = () =>{
    const CurrentlyOccupiedRoomsListQ = `
    SELECT room.id, room.number, room.room_type, room.capacity_room FROM room 
    INNER JOIN reservation res ON room.id = res.id_room
    WHERE leaving_date  > current_date;
    `
    return db.query(CurrentlyOccupiedRoomsListQ);
}