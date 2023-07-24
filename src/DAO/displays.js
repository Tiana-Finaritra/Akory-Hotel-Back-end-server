import { db } from "../database.js";

let allDisplay;


export const generalDisplay = (query, params) => {
    try {
        return params ? (db.query(query, params)) : (db.query(query));
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}

// easy-line10:
const getHotelsListByProvince = async ({ province }) => {
    try {

        return db.query(HotelsListByProvinceQ, [province]);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
}


// easy-line11:
// DISPLAY THE LIST OF ROOMS THAT CORRESPOND TO A PRICE RANGE GIVEN BY THE CUSTOMER 
const getRoomsListByPriceInterval = async ({ min_price, max_price }) => {
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
const getRoomsListByDescPrice = async () => {
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
const getRoomsListByFeatures = async ({ keyword }) => {
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
const getHotelsListContainsRoomByBeutures = async ({ keyword }) => {
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
const getRoomsDetailsByOccupedGivenGuest = async ({ customer_name, customer_id }) => {
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
const getHotelWithTheNumberRes = async () => {
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
const getCustomersNegCommentForHotel = async () => {
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
// medium-line2:
// SHOW HOW MANY TIMES A CUSTOMER HAS BOOKED IN OUR HOTEL
const getBookingNumberByCustomer = async ({customer_id}) => {
    try {
        const BookingNumberByCustomerQ = `
        --->
            SELECT
                count(*)
            FROM "reservation" re
            WHERE re.id_customer = $1; 
                            --->
        `
        return db.query(BookingNumberByCustomerQ, [customer_id]);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}



// Medium-line3:
// DISPLAY THE LIST OF ROOMS AVAILABLE TOMORROW
const getRoomsListAvailableTommorow = async () => {
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
const getTotalResNumberByRoomType = async () => {
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
const getRoomsByMultipleCriteria = async ({
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


// medium-line6:
// SHOW THE TOTAL NUMBER OF RESERVATIONS PER HOTEL
const getTotalResForHotel = async () => {
    try {
        const TotalResForHotelQ = `
        --->
            SELECT h.name, 
                COUNT(*) AS total_reservations
            FROM hotel h
            INNER JOIN room r ON h.id = r.id_hotel
            INNER JOIN reservation res ON r.id = res.id_room
            GROUP BY h.name;
                        --->
        `
        return db.query(TotalResForHotelQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}


// medium-line7:
// CUSTOMER LIST WITH RESERVATION CANCELLATION NUMBER
const getCustomerListWithResCancelNumber = async() => {
    try {
        const CustomerListWithResCancelNumberQ = `
        --->
            SELECT cu.name,
                count(*) as cancel
            FROM "reservation" re
            INNER JOIN "customer" cu ON re.id_customer = cu.id
            WHERE re.is_cancelled = true
            GROUP BY cu.name;
                        --->
        `
        return db.query(CustomerListWithResCancelNumberQ);
    }catch {
        console.log(err);
        throw new Error(err.message);
    }
}


// medium-line8:
// DISPLAY HOTEL WITH ROOMS NUMBRER BY HOTEL
const getHotelAndNumberOfRooms = async () => {
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
const getCurrentlyOccupiedRoomsList = async () => {
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
const getLeastMostReservedRoomByHotel = async (hotel_name) => {
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
const getCurrentPrommotionsList = async () => {
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

// medium-line14:
// DISPLAY LIST OF PAYMENT WITH NAME AND FIRST-NAME WHO WAS RECEIVE IT:
const getPayementListAllInfo = async () => {
    try {
        const PayementListAllInfoQ = `
        -->
            SELECT p.payment_date, p.amount_paid, p.number_night, 
            p.room_occuped, p.deadline_payment,
            p.lending_status, p.total_amount_status, p.id_customer, 
            rec.first_name, rec.last_name FROM payment p 
            INNER JOIN receptionist rec ON p.id_receptionist = rec.id;              
                                                         -->
        `
        return db.query(PayementListAllInfoQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}


// HARD-LINES:
// -----------------------------------------------------------------------------------------------------------------------
// hard-line5:
// TOTAL PAYMENTS COLLECTED IN A YE:AR FOR EACH HOTEL
const getCollectedPayForAllHotelsByYear = async ({year}) =>{
    try {
        const CollectedPayForAllHotelsByYearQ = `
        -->
            SELECT
                sum(pay.amount_paid) as total_in_year,
                ho.name
            FROM "payment" pay
                INNER JOIN receptionist re ON pay.id_receptionist = re.id
                INNER JOIN hotel ho ON ho.id = re.id_hotel
            WHERE date_part('year', pay.payment_date) = $1
            GROUP BY ho.id, re.id;
                            -->
        `
        return db.query(CollectedPayForAllHotelsByYearQ, [year]);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}


// hard-line6:
// DISPLAY TOTAL  OF PAYMANT ONLY FOR ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL
const getTotalPayForRoomsHotel = async ({ start_period, end_period }) => {
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
const getTotalConferencePaymentInIntervalDate = async ({ start_period, end_period, room_type }) => {
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

// hard-line9:
// FOR EACH PROMOTION, DISPLAY THE TOTAL NUMBER OF RESERVATIONS THAT BENEFITED FROM THE PROMOTION, BY HOTEL
// (TO KNOW IF IT WORKED OR NOT)
const getAnaliseBeneficPromotion = async () => {
    try {
        const AnaliseBeneficPromotionQ = `
        --->
            SELECT
                pr.name as promotion,
                ho.name as hotel,
                count(re.id) as reservation
            FROM "affiliate" aff
                INNER JOIN "room" ro ON aff.id_room = ro.id
                INNER JOIN "reservation" re ON re.id_room = ro.id
                INNER JOIN "promotion" pr ON aff.id_promotion = pr.id
                INNER JOIN "hotel" ho ON ro.id_hotel = ho.id
            GROUP BY pr.id, ho.id;
                            --->
        `
        return db.query(AnaliseBeneficPromotionQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}

// hard-line12:
// DISPLAY THE AVERAGE NUMBER OF RESERVATIONS PER HOTEL FOR EACH MONTH OF A GIVEN YEAR 
const getAverageResNumberMonthsByHotelAndYear = async ({year}) => {
    try {
        const AverageResNumberMonthsByHotelAndYearQ = `
            --->
                SELECT
                    round(avg(re.id)) as reservation,
                    ho.name as hotel
                FROM "reservation" re
                    INNER JOIN "room" ro ON re.id_room = ro.id
                    INNER JOIN "hotel" ho ON ro.id_hotel = ho.id
                WHERE date_part('month', re.date_arrived) IN (
                        SELECT 
                            date_part('month', date_arrived) as month
                        FROM "reservation"
                        WHERE date_part('year', date_arrived) = $1
                    )
                GROUP BY ho.id;
                            --->
        `
        return db.query(AverageResNumberMonthsByHotelAndYearQ, [year]);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}

// hard-line13:
// DISPLAY AVERAGE NUMBER OF RESERVATIONS PER HOTEL, PER DAY, ALL PERIODS COMBINED
const getAverageResNumberDaysByHotel =   async () => {
    try {
        const AverageResNumberDaysByHotelQ = `
            --->
                SELECT name, round(AVG(nombre_reservations)) AS moyenne_reservations_par_jour
                FROM (
                    SELECT h.name, res.date_arrived, COUNT(*) AS nombre_reservations
                    FROM hotel h
                    INNER JOIN room r ON h.id = r.id_hotel
                    INNER JOIN reservation res ON r.id = res.id_room
                    GROUP BY h.name, res.date_arrived
                ) AS sous_requete
                GROUP BY name;
                        --->
        `
        return db.query(AverageResNumberDaysByHotelQ);
    } catch {
        console.log(err);
        throw new Error(err.message);
    }
}
