import Axios from "axios"
import { ADD_ITEM_CART } from "../contants/cartContants";

export const addItemCart = (productId, qty) => async (dispatch , getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: ADD_ITEM_CART,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id, //product la id
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    // set local storage //getState chua hieu
}