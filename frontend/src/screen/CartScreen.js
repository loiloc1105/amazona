import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItemCart } from "../actions/cartActions";

const CartScreen = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  useEffect(() => {
    if (id) {
      dispatch(addItemCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : PRODUCT ID : {id} : QTY : {qty}
      </p>
    </div>
  );
};

export default CartScreen;
