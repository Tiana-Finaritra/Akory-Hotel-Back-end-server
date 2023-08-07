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
    res.status(500).json({ error: error.message });
  }
}

export const handlePromiseUpdate = async (promise, res) => {
  try {
    const result = await promise;
    res.status(202).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const handelPromiseDelete = async (promise, res) => {
  try {
    const result = await promise;
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'ID not found in ma_table' });
    }
    return res.status(200).json({ message: "DELETE SUCCESSFULL" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Une erreur s'est produite lors de la suppression" });
  }
}

//IMAGE:

export const promiseHandlerImage = async (promise, res) => {
  try {
    await promise;
    res.json({ message: "Image mise à jour avec succès." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Erreur lors de la mise à jour de l'image" });
  }
}
