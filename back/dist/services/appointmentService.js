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
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointment = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = require("../entities/Appointment");
const userService_1 = require("./userService");
// retorna los Appointment service
const getAllAppointment = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppointmentRepository.find();
    return appointments;
});
exports.getAllAppointment = getAllAppointment;
// retorna appointment por id service
const getAppointmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield data_source_1.AppointmentRepository.findOneBy({
        id,
    });
    if (!foundAppointment) {
        throw new Error("turno no encontrado");
    }
    return foundAppointment;
});
exports.getAppointmentById = getAppointmentById;
// crea appointment service
const createAppointment = (createAppointmentDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userService_1.getUserById)(createAppointmentDTO.userId);
    const newAppointment = yield data_source_1.AppointmentRepository.create({
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        status: Appointment_1.AppointmentStatus.ACTIVE,
        user,
    });
    const results = yield data_source_1.AppointmentRepository.save(newAppointment);
    return results;
});
exports.createAppointment = createAppointment;
// cancelar appointment service
const cancelAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield (0, exports.getAppointmentById)(id);
    if (foundAppointment.status == Appointment_1.AppointmentStatus.CANCELLED) {
        throw new Error("el turno ya estaba cancelado");
    }
    foundAppointment.status = Appointment_1.AppointmentStatus.CANCELLED;
    const results = yield data_source_1.AppointmentRepository.save(foundAppointment);
    return results.id;
});
exports.cancelAppointment = cancelAppointment;
