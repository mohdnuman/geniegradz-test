import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import {cpp } from "@codemirror/lang-cpp";
import { executeCode } from "../actions/code";
import { oneDark } from '@codemirror/theme-one-dark';

class CodeEditor extends Component {
  constructor(props){
    super(props);
    this.state={
      script:'',
      clientId:"a8d88af157f47d83f283df8e1446f5e4",
      clientSecret:"88dbbb29ea73993a546a46890c111d2275b627c6aa94b468dcdcb1b34a33c2ef",
      language:'cpp',
      versionIndex:0

    }
  }
  handleSubmit=()=>{
    // this.props.dispatch(executeCode(this.state));
  }
  render() {
    return (
      <div>
        {/* <textarea  className='editor'/> */}
        <CodeMirror
          className="editor"
          value="cout<<'hello world';"
          height="94vh"
          theme={oneDark}
          // extensions={[javascript({ jsx: true })]}
          extensions={[cpp()]}
          onChange={(value, viewUpdate) => {
            console.log("value:", value);
            this.setState({script:value});
          }}
        />
        <div className="submit-button-container"><button className="code-submit-button" onClick={this.handleSubmit}>Submit</button></div>
      </div>
    );
  }
}

export default CodeEditor;
