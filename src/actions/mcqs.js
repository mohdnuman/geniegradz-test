import { APIUrls } from '../helpers/urls';
import {UPDATE_MCQS} from './actionTypes';
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

