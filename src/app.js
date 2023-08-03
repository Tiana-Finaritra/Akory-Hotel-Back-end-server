import express from "express";
import cors from "cors";
import { router } from "./routers/router.js";
import routerSpecial from "./routers/get/getSpecial.js";

const app = express();

// express configuration
app.use(cors());
app.use(express.json());

// server authentification
app.use(router);
app.use(routerSpecial);

// just for test
app.get("/", (req, res) => {
  res.send("go live to index.html");
});

// launch server
app.listen(8000, () => {
  console.log("Serveur démarré (http://localhost:8000) !");
});
