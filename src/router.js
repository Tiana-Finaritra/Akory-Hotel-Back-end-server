import express from "express";
import { getHotels, getRooms } from "./DAO/displays.js";

export const router = express.Router();

// rooms:

router.get("/rooms", (req, res) => {
  getRooms()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de serveur");
    });
});

//hotels:

router.get("/hotels", (req, res) =>{
    getHotels()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("Erreur de serveur");
    })
})


