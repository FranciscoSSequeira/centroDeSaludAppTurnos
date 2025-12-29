import { useContext } from "react";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import styles from "./MisTurnos.module.css"
import { UserContext } from "../../context/UserContext";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";

function MisTurnos() {
   
    // let[appointments, setAppointments] = useState([])
    const {userAppointments} = useContext(UserContext);
    

    // useEffect(() => {
    //     getAppointments();        
    // }, [getAppointments]);


    return( 
    <div className={styles.listcontainer}> 
        <AppointmentForm/>
        { userAppointments.length == 0 ? (
            <h2>No hay turnos agregados</h2>
            ) : (
            userAppointments.map((item) => (
                <AppointmentCard key={item.id} appointment= {item}/>
            ))
            )
        }
    
    </div>
     ) 
}

export default MisTurnos;