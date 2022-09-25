import axiosClient from "../../../axios/letstalk_api/letstalk-axios"
import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS } from "./users.action.types"

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

export const loadUsersData = () =>{
    return (dispatch) =>{
        dispatch(loadUsers);
        axiosClient.get('/users').then( res=> res.data).then(res=>{
            console.log(res);
            dispatch(loadUsersSuccess(res.users));
        }).catch(error=>{
            console.log(error);
            dispatch(loadUsersFailure(error.message));
        })
    }
}