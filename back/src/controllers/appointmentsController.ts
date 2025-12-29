import { Request, Response } from "express";
import { cancelAppointment, createAppointment, getAllAppointment, getAppointmentById } from "../services/appointmentService";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import { Appointment } from "../entities/Appointment";

// GET /appointments => Obtener el listado de todos los turnos .
export const getAppointmentsController = async (req: Request, res: Response) =>{
    try {
       const appointments: Appointment[] = await getAllAppointment();
       res.status(200).json(appointments);
        
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        })
    }
    
}
// GET /appointments => Obtener el detalle de un turno específico.
export const getAppointmentsByIdController = async (req: Request, res: Response) =>{
    try {
        const{id} = req.params;
        const appointment: Appointment = await getAppointmentById(Number(id));

        res.status(200).json(appointment);

        
    } catch  (error: any) {
        res.status(404).json({
            message: error.message,
        })
    }
    
}

// POST /appointments/schedule => Agendar un nuevo turno.
export const createAppointmentsController = async (req: Request, res: Response) =>{
    try {
        const{date, time, userId}: ICreateAppointmentDTO = req.body;
        const appointment : Appointment = await createAppointment({date, time, userId});

        res.status(201).json(appointment);

    } catch  (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }
    
}

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointmentsByIdController = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;
        const appointmentId: number = await cancelAppointment(Number(id));
        res.status(200).json({
            message: `El turno con el id ${appointmentId} fue eliminado` ,
        });
    } catch  (error: any) {
        res.status(404).json({
            message: error.message,
        })
    }
    
}