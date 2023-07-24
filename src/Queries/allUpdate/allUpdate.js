let queries;

const updateProvinceAvailable = `
    UPDATE "province_available" 
        SET province_name = $2,
        code_province = $3
    WHERE id = $1;
`;

const updateHotel = `
    UPDATE "hotel" 
        SET name = $2,
        address = $3,
        id_province = $4
    WHERE id = $1;
`;

const updateReceptionist = `
    UPDATE "receptionist"
        SET first_name = $2,
        last_name = $3,
        password = $4,
        email = $5,
        work_conctact = $6,
        id_hotel = $7,
    WHERE id = $1;
`;

const updateCustomer = `
    UPDATE "customer"
        SET name = $2,
        last_name = $3,
        principal_contact = $4,
        address = $5,
        emergency_number = $6,
        gender = $7,
        cin = $8,
        email = $9,
        password = $10,
        id_receptionist = $11
    WHERE id = $1;
`;

const updateCustomerStatus = `
    UPDATE "customer_status"
        SET status_arrived = $2,
        status_missing = $3,
        is_fidelity = $4,
        is_blacklist = $5,
        id_customer = $6
    WHERE id = $1;
`;

const updateService = `
    UPDATE "service"
        SET service_name = $2,
        description = $3,
        price = $4,
        reduction = $5
    WHERE id = $1;
`;

const updateSeason = `
    UPDATE "season"
        SET items = $2,
        start_date = $3,
        end_date = $4
    WHERE id = $1;
`;

const updatePrice = `
    UPDATE "price"
        SET cost_per_night = $2,
        id_season = $3
    WHERE id = $1;
`;

const updateRoomFeatures = `
    UPDATE "room_features"
        SET sea_view = $2,
        vip_category = $3,
        hot_water = $4,
        wifi_available = $5,
        room_service = $6,
        mini_bar = $7,
        flat_screen = $8
    WHERE id = $1;
`;

const updateRoom = `
    UPDATE "room"
        SET number = $2,
        room_type = $3,
        capacity_room = $4,
        id_hotel = $5,
        id_price = $6,
        id_room_features = $7
    WHERE id = $1;
`;

const updatePaymentMethod = `
    UPDATE "payment_method"
        SET mobile_money = $2,
        credit_card = $3,
        cash = $4
    WHERE id = $1;
`;

const updatePayment = `
    UPDATE "payment"
        SET payment_date = $2,
        amount_paid = $3,
        number_night = $4,
        room_occuped = $5,
        deadline_payment = $6,
        lending_status = $7,
        total_amount_status = $8,
        id_customer = $9,
        id_payment_method = $10,
        id_receptionist = $11
    WHERE id = $1;
`;

const updateAffilate = `
    UPDATE "affiliate"
        SET id_promotion = $2,
        id_room = $3
    WHERE id = $1;
`;

const updateBuy = `
    UPDATE "buy"
        SET id_customer = $2,
        id_service = $3
    WHERE id = $1;
`;

const updateFeedback = `
    UPDATE "feed_back"
        SET comment = $2,
        rating = $3,
    WHERE id = $1;
`;

export default queries = {
    updateProvinceAvailable,
    updateHotel,
    updateReceptionist,
    updateCustomer,
    updateCustomerStatus,
    updateService,
    updateSeason,
    updatePrice,
    updateRoomFeatures,
    updateRoom,
    updatePaymentMethod,
    updatePayment,
    updateAffilate,
    updateBuy,
    updateFeedback,
}