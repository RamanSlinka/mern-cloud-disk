import React from 'react';
import {useSelector} from "react-redux";
import File from "./file/File";
import style from './fileList.module.scss';
import styleLoader from '../../loader/loader.module.scss';
import {CSSTransition, TransitionGroup} from "react-transition-group";


const FileList = () => {
    const files = useSelector(state => state.files.files)
    const fileView = useSelector(state => state.files.view)

    if(files.length === 0){
        return (
            <div className={styleLoader.loader}>
                <h3 className={style.notFound}>Files not found</h3>
            </div>
        )
    }

    if(fileView === 'plate') {
        return (
            <div className={style.filePlate}>
                    {files.map(file =>
                            <File
                                key={file._id}
                                file={file}/>
                    )}
            </div>
        );
    }

    if(fileView === 'list') {
        return (
            <div className={style.fileList}>
                <div className={style.fileList__header}>
                    <div className={style.fileList__name}>Title</div>
                    <div className={style.fileList__date}>Date</div>
                    <div className={style.fileList__size}>Size</div>
                </div>
                <TransitionGroup>
                    {files.map(file =>
                        <CSSTransition key={file._id}
                                       timeout={500}
                                       classNames={'file'}
                                       exit={false}
                        >
                            <File file={file}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );
    }


};

export default FileList;