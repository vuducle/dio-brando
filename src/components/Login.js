import React, {useState} from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../style/style.css";
import GG from '../img/gg.png'
import Review from './Review';
import LoginForm from './componentPart/LoginForm';

function Login() {
  

    return (
        <div>
            <Review></Review>
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login
