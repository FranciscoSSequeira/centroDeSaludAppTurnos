"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRepository = exports.CredentialRepository = exports.UserRepository = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const Credential_1 = require("../entities/Credential");
const Appointment_1 = require("../entities/Appointment");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: envs_1.DB_PORT,
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_DATABASE,
    synchronize: true,
    // dropSchema:true,
    logging: false,
    entities: [Credential_1.Credential, Appointment_1.Appointment, User_1.User],
    subscribers: [],
    migrations: [],
});
exports.UserRepository = exports.AppDataSource.getRepository(User_1.User);
exports.CredentialRepository = exports.AppDataSource.getRepository(Credential_1.Credential);
exports.AppointmentRepository = exports.AppDataSource.getRepository(Appointment_1.Appointment);
