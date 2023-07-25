const serviceQ = `
    INSERT INTO "service"
    (service_name, description, price, reduction ) 
    VALUES ($1,$2,$3,$4) RETURNING *;
`
export default serviceQ;