"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
const userRouter = (0, express_1.Router)();
// GET /users => Obtener el listado de todos los usuarios.
userRouter.get("/", usersControllers_1.getUsersController);
// GET /users/:id => Obtener el detalle de un usuario específico.
userRouter.get("/:id", usersControllers_1.getUsersByIdController);
// POST /users/register => Registro de un nuevo usuario.
userRouter.post("/register", usersControllers_1.registerUserController);
// POST /users/login => Login del usuario a la aplicación.
userRouter.post("/login", usersControllers_1.loginUserController);
exports.default = userRouter;
