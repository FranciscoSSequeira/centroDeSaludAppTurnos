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
exports.validateCredential = exports.createCredential = void 0;
const data_source_1 = require("../config/data-source");
// const credentialsDB : ICredential[] = []; 
// let credentialId: number = 1;
//create credential service
const createCredential = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password }) {
    const credential = yield data_source_1.CredentialRepository.create({
        username,
        password,
    });
    const results = yield data_source_1.CredentialRepository.save(credential);
    return results;
});
exports.createCredential = createCredential;
// validacion credencial service
const validateCredential = (_a) => __awaiter(void 0, [_a], void 0, function* ({ username, password }) {
    const foundUser = yield data_source_1.CredentialRepository.findOneBy({
        username,
    });
    console.log("Username recibido:", username);
    console.log("Password recibido:", password);
    console.log("Credenciales encontradas:", foundUser);
    if (!foundUser) {
        throw new Error("no existe credenciales asociadas al usuario");
    }
    if (foundUser.password != password) {
        console.log("Contraseña ingresada no coincide con la almacenada:", foundUser.password);
        throw new Error("Contraseña incorrecta");
    }
    console.log("Validación exitosa. ID de usuario:", foundUser.id);
    return foundUser.id;
});
exports.validateCredential = validateCredential;
