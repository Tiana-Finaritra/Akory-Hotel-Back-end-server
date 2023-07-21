import { db } from "../database.js";

// rooms
export const getRooms = () => {
  const roomsQ = `
      SELECT * FROM room;
    `;

  return db.query(roomsQ);
};

// hotels

export const getHotels = () =>{
    const hotelQ = `
        SELECT * FROM hotel;
    `;
    return db.query(hotelQ);
}