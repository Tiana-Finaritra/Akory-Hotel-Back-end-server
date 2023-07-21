import express from "express";
const app = express();


//just for test 
app.get('/', (req, res) => {
    res.send('go live to index.html');
});

//launch server
app.listen(8000, () => {
    console.log("Serveur démarré (http://localhost:8000) !");
});