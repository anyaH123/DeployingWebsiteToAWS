import { createStore } from 'redux';
import { UPDATE_PRODUCTS } from './ActionType';

const initialState = {
    products: []
}

const storeReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

const productsStore = createStore(storeReducer, initialState);

export default productsStore;

