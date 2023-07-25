let queriesOne;

const getProvinceAvailableById = `
    SELECT * FROM "province_available"
    WHERE id = $1;
`;

const getHotelById = `
    SELECT * FROM "hotel"
    WHERE id = $1;
`;

const getReceptionistById = `
    SELECT * FROM "receptionist"
    WHERE id = $1;
`;

const getCustomerById = `
    SELECT * FROM "customer"
    WHERE id = $1;
`;

const getCustomerStatusById = `
    SELECT * FROM "customer_status"
    WHERE id = $1;
`;

const getServiceById = `
    SELECT * FROM "service"
    WHERE id = $1;
`;

const getSeasonById = `
    SELECT * FROM "season"
    WHERE id = $1;
`;

const getPriceById = `
    SELECT * FROM "price"
    WHERE id = $1;
`;

const getRoomFeaturesById = `
    SELECT * FROM "room_features"
    WHERE id = $1;
`;

const getRoomById = `
    SELECT * FROM "room"
    WHERE id = $1;
`;

const getPaymentMethodById = `
    SELECT * FROM "payment_method"
    WHERE id = $1;
`;

const getPaymentById = `
    SELECT * FROM "payment"
    WHERE id = $1;
`;

const getAffilateById = `
    SELECT * FROM "affiliate"
    WHERE id = $1;
`;

const getBuyById = `
    SELECT * FROM "buy"
    WHERE id = $1;
`;

const getFeedbackById = `
    SELECT * FROM "feed_back"
    WHERE id = $1;
`;

const getPromotionById = `
    SELECT * FROM "promotion"
    WHERE id = $1;
`;

const getReservationById = `
    SELECT * FROM "reservation"
    WHERE id = $1;
`;

export default queriesOne = {
    getProvinceAvailableById,
    getHotelById,
    getReceptionistById,
    getCustomerById,
    getCustomerStatusById,
    getServiceById,
    getSeasonById,
    getPriceById,
    getRoomFeaturesById,
    getRoomById,
    getPaymentMethodById,
    getPaymentById,
    getAffilateById,
    getBuyById,
    getFeedbackById,
    getPromotionById,
    getReservationById,
}