import {books} from "../../constans";

const initialState = {
    books
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {...state};
        default:
            return state;
    }
};