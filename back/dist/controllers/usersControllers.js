"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.registerUserController = exports.getUsersByIdController = exports.getUsersController = void 0;
const userService_1 = require("../services/userService");
const credentialService_1 = require("../services/credentialService");
// GET /users => Obtener el listado de todos los usuarios.
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});
exports.getUsersController = getUsersController;
// GET /users/:id => Obtener el detalle de un usuario específico.
const getUsersByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserById)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});
exports.getUsersByIdController = getUsersByIdController;
// POST /users/register => Registro de un nuevo usuario.
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, birthdate, nDni, email, username, password } = req.body;
        if (isNaN(Number(nDni))) {
            res.status(400).json({ message: "El campo nDni debe ser un número válido." });
            return;
        }
        const user = yield (0, userService_1.createUser)({ name, birthdate, nDni, email, username, password });
        const responseUserDTO = {
            id: user.id,
            name: user.name,
            birthdate: user.birthdate,
            nDni: user.nDni,
            email: user.email
        };
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});
exports.registerUserController = registerUserController;
// POST /users/login => Login del usuario a la aplicación.
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Datos recibidos en el login:", req.body); // Log para verificar los datos recibidos
        const { username, password } = req.body;
        console.log("Iniciando validación de credenciales..."); // Log para indicar el inicio de la validación
        const userId = yield (0, credentialService_1.validateCredential)({ username, password });
        console.log("Credenciales validadas correctamente. ID del usuario:", userId); // Log para verificar el ID del usuario validado
        console.log("Buscando usuario por ID..."); // Log para indicar que se buscará el usuario
        const user = yield (0, userService_1.getUserById)(userId);
        console.log("Usuario encontrado:", user); // Log para verificar el usuario encontrado
        res.status(200).json({
            login: true,
            user,
        });
    }
    catch (error) {
        console.log("Error en el login:", error.message); // Log para capturar el error
        res.status(400).json({
            message: error.message,
        });
    }
});
exports.loginUserController = loginUserController;
