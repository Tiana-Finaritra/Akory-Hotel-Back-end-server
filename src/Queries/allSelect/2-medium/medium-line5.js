// LIST OF ROOMS THAT MEET MULTIPLE CRITERIA

const RoomsByMultipleCriteriaQ = `
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
`;

export default RoomsByMultipleCriteriaQ;