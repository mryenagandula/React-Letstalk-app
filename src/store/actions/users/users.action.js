import axiosClient from "../../../axios/letstalk_api/letstalk-axios"
import { setToken } from "../../../utils/token.service"
import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS, USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "./users.action.types"

export const loadUsers = () =>{
    return {
        type: LOAD_USERS
    }
}

export const loadUsersSuccess = (users) =>{
    return {
        type: LOAD_USERS_SUCCESS,
        payload: users
    }
}

export const loadUsersFailure = (error) =>{
    return {
        type : LOAD_USERS_FAILURE,
        payload : error
    }
}


export const userLogin = (payload) =>{
    return {
        type: USER_LOGIN,
        payload
    }
}

export const userLoginSuccess = (token) =>{
    return {
        type: USER_LOGIN_SUCCESS,
        payload: token
    }
}

export const userLoginFailure = (error) =>{
    return {
        type : USER_LOGIN_FAILURE,
        payload : error
    }
}

export const loadUsersData = () =>{
    return (dispatch) =>{
        dispatch(loadUsers);
        axiosClient.get('/users').then( res=> res.data).then(res=>{
            dispatch(loadUsersSuccess(res.users));
        }).catch(error=>{
            dispatch(loadUsersFailure(error.message));
        })
    }
}

export const loginUser = (payload) =>{
    return (dispatch) =>{
        dispatch(userLogin(payload));
        axiosClient.post('/signin',payload).then( res=> res.data).then(res=>{
            console.log(res)
            dispatch(userLoginSuccess(res));
            setToken(res);
        }).catch(error=>{
            dispatch(userLoginFailure(error.message));
        })
    }
}