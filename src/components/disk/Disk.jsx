import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFiles, uploadFile} from "../../actions/files";
import FileList from "./fileList/FileList";
import './disk.css'
import Popup from "./Popup";
import {setCurrentDir, setPopupDisplay} from "../../reducers/fileReducer";
import Uploader from "../uploader/Uploader";


const Disk = () => {

    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const loader = useSelector(state => state.app.loader)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir,sort))
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


    if(loader) {
        return (
            <div className='loader'>
                <div className="lds-spinner">
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
        )
    }




    return (!dragEnter ?
            <div className="disk"
                 onDragEnter={dragEnterHandler}
                 onDragLeave={dragLeaveHandler}
                 onDragOver={dragEnterHandler}
            >
                <div className="disk__btns">
                    <button className="disk__back"
                            onClick={() => backClickHandler()}
                    >Back
                    </button>
                    <button className="disk__create"
                            onClick={() => showPopupHandler()}
                    >Create folder
                    </button>
                    <div className="disk__upload">
                        <label htmlFor='disk__upload-input' className='disk__upload-label'>Download file</label>
                        <input
                            multiple={true}
                            onChange={(event) => fileUploadHandler(event)}
                            type="file" id='disk__upload-input' className='disk__upload-input'/>
                    </div>

                    <select className='disk__select'
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="name">By name</option>
                        <option value="type">By type</option>
                        <option value="date">By date</option>
                    </select>
                </div>
                <FileList/>
                <Popup/>
                <Uploader/>
            </div>
            : <div className='drop-area'
                   onDragEnter={dragEnterHandler}
                   onDragLeave={dragLeaveHandler}
                   onDragOver={dragEnterHandler}
                   onDrop={dropHandler}
            >
                <p>drag files here</p>
            </div>
    );
};

export default Disk;