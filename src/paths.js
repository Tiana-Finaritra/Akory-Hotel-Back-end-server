import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Obtenir le chemin du module actuel (envPaths.js)
const currentModuleUrl = import.meta.url;
const currentModulePath = dirname(fileURLToPath(currentModuleUrl));

// Construction du chemin d'accès complet au fichier .env
export const envPath = join(currentModulePath, "..", ".env");
