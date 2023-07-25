const customer_statusQ = `
    INSERT INTO "customer_status"
    (status_arrived, status_missing, is_fidelity , is_blacklist, id_customer ) 
    VALUES ($1 , $2 , $3 , $4 , $5) RETURNING *;
`
export default customer_statusQ;