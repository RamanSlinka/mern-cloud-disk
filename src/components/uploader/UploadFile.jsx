import React from 'react';
import style from './uploader.module.scss'
import {useDispatch} from "react-redux";
import {removeUploadFile} from "../../reducers/uploadReducer";


const UploadFile = ({file}) => {
    const dispatch = useDispatch()

    return (
        <div className={style.uploadFile}>
            <div className={style.uploadFile__header}>
                <div className={style.title}>{file.name}</div>
                <button
                    onClick={() => dispatch(removeUploadFile(file.id))}
                    className={`${style.uploader__close} ${style.uploadFile__close}`}
                    >x
                </button>
            </div>
            <div className={style.uploadFile__progressBar}>
                <div className={style.uploadFile__uploadBar} style={{width: file.progress + '%'}}/>
                <div className={style.uploadFile__percent}>{file.progress} %</div>
            </div>
        </div>
    );
};

export default UploadFile;