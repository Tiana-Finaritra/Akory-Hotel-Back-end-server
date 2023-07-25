const seasonQ = `
    INSERT INTO "season" (items, start_date, end_date) VALUES ($1,$2,$3) RETURNING * ;
`
export default seasonQ;