import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
               <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Centro de Salud. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;