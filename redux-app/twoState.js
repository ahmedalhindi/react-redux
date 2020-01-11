// Imports
const redux = require('redux')
const {createStore} = redux

// Initial state definition
const initialState = {
    counterA: 0,
    counterB: 0
}

// reducer callback takes two parameters state and action
const reducer = (state = initialState, action)=>{
    // switch monitors action types and perform apropriate functionon state
    switch (action.type) {
        case "INC_COUNTERA":
            return{
                ...state,
                counterA: state.counterA +1
            }
        case "INC_COUNTERB":
            return{
                ...state,
                counterB: state.counterB +1
            }
    
        default:
            return state
    }
}
const store = createStore(reducer)
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({
    type: "INC_COUNTERA"
})

store.dispatch({
    type: "INC_COUNTERB"
})