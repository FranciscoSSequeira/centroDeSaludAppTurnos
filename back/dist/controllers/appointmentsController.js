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
exports.cancelAppointmentsByIdController = exports.createAppointmentsController = exports.getAppointmentsByIdController = exports.getAppointmentsController = void 0;
const appointmentService_1 = require("../services/appointmentService");
// GET /appointments => Obtener el listado de todos los turnos .
const getAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentService_1.getAllAppointment)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
exports.getAppointmentsController = getAppointmentsController;
// GET /appointments => Obtener el detalle de un turno específico.
const getAppointmentsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentService_1.getAppointmentById)(Number(id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
exports.getAppointmentsByIdController = getAppointmentsByIdController;
// POST /appointments/schedule => Agendar un nuevo turno.
const createAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId } = req.body;
        const appointment = yield (0, appointmentService_1.createAppointment)({ date, time, userId });
        res.status(201).json(appointment);
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});
exports.createAppointmentsController = createAppointmentsController;
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
const cancelAppointmentsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointmentId = yield (0, appointmentService_1.cancelAppointment)(Number(id));
        res.status(200).json({
            message: `El turno con el id ${appointmentId} fue eliminado`,
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
exports.cancelAppointmentsByIdController = cancelAppointmentsByIdController;
