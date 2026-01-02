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
exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const data_source_1 = require("../config/data-source");
const credentialService_1 = require("./credentialService");
// retorna los users service
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserRepository.find();
    return users;
});
exports.getAllUsers = getAllUsers;
// retorna users por id service
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Buscando usuario con ID:", id); // Log para verificar el ID recibido
    const foundUser = yield data_source_1.UserRepository.findOne({
        where: { id },
        relations: ["appointments"],
    });
    console.log("Usuario encontrado en la base de datos:", foundUser); // Log para verificar el usuario encontrado
    if (!foundUser) {
        console.log("No se encontró un usuario con el ID:", id); // Log para confirmar que no se encontró el usuario
        throw new Error("Usuario no encontrado");
    }
    return foundUser;
});
exports.getUserById = getUserById;
//crear user service
const createUser = (createUserDTO) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Datos recibidos para crear usuario:", createUserDTO); // Log para verificar los datos recibidos
    const user = yield data_source_1.UserRepository.create({
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        nDni: createUserDTO.nDni,
    });
    console.log("Usuario creado (antes de guardar):", user); // Log para verificar el usuario creado
    const newCredential = yield (0, credentialService_1.createCredential)({
        username: createUserDTO.username,
        password: createUserDTO.password,
    });
    user.credentials = newCredential;
    const results = yield data_source_1.UserRepository.save(user);
    console.log("Usuario guardado en la base de datos:", results); // Log para verificar el usuario guardado
    return results;
});
exports.createUser = createUser;
