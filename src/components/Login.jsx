import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Login= () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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

        if (email === "" || password === "") {
            showAlert('Error', 'Por favor completa todos los campos', 'error');
        } else {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const emailValidate = pattern.test(email);

            if (!emailValidate) {
                showAlert('Error', 'El email ingresado no es válido', 'error');
            } else if (password.length < 6) {
                showAlert('Error', 'La contraseña debe tener al menos 6 caracteres', 'error');
            } else {
                showAlert(); // Aquí llamamos correctamente a la función showAlert
            }
        }
    };

    return (
        <form>
        <h3>Login</h3>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email} onInput={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder='*******' value={password} onInput={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={validateForm} class="btn btn-primary">Login</button>
        </form>
    );
};

export default Login;