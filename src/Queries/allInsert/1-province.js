const provinceQ = `
    INSERT INTO province_available (province_name, code_province) VALUES ($1, $2) RETURNING *;
`
export default provinceQ;