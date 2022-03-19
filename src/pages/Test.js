import React, { Component } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Mcq from "../components/Mcq";
import Fill from "../components/Fill";
import CodeEditor from "../components/CodeEditor";
import CodePanel from "../components/Codepanel";
import { connect } from "react-redux";
import { fetchMcqs } from "../actions/mcqs";
import { fetchFills } from "../actions/fills";
import { fetchCode } from "../actions/code";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "mcq",
      started: false,
      time: {},
      seconds: 2700,
      finished: false,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      this.setState({ finished: true });
    }
  }
  handleStart = () => {
    this.setState({
      started: true,
    });
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.startTimer();
    this.setState({ time: timeLeftVar });
  };
  handleCode = () => {
    this.setState({
      activeTab: "code",
    });
  };
  handleFill = () => {
    this.setState({
      activeTab: "fill",
    });
  };
  handleMcq = () => {
    this.setState({
      activeTab: "mcq",
    });
  };

  handleEnd = () => {
    clearInterval(this.timer);
    this.setState({ finished: true });
  };

  componentDidMount() {
    this.props.dispatch(fetchMcqs());
    this.props.dispatch(fetchFills());
    this.props.dispatch(fetchCode());
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            style={{
              backgroundColor: "black",
              height: "102vh",
              paddingRight: "10px",
            }}
            className={(!this.state.started || this.state.finished) && "blur"}
          >
            <span className="test-heading">Test</span>
            <p className="side-option" onClick={this.handleMcq}>
              MCQs
              <span className="score">{this.props.marks.mcqMarks}/10</span>
            </p>
            <p className="side-option" onClick={this.handleFill}>
              Fill In the Blanks
              <span className="score">{this.props.marks.fillMarks}/10</span>
            </p>
            <p className="side-option" onClick={this.handleCode}>
              Code
              <span className="score">{this.props.marks.codeMarks}/10</span>
            </p>
            <button onClick={this.handleEnd} className="end-button">
              End Test
            </button>
            <p>
              {!this.state.finished && (
                <div className="side-time-option time">
                  Time Left-{this.state.time.m} mins {this.state.time.s} seconds{" "}
                </div>
              )}
              {this.state.finished && (
                <div className="side-time-option time">
                  Test Finished{" "}
                  <span className="score">
                    Score-
                    {this.props.marks.mcqMarks +
                      this.props.marks.fillMarks +
                      this.props.marks.codeMarks}
                    /30
                  </span>
                </div>
              )}
            </p>
          </Grid>
          <Grid
            item
            xs={10}
            style={{ height: "102vh" }}
            className={(!this.state.started || this.state.finished) && "blur"}
          >
            <span className={this.state.finished && "finished"}>
              {this.state.activeTab === "mcq" && <Mcq mcqs={this.props.mcqs} />}
            </span>
            <span className={this.state.finished && "finished"}>
              {this.state.activeTab === "fill" && (
                <Fill fills={this.props.fills} />
              )}
            </span>
            <span className={this.state.finished && "finished"}>
              {this.state.activeTab === "code" && (
                <Grid container spacing={2}>
                  <Grid item xs={2.5}>
                    <CodePanel code={this.props.code} />
                  </Grid>
                  <Grid item xs={9.5}>
                    <CodeEditor />
                  </Grid>
                </Grid>
              )}
            </span>
          </Grid>
        </Grid>
        {!this.state.started && (
          <div className="popup">
            <span className="start-test-text">Start the Test</span>
            <p>
              Steps For Accessing Your Exam Online: <br />
              1.Close all programs,including email Click on the Click here to
              open the exam link provided in the email from The College.
              <br />
              2. Click "Log In For Your Exam Here" at the bottom of the screen.
              Have your Proctor enter the Username and Password provided in the
              email from The College and click enter.
              <br />
              3.To begin the exam, click on the link to the appropriate exam
              listed under Online Assessments.
              <br />
            </p>
            <button onClick={this.handleStart} className="start-button">
              Start Test
            </button>
          </div>
        )}
        {this.state.finished && (
          <div className="popup">
            <span className="start-test-text">Test Ended</span>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="side-name">MCQ score</td>
                  <td>{this.props.marks.mcqMarks}/10</td>
                </tr>
                <tr>
                  <td className="side-name">Fill in The Blanks Score</td>
                  <td>{this.props.marks.fillMarks}/10</td>
                </tr>
                <tr>
                  <td className="side-name">Code score</td>
                  <td>{this.props.marks.codeMarks}/10</td>
                </tr>
                <tr>
                  <td className="side-name bold">Total score</td>
                  <td className="bold">{this.props.marks.mcqMarks+this.props.marks.fillMarks+this.props.marks.codeMarks}/30</td>
                </tr>
              </tbody>
              {/* - <br/>
              Fill in the blanks score-{this.props.marks.fillMarks}/10 <br/>
              Code Score-{this.props.marks.codeMarks}/10 <br/>
              Total Score-{this.props.marks.mcqMarks+this.props.marks.fillMarks+this.props.marks.codeMarks}/30 <br/> */}
            </table>
            <button className="start-button">Exit</button>
          </div>
        )}
      </Box>
    );
  }
}
function mapstatetoprops(state) {
  return {
    marks: state.marks,
    mcqs: state.mcqs,
    fills: state.fills,
    code: state.code,
  };
}

export default connect(mapstatetoprops)(Test);
