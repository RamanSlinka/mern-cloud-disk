import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";
import {NavLink} from "react-router-dom";

const Profile = () => {

    const dispatch = useDispatch()

    function changeHandler(e) {
        const file = e.target.file[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column',
        margin: '10px'}}>
            <button onClick={() => dispatch(deleteAvatar())}>Delete avatar</button>
            <input
                onChange={(e) => changeHandler(e)}
                accept='image/*'
                type="file" placeholder='Upload avatar'/>
            <div>
                <NavLink to={'/'}>Home</NavLink>
            </div>
        </div>
    );
};

export default Profile;