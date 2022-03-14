import { MARK_MCQ_ANSWERED, UPDATE_MCQS } from "../actions/actionTypes";

const initialMcqState=[]

export default function mcqs(state=initialMcqState,action){
    switch(action.type){
        case UPDATE_MCQS:
            const new_mcqs=action.mcqs;
            for(let i=0;i<new_mcqs.length;i++){
                new_mcqs[i].answered=false;
            }
            return new_mcqs
  
        default:
            return state;   
    }
}