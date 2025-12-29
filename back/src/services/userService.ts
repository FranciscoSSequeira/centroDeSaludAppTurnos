import { UserRepository } from "../config/data-source";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { createCredential } from "./credentialService";


// retorna los users service
export const getAllUsers = async () : Promise<User[]>=> {
    const users = await UserRepository.find();
    
    return users;
}

// retorna users por id service
export const getUserById = async (id: number): Promise<User> => {
        console.log("Buscando usuario con ID:", id); // Log para verificar el ID recibido

    const foundUser: User | null = await UserRepository.findOne({
        where: {id},
        relations: ["appointments"],
    });
        console.log("Usuario encontrado en la base de datos:", foundUser); // Log para verificar el usuario encontrado


    if(!foundUser){
        console.log("No se encontró un usuario con el ID:", id); // Log para confirmar que no se encontró el usuario

        throw new Error("Usuario no encontrado");
    }

    return foundUser;
}

//crear user service
export const createUser = async (createUserDTO: ICreateUserDTO): Promise<User> => {
    console.log("Datos recibidos para crear usuario:", createUserDTO); // Log para verificar los datos recibidos


    const user: User = await UserRepository.create({
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        nDni: createUserDTO.nDni,
        })
    console.log("Usuario creado (antes de guardar):", user); // Log para verificar el usuario creado
    
    const newCredential = await createCredential({
        username: createUserDTO.username,
        password: createUserDTO.password,
    })

    user.credentials = newCredential;

    const results: User = await UserRepository.save(user);

    console.log("Usuario guardado en la base de datos:", results); // Log para verificar el usuario guardado

    return results;
}