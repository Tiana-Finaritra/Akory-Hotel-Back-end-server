export function handlePromise(promise, res) {
    promise
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Erreur de serveur");
      });
  }