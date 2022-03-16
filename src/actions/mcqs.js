import { APIUrls } from '../helpers/urls';
import {UPDATE_MCQS,MARK_MCQ_ANSWERED_CORRECT,MARK_MCQ_ANSWERED_INCORRECT} from './actionTypes';
// import  getFormBody  from '../helpers/utils';

export function fetchMcqs(){
    return (dispatch)=>{
        const url=APIUrls.fetchMcqs();
        fetch(url).then((response)=>{
            // console.log(response);
            return response.json();
        }).then((data)=>{
            console.log(data);
            dispatch(updateMcqs(data.mcqs));
        });
    };
} 

export function updateMcqs(mcqs){
    return {
        type:UPDATE_MCQS,
        mcqs,
    };
} 

export function markMcqAnsweredCorrect(mcq){
    return{
        type:MARK_MCQ_ANSWERED_CORRECT,
        mcq:mcq
    }
}
export function markMcqAnsweredIncorrect(mcq){
    return{
        type:MARK_MCQ_ANSWERED_INCORRECT,
        mcq:mcq
    }
}


