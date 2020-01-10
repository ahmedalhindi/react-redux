import React, { Component } from "react"
import "./CounterTwo.css"
import {connect} from 'react-redux';

class CounterTwo extends Component {
  // state = {
  //   counter: 0
  // }

  // addTwo = () => {
  //   this.setState(({ ...copyState }) => {
  //     copyState.counter += 2
  //     return copyState
  //   })
  // }
  render() {
    return (
        <div className="CounterTwo">
            <h1>{this.props.counter}</h1>
            <button onClick={this.props.addTwo}>Add Two</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addTwo: ()=> dispatch({type: "ADD_TO_COUNTER",value:2})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterTwo)
