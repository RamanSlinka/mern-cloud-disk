import React from 'react';
import {FcFile, FcOpenedFolder} from "react-icons/fc";
import style from './file.module.scss'
import {pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";
import {useDispatch, useSelector} from "react-redux";
import {deleteFile, downloadFile} from "../../../../actions/files";
import sizeFormat from "../../../../utils/sizeFormat";
import {FaCloudDownloadAlt} from "react-icons/fa";
import {RiDeleteBin5Fill} from "react-icons/ri";

const File = ({file}) => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)

    function openDirHandler() {
        if (file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(file))
        debugger
    }

    if (fileView === 'list') {
        return (
            <div className={style.file}
                 onClick={() => openDirHandler(file)}
            >
                {file.type === 'dir'
                    ?
                    <FcOpenedFolder className={style.file__img}/>
                    :
                    <FcFile className={style.file__img}/>
                }
                <div className={style.file__name}>{file.name}</div>
                <div className={style.file__date}>{file.date.slice(0, 10)}</div>
                <div className={style.file__size}>{sizeFormat(file.size)}</div>

                {file.type !== 'dir' && <button
                    onClick={(e) => downloadClickHandler(e)}
                    className={`${style.file__btn} ${style.file__download}`}>
                    <FaCloudDownloadAlt className={style.filePlate__btns__ico}/>
                </button>}
                <button
                    onClick={(e) => deleteClickHandler(e)}
                    className={`${style.file__btn} ${style.file__delete}`}>
                    <RiDeleteBin5Fill className={style.filePlate__btns__ico}/>
                </button>
            </div>
        );
    }

    if (fileView === 'plate') {
        return (
            <div className={style.filePlate}
                 onClick={() => openDirHandler(file)}
            >
                {file.type === 'dir'
                    ?
                    <FcOpenedFolder className={style.filePlate__img}/>
                    :
                    <FcFile className={style.filePlate__img}/>
                }
                <div className={style.file__name}>{file.name}</div>
                <div className={style.filePlate__btns}> {file.type !== 'dir' &&
                    <button
                        onClick={(e) => downloadClickHandler(e)}
                        className={`${style.filePlate__btns} ${style.file__download}`}>
                        <FaCloudDownloadAlt className={style.filePlate__btns__ico}/>
                    {/* download*/}
                    </button>}
                    <button
                        onClick={(e) => deleteClickHandler(e)}
                        className={`${style.filePlate__btns} ${style.file__delete}`}>
                        <RiDeleteBin5Fill className={style.filePlate__btns__ico}/>
                    {/* delete*/}
                    </button>
                </div>
            </div>
        );
    }

};

export default File;