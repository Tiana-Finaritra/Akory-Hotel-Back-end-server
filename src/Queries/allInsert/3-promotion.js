const promotionQ = `
    INSERT INTO "promotion"  (name, begin,"end", percent ) VALUES ($1,$2, $3, $4) RETURNING *;
`
export default promotionQ;