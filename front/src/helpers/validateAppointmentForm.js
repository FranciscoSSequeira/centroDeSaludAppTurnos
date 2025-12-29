const validateAppointmentForm = (values) => {
    const errors = {};

    if (!values.date) {
        errors.date = "La fecha es obligatoria.";
      } else {
        const today = new Date();
        const selectedDate = new Date(values.date);
    
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);
    
        if (selectedDate < today) {
          errors.date = "La fecha no puede ser anterior al día de hoy.";
        }
      }
    
      if (!values.time) {
        errors.time = "La hora es obligatoria.";
      }

    return errors;
};

export default validateAppointmentForm;