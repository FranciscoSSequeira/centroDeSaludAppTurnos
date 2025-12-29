import { DataSource } from "typeorm";
import {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE
} from "./envs";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    // dropSchema:true,
    logging: false,
    entities: [Credential, Appointment, User],
    subscribers: [],
    migrations: [],
})

export const UserRepository = AppDataSource.getRepository(User);
export const CredentialRepository = AppDataSource.getRepository(Credential);
export const AppointmentRepository = AppDataSource.getRepository(Appointment);