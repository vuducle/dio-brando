import React, {useState} from 'react';
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../style/style.css";
import GG from '../img/gg.png'


function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefaut();
    }

    return (
        <div style={{height: '500px', backgroundColor: 'red}'}}>
            <form  onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
            autoFocus type="email"
            value={email}
            onChange={event => event.target.value}
            /> 
            </form>
        </div>
    )
}

export default Login
