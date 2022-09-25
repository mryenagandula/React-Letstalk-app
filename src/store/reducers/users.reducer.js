import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS } from "../actions/users/users.action.types";

const initialState = {
    users:[],
    error:null,
    loading: false
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

        default : return state;

    }
}

export default userReducer;