import React, {useState} from 'react';
import Input from "../input/Input";
import {registration} from "../../actions/user";
import style from "./authorization.module.scss";

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const registrationClickHandler = () => {
    registration(email, password)
    setEmail('')
    setPassword('')
}
    return (



            <div className={`${style.containerForm} ${style.containerSignup}`}>

                <form action="#" className={style.form}>
                    <h2 className={style.formTitle}>Sign Up</h2>
                    <h4 className={style.link}>Create your account</h4>
                    <Input
                        value={email} setValue={setEmail}
                        type="text" placeholder="Email" className={style.input}/>
                    <Input
                        value={password} setValue={setPassword}
                        type="email" placeholder="Password" className={style.input}/>
                    <button
                        onClick={() => registrationClickHandler()
                    }
                        className={style.btn}>Sign Up</button>
                </form>
            </div>

    );
};

export default Registration;