import {combineReducers} from "redux";
import courses from './courseReducer';
import users from './userReducer';


const rootReducer = combineReducers({courses},{users});

export default rootReducer;
