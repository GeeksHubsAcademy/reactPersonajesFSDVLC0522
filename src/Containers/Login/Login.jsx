
import React from 'react';
import Clicker from '../../Components/Clicker/Clicker';
import './Login.css';

const Login = () => {

    return (
        <div className="loginDesign">
            hola soy Login
            <Clicker nombreBoton="Register" destino="/register"/>
        </div>
    )

};

export default Login;
