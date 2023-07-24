// DISPLAY THE LIST OF HOTELS IN A GIVEN LOCATION (PROVINCE)

const HotelsListByProvinceQ = `
    SELECT * FROM "hotel" INNER JOIN province_available p ON id_province = p.id 
    WHERE p.province_name = $1;
`

export default HotelsListByProvinceQ;