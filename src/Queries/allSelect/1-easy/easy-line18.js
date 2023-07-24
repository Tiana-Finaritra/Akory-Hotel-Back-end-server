// SHOW THE CUSTOMERS WITH THE MOST NEGATIVE REVIEWS WRITTEN FOR HOTELS

const CustomersNegCommentForHotelQ = `
    SELECT * FROM "customer" INNER JOIN feed_back f 
    ON id_customer = f.id WHERE f.rating <= 5;
`;

export default CustomersNegCommentForHotelQ;