import React from 'react';
import {FcFile, FcOpenedFolder} from "react-icons/fc";
import './file.css'
import {pushToStack, setCurrentDir} from "../../../../reducers/fileReducer";
import {useDispatch, useSelector} from "react-redux";
import {downloadFile} from "../../../../actions/files";

const File = ({file}) => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir)

    function openDirHandler () {
        if(file.type === 'dir') {dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }

    return (
        <div className='file'
        onClick={ ()=>openDirHandler(file) }
        >
           {file.type === 'dir' ? <FcOpenedFolder className='file__img'/> : <FcFile className='file__img'/>}
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0,10)}</div>
            <div className="file__size">{file.size}</div>

            {file.type !== 'dir' && <button
                onClick={(e) => downloadClickHandler(e)}
                className='file__btn file__download'>   Download </button>}
            <button className='file__btn file__delete'>   Delete </button>
        </div>
    );
};

export default File;