const roomQ = `
    INSERT INTO "room"
    (number, room_type, capacity_room, id_hotel, id_price, id_room_features ) 
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;
`
export default roomQ;