import { AppointmentRepository } from "../config/data-source";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import { Appointment, AppointmentStatus } from "../entities/Appointment";
import { User } from "../entities/User";
import { getUserById } from "./userService";

// retorna los Appointment service
export const getAllAppointment = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentRepository.find();
    
    return appointments;
}

// retorna appointment por id service
export const getAppointmentById = async (id: number) : Promise<Appointment> => {
    const foundAppointment: Appointment | null = await AppointmentRepository.findOneBy({
            id,
        });

    if(!foundAppointment){
        throw new Error("turno no encontrado");
    }

    return foundAppointment;
}

// crea appointment service
export const createAppointment = async (createAppointmentDTO : ICreateAppointmentDTO) : Promise<Appointment> => {
    const user: User = await getUserById(createAppointmentDTO.userId)

    const newAppointment : Appointment = await AppointmentRepository.create({
    
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        status: AppointmentStatus.ACTIVE,
        user,

    })

    const results = await AppointmentRepository.save(newAppointment)
    return results;
}

// cancelar appointment service
export const cancelAppointment = async (id: number) => {
    const foundAppointment: Appointment = await getAppointmentById(id);

   
    if(foundAppointment.status == AppointmentStatus.CANCELLED) {
        throw new Error("el turno ya estaba cancelado")
    }
    foundAppointment.status = AppointmentStatus.CANCELLED;

    const results = await AppointmentRepository.save(foundAppointment);


    return results.id;
}