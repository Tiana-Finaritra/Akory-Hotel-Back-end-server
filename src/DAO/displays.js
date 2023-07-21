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