import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiles, uploadFile} from "../../actions/files";
import FileList from "./fileList/FileList";
import style from './disk.module.scss'
import Popup from "./popup/Popup";
import {setCurrentDir, setFileView, setPopupDisplay} from "../../reducers/fileReducer";
import Uploader from "../uploader/Uploader";
import {BsListTask, BsGrid3X3Gap} from "react-icons/bs";
import Loader from "../loader/Loader";


const Disk = () => {

    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const loader = useSelector(state => state.app.loader)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

    function showPopupHandler() {
        dispatch(setPopupDisplay('Flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]

        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }


    if (loader) {
        return (
            <>
                <Loader/>
            </>
        )
    }


    return (
        <div className={style.container}>
            {!dragEnter ?
                <div className={style.disk}
                     onDragEnter={dragEnterHandler}
                     onDragLeave={dragLeaveHandler}
                     onDragOver={dragEnterHandler}
                >
                    <div className={style.disk__btns}>
                        <button className={style.btn}
                                onClick={() => backClickHandler()}
                        >Back
                        </button>

                        <button className={style.btn}
                                style={{width: '200px'}}
                                onClick={() => showPopupHandler()}
                        >Create folder
                        </button>

                        <div className={style.disk__upload}>
                            <label
                                htmlFor='disk__upload-input'
                                className={style.disk__uploadLabel}
                            >Download file</label>
                            <input
                                multiple={true}
                                onChange={(event) => fileUploadHandler(event)}
                                type="file"
                                id='disk__upload-input'
                                className={style.disk__uploadInput}/>
                        </div>

                        <div className={style.filters}>
                            <select className={style.disk__select}
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                            >
                                <option   autofocus={true} disabled={true} >Select</option>
                                <option value="name">By name</option>
                                <option value="type">By type</option>
                                <option value="date">By date</option>
                            </select>

                            <div onClick={() => dispatch(setFileView('plate'))}>
                                <BsGrid3X3Gap className={style.disk__plate}/>
                            </div>
                            <div onClick={() => dispatch(setFileView('list'))}>
                                <BsListTask className={style.disk__list}/>
                            </div>
                        </div>

                    </div>
                    <FileList/>
                    <Popup/>
                    <Uploader/>
                </div>
                : <div className={style.dropArea}
                       onDragEnter={dragEnterHandler}
                       onDragLeave={dragLeaveHandler}
                       onDragOver={dragEnterHandler}
                       onDrop={dropHandler}
                >
                    <p>drag files here</p>
                </div>
            }
        </div>
    );
};

export default Disk;