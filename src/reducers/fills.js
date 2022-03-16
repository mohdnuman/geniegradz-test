import {
  MARK_FILL_ANSWERED_CORRECT,
  UPDATE_FILLS,
  MARK_FILL_ANSWERED_INCORRECT
} from "../actions/actionTypes";

const initialFillState = {
  questions: [],
};

export default function mcqs(state = initialFillState, action) {
  switch (action.type) {
    case UPDATE_FILLS:
      return { questions: action.fills };
    case MARK_FILL_ANSWERED_CORRECT:
      const new_questions = state.questions;
      const index = new_questions.indexOf(action.fill);
      new_questions[index].answered = true;
      new_questions[index].correct = true;
      return {
        ...state,
        questions: new_questions,
      };
    case MARK_FILL_ANSWERED_INCORRECT:
      const new_questionss = state.questions;
      const indexx = new_questionss.indexOf(action.fill);
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
