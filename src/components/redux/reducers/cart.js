import {books} from "../../constans";

const initialState = {
    cart: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const productSelection = books.filter(item => item.id === action.payload)
            return {
                ...state,
                cart: state.cart.concat(productSelection)
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};