const redux = require('redux')
// createStore to create store
const { createStore } = redux
const initialState = {
    counter: 0
}
// Reducer
const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case  "INC_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "ADD_COUNTER": 
            return {
                ...state,
                counter: state.counter + action.value
            }
        default:
             return state;
    }
};
// create Store
const store = createStore(rootReducer)
// Subscription
store.subscribe(() => {
    console.log(store.getState())
})
// Dispatch Action
store.dispatch({
    type: "INC_COUNTER"
})
// Dispatch Action
store.dispatch({
    type: "ADD_COUNTER",
    value: 5
})