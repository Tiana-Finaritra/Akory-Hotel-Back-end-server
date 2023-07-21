import express from "express";
// import { router } from "./router.js";
import cors from "cors";
const app = express();

// express configuration
app.use(cors());
app.use(express.json());

//server authentification
// app.use(router);

//just for test 
app.get('/', (req, res) => {
    res.send('go live to index.html');
});

//launch server
app.listen(8000, () => {
    console.log("Serveur démarré (http://localhost:8000) !");
});