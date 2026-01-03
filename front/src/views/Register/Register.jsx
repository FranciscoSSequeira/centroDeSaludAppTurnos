import validateRegister from "../../helpers/validateRegister";
import styles from "./Register.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Register() {
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleChangeInput = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (Object.keys(validateRegister(form)).length) {
                alert("Datos Incorrectos");
                return;
            }

            console.log("Datos enviados al backend:", form); // Verificar los datos enviados

            const response = await axios.post(
                "https://centrodesaludappturnos.onrender.com/users/register",
                form
            );

            console.log("Respuesta del backend:", response.data); // Verificar la respuesta del backend
            alert("Registro exitoso");
        } catch (error) {
            console.error("Error en el registro:", error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("Error al conectar con el servidor.");
            }
        }
    };

    useEffect(() => {
        setErrors(validateRegister(form));
    }, [form]);

    return (
        <div className={styles.registerContainer}>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>

                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChangeInput}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChangeInput}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label>Fecha de Nacimiento:</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={form.birthdate}
                        onChange={handleChangeInput}
                    />
                    {errors.birthdate && <p>{errors.birthdate}</p>}
                </div>

                <div>
                    <label>Numero de DNI:</label>
                    <input
                        type="number"
                        name="nDni"
                        value={form.nDni}
                        onChange={handleChangeInput}
                    />
                    {errors.nDni && <p>{errors.nDni}</p>}
                </div>

                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChangeInput}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChangeInput}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Register;