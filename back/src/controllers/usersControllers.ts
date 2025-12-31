import { Request, Response } from "express";
import { createUser, getAllUsers, getUserById } from "../services/userService";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import { validateCredential } from "../services/credentialService";
import { User } from "../entities/User";
import IResponseUserDTO from "../dtos/IResponseUserDTO";
import { AppDataSource } from "../config/data-source";

// GET /users => Obtener el listado de todos los usuarios.
export const getUsersController = async (req: Request , res: Response) => {
    try {

        const users: User[] = await getAllUsers();
        res.status(200).json(users);
               
    } catch  (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }
    
}

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUsersByIdController = async (req:Request , res:Response) => {
    try {
        const{id} = req.params;
        const user: User = await getUserById(Number(id));

        res.status(200).json(user);
    } catch  (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }
    
};

// POST /users/register => Registro de un nuevo usuario.
export const registerUserController = async (req:Request , res:Response) => {
    try {
        const{name, birthdate, nDni, email, username, password}: ICreateUserDTO = req.body;
        const user : User = await createUser({name, birthdate, nDni, email, username, password});

        const responseUserDTO: IResponseUserDTO = {
            id:user.id,
            name: user.name,
            birthdate: user.birthdate,
            nDni: user.nDni,
            email: user.email
        }
        res.status(201).json(user);
        
    } catch  (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }
};

// POST /users/login => Login del usuario a la aplicación.
export const loginUserController = async (req:Request , res:Response) => {
    try {
        console.log("Datos recibidos en el login:", req.body); // Log para verificar los datos recibidos

        const{username, password}: ICreateUserDTO = req.body;
        
        console.log("Iniciando validación de credenciales..."); // Log para indicar el inicio de la validación

        const userId : number = await validateCredential({username, password});
      
        console.log("Credenciales validadas correctamente. ID del usuario:", userId); // Log para verificar el ID del usuario validado

        console.log("Buscando usuario por ID..."); // Log para indicar que se buscará el usuario

        const user: User = await getUserById(userId);

        console.log("Usuario encontrado:", user); // Log para verificar el usuario encontrado

        res.status(200).json({
            login: true,
            user,
            
        })} catch  (error: any) {
            console.log("Error en el login:", error.message); // Log para capturar el error

            res.status(400).json({
            message: error.message,
        })
    }
    
};
