/* eslint-disable no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        MephistoDevelop Tutorial <br />
        <button onClick={this.props.counterUp}>Counter++</button>
        <button onClick={this.props.counterDown}>Counter--</button>
        <p> Counter {this.props.counter} </p>
      </div>
    );
  }
}

const  mappingStateToProps = (state) =>{
  return{
    counter:state.counter
  }
};

const mappingDispatchToProps = (dispatch) =>{
  return {
    counterUp: () => dispatch({type:'COUNTER_UP'}),
    counterDown: () => dispatch({type:'COUNTER_DOWN'})
  }
};


export default connect(mappingStateToProps,mappingDispatchToProps) (App);
