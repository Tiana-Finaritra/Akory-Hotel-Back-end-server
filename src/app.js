import express from "express";
import cors from "cors";
import { router } from "./routers/router.js";
import { AuthRouter, verifyToken } from "./security/autentificate.js";

const app = express();

// express configuration
app.use(cors());
app.use(express.json());

// server authentification
app.use(AuthRouter);
app.use(router);

// just for test
app.get("/", (req, res) => {
  res.send("go live to index.html");
});

// acces on some ressources:
app.get("/resource", verifyToken, (req, res) => {
  /**
   * Ici, nous pouvons autoriser l'accès à la ressource car le token est valide.
   *  L'utilisateur authentifié est disponible dans req.user 
   * (par exemple, req.user.email).
  */
  res.json({ message: "Ressource protégée accessible" });
});


// launch server
app.listen(8000, () => {
  console.log("Serveur démarré (http://localhost:8000) !");
});
