import {combineReducers} from "redux";
import Instructors from './Instructors'
import errors from './errors'
import messages from "./messages";

export default combineReducers({
    Instructors,
    errors,
    messages
});
