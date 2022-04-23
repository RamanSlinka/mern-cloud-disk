import React, {useState} from 'react';
import './authorization.css'
import Input from "../input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    return (
        <div className='authorization'>
            <div className='registration__header'>Sign in</div>
            <Input value={email} setValue={setEmail}
                   type='text' placecholder='Enter email'/>
            <Input value={password} setValue={setPassword}
                   type='password' placecholder='Enter password'/>
            <button
                className='authorization__btn'
                onClick={() => dispatch(login(email, password))}
            >Sign In
            </button>
        </div>
    );
};

export default Login;