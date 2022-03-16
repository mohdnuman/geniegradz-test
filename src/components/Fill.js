import React, { Component } from 'react';
import { fetchFills } from '../actions/fills';
import FillQuestion from './FillQuestion';
import { connect } from "react-redux";


class Fill extends Component {
 
    
    render() {
        if(this.props.fills===undefined){
            return <div>Loading</div>
        }
        return (
            <div className='questions-window'>
                {this.props.fills.questions.map((fill) => (
                <FillQuestion fill={fill} key={fill._id} dispatch={this.props.dispatch} />
              ))}
            </div>
        );
    }
}
function mapstatetoprops(state) {
    return {
      // fills: state.fills
    };
  }
  
  export default connect(mapstatetoprops)(Fill);