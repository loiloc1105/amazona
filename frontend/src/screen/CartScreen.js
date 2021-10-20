import React from "react";
import { useParams } from "react-router-dom";

const CartScreen = (props) => {
  const { id } = useParams();
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

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
