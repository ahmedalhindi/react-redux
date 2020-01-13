// 1- npm init
// 2- npm i redux
// imports

const redux = require('redux')
const {createStore} = redux

const initialState = {
    queueCounter: 0
}

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


const store = createStore(reducer)
store.subscribe(()=>{
    console.log(store.getState())
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
    type:"ADD_CUSTOMER"
})

store.dispatch({
    type:"CANCLED_CUSTOMER"
})

store.dispatch({
    type:"ADD_CUSTOMER_FIVE",
    value:5
})