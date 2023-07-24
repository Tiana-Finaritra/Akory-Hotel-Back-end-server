// Insertion for new province
router.post("/province", (req, res) => {
    // FOR TEST: http://localhost:8000/province
    const data =  req.body;
    handlePromiseInsertion(allInsert.addProvinceAvailable(data), res)
  });

const getAverageResNumberDaysByHotel = (req, res) => {
    // FOR TEST: http://localhost:8000/AverageResNumberDaysByHotel
    handlePromise(allDisplay.getAverageResNumberDaysByHotel(), res);
}