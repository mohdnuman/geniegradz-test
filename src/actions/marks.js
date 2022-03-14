import {UPDATE_MCQ_MARKS,UPDATE_FILL_MARKS,UPDATE_CODE_MARKS} from './actionTypes';


export function addMcqMarks(){
    return {
        type:UPDATE_MCQ_MARKS,
    };
} 
 
export function addFillMarks(){
    return {
        type:UPDATE_FILL_MARKS,
    };
} 
 
export function addCodeMarks(){
    return {
        type:UPDATE_CODE_MARKS,
    };
} 
 