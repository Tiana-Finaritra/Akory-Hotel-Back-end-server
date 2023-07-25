const feed_backQ = `
    INSERT INTO "feed_back"
    (comment, rating, id_customer, id_hotel ) 
    VALUES ($1,$2,$3,$4) RETURNING *;
`
export default feed_backQ;