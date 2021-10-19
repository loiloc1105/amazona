import {
    PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../contants/productContants";
const initialState = {
    products: [],
    loading: true,
}

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
