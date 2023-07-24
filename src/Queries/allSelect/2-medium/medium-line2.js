// SHOW HOW MANY TIMES A CUSTOMER HAS BOOKED IN OUR HOTEL

const BookingNumberByCustomerQ = `
--->
    SELECT
        count(*)
    FROM "reservation" re
    WHERE re.id_customer = $1; 
                    --->
`;

export default BookingNumberByCustomerQ;