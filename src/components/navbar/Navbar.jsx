import React, {useState} from 'react';
import logo from '../../assets/img/cloud-disk-logo.jpg'
import style from './navbar.module.scss'
import styleInput from '../authorization/authorization.module.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {getFiles, searchFiles} from "../../actions/files";
import {showLoader} from "../../reducers/appReducer";
import avatarLogo from '../../assets/img/logo-avata.png'
import {API_URL} from "../../config.js";
import {VscSearch} from "react-icons/vsc";

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
        <div className={style.navbar}>
            <div className={style.container}>
                <NavLink to='/'>
                    <img src={logo}
                         className={style.navbar__Logo} alt="logo"/>
                </NavLink>
                <div className={style.navbar__Header}>Cloud storage</div>

                {isAuth &&
                    <div className={style.navbar__SearchWrapper}>
                        <div>
                            <VscSearch className={style.navbar__SearchImg}/>
                        </div>
                        <input
                            value={searchName}
                            onChange={(e) => searchChangeHandler(e)}
                            className={`${style.navbar__search} ${styleInput.input}`}
                            type='text'
                            placeholder='Search on disk...'/>
                    </div>}

                {!isAuth && <div className={style.navbar__login}>
                    <NavLink to='/login'> Sign in</NavLink>
                </div>}
                {!isAuth && <div className={style.navbar__registration}>
                    <NavLink to='/login'>Sign Up</NavLink>
                </div>}
                {isAuth && <div className={style.navbar__login}
                                onClick={() => dispatch(logout())}
                >
                    Sign Out
                </div>}
                {isAuth &&
                    <NavLink to={'/profile'}>
                        <div className={style.navbar__avatarWrapper}>
                            <img className={style.navbar__avatar}
                                 src={avatar} alt="avatar"/>
                        </div>
                    </NavLink>}
            </div>

        </div>
    );
};

export default Navbar;