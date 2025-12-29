import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-wrapper"]}>

        <div className={styles["about-card"]}>
          <h1>Sobre Nosotros</h1>
          <div className={styles["about-content"]}>
            <div className={styles["about-text"]}>
              <p>
                En nuestra plataforma de turnos médicos, nos dedicamos a brindar una
                experiencia eficiente y accesible para la gestión de citas médicas.
                Nuestro objetivo es facilitar la conexión entre pacientes y
                profesionales de la salud, asegurando un servicio ágil y confiable.
              </p>
              <p>
                Contamos con un equipo comprometido con la innovación y la calidad,
                ofreciendo una solución moderna y segura para la reserva de turnos.
              </p>
            </div>
            <div className={styles["about-image"]}>
              <img src="/equipoMedicoImg.jpg" alt="Equipo médico" />
            </div>
          </div>
        </div>

        <div className={styles["about-card"]}>
          <h1>Lugares de Atención</h1>
          <div className={styles["about-content"]}>
            <div className={styles["about-text"]}>
              <p>
                Ofrecemos atención en diversas ubicaciones estratégicas para
                garantizar acceso a nuestros servicios de salud en distintos puntos
                de la ciudad.
              </p>
              <ul>
                <li>Centro Médico Central - Av. Siempre Viva 123</li>
                <li>Clínica Norte - Calle Salud 456</li>
                <li>Hospital Sur - Ruta 789</li>
              </ul>
            </div>
            <div className={styles["about-image"]}>
              <img src="/imgRecepcionCard.jpg" alt="Recepción" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
