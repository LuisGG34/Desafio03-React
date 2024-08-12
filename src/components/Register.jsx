import React, { useState } from 'react';

const Register= () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const validateForm = () => {
        const pattern =new RegExp (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        const emailValidate = pattern.test(email)

        if (!emailValidate) {
            alert("The email entered is not valid")
        } else {
            if (email === "" || password === "" || confirmPassword === "") {
                alert("Please complete all fields");
            } else { if (password.length < 6) {
                alert("Password must be at least 6 characters");
            } else{
                if (password !== confirmPassword) {
                    alert("Passwords do not match");
                } else {alert("successful authentication")}
            }}
            
        }

    };


    return (
        <form>
        <h3>Form Register</h3>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email} onInput={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder='*******' value={password} onInput={(e) => setPassword(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="confirmPass" placeholder='*******' value={confirmPassword} onInput={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <button onClick={validateForm} class="btn btn-primary">Send</button>
        </form>
    );
};

export default Register;