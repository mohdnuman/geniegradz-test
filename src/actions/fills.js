import { APIUrls } from '../helpers/urls';
import {UPDATE_FILLS,MARK_FILL_ANSWERED_CORRECT,MARK_FILL_ANSWERED_INCORRECT} from './actionTypes';
// import  getFormBody  from '../helpers/utils';

export function fetchFills(){
    return (dispatch)=>{
        const url=APIUrls.fetchFills();
        fetch(url).then((response)=>{
            // console.log(response);
            return response.json();
        }).then((data)=>{
            console.log(data);
            dispatch(updateFills(data.fills));
        });
    };
} 

export function updateFills(fills){
    return {
        type:UPDATE_FILLS,
        fills,
    };
} 

export function markFillAnsweredCorrect(fill){
    return{
        type:MARK_FILL_ANSWERED_CORRECT,
        fill:fill
    }
}
export function markFillAnsweredIncorrect(fill){
    return{
        type:MARK_FILL_ANSWERED_INCORRECT,
        fill:fill
    }
}