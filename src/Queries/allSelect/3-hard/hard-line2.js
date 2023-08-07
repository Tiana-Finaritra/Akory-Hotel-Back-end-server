// DISPLAY INVOICES WITH TOTAL AMOUNT PAYED

const displayInvoicesTotalAmountPayed = `
    SELECT
        re.id,
        cu.name,
        cu.last_name,
        ROUND((pr.cost_per_night * EXTRACT(day FROM (re.leaving_date - re.date_arrived)))::numeric, 2)::double precision as total_amount,
        pay.amount_paid,
        re.date_arrived as debut_reservation,
        re.leaving_date as fin_reservation
    FROM "payment" pay
        INNER JOIN "customer" cu ON pay.id_customer = cu.id
        INNER JOIN "reservation" re ON cu.id = re.id_customer
        INNER JOIN "room" ro ON ro.id = re.id_room
        INNER JOIN "price" pr ON pr.id = ro.id_price;
`;

export default displayInvoicesTotalAmountPayed;
