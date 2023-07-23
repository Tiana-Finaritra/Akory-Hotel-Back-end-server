import { db } from "../database.js";


// EASY-LINES:
// -------------------------------------------------------------------------------------------------------------------
// easy-line2:
// DISPLAY THE LIST OF RECEPTIONISTS WITH THE HOTEL TO WHICH THEY ARE ATTACHED 
export const getReceptionistsListInWhichHotel = async () => {
    try {
        const ReceptionistsListInWhichHotelQ = `
        -->
            SELECT first_name, last_name, work_contact, h.name as hotel_name, h.address 
            FROM receptionist 
            INNER JOIN hotel h ON id_hotel = h.id;
                                            -->
        `
        return db.query(ReceptionistsListInWhichHotelQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}


// easy-line3:
// DISPLAY THE LIST OF RESERVATIONS STARTING WITH THE MOST RECENT FOR A GIVEN HOTEL
export const getReservationListDescByHotel = async ({ hotel_name }) => {
    try {
        const ReservationListDescByHotelQ = `
        -->
            SELECT res.id, res.date_arrived, res.leaving_date, res.number_of_person 
            FROM reservation res INNER JOIN room r ON r.id = res.id_room 
            INNER JOIN hotel h ON r.id_hotel = h.id 
            WHERE h.name = $1
            ORDER BY res.date_arrived DESC;
                                        -->
        `
        return db.query(ReservationListDescByHotelQ, [hotel_name]);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }

}

// easy-line4:
// LIST OF ROOM TYPE GIVE AND HOTEL GIVE
export const getAllRoomsByTypeAndHotelName = async ({ room_type, hotel_id }) => {
    try {
        const AllRoomsByTypeAndHotelNameQ = `
        --> 
            SELECT * FROM "room" ro
            WHERE ro.room_type = $1 
            AND ro.id_hotel = $2; 
                            -->
    `
        return db.query(AllRoomsByTypeAndHotelNameQ, [room_type, hotel_id]);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}

// easy-line5:
// DISPLAY SPECIAL OFFERS BY SEASON (PERIOD), ALL HOTEL COMBINED
export const getOffersBySeasonAnDHotel = async () => {
    try {
        const OffersBySeasonAnDHotelQ = `
        -->
            SELECT
                p.name,
                s.items,
                s.start_date,
                s.end_date
            FROM promotion p
                INNER JOIN affiliate a ON a.id_promotion = p.id
                INNER JOIN room ON a.id_room = room.id
                INNER JOIN price ON room.id_price = price.id
                INNER JOIN season s ON price.id_season = s.id
            GROUP BY s.start_date , s.items, p.name , s.end_date;
                             -->
        `
        return db.query(OffersBySeasonAnDHotelQ);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}

// easy-line6:
// LIST OF RESERVATIONS OF A GIVEN CLIENT
export const getReservationOfGivenCustomer = async ({ customer_id }) => {
    try {
        const ReservationOfGivenCustomerQ = `
        -->
            SELECT *
            FROM "reservation" re
            WHERE re.id_customer = $1; -- <-- Param
                                --->
        `
        return db.query(ReservationOfGivenCustomerQ, [customer_id]);
    } catch (err) {
        console.log();
        throw new Error(err)
    }
}

// easy-line7:
// VIEW THE LIST OF CUSTOMERS WHO HAVE NOT YET PAID THEIR FEES IN FULL
export const getCustomersListNotPaidFullFees = async () => {
    try {
        const CustomersListNotPaidFullFeesQ = `
        --->
        SELECT name, last_name, principal_contact, address, emergency_number, gender, CIN 
        FROM customer 
        INNER JOIN payment ON customer.id = payment.id_customer 
        WHERE payment.total_amount_status = 'f';
                                            --->
        `
        return db.query(CustomersListNotPaidFullFeesQ);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}



// easy-line8:
// TOTAL PAYMENTS RECEIVED BY MOBILE MONEY  
export const getTotalPayReceidByGivenMethod = async () => {
    try {
        const TotalPayReceidByGivenMethodQ = `
        -->
            -- GENERALISE:
            SELECT p.id, p.payment_date, p.amount_paid, p.number_night, p.room_occuped,
                p.deadline_payment, p.lending_status, p.total_amount_status, c.name, c.last_name,
                CONCAT_WS(',',
                    CASE WHEN pm.mobile_money = true THEN 'mobile_money' ELSE NULL END,
                    CASE WHEN pm.credit_card = true THEN 'credit_card' ELSE NULL END,
                    CASE WHEN pm.cash = true THEN 'cash' ELSE NULL END
                ) AS paid_by
            FROM payment p 
            INNER JOIN customer c ON c.id = p.id_customer
            INNER JOIN payment_method pm ON pm.id = p.id_payment_method;
                                -->
        `

        return db.query(TotalPayReceidByGivenMethodQ);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}

// easy-line9:
// DISPLAY THE NUMBER OF RESERVATIONS MADE BY A GIVEN CUSTOMER DURING A GINVEN PERIOD
export const getResNumberByCustomerAndPeriod = async ({ customer_name, period }) => {
    try {
        const ResNumberByCustomerAndPeriodQ = `
        -->
            SELECT c.name, c.principal_contact, c.gender, c.cin, 
            COUNT(*) AS total_reservation FROM customer c 
            INNER JOIN reservation r ON r.id_customer = c.id 
            WHERE c.name = $1 
            AND r.date_arrived = $2 
            GROUP BY c.name, c.principal_contact, c.gender, c.cin;
                                            -->
        `
        return db.query(ResNumberByCustomerAndPeriodQ, [customer_name, period]);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}

// easy-line10:
// DISPLAY THE LIST OF HOTELS IN A GIVEN LOCATION (PROVINCE)
export const getHotelsListByProvince = async ({ province }) => {
    try {
        const HotelsListByProvinceQ = `
        --->
            SELECT * FROM "hotel" INNER JOIN province_available p ON id_province = p.id 
            WHERE p.province_name = $1;
                                            --->
        `
        return db.query(HotelsListByProvinceQ, [province]);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}


// easy-line11:
// DISPLAY THE LIST OF ROOMS THAT CORRESPOND TO A PRICE RANGE GIVEN BY THE CUSTOMER 
export const getRoomsListByPriceInterval = async ({ min_price, max_price }) => {
    try {
        const RoomsListByPriceIntervalQ = `
        --->
            SELECT ro.number, room_type, capacity_room, p.cost_per_night FROM room ro 
            INNER JOIN price p on ro.id_price = p.id 
            WHERE p.cost_per_night 
            BETWEEN $1
            AND $2;
                           --->
        `
        return db.query(RoomsListByPriceIntervalQ, [min_price, max_price]);
    } catch (err) {
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
    } catch {
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
    } catch {
        console.log(err);
        throw new Error(err.message);
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
    } catch {
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
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}


// easy-line16/17:
// GENERALISE::::::::
// SHOW THE HOTEL WITH THE MOST RESERVATIONS
export const getHotelWithTheNumberRes = async () => {
    try {
        const HotelWithTheNumberResQ = `
        -->
            SELECT h.name, COUNT(*) AS total_reservations
            FROM hotel h
            INNER JOIN room r ON h.id = r.id_hotel
            INNER JOIN reservation res ON r.id = res.id_room
            GROUP BY h.name ORDER BY total_reservations DESC LIMIT 1;
                                            -->
        `
        return db.query(HotelWithTheNumberResQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}


// easy-line18:
// SHOW THE CUSTOMERS WITH THE MOST NEGATIVE REVIEWS WRITTEN FOR HOTELS
export const getCustomersNegCommentForHotel = async () => {
    try {
        const CustomersNegCommentForHotelQ = `
        --->
            SELECT * FROM "customer" INNER JOIN feed_back f 
            ON id_customer = f.id WHERE f.rating <= 5;
                                                --->
        `
        return db.query(CustomersNegCommentForHotelQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}




// MEDIUM-LINES:
// -------------------------------------------------------------------------------------------------------------------------
// Medium-line2:
// DISPLAY THE LIST OF ROOMS AVAILABLE TOMORROW
export const getRoomsListAvailableTommorow = async () => {
    try {
        const RoomsListAvailableTommorowQ = `
        -->
            SELECT r.number, r.room_type, r.capacity_room FROM room r
            LEFT JOIN reservation res ON res.id_room = r.id 
            AND res.leaving_date = CURRENT_DATE + INTERVAL '1 day'
            WHERE res.id_room IS NULL; 
                            -->
        `
        return db.query(RoomsListAvailableTommorowQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}

// medium-line4:
// DISPLAY THE TOTAL NUMBER OF RESERVATIONS BY ROOM TYPE
export const getTotalResNumberByRoomType = async () => {
    try {
        const TotalResNumberByRoomTypeQ = `
        --->
            SELECT r.room_type,
                COUNT(*) AS total_reservations_per_type 
            FROM room r INNER JOIN reservation res ON r.id = res.id_room 
            GROUP BY r.room_type;
                        --->
        `
        return db.query(TotalResNumberByRoomTypeQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}

// medium-line5:
// LIST OF ROOMS THAT MEET MULTIPLE CRITERIA
export const getRoomsByMultipleCriteria = async ({
    sea_view,
    vip_category,
    hot_water,
    wifi_available,
    room_service,
    mini_bar,
    flat_screen,
}) => {
    try {
        const RoomsByMultipleCriteriaQ = `
        -->
            SELECT *
            FROM "room" ro
            INNER JOIN "room_features" ro_f ON ro.id_room_features = ro_f.id
            WHERE ro_f.sea_view = $1
            AND ro_f.vip_category = $2
            AND ro_f.hot_water = $3
            AND ro_f.wifi_available = $4
            AND ro_f.room_service = $5
            AND ro_f.mini_bar = $6
            AND ro_f.flat_screen = $7;
                            -->
      `;

        return db.query(RoomsByMultipleCriteriaQ, [
            sea_view,
            vip_category,
            hot_water,
            wifi_available,
            room_service,
            mini_bar,
            flat_screen,
        ]);
    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
};


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
    } catch {
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
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}

// medium-line10-11:
// DISPLAY LEAST/MOST RESERVED ROOM IN GIVEN HOTEL
export const getLeastMostReservedRoomByHotel = async (hotel_name) => {
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
        return db.query(LeastMostReservedRoomByHotelQ, [hotel_name]);
    } catch {
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
    } catch {
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
    } catch {
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
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}