import React, {useState} from 'react';
import './registration.css'
import Input from "../input/Input";
import {registration} from "../../actions/user";

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='registration'>
            <div className='registration__header'>Registration</div>
            <Input value={email} setValue={setEmail}
                   type='text' placecholder='Enter email'/>
            <Input value={password} setValue={setPassword}
                   type='password' placecholder='Enter password'/>
            <button
                onClick={() => registration(email, password)}
                className='registration__btn'>Sign In</button>
        </div>
    );
};

export default Registration;