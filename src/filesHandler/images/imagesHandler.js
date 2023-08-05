import express, { Router } from "express";
import multer from "multer";
import { pubPath, imagesPath } from "../../paths.js";
import { db } from "../../database.js";
import { promiseHandlerImage } from "../../routers/promiseHandler.js";

// New Router for ImagesFile
export const fileHandRouter = express.Router();

// Path statc in the public folder
fileHandRouter.use(express.static(pubPath));


// Destination folder config:
const uploadDestination = imagesPath;

const storage = multer.diskStorage({
    destination: uploadDestination,
    filename: function (res, file, cb) {
        const uniqueFileName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueFileName);
    },
});

const upload = multer({ storage: storage });


// Generic image update function for any table
function updateImageForTable(req, res, tableName) {
    const imagePath = req.file.path;
    const recordId = req.params.id;

    const promise = db.none(`UPDATE ${tableName} SET images_paths = $1 WHERE id = $2`, [imagePath, recordId]);
    promiseHandlerImage(promise, res);
}

// Route for customer image update
fileHandRouter.post("/customer/:id/upload", upload.single("image"), (req, res) => {
    updateImageForTable(req, res, 'customer');
});

// Route for updating the image for a receptionist
fileHandRouter.post("/receptionist/:id/upload", upload.single("image"), (req, res) => {
    updateImageForTable(req, res, 'receptionist');
});

// Route for updating the image for a room
fileHandRouter.post("/room/:id/upload", upload.single("image"), (req, res) => {
    updateImageForTable(req, res, 'room');
});

// Route for updating the image for a hotel
fileHandRouter.post("/hotel/:id/upload", upload.single("image"), (req, res) => {
    updateImageForTable(req, res, 'hotel');
});                  

// Route for updating the image for a room_features
fileHandRouter.post("/room_features/:id/upload", upload.single("image"), (req, res) => {
    updateImageForTable(req, res, 'room_features');
});