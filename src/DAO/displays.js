import { db } from "../database.js";

let Displays;

// rooms
const getRooms = () => {
  const roomsQ = `
      SELECT * FROM room;
    `;

  return db.query(roomsQ);
};

// hotels
const getHotels = () => {
  const hotelQ = `
        SELECT * FROM hotel;
    `;
  return db.query(hotelQ);
};

// customer
const getCustomers = () => {
  const customerQ = `
    SELECT * FROM customer;
  `;
  return db.query(customerQ);
};

// reservation
const getReservations = () => {
  const reservationQ = `
    SELECT * FROM reservation;
  `
  return db.query(reservationQ);
}

export default Displays = {
  getRooms,
  getHotels,
  getCustomers,
  getReservations,
}