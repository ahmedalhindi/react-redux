const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC_COUNTER":
            return{
                ...state,
                counter: state.counter + 1
            }
        case "ADD_TO_COUNTER":
            return{
                ...state,
                counter: state.counter + action.value
            }
        default:
            return state
    }

}

export default reducer