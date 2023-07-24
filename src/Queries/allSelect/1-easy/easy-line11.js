// DISPLAY THE LIST OF ROOMS THAT CORRESPOND TO A PRICE RANGE GIVEN BY THE CUSTOMER 

const RoomsListByPriceIntervalQ = `
    SELECT ro.number, room_type, capacity_room, p.cost_per_night FROM room ro 
    INNER JOIN price p on ro.id_price = p.id 
    WHERE p.cost_per_night 
    BETWEEN $1
    AND $2;
`

export default RoomsListByPriceIntervalQ;