import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./AppointmentForm.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import validateAppointmentForm from "../../helpers/validateAppointmentForm";

function AppointmentForm(){

     const {createAppointment} = useContext(UserContext);
        const initialState= {
            date:"",
            time: "",
        };
    
        const handleSubmit = async (values) => {
            createAppointment(values)
        }

        const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    return  (
        <Formik 
                        initialValues = {initialState} 
                        validate= {validateAppointmentForm} 
                        onSubmit={handleSubmit}
                        >
                            
                            <Form>

                                <div className={styles.formGroup}>
                                    <label >Fecha: </label>
                                    <Field type="date" name= "date" className={styles.input} />
                                    <ErrorMessage name="date" component="p" className={styles.error} />
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label >Hora: </label>
                                    <Field as="select" name= "time" className={styles.input}>
                                        {hours.map((hour) => 
                                        <option key= {hour} value={`${hour}:00`}>
                                            {hour}:00
                                        </option>)}
                                        </Field> 
                                    <ErrorMessage name="time" component="p" className={styles.error}/>
                                </div>

                                <button type="submit" className={styles.submitButton}>Solicitar turno</button>

                            </Form>
                    </Formik>
    )
}

export default AppointmentForm;