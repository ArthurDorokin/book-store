const initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return action.payload
        default:
            return state;
    }
};