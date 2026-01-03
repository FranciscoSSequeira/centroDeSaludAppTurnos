import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routers/indexRouter";
require("dotenv").config()

const PORT = process.env.PORT || 3000

const server = express();

server.use(cors({
    origin: "https://centrodesaludappturnos.vercel.app", // Permitir solo el frontend en producción
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
server.use(express.json());
server.use(morgan("dev"));

server.use(indexRouter);

server.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

export default server;