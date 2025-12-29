const validateLogin = (formData) => {
    const errors = {};

    if (!formData.username) {
         errors.usernamename= "El nombre de usuario es un dato requerido"
    }

    if (!formData.password) {
         errors.password= "la contraseña es un dato requerido"
    } else if (formData.password.length < 3) {
        errors.password = "La contraseña debe tener al menos 3 caracteres"
    }

    return errors;
};

export default validateLogin;