import express, { Router } from "express";
import { db } from "../database.js";

export const AuthRouter = express.Router();

AuthRouter.post("/login",async (req, res) => {
    const {user_email, password} = req.body;
    try {
        const user = await db.oneOrNone(`SELECT cu.name, cu.email, cu.password FROM "customer" cu WHERE cu.email = $1;`, [user_email]);
        if (user && user.password === password) {
            res.json({ message: 'Authentification réussie' });
        }else {
            res.status(401).json({ error: 'Identifiants invalides' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Une erreur est survenue' });
    }
});