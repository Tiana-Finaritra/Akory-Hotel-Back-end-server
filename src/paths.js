import { fileURLToPath } from "url";
import { dirname, join } from "path";

// __dirname
const currentModuleUrl = import.meta.url;
const currentModulePath = dirname(fileURLToPath(currentModuleUrl));

//  .ENV
export const envPath = join(currentModulePath, "..", ".env");

// FILES HANDLER 

// public for static files configurations.
export const pubPath = join(currentModulePath, "..", "public");

// public/images
export const imagesPath = join(currentModulePath, "..", "public","images");

