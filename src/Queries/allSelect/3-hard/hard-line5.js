// TOTAL PAYMENTS COLLECTED IN A YE:AR FOR EACH HOTEL

const CollectedPayForAllHotelsByYearQ = `
    SELECT
        sum(pay.amount_paid) as total_in_year,
        ho.name
    FROM "payment" pay
        INNER JOIN receptionist re ON pay.id_receptionist = re.id
        INNER JOIN hotel ho ON ho.id = re.id_hotel
    WHERE date_part('year', pay.payment_date) = $1
    GROUP BY ho.id, re.id;
`;

export default CollectedPayForAllHotelsByYearQ;