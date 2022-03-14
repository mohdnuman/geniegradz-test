import { combineReducers } from "redux";
import mcqs from './mcqs';
import fills from './fills';
import marks from './marks';
import code from './code';


export default combineReducers({
    mcqs,
    fills,
    code,
    marks

});