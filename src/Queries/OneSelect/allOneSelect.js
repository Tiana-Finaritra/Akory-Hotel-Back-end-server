let queriesOne;

const getProvinceAvailableById = `
    SELECT * FROM "province_available"
    WHERE id = $1;
`;

const getAllProvinceAvailables = `
    SELECT * FROM "province_available";
`;

const getHotelById = `
    SELECT * FROM "hotel"
    WHERE id = $1;
`;

const getAllHotels = `
    SELECT * FROM "hotel";
`;

const getReceptionistById = `
    SELECT * FROM "receptionist"
    WHERE id = $1;
`;

const getAllReceptionists = `
    SELECT * FROM "receptionist";
`;

const getCustomerById = `
    SELECT * FROM "customer"
    WHERE id = $1;
`;

const getAllCustomers = `
    SELECT * FROM "customer";
`;

const getCustomerStatusById = `
    SELECT * FROM "customer_status"
    WHERE id = $1;
`;

const getAllCustomerStatus = `
    SELECT * FROM "customer_status";
`;

const getServiceById = `
    SELECT * FROM "service"
    WHERE id = $1;
`;

const getAllServices = `
    SELECT * FROM "service";
`;

const getSeasonById = `
    SELECT * FROM "season"
    WHERE id = $1;
`;

const getAllSeasons = `
    SELECT * FROM "season";
`;

const getPriceById = `
    SELECT * FROM "price"
    WHERE id = $1;
`;

const getAllPrices = `
    SELECT * FROM "price";
`;

const getRoomFeaturesById = `
    SELECT * FROM "room_features"
    WHERE id = $1;
`;

const getAllRoomFeatures = `
    SELECT * FROM "room_features";
`;

const getRoomById = `
    SELECT * FROM "room"
    WHERE id = $1;
`;

const getAllRooms = `
    SELECT * FROM "room";
`;

const getPaymentMethodById = `
    SELECT * FROM "payment_method"
    WHERE id = $1;
`;

const getAllPaymentMethods = `
    SELECT * FROM "payment_method";
`;

const getPaymentById = `
    SELECT * FROM "payment"
    WHERE id = $1;
`;

const getAllPayments = `
    SELECT * FROM "payment";
`;

const getAffilateById = `
    SELECT * FROM "affiliate"
    WHERE id = $1;
`;

const getAllAffilates = `
    SELECT * FROM "affiliate";
`;

const getBuyById = `
    SELECT * FROM "buy"
    WHERE id = $1;
`;

const getAllBuys = `
    SELECT * FROM "buy";
`;

const getFeedbackById = `
    SELECT * FROM "feed_back"
    WHERE id = $1;
`;

const getAllFeedbacks = `
    SELECT * FROM "feed_back";
`;

const getPromotionById = `
    SELECT * FROM "promotion"
    WHERE id = $1;
`;

const getAllPromotions = `
    SELECT * FROM "promotion";
`;

const getReservationById = `
    SELECT * FROM "reservation"
    WHERE id = $1;
`;

const getAllReservations = `
    SELECT * FROM "reservation";
`;

export default queriesOne = {
    // GET ELEMENT BY ID :
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
    // GET ALL ELEMENTS :
    getAllProvinceAvailables,
    getAllHotels,
    getAllReceptionists,
    getAllCustomers,
    getAllCustomerStatus,
    getAllServices,
    getAllSeasons,
    getAllPrices,
    getAllRoomFeatures,
    getAllRooms,
    getAllPaymentMethods,
    getAllPayments,
    getAllAffilates,
    getAllBuys,
    getAllFeedbacks,
    getAllPromotions,
    getAllReservations,
}