
import { useContext } from "react";
import styles from "./AppointmentCard.module.css";
import { UserContext } from "../../context/UserContext";
import validateAppointmentCancellation from "../../helpers/validateAppointmentCancellation";

function AppointmentCard({ appointment }) {
    const { cancelAppointment } = useContext(UserContext);

    const handleCancel = () => {

        if (appointment.status === "cancelled") {
            alert("Este turno ya está cancelado.");
            return;
        }

        const error = validateAppointmentCancellation(appointment.date);

        if (error) {
            alert(error);
            return; 
        }

        cancelAppointment(appointment.id); 
        alert("Turno cancelado exitosamente");
    };

    return (
        <div className={styles.cardContainer}>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Status: {appointment.status}</p>
            <button className={styles.button} onClick={handleCancel}>
                Cancelar
            </button>
        </div>
    );
}

export default AppointmentCard;
