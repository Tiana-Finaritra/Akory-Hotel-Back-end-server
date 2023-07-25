const priceQ = `
    INSERT INTO price (cost_per_night, id_season) VALUES ($1,$2) RETURNING *;
`
export default priceQ;