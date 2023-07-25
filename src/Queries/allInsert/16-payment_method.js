const payment_methodQ = `
    INSERT INTO "payment_method"
    (mobile_money, credit_card , cash ) 
    VALUES ($1 , $2 , $3 ) RETURNING *;
`
export default payment_methodQ;