import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";
import {NavLink} from "react-router-dom";
import {API_URL} from "../../config";
import avatarLogo from "../../assets/img/logo-avata.png";
import style from './profile.module.scss';
import styleBtn from '../authorization/authorization.module.scss'
import {RiArrowGoBackFill, RiDeleteBin5Fill} from "react-icons/ri";
import AboutApp from "../aboutApp/AboutApp";

const Profile = () => {

    const currentUser = useSelector(state => state.user.currentUser);
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo
    const user = useSelector(state => state.user.currentUser.email)
    const dispatch = useDispatch()

    function changeHandler(e) {
        const file = e.target.files[0]
        console.log(e.target.files[0])
        dispatch(uploadAvatar(file))
    }

    return (
        <>
        <div className={style.container}>
            <div>
                <NavLink to={'/'}>
                    <button className={`${styleBtn.btn} ${style.btn__back}`}
                    >
                        <RiArrowGoBackFill className={style.btn__back_ico}/>
                    </button>
                </NavLink>
            </div>

            <div className={style.avatarWrapper}>
                <img src={avatar}
                     className={style.avatar}
                     alt="avatar"/>
                <div className={style.btnsBlock}>
                    <button onClick={() => dispatch(deleteAvatar())}
                          className=  {`${styleBtn.btn} ${style.deleteAvatar}`}
                    ><RiDeleteBin5Fill/>
                    </button>
                    <div
                        className={styleBtn.btn}
                        style={{padding: 0}}
                    ><p className={style.uploadAvatar}>Upload avatar</p>
                    <input
                        onChange={e => changeHandler(e)}
                        accept='image/*'
                        type="file"
                        placeholder='Upload avatar'/>
                    </div>
                </div>
            </div>
            <div>
              <h3> User:  {user}</h3>
            </div>

        </div>
         <AboutApp/>
        </>
    );
};

export default Profile;