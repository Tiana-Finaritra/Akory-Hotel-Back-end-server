// /**
//  * 
//  * NOTE:
//  * J'ai mis l' user et le mots de passe de
//  * psql dans un variable d'environnement dondenv
//  * cacher sous gitignire
//  * donc, avant de tester la connection à la base de
//  * donnée: crées d'abord un fichier app .env
//  * dans le même chemin que src - package.js et READEME.md
//  * et mettez-y les lignes suivants:
//  * 
//  * DB_USER=postgres <-- à changer
//  * DB_PASSWORD=password <-- à changer
//  * 
//  * */

import pgPromise from "pg-promise";
import dotenv from "dotenv";
import { envPath } from "./paths.js";

const pgp = pgPromise();

dotenv.config({ path: envPath });

// Connection à la base de données :
export const db = pgp({
    host: "localhost",
    port: 5432,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Test de connection:
db.connect()
    .then(obj => {
        console.log('Connecté à la base de données avec succès.');
        obj.done(); // Libère le pool de clients si vous n'avez plus besoin de la connexion.
    })
    .catch(error => {
        console.error('Erreur de connexion à la base de données:', error);
});
