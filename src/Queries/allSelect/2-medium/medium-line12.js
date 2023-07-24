// DISPLAY THE LIST OF CURRENT PROMOTIONS:   

const CurrentPrommotionsListQ = `    
    SELECT * FROM "promotion" WHERE (begin >= current_date);
`;

export default CurrentPrommotionsListQ;