const paymentQ = `
    INSERT INTO "payment"
    (payment_date, amount_paid , number_night, room_occuped, deadline_payment, lending_status, total_amount_status, id_customer, id_payment_method, id_receptionist) 
    VALUES ($1 , $2 , $3, $4, $5, $6, $7, $8, $9, $10 ) RETURNING *;
`
export default paymentQ;