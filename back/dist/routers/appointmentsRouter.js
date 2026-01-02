"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentsRouter = (0, express_1.Router)();
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/", appointmentsController_1.getAppointmentsController);
// GET /appointments => Obtener el detalle de un turno específico.
appointmentsRouter.get("/:id", appointmentsController_1.getAppointmentsByIdController);
// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", appointmentsController_1.createAppointmentsController);
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel/:id", appointmentsController_1.cancelAppointmentsByIdController);
exports.default = appointmentsRouter;
