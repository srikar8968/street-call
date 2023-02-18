const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                count: state.count+1
            }
        case "DEC":
            return {
                ...state,
                count: state.count-1
            }
        case "INC_BY_VAL":
            return {
                ...state,
                count: state.count + action.payload.value
            }
        default:
            return state
    }
}

export default counterReducer