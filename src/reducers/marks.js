import { UPDATE_MCQ_MARKS,UPDATE_FILL_MARKS,UPDATE_CODE_MARKS } from "../actions/actionTypes";

const initialMarksState = {
  mcqMarks: 0,
  fillMarks: 0,
  codeMarks: 0,
};

export default function mcqs(state = initialMarksState, action) {
  switch (action.type) {
    case UPDATE_MCQ_MARKS:
      return {
        mcqMarks: state.mcqMarks+1,
        fillMarks:state.fillMarks,
        codeMarks:state.codeMarks
      };
    case UPDATE_FILL_MARKS:
      return {
        fillMarks: state.fillMarks + 1,
        codeMarks:state.codeMarks,
        mcqMarks: state.mcqMarks,
      };
    case UPDATE_CODE_MARKS:
      if(action.status===200)
      return {
        codeMarks: state.codeMarks + 10,
        mcqMarks: state.mcqMarks,
        fillMarks:state.fillMarks,
        
      };
      else{
        return {
          codeMarks: state.codeMarks ,
          mcqMarks: state.mcqMarks,
          fillMarks:state.fillMarks,
          
        };
      }
    default:
      return state;
  }
}
