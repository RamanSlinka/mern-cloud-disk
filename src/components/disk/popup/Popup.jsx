import React, {useState} from 'react';
import Input from "../../input/Input";
import style from './popup.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../../reducers/fileReducer";
import {createDir} from "../../../actions/files";

const Popup = () => {
    const [dirName, setDirName] = useState('');
    const popupDisplay = useSelector(state => state.files.popupDisplay);
    const currentDir = useSelector(state => state.files.currentDir);
    const dispatch = useDispatch();

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
        dispatch(setPopupDisplay('none'))
        setDirName('')
    }

    return (
        <div className={style.popup}
             onClick={() => dispatch(setPopupDisplay('none'))}
             style={{display: popupDisplay}}>
            <div className={style.popup__content}
                 onClick={(event) => event.stopPropagation()}
            >
                <div className={style.popup__header}>
                    <div> Create folder</div>
                    <button className={style.popup__close}
                            onClick={() => dispatch(setPopupDisplay('none'))}
                    >X
                    </button>
                </div>
                <Input type="text" placeholder='Enter folder name'
                       value={dirName}
                       setValue={setDirName}/>
                <button className={style.popup__create}
                        onClick={() => createHandler()}

                >Create
                </button>
            </div>
        </div>
    );
};

export default Popup;