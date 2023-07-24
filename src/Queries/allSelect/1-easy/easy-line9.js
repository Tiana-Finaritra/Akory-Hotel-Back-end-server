// DISPLAY THE NUMBER OF RESERVATIONS MADE BY A GIVEN CUSTOMER DURING A GINVEN PERIOD

const ResNumberByCustomerAndPeriodQ = `
    SELECT c.name, c.principal_contact, c.gender, c.cin, 
    COUNT(*) AS total_reservation FROM customer c 
    INNER JOIN reservation r ON r.id_customer = c.id 
    WHERE c.name = $1 
    AND r.date_arrived = $2 
    GROUP BY c.name, c.principal_contact, c.gender, c.cin;
`;

export default ResNumberByCustomerAndPeriodQ;