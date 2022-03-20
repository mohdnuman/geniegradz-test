import React, { Component } from "react";
import { addMcqMarks } from "../actions/marks";
import { markMcqAnsweredCorrect ,markMcqAnsweredIncorrect} from "../actions/mcqs";
import { connect } from "react-redux";


class McqQuestion extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedOption:'',
      message:'',
      answered:false
    }
  }
 
  onValueChange=(event)=> {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit=(event)=> {
    event.preventDefault();
    // console.log(this.state.selectedOption);
    if(this.props.mcq.answer===this.state.selectedOption){
    this.props.dispatch(markMcqAnsweredCorrect(this.props.mcq))
      this.props.dispatch(addMcqMarks());
      this.setState({
        message:'correct',
        answered:true
      })
    }
    else{
    this.props.dispatch(markMcqAnsweredIncorrect(this.props.mcq))

      this.setState({
        message:'wrong',
        answered:true
      })
    }
  }
  render() {
    const mcq = this.props.mcq;
    
    return (
      <div className="mcq-wrapper">
        <div className="mcq-question">
          <span>
            <span id="question-text">Question-</span>
            <span className="question-wrapper">{mcq.question}</span>
          </span>
        </div>
        <form onSubmit={this.formSubmit}>
          {mcq.options.map((option) => (
            <div className="mcq-option">
              <input
                type="radio"
                name="option1"
                value={option}
                checked={this.state.selectedOption === option}
                onChange={this.onValueChange}
              />
              {option}
            </div>
          ))}
          {!this.state.answered &&!this.props.mcq.answered&& <button className="submit-button" onClick={this.handleSubmit}>
            SUBMIT
          </button>}
          {this.props.mcq.answered&&this.props.mcq.correct&&<span className="correct-text">Correct answer{' '}<img alt="correct" src="https://cdn-icons.flaticon.com/png/512/1634/premium/1634264.png?token=exp=1647771838~hmac=c729804858bcd393f7d651dc3ffbf891" className="tick"/> </span>}
          {this.props.mcq.answered&&!this.props.mcq.correct&&<span className="wrong-text">Wrong answer{' '}<img src="https://cdn-icons-png.flaticon.com/512/594/594864.png" alt="wrong" className="cross"/> </span>}


        </form>
      </div>
    );
  }
}
function mapstatetoprops(state) {
  return {
    mcqs:state.mcqs
  };
}

export default connect(mapstatetoprops)(McqQuestion);
