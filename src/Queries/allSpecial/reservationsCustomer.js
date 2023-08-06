const ResrvationsWithCustomerInfo = `
    SELECT 
        re.id,
        re.date_arrived,
        re.leaving_date,
        re.number_of_person,
        re.is_cancelled,
        cu.id AS id_customer,
        cu.name AS customer_firstname,
        cu.last_name AS customer_lastname,
        cu.principal_contact,
        cu.emergency_number,
        cu.address,
        cu.email,
        cu.cin,
        cu.gender,
        ro.room_type
    FROM reservation re
        INNER JOIN customer cu ON re.id_customer = cu.id
        INNER JOIN room ro ON re.id_room = ro.id
    ORDER BY re.id
    ;
`;

export default ResrvationsWithCustomerInfo;