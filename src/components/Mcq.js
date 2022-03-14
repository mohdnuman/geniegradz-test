import React, { Component } from 'react';
import { fetchMcqs } from '../actions/mcqs';
import McqQuestion from './McqQuestion';
import { connect } from "react-redux";


class Mcq extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMcqs());
    }
    
    render() {
        if(this.props.mcqs===undefined){
            return <div>Loading</div>
        }
        return (
            <div className='questions-window'>
                {this.props.mcqs.map((mcq) => (
                <McqQuestion mcq={mcq} key={mcq._id} dispatch={this.props.dispatch} className={mcq.answered&&'answered'}/>
              ))}
            </div>
        );
    }
}
function mapstatetoprops(state) {
    return {
      mcqs: state.mcqs
    };
  }
  
  export default connect(mapstatetoprops)(Mcq);