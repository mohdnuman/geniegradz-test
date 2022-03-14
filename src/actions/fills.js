import { APIUrls } from '../helpers/urls';
import {UPDATE_FILLS} from './actionTypes';
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