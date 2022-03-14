import { UPDATE_FILLS } from "../actions/actionTypes";

const initialFillState=[];

export default function mcqs(state=initialFillState,action){
    switch(action.type){
        case UPDATE_FILLS:
            return action.fills;
        default:
            return state;   
    }
}