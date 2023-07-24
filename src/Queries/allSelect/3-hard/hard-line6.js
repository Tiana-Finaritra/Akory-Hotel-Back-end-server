// DISPLAY TOTAL  OF PAYMANT ONLY FOR ROOM'S RESERVATIONS
// IN A GIVEN DATE INTERVAL

const TotalPayForRoomsHotelsQ = `
    SELECT 
        SUM(pay.amount_paid),
        pay.payment_date, h.name
    FROM payment pay 
        INNER JOIN hotel h ON h.id = pay.room_occuped
    WHERE pay.total_amount_status = 't' 
        AND pay.payment_date >= $1
        AND pay.payment_date <= $2
    GROUP BY h.name, pay.payment_date;
`;

export default TotalPayForRoomsHotelsQ;