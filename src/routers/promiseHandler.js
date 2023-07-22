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
