// LIST OF RESERVATIONS OF A GIVEN CLIENT

const ReservationOfGivenCustomerQ = `
    SELECT *
    FROM "reservation" re
    WHERE re.id_customer = $1;
`;

export default ReservationOfGivenCustomerQ;