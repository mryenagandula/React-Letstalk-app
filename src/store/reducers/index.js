import { combineReducers } from "redux";
import userReducer from "./users.reducer";

const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer;