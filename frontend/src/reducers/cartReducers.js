import { ADD_ITEM_CART, REMOVE_ITEM_CART } from "../contants/cartContants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case REMOVE_ITEM_CART:
      return { ...state , cartItems : state.cartItems.filter( x => x.product !== action.payload) };
    default:
      return { ...state };
  }
};
