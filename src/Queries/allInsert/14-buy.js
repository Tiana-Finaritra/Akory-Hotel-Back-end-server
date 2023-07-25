const buyQ = `
    INSERT INTO "buy" (id_customer, id_service) VALUES ($1 , $2) RETURNING * ;
`
export default buyQ;