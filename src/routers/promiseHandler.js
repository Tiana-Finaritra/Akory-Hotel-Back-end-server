import fs from 'fs';

export function handlePromise(promise, res) {
    promise
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error(err);

        // Log the error to a file (e.g., "error.log")
        fs.appendFile('error.log', `${new Date().toISOString()} - ${err.stack}\n`, (err) => {
          if (err) {
            console.error("Error while writing to the log file:", err);
          }
        });

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