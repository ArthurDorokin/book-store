import {books} from "../../constans";

const initialState = {
    cart: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const check = state.cart.every(item => item.id !== action.payload);
            if (check) {
                const productSelection = books.filter(item => item.id === action.payload);
                return { cart: state.cart.concat(productSelection) };
            } else {
                alert("The product has been added to cart.");
            }
        case "REMOVE_FROM_CART":
            return {
                cart: state.cart.filter(item => item.id !== action.forDelete)
            };
        default:
            return state;
    }
};