import React, {useState} from 'react';
import logo from '../../assets/img/cloud-disk-logo.jpg'
import './navbar.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {getFiles, searchFiles} from "../../actions/files";
import {showLoader} from "../../reducers/appReducer";
import avatarLogo from '../../assets/img/logo-avata.png'
import {API_URL} from "../../config.js";

const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo
    console.log(avatar)

    function searchChangeHandler(e) {
        setSearchName(e.target.value)

        if (!searchTimeout) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if (e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value))
            }, 1000, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }

    }

    return (
        <div className='navbar'>
            <div className="container">
                <img src={logo} className='navbar__logo' alt="logo"/>
                <div className='navbar__header'>MERN CLOUD</div>

                {isAuth && <input
                    value={searchName}
                    onChange={(e) => searchChangeHandler(e)}
                    className='navbar__search' type='text'
                    placeholder='File name...'/>}

                {!isAuth && <div className='navbar__login'>
                    <NavLink to='/login'> Sign in</NavLink>
                </div>}
                {!isAuth && <div className='navbar__registration'>
                    <NavLink to='/registration'>Sign Up</NavLink>
                </div>}
                {isAuth && <div className='navbar__login'
                                onClick={() => dispatch(logout())}
                >
                    Sign Out
                </div>}
                {isAuth &&
                    <NavLink to={'/profile'}>
                    <img className='navbar__avatar' src={avatar} alt=""/>
                    </NavLink>}
            </div>

        </div>
    );
};

export default Navbar;