import React, { Component } from 'react';
import { fetchMcqs } from '../actions/mcqs';
import McqQuestion from './McqQuestion';
import { connect } from "react-redux";


class Mcq extends Component {
    
    render() {
        if(this.props.mcqs===undefined){
            return <div>Loading</div>
        }
        return (
            <div className='questions-window'>
                {this.props.mcqs.questions.map((mcq) => (
                <McqQuestion mcq={mcq} key={mcq._id} dispatch={this.props.dispatch}/>
              ))}
            </div>
        );
    }
}
function mapstatetoprops(state) {
    return {
    };
  }
  
  export default connect(mapstatetoprops)(Mcq);