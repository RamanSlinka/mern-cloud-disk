import React from 'react';
import style from "../authorization/authorization.module.scss";

const Input = (props) => {
    return (
        <input
            className={style.input}
            onChange={(event) => props.setValue(event.target.value)}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}/>


    );
};

export default Input;