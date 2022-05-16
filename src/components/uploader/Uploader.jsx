import React from 'react';
import style from './uploader.module.scss'
import UploadFile from "./UploadFile";
import {useDispatch, useSelector} from "react-redux";
import {hideUploader} from "../../reducers/uploadReducer";

const Uploader = () => {

    const files = useSelector(state => state.upload.files)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()

    return (isVisible &&
        <div className={style.uploader}>
            <div className={style.uploader__header}>
                <div className={style.uploader__title}>Downloads</div>
                <button
                    onClick={() => dispatch(hideUploader())}
                    className={style.uploader__close}>X
                </button>
            </div>
            {files.map(file =>
                <UploadFile
                    key={file.id}
                    file={file}
                />
            )}
        </div>
    );
};

export default Uploader;