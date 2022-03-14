import { APIUrls } from '../helpers/urls';
import getFormBody from '../helpers/utils';
import {UPDATE_CODE, UPDATE_CODE_MARKS} from '../actions/actionTypes';

export function executeCode(content){
    console.log(content);
    return (dispatch)=>{
        const url=APIUrls.codecompile();
        fetch(url,{
            method:'POST',
            // headers:{
            //     'Content-Type':'application/json',
            // },
            json:JSON.stringify(content)
        }).then((response)=>{
            // console.log(response);
            return response.json();
        }).then((data)=>{
            console.log(data);
            dispatch(updateCodeMarks(data.statusCode));
        });
    };
} 

export function updateCodeMarks(status){
    return {
        type:UPDATE_CODE_MARKS,
        status,
    };
} 

export function fetchCode(){
    return (dispatch)=>{
        const url=APIUrls.fetchCode();
        fetch(url).then((response)=>{
            // console.log(response);
            return response.json();
        }).then((data)=>{
            console.log(data);
            dispatch(updateCode(data.code));
        });
    };
} 

export function updateCode(code){
    return {
        type:UPDATE_CODE,
        code,
    };
} 