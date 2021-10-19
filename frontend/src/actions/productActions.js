import Axios from "axios";
import { PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../contants/productContants"

export const listProduct = () => async(dispatch) =>{
    dispatch({ type : PRODUCT_LIST_REQUEST})
    try {
        const { data } = await Axios.get("/api/products");
        dispatch({ type : PRODUCT_LIST_SUCCESS , payload : data });
    } catch (error) {
        dispatch({ type : PRODUCT_LIST_ERROR , payload : error.message });
    }
}