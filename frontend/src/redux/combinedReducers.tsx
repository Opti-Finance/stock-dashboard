import { combineReducers } from "redux";
import authReducer from "./slices/authSlice"

const combinedReducers = combineReducers({
    auth: authReducer
});

export default combinedReducers;