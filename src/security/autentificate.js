import express, { Router } from "express";
import { db } from "../database.js";
import jwt from "jsonwebtoken";

const jwtSecretKey = "fcshfvkhlshvhlshbvbhsbvgsdiuvhulivhsuih";


export const AuthRouter = express.Router();

AuthRouter.post("/login",async (req, res) => {
    const {user_email, password} = req.body;
    try {
        const user = await db.oneOrNone(`SELECT cu.name, cu.email, cu.password FROM "customer" cu WHERE cu.email = $1;`, [user_email]);
        if (user && user.password === password) {
            const token = jwt.sign({ email: user.email }, jwtSecretKey, { expiresIn: "1h" });
            res.json({ message: 'Authentification réussie',"user_name": user.name, token: token });
          } else {
            res.status(401).json({ error: 'Identifiants invalides' });
          }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Une erreur est survenue' });
    }
});

 export function verifyToken(req, res, next) {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: 'Accès non autorisé' });
  
    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Token invalide' });
  
      req.user = decoded;
  
      next();
    });
  }