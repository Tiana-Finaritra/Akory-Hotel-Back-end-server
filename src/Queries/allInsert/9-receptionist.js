const receptionistQ = `
    INSERT INTO "receptionist"
    (first_name, last_name, password, email, work_contact, id_hotel  ) 
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;
`
export default receptionistQ;