// FOR EACH PROMOTION, DISPLAY THE TOTAL NUMBER OF RESERVATIONS THAT BENEFITED FROM THE PROMOTION, BY HOTEL
// (TO KNOW IF IT WORKED OR NOT)

const AnaliseBeneficPromotionQ = `
    SELECT
        pr.name as promotion,
        ho.name as hotel,
        count(re.id) as reservation
    FROM "affiliate" aff
        INNER JOIN "room" ro ON aff.id_room = ro.id
        INNER JOIN "reservation" re ON re.id_room = ro.id
        INNER JOIN "promotion" pr ON aff.id_promotion = pr.id
        INNER JOIN "hotel" ho ON ro.id_hotel = ho.id
    GROUP BY pr.id, ho.id;
`;

export default AnaliseBeneficPromotionQ;