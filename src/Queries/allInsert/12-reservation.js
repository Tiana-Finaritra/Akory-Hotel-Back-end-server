const reservationQ = `
    INSERT INTO "reservation"
    (date_arrived, leaving_date, number_of_person , is_cancelled, id_customer, id_room  ) 
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;
`
export default reservationQ;