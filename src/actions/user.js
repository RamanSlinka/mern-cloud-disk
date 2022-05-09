import axios from "axios";
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../config";


export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email, password
        })
        alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
};

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email, password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)

        } catch (error) {
            alert(error.response.data.message)
        }
    }
};

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/auth',
                {headers: {Authorisation: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.user)

        } catch (error) {
            alert(error.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar =  (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            const response = await axios.post(`${API_URL}api/files/avatar`, formData,
                {headers: {Authorisation: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const deleteAvatar =  () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/files/avatar`,
                {headers: {Authorisation: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}