import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Navbar() {
    const {user, logout} = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <header>

            <div className={styles.logoContainer}>
                <img 
                    src= "/public/icono-title-page.png"
                    alt="Logo de la empresa" 
                    className={styles.logo}
                />
                <h1 className={styles.tittle}>Centro de Salud</h1>
            </div>

            <nav>
                
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/aboutUs'>Sobre nosotros</Link>
                    </li>

                    {user ? (
                        <>
                            <li>
                                <Link to='/appointments'>Turnos</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>

                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>

    )
}

export default Navbar;