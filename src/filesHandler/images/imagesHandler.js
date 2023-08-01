import express, { Router } from "express";
import multer from "multer";
// import path from "paths.js";
import { pubPath, imagesPath } from "../../paths.js";
import { db } from "../../database.js";

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


// Route pour l'upload d'image d'hôtel
fileHandRouter.post("/customer/:id/upload", upload.single("image"), (req, res) => {
    const imagePath = req.file.path;
        const customerId = req.params.id;

    db.none(`UPDATE customer SET images_paths = $1 WHERE id = $2`, [imagePath, customerId])
        .then(() => {
            res.json({ message: "Image mise à jour avec succès." });
        })
        .catch((error) => {
            console.error('Erreur lors de la mise à jour de l\'image  :', error);
            res.status(500).json({ error: "Erreur lors de la mise à jour de l'image de l'hôtel." });
        });
});