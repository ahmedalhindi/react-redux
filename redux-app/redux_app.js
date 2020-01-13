// from terminal
// 1- npm init
// 2- npm i redux



// importing redux
const redux = require('redux')
const {createStore} = redux

// creating initial State to reducer
const initialState = {
    queueCounter: 0
}


// reducer used to interact with store
const reducer = (state=initialState, action) =>{

    switch (action.type) {
        case "ADD_CUSTOMER":
            return{
                ...state,
                queueCounter: state.queueCounter +1
            }
        case "CANCLED_CUSTOMER":
            return{
                ...state,
                queueCounter: state.queueCounter -1
            }
        case "ADD_CUSTOMER_FIVE":
            return{
                ...state,
                queueCounter: state.queueCounter + action.value
            }
        default:
            return state;
    }


}
// creating store and passing reducer
const store = createStore(reducer)
// subscribe console log to check state every time dispatch is called
store.subscribe(()=>{
    console.log(store.getState())
})


// dispatches sent to interact with store
store.dispatch({
    type:"ADD_CUSTOMER"
})

store.dispatch({
    type:"ADD_CUSTOMER"
})

store.dispatch({
    type:"ADD_CUSTOMER"
})

store.dispatch({
    type:"ADD_CUSTOMER"
})

store.dispatch({
    type:"CANCLED_CUSTOMER"
})


// dispatch with a value
store.dispatch({
    type:"ADD_CUSTOMER_FIVE",
    value:5
})