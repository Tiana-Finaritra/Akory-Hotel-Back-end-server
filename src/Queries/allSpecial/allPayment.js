const allPayments = `
    SELECT 
        pa.*,
        cu.name AS first_name,
        cu.last_name,
        pm.name
    FROM payment pa
        INNER JOIN customer cu ON pa.id_customer = cu.id
        INNER JOIN payment_method pm ON pa.id_payment_method = pm.id
    ;
`;

export default allPayments;
