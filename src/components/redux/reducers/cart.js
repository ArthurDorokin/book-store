const initialState = {
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO":
            return {
                ...state,
                items: [...state.items, action.payload
                ],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
            };
            break;
        default:
            return state;
    }
};