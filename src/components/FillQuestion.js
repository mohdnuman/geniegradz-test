import React, { Component } from "react";
import { markFillAnsweredIncorrect, markFillAnsweredCorrect } from "../actions/fills";
import { addFillMarks } from "../actions/marks";

class Fill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      message: "",
      answered: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.props.fill.answer === this.state.answer) {
    this.props.dispatch(markFillAnsweredCorrect(this.props.fill));
      this.props.dispatch(addFillMarks());
      this.setState({
        message: "correct",
        answered: true,
      });
    } else {
    this.props.dispatch(markFillAnsweredIncorrect(this.props.fill));

      this.setState({
        message: "wrong",
        answered: true,
      });
    }
  };

  render() {
    const fill = this.props.fill;
    return (
      <div className="fill-wrapper">
        <div className="fill-question">
          <span id="question-text">{fill.question}</span>
        </div>

        <input
          type="text"
          placeholder="Enter the answer..."
          className="answer-input"
          onChange={this.handleChange}
        />

        {!this.state.answered && !this.props.fill.answered&& (
          <button className="submit-button" onClick={this.handleSubmit}>
            SUBMIT
          </button>
        )}
        {this.props.fill.answered&&this.props.fill.correct&&<span className="correct-text">Correct answer{' '}<img alt="correct" src="https://cdn-icons.flaticon.com/png/512/1634/premium/1634264.png?token=exp=1647771838~hmac=c729804858bcd393f7d651dc3ffbf891" className="tick"/> </span>}
        {this.props.fill.answered&&!this.props.fill.correct&&<span className="wrong-text">Wrong answer{' '}<img alt="wrong" src="https://cdn-icons-png.flaticon.com/512/594/594864.png" className="cross"/>  </span>}
        {/* {this.state.message === "correct" && <span className="correct-text">Correct answer{' '}<img src="https://cdn-icons.flaticon.com/png/512/1634/premium/1634264.png?token=exp=1647184527~hmac=b3192f9ba636df0a8fc51fb9b8f0b0a5" className="tick"/> </span>} */}
        {/* {this.state.message === "wrong" && <span className="wrong-text">Wrong answer{' '}<img src="https://cdn-icons-png.flaticon.com/512/594/594598.png" className="cross"/>  </span>} */}

      </div>
    );
  }
}

export default Fill;
