// DISPLAY THE AVERAGE NUMBER OF RESERVATIONS PER HOTEL FOR EACH MONTH OF A GIVEN YEAR 

const AverageResNumberMonthsByHotelAndYearQ = `
    SELECT
        round(avg(re.id))::integer as reservation,
        date_part('month', re.date_arrived) as month
    FROM "reservation" re
        INNER JOIN "room" ro ON re.id_room = ro.id
        INNER JOIN "hotel" ho ON ro.id_hotel = ho.id
    WHERE date_part('day', re.date_arrived) IN (
            SELECT 
                date_part('day', re.date_arrived) as day
            FROM "reservation"
            WHERE date_part('year', re.date_arrived) = $1
        )
    GROUP BY month;
`;

export default AverageResNumberMonthsByHotelAndYearQ;