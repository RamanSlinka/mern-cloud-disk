import React from 'react';
import logo from '../../assets/img/cloud-disk-logo.jpg'
import './navbar.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch  = useDispatch()

    return (
        <div className='navbar'>
            <div className="container">
                <img src={logo} className='navbar__logo'  alt="logo"/>
                <div className='navbar__header'>MERN CLOUD</div>
                {!isAuth && <div className='navbar__login'>
                    <NavLink to='/login'> Sign in</NavLink>
                </div>}
                {!isAuth &&  <div className='navbar__registration'>
                    <NavLink to='/registration'>Sign Up</NavLink>
                </div>}
                {isAuth &&  <div className='navbar__registration'
                onClick={() => dispatch(logout())}
                >
                    Sign Out
                </div>}
            </div>

        </div>
    );
};

export default Navbar;