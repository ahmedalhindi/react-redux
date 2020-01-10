import React, { Component } from 'react'
import "./CounterOne.css"
import {connect} from 'react-redux';
class CounterOne extends Component {
  // state = {
  //   counter: 0
  // }

  // addOne = () => {
  //     this.setState( ( {...copyState} ) => {
  //         copyState.counter += 1
  //         return copyState
  //     })
  // }
  render() {
    return (
      <div className="CounterOne">
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.addOne}>Add One</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addOne: ()=> dispatch({type: "INC_COUNTER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterOne)
