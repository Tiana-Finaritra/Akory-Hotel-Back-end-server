const customerQ = `
    INSERT INTO "customer"
    (name, last_name, principal_contact, address, emergency_number, gender , CIN, email, password, id_receptionist) 
    VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7, $8 , $9 , $10) RETURNING *;
`
export default customerQ;