import React from 'react';
import logo from '../../assets/img/cloud-disk-logo.jpg'
import './navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <img src={logo} className='navbar__logo'  alt="logo"/>
                <div className='navbar__header'>MERN CLOUD</div>
                <div className='navbar__login'>
                    <NavLink to='/login'> Sign in</NavLink>
                </div>
                <div className='navbar__registration'>
                    <NavLink to='/registration'>Registration</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;