// DISPLAY THE LIST OF ROOMS, WITH THEIR GROSS PRICE, AND THEIR NET PRICE (I.E THEIR PRICE
// BY APPLYING ALL THE REDUCTIONS THAT ARE APPLIED TODAY)

const roomsListNetAndGrosPriceQ = `
    SELECT 
        r.id,
        r.number,
        r.room_type,
        r.capacity_room,
        h.name AS hotel,
        p.cost_per_night AS Price,
        CASE
            WHEN pm.percent IS NOT NULL THEN (p.cost_per_night - p.cost_per_night * pm.percent / 100)
            ELSE NULL
        END AS Promotions_day,
        r.images_paths,
        rf.sea_view,
        rf.vip_category,
        rf.hot_water,
        rf.wifi_available,
        rf.room_service,
        rf.mini_bar,
        rf.flat_screen
    FROM room r
    INNER JOIN price p ON r.id_price = p.id
    INNER JOIN hotel h ON h.id = r.id_hotel
    INNER JOIN room_features rf ON rf.id = r.id_room_features
    LEFT JOIN affiliate af ON r.id = af.id_room
    LEFT JOIN promotion pm ON pm.id = af.id_promotion AND (pm.begin IS NULL OR pm.begin <= CURRENT_DATE) AND (pm."end" IS NULL OR pm."end" > CURRENT_DATE)
    ORDER BY p.cost_per_night DESC;
`

export default roomsListNetAndGrosPriceQ;