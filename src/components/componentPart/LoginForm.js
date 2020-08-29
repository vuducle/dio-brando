import React, {useState} from 'react';
import "../../style/style.css";



function LoginForm() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefaut();
    }
    return (
        <div>
            <form>
                <label>Email</label>
                <input></input>
            </form>
        </div>
    )
}

export default LoginForm
