import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const MySwal = withReactContent(Swal);

    // Función para mostrar alertas de éxito o error
    const showAlert = (title, text, icon) => {
        MySwal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: 'Aceptar'
        });
    };

    const validateForm = (e) => {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página

        if (email === "" || password === "" || confirmPassword === "") {
            showAlert('Error', 'Por favor completa todos los campos', 'error');
        } else {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const emailValidate = pattern.test(email);

            if (!emailValidate) {
                showAlert('Error', 'El email ingresado no es válido', 'error');
            } else if (password.length < 6) {
                showAlert('Error', 'La contraseña debe tener al menos 6 caracteres', 'error');
            } else if (password !== confirmPassword) {
                showAlert('Error', 'Las contraseñas no coinciden', 'error');
            } else {
                showAlert('¡Éxito!', 'Tu operación se completó exitosamente', 'success'); // Aquí llamamos correctamente a la función showAlert
            }
        }
    };

    return (
        <form onSubmit={validateForm}>
            <h3>Formulario de Registro</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onInput={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="*******" 
                    value={password} 
                    onInput={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPass" className="form-label">Confirmar Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPass" 
                    placeholder="*******" 
                    value={confirmPassword} 
                    onInput={(e) => setConfirmPassword(e.target.value)} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default Register;
