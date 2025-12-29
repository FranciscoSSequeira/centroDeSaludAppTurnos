const validateRegister = (formData) => {
    const errors = {};

    if (!formData.name) {
        errors.name= "El nombre es un dato requerido"
    } else if (formData.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
        errors.email= "El email es un dato requerido"
    } else if (!emailRegex.test(formData.email)) {
        errors.email = "El email no es valido"
    }

    if (!formData.password) {
        errors.password= "la contraseña es un dato requerido"
    } else if (formData.password.length < 3) {
        errors.password = "La contraseña debe tener al menos 3 caracteres"
    }

    return errors;
};

export default validateRegister;