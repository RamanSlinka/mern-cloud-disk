import React from 'react';
import style from './loader.module.scss'

const Loader = () => {
    return (
        <div className={style.loaderWrapper}>
        <div className={style.loader}>
            <span></span>
            <span></span>
            <span></span>
        </div>Loading
        </div>
    );
};

export default Loader;