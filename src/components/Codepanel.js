import React, { Component } from 'react';
import { fetchCode } from '../actions/code';
import { connect } from "react-redux";


class Codepanel extends Component {

    render() {
        if(this.props.code===undefined){
            return<div>Loading</div>
        }
        const code=this.props.code;
        return (
            <div>
                
                <div className='problem-text'>
                    Problem
                </div>
               
                
                <div className='code-question'> 
                    {code.question}
                </div>
                <div>
                    <div className='sample-input-heading'>
                        Sample input 1
                    </div>
                    <div className='sample-input'>
                        {code.test1}
                    </div>
                    <div className='sample-output-heading'>
                        Sample output 1
                    </div>
                    <div className='sample-output'>
                        {code.answer1}
                    </div>
                </div>
                <div>
                    <div className='sample-input-heading'>
                        Sample input 2
                    </div>
                    <div className='sample-input'>
                        {code.test2}
                    </div>
                    <div className='sample-output-heading'>
                        Sample output 2
                    </div>
                    <div className='sample-output'>
                        {code.answer2}
                    </div>
                </div>


            </div>
        );
    }
}
function mapstatetoprops(state) {
    return {
      code: state.code
    };
  }
  
  export default connect(mapstatetoprops)(Codepanel);