import { CredentialRepository } from "../config/data-source";
import ICreateCredentialDTO from "../dtos/ICredentialDTO";
import { Credential } from "../entities/Credential";


// const credentialsDB : ICredential[] = []; 

// let credentialId: number = 1;

//create credential service
export const createCredential = async ({username, password}: ICreateCredentialDTO): Promise<Credential> => {
    const credential = await CredentialRepository.create({
        username,
        password,
    })
    const results: Credential = await CredentialRepository.save(credential)
    return results;
};

// validacion credencial service
export const validateCredential = async ({username, password}: ICreateCredentialDTO) : Promise<number>  => {
    const foundUser: Credential | null = await CredentialRepository.findOneBy({
        username,
    });

    console.log("Username recibido:", username);
    console.log("Password recibido:", password);
    console.log("Credenciales encontradas:", foundUser);

    if(!foundUser){
        throw new Error("no existe credenciales asociadas al usuario")
    }

    if(foundUser.password != password) {
        console.log("Contraseña ingresada no coincide con la almacenada:", foundUser.password);
        throw new Error("Contraseña incorrecta")
    }

    console.log("Validación exitosa. ID de usuario:", foundUser.id);
    return foundUser.id;
}

