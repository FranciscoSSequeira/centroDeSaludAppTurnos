
import validateLogin from "../../helpers/validateLogin";
import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";

function Login() {
    const {login} = useContext(UserContext);
    const navigate = useNavigate()
    const initialState= {
        username:"",
        password: "",
    };

    const handleSubmit = async (values) => {
       const response = await login(values);
       if(response.login) {
        navigate("/");
        console.log(response);
       } else {
        alert(response.message);
       }
       
    }
 
    return (

        <div className={styles.loginContainer}>
              
            <div className={styles.loginCard}>

                <div>
                    <h1 className={styles.loginTitle}>Iniciar Sesión</h1>
                </div>
                
                    <Formik 
                        initialValues = {initialState} 
                        validate= {validateLogin} 
                        onSubmit={handleSubmit}
                        >
                            
                            <Form>

                                <div className={styles.formGroup}>
                                    <label >Usuario: </label>
                                    <Field type="text" name= "username" className={styles.input} />
                                    <ErrorMessage name="username" component="p" className={styles.error} />
                                </div>
                                
                                <div className={styles.formGroup}>
                                    <label >Contraseña: </label>
                                    <Field type="password" name= "password" className={styles.input} />
                                    <ErrorMessage name="password" component="p" className={styles.error}/>
                                </div>

                                <button type="submit" className={styles.submitButton}>Ingresar</button>

                            </Form>
                    </Formik>
            </div>
        </div>


    )
}

export default Login;
