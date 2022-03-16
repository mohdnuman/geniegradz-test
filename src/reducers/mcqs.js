import { MARK_MCQ_ANSWERED_CORRECT, UPDATE_MCQS,MARK_MCQ_ANSWERED_INCORRECT } from "../actions/actionTypes";

const initialMcqState = {
  questions: [],
};

export default function mcqs(state = initialMcqState, action) {
  switch (action.type) {
    case UPDATE_MCQS:
      return { questions: action.mcqs };
    case MARK_MCQ_ANSWERED_CORRECT:
      const new_questions = state.questions;
      const index = new_questions.indexOf(action.mcq);
      new_questions[index].answered = true;
      new_questions[index].correct = true;

      return {
        ...state,
        questions: new_questions,
      };
    case MARK_MCQ_ANSWERED_INCORRECT:
      const new_questionss = state.questions;
      const indexx = new_questionss.indexOf(action.mcq);
      new_questionss[indexx].answered = true;
      new_questionss[indexx].correct = false;

      return {
        ...state,
        questions: new_questionss,
      };
    default:
      return state;
  }
}
