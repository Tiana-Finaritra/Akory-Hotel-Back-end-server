const RoomsAvailableForAHotel = `
    SELECT ro.*
    FROM reservation re
        INNER JOIN room ro ON re.id_room = ro.id
    WHERE date_part('day', re.leaving_date) = date_part('day', current_timestamp) - 1
    ;
`;

export default RoomsAvailableForAHotel;
