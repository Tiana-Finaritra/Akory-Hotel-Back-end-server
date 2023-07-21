import express from "express";
import Displays from "./DAO/displays.js";

export const router = express.Router();

// rooms:

router.get("/rooms", (req, res) => {
  Displays.getRooms()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de serveur");
    });
});

// hotels:

router.get("/hotels", (req, res) => {
  Displays.getHotels()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Erreur de serveur");
    });
});

// customer
router.get("/customers", (req, res) => {
  Displays.getCustomers()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de serveur");
    });
});

// reservation
router.get("/reservations", (req, res) => {
  Displays.getReservations()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de serveur");
    });
});