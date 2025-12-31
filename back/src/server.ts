import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routers/indexRouter";
require("dotenv").config()

const PORT = process.env.PORT || 3000

const server = express();

// Configuración de CORS para permitir solicitudes solo desde el frontend desplegado
// const allowedOrigins = [
//     "http://localhost:3000", // Para desarrollo local
//     "https://centrodesaludappturnos.vercel.app", // Para producción
// ];

// server.use(cors({
//     origin: (origin, callback) => {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error("No permitido por CORS"));
//         }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
// }));
server.use(cors({
    origin: "https://centrodesaludappturnos.vercel.app", // Permitir solo el frontend en producción
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
server.use(express.json());
server.use(morgan("dev"));

server.use(indexRouter);

export default server;