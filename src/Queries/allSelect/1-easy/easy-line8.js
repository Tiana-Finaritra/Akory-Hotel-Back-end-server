// TOTAL PAYMENTS RECEIVED BY MOBILE MONEY  

const TotalPayReceidByGivenMethodQ = `
    SELECT p.id, p.payment_date, p.amount_paid, p.number_night, p.room_occuped,
        p.deadline_payment, p.lending_status, p.total_amount_status, c.name, c.last_name,
        CONCAT_WS(',',
            CASE WHEN pm.mobile_money = true THEN 'mobile_money' ELSE NULL END,
            CASE WHEN pm.credit_card = true THEN 'credit_card' ELSE NULL END,
            CASE WHEN pm.cash = true THEN 'cash' ELSE NULL END
        ) AS paid_by
    FROM payment p 
    INNER JOIN customer c ON c.id = p.id_customer
    INNER JOIN payment_method pm ON pm.id = p.id_payment_method;
`;

export default TotalPayReceidByGivenMethodQ;