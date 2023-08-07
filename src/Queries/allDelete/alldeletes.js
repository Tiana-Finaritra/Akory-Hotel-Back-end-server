// province_available
const province_availableD = ` 
        DELETE FROM "province_available" WHERE id = $1;
`;

// hotel
const hotelD = ` 
        DELETE FROM "hotel" WHERE id = $1;
`;

// season
const seasonD = ` 
        DELETE FROM "season" WHERE id = $1;
`;


// promotion
const promotionD = ` 
        DELETE FROM "promotion" WHERE id = $1;
`;

// price
const priceD = ` 
        DELETE FROM price WHERE id = $1;
`;


// room_features
const room_featuresD = ` 
        DELETE FROM "room_features" WHERE id = $1;
`;

// room
const roomD = ` 
        DELETE FROM "room" WHERE id = $1;
`;


// affiliate
const affiliateD = ` 
        DELETE FROM "affiliate" WHERE id = $1;
`;


// receptionist
const receptionistD = ` 
        DELETE FROM "receptionist" WHERE id = $1;
`;


// customer
const customerD = ` 
        DELETE FROM "customer" WHERE id = $1;
`;


// feed_back
const feed_backD = ` 
        DELETE FROM "feed_back" WHERE id = $1;
`;

// reservation
const reservationD = ` 
        DELETE FROM "reservation" WHERE id = $1;
`;

// service
const serviceD = ` 
        DELETE FROM "service" WHERE id = $1;
`;


// buy
const buyD = ` 
        DELETE FROM "buy" WHERE id = $1;
`;


// customer_status
const customer_statusD = ` 
        DELETE FROM "customer_status" WHERE id = $1;
`;


// payment_methodD
const payment_methodD = ` 
        DELETE FROM "payment_method" WHERE id = $1;
`;


// payment
const paymentD = ` 
        DELETE FROM "payment" WHERE id = $1;
`;


let Ex;

export default Ex = {
        province_availableD,
        hotelD,
        seasonD,
        promotionD,
        priceD,
        room_featuresD,
        roomD,
        affiliateD,
        receptionistD,
        customerD,
        feed_backD,
        reservationD,
        serviceD,
        buyD,
        customer_statusD,
        payment_methodD,
        paymentD
}
