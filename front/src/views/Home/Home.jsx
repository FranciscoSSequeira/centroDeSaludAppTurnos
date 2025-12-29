import styles from "./Home.module.css";

function Home() {
  return (
    <>
  
      <main className={styles.homeContainer}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Bienvenido a Centro de Salud</h1>
          <p className={styles.heroSubtitle}>
            Tu plataforma confiable para reservar turnos médicos de manera rápida, segura y desde cualquier lugar.
          </p>
        
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Profesionales Calificados</h3>
            <p className={styles.featureDescription}>
              Accedé a una amplia red de especialistas con años de experiencia y trayectoria.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Gestión Online</h3>
            <p className={styles.featureDescription}>
              Pedí, modificá o cancelá turnos de forma simple desde tu celular o computadora.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Cobertura Nacional</h3>
            <p className={styles.featureDescription}>
              Atendemos en múltiples centros de salud distribuidos por todo el país.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
