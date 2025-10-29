import * as dotenv from "dotenv";
import express from "express";
import sequelize from "../app/db/database.js";
import Description from "../app/models/descriptionModel.js";
import MessageContact from "../app/models/messageContactModel.js";
import { User, Projet, Company, Preview, Genre } from "../app/models/index.js";
import router from "../app/routers/router.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use(router);

app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Maestro (Vercel) !");
});

// Connexion à la base (au premier appel)
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à la base réussie");
  } catch (error) {
    console.error("❌ Erreur de connexion à la base :", error);
  }
})();

// ⚠️ Pas de app.listen() ici
export default app;
