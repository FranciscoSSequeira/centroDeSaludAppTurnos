
export default function validateAppointmentCancellation(appointmentDateStr) {
  const today = new Date();
  const appointmentDate = new Date(appointmentDateStr + "T00:00:00"); // Fuerza hora local 00:00

  today.setHours(0, 0, 0, 0);

  const timeDiff = appointmentDate.getTime() - today.getTime();

  if (timeDiff < 24 * 60 * 60 * 1000) {
      return "Los turnos solo pueden ser cancelados hasta el día anterior.";
  }

  return null;
}
