export const handlePromise = (promise, res) => {
    promise
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Server Error");
      });
}

export const handlePromiseInsertion = async (promise, res) => {
  try {
    const result = await promise;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}