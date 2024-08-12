import React, { useState } from 'react';

const Login= () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const validateForm = () => {
        const pattern =new RegExp (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        const emailValidate = pattern.test(email)

        if (!emailValidate) {
            alert("The email entered is not valid");
        } else if (email === "" || password === "") {
            alert("Please complete all fields");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters");
        } else {
            alert("successful authentication");
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