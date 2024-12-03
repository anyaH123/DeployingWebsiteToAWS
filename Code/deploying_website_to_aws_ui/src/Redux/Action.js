import {UPDATE_PRODUCTS} from "./ActionType";

export const UpdateProducts = (payload) => {
    return {
        type: UPDATE_PRODUCTS,
        payload: payload
    }};