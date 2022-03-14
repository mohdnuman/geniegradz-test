import { UPDATE_CODE } from "../actions/actionTypes";

const initialCodeState={};

export default function mcqs(state=initialCodeState,action){
    switch(action.type){
        case UPDATE_CODE:
            return action.code;
        default:
            return state;   
    }
}