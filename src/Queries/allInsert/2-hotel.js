const hotelQ = `
    INSERT INTO "hotel" (name, address, id_province) VALUES ($1,$2,$3) RETURNING *; 
    `
export default hotelQ;