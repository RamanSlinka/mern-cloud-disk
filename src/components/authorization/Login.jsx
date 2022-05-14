import React, {useState} from 'react';
import style from './authorization.module.scss'
import Input from "../input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import Registration from "./Registration";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const [registration, setRegistration] = useState(false);

const loginClickHandler = () => {
    dispatch(login(email, password))
    setEmail('')
    setPassword('')
}

    return (
        <div className={style.body}>
            <div
                className={
                    registration ?
                        `${style.container} ${style.rightPanelActive}`
                        : style.container
                }
            >
                {/*Sign In*/}
                {!registration
                    ?
                    <div className={`${style.containerForm} ${style.containerSignin}`}>
                        <form action="#" className={style.form}>
                            <h2 className={style.formTitle}>Sign In</h2>
                            <Input
                                value={email}
                                setValue={setEmail}
                                type="email" placeholder="Email" className={style.input}/>
                            <Input
                                value={password}
                                setValue={setPassword}
                                type="password" placeholder="Password" className={style.input}/>
                            <button
                                onClick={() => loginClickHandler()}
                                className={style.btn}>Sign In
                            </button>
                        </form>
                    </div>
                    :
                    <Registration/>

                }

                <Registration/>
                {/*Overlay*/}
                <div className={style.containerOverlay}>
                    <div className={style.overlay}>
                        <div className={`${style.overlayPanel} ${style.overlayLeft}`}>
                            <button
                                onClick={() => {
                                    setRegistration(false)
                                }}
                                className={style.btn} id="signIn">Sign In
                            </button>
                        </div>
                        <div className={`${style.overlayPanel} ${style.overlayRight}`}>
                            <button
                                onClick={() => {
                                    setRegistration(true)
                                }}
                                className={style.btn} id="signUp">Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;