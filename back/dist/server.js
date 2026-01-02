"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const indexRouter_1 = __importDefault(require("./routers/indexRouter"));
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const server = (0, express_1.default)();
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
server.use((0, cors_1.default)({
    origin: "https://centrodesaludappturnos.vercel.app", // Permitir solo el frontend en producción
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
server.use(express_1.default.json());
server.use((0, morgan_1.default)("dev"));
server.use(indexRouter_1.default);
exports.default = server;
