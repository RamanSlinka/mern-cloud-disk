import React from 'react';
import {FcFile, FcOpenedFolder} from "react-icons/fc";
import './file.css'

const File = ({file}) => {
    return (
        <div className='file'>
           {file.type === 'dir' ? <FcOpenedFolder className='file__img'/> : <FcFile className='file__img'/>}
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0,10)}</div>
            <div className="file__size">{file.size}</div>
        </div>
    );
};

export default File;