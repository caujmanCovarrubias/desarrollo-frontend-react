import { SET_PRODUCTS } from './productTypes';

const initialState = {
    products: [] // Inicializa como un array vacío
  };
  
  function productReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        };
      default:
        return state;
    }
  }

export default productReducer;


