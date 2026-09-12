import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const distPath = path.join(__dirname, "dist");

// Sert tous les fichiers réels (JS, CSS, images...) présents dans dist/
app.use(express.static(distPath));

// Pour toute autre route (ex: /cafards, /rats...), renvoie index.html
// afin que React puisse afficher la bonne page.
app.use((req, res, next) => {
  if (req.method !== "GET") {
    return next();
  }
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur NUISIKIT démarré sur le port ${PORT}`);
});
