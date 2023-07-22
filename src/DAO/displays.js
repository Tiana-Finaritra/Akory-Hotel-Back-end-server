import { db } from "../database.js";

// easy-line2:
// DISPLAY THE LIST OF RECEPTIONISTS WITH THE HOTEL TO WHICH THEY ARE ATTACHED 
export const getReceptionistsListInWhichHotel = async () =>{
    try {
        const ReceptionistsListInWhichHotelQ = `
        -->
            SELECT first_name, last_name, work_contact, h.name as hotel_name, h.address 
            FROM receptionist 
            INNER JOIN hotel h ON id_hotel = h.id;
                                            -->
        `
        return db.query(ReceptionistsListInWhichHotelQ);
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}



// easy-line12:
// DESPLAY ALL ROOM ORDER BY PRICE DESC:
export const getRoomsListByDescPrice = async () => {
    try {
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
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
};

// easy-line13:
// DISPLAY A LIST OF ROOMS WHOSE DESCRIPTIONS MATCH SPECIFUIC KEYWORDS
export const getRoomsListByFeatures = async ({ keyword }) => {
    try {
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
    } catch (err) {
        console.log(err);
        err
    }
}

// easy-line14:
// DISPLAY THE LIST PF HOTELS THAT CONTAIN ROOMS
// WHOSE DESCRIPTION CORRESPONDS TO GIVEN KEYWORD
export const getHotelsListContainsRoomByBeutures = async ({ keyword }) => {
    try {
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
    }catch{
        console.log(err);
        throw new Error(err.message);
    }

}

// easy-line15:
// DISPLAY DETAILS OF THE ROOM CURRENTLY OCCUPID BY A GIVEN GUEST
export const getRoomsDetailsByOccupedGivenGuest = async ({ customer_name, customer_id }) => {
    try {
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
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}

// medium-line8:
// DISPLAY HOTEL WITH ROOMS NUMBRER BY HOTEL
export const getHotelAndNumberOfRooms = async () => {
    try {
        const HotelAndNumberOfRoomsQ = `
    -->
    SELECT h.id AS hotel_id, h.name AS hotel_name, COUNT(r.id) AS number_of_rooms
    FROM hotel h 
    LEFT JOIN room r ON h.id = r.id_hotel
    GROUP BY h.id, h.name;
                        --->
    `
        return db.query(HotelAndNumberOfRoomsQ);
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}

// medium-line9:
// SHOW LIST OF CURENTLY OCCUPIED ROOMS:
export const getCurrentlyOccupiedRoomsList = async () => {
    try {
        const CurrentlyOccupiedRoomsListQ = `
    -->
        SELECT room.id, room.number, room.room_type, room.capacity_room FROM room 
        INNER JOIN reservation res ON room.id = res.id_room
        WHERE leaving_date  > current_date;
                -->
    `
        return db.query(CurrentlyOccupiedRoomsListQ);
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}

// medium-line10-11:
// DISPLAY LEAST/MOST RESERVED ROOM IN GIVEN HOTEL
export const getLeastMostReservedRoomByHotel = async (hotle_name) => {
    try {
        const LeastMostReservedRoomByHotelQ = `
    -->
        SELECT COUNT(re.id) reservation_s_number, ro.number as room_reference, h.name as hotel FROM room ro
        INNER JOIN reservation re ON ro.id = re.id_room
        INNER JOIN hotel h ON h.id = ro.id_hotel
        WHERE h.name = $1 --<-- Param
        GROUP BY ro.number, h.name
        ORDER BY reservation_s_number ASC;
                                -->
    `
        return db.query(LeastMostReservedRoomByHotelQ, [hotle_name]);
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}

// medium-line12:
// DISPLAY THE LIST OF CURRENT PROMOTIONS:   
export const getCurrentPrommotionsList = async () => {
    try {
        const CurrentPrommotionsListQ = `
        -->                                                
            SELECT * FROM "promotion" WHERE (begin >= current_date);
                                -->
        `
        return db.query(CurrentPrommotionsListQ);
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}


// hard-line6:
// DISPLAY TOTAL  OF PAYMANT ONLY FOR ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL
export const getTotalPayForRoomsHotel = async ({ start_period, end_period }) => {
    try {
        const TotalPayForRoomsHotelsQ = `
    -->
        SELECT SUM(pay.amount_paid) , pay.payment_date, h.name
        FROM payment pay 
        INNER JOIN hotel h ON h.id = pay.room_occuped
        WHERE pay.total_amount_status = 't' 
        AND pay.payment_date >= $1  --<-- param
        AND pay.payment_date <= $2 --<-- param
        GROUP BY h.name, pay.payment_date;
                        -->
    `

        return db.query(TotalPayForRoomsHotelsQ, [start_period, end_period]);
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}

// hard-line7:
// DISPLAY TOTAL  OF PAYMANT ONLY FOR CONFERENCES ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL
export const getTotalConferencePaymentInIntervalDate = async ({ start_period, end_period, room_type }) => {
    try {
        const TotalConferencePaymentInIntervalDateQ = `
            SELECT SUM(pay.amount_paid), pay.payment_date, h.name, r.room_type
            FROM payment pay 
            FULL OUTER JOIN hotel h ON h.id = pay.room_occuped
            FULL OUTER JOIN room r ON pay.room_occuped = r.id
            WHERE pay.total_amount_status = 't' 
            AND pay.payment_date >= $1
            AND pay.payment_date <= $2
            AND r.room_type = $3
            GROUP BY h.name, pay.payment_date, r.room_type;
        `
        return db.query(TotalConferencePaymentInIntervalDateQ, [start_period, end_period, room_type]);
    }catch{
        console.log(err);
        throw new Error(err.message);
    }
}