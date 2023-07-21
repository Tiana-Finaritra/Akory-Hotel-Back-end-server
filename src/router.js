import express from "express";
import {getRoomsListByDescPrice, getRoomsListByFeatures } from "./DAO/displays.js";

export const router = express.Router();

// easy-line12:
// DESPLAY ALL ROOM ORDER BY PRICE DESC:
router.get("/RoomsListByDescPrice", (req, res) => {
    getRoomsListByDescPrice()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de serveur");
    });
});

// easy-line13:
// DISPLAY A LIST OF ROOMS WHOSE DESCRIPTIONS MATCH SPECIFUIC KEYWORDS
router.get("/RoomsListByFeatures", (req, res) =>{
    // const keyword = req.query.keyword;  // customer request vie interface
    let keyword = "mini_bar" // Just for test
    getRoomsListByFeatures(keyword)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("Erreur de serveur");
    })
});