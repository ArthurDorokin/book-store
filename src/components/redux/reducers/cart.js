import {books} from "../../constans";

const initialState = {
    cart: [],
    totalPrice: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const check = state.cart.every(item => item.id !== action.forAdd);
            if (check) {
                const productSelection = books.filter(item => item.id === action.forAdd);
                return {cart: state.cart.concat(productSelection),};
            } else {
                alert("The product has been added to cart.");
            }
        case "REMOVE_FROM_CART":
            if (window.confirm("Do you want to delete this product?")) {
                return {
                    cart: state.cart.filter(item => item.id !== action.forDelete)
                };
            }
        default:
            return state;
    }
};