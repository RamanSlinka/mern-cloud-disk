import React from 'react';
import style from './aboutApp.module.scss'

const AboutApp = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2 >Hi there !</h2>
                <div>
                    <h1>Cloud storage</h1>
                    <span>ver.1.0.42</span>
                    <h3>This application is made using MERN technologies such as: MongoDB, Express, React, NodeJs</h3>
                </div>

            </div>

            <div className={style.description}>

              <div>
                <h4>Frontend :</h4>
                <ul>
                    <li>React</li>
                    <li>Hooks: useState, useEffect, useContext.</li>
                    <li>React router. Page navigation. BrowserRouter, Route.</li>
                    <li>Redux, react-redux, redux-thunk.</li>
                    <li>Registration.Authorisation</li>
                    <li>Downloading files. Drag and droops. Progress Tracking</li>
                    <li>Search. Filtration.</li>
                    <li>Popup</li>
                    <li>Working with the server. Axios. Indication of loading data from the server.</li>
                    <li>SCSS.Module components.</li>
                    <li>Library React icons.</li>
                </ul>
              </div>
                <div>
                <h4>Backend: </h4>
                <ul>
                    <li>REST Api</li>
                    <li>Registration on the server</li>
                    <li>JWT token, authorization</li>
                    <li>File Model, Folder Creation</li>
                    <li>Uploading files to the server</li>
                    <li>Deleting files</li>
                    <li>File sorting</li>
                    <li>Sharing statics, User avatar</li>
                </ul>
                </div>
            </div>
        </div>


    );
};

export default AboutApp;


//
// function debounce(f, ms) {
//     let isCooldown = false;
//     return () => {
//         console.log('is', isCooldown)
//         if (isCooldown) return;
//         f.apply(this, arguments);
//         isCooldown = true;
//         setTimeout(() => isCooldown = false, ms);
//     };
// }
//
// function searchChangeHandler(e) {
//     setSearchName(e.target.value)
//
//     if (!searchTimeout) {
//         clearTimeout(searchTimeout)
//     }
//     dispatch(showLoader())
//     if (e.target.value !== '') {
//         debounce(dispatch(searchFiles(e.target.value)), 1000)
//
//         /*setSearchTimeout(setTimeout((value) => {
//             dispatch(searchFiles(value))
//         }, 1000, e.target.value))*/
//     } else {
//         dispatch(getFiles(currentDir))
//     }
// }