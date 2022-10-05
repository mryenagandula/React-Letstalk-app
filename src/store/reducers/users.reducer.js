import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS, USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "../actions/users/users.action.types";

const initialState = {
    users:[],
    error:null,
    loading: false,
    token: null,
}

const userReducer = (state= initialState , action) => {
    switch(action.type){
        case LOAD_USERS : return {
            ...state,
            loading : true,
            error:null
        }
        case LOAD_USERS_SUCCESS : return {
            ...state,
            users: action.payload,
            loading:false,
            error:null
        }
        case LOAD_USERS_FAILURE : return {
            ...state,
            loading: false,
            error: action.payload
        }
        case USER_LOGIN : return {
            ...state,
            loading : true,
            error:null
        }
        case USER_LOGIN_SUCCESS : return {
            ...state,
            token: action.payload,
            loading:false,
            error:null
        }
        case USER_LOGIN_FAILURE : return {
            ...state,
            loading: false,
            token:null,
            error: action.payload
        }

        default : return state;

    }
}

export default userReducer;