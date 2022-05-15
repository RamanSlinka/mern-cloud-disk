import React from 'react';
import style from './loader.module.scss'

const Loader = () => {
    return (
        <div className={style.loader}>
            <div className={style.ldsSpinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;