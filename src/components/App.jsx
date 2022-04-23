import React, {useEffect} from "react";
import Navbar from "./navbar/Navbar";
import './app.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispath = useDispatch();

    useEffect(() => {
        dispath(auth())
    }, [])
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
                {/*<Registration/>*/}

                {!isAuth &&
                    <Routes>
                        <Route path={'/registration'} element={<Registration/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>
                }

            </div>
        </BrowserRouter>
    );
}

export default App;
