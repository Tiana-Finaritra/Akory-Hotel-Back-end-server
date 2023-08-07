const room_featuresQ = `
    INSERT INTO "room_features"
    (sea_view, VIP_category, hot_water, wifi_available, room_service, mini_bar , flat_screen  ) 
    VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;
`
export default room_featuresQ;