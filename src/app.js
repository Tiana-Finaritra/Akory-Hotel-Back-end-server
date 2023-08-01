import express from "express";
import cors from "cors";
import { router } from "./routers/router.js";
import { AuthRouter, verifyToken } from "./security/autentificate.js";
import { fileHandRouter } from "./filesHandler/images/imagesHandler.js";

const app = express();

// express configuration
app.use(cors());
app.use(express.json());

// server authentification
app.use(AuthRouter);
app.use(router);
app.use(fileHandRouter);

// just for test
app.get("/", (req, res) => {
  res.send("go live to index.html");
});

// acces on some ressources:
app.get("/resource", verifyToken, (req, res) => {
  /**
     * Here, we can authorize access to the resource because the token is valid.
     * The authenticated user is available in req.user 
     * (for example, req.user.email).
    */
  res.json({ message: "Ressource protégée accessible" });
});


// launch server
app.listen(8000, () => {
  console.log("Serveur démarré (http://localhost:8000) !");
});
