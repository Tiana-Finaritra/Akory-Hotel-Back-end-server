const affiliateQ = `
    INSERT INTO "affiliate" (id_promotion, id_room) VALUES ($1,$2) RETURNING *;
`
export default affiliateQ;