import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addItemCart, removeItemCart } from "../actions/cartActions";
import MessingBox from "../components/MessingBox";

const CartScreen = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addItemCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeCartItemHandler = (id) => {
    // delete actions
    dispatch(removeItemCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  }

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessingBox>
            Cart is empty.<Link to="/">Go to Shopping</Link>
          </MessingBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addItemCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((count) => (
                        <option key={count + 1} value={count + 1}>
                          {count + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeCartItemHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        {/* reduce((previousValue, currentValue) => { ... }, initialValue) */}
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                {" "}
                SubTotal: ({cartItems.reduce((a, b) => a + b.qty, 0)} items) ,
                Price: ${cartItems.reduce((a, b) => a + b.qty * b.price, 0)}{" "}
              </h2>
            </li>
            <li>
              <button type="button" 
              onClick={checkoutHandler}
              className="primary block"
              disabled={cartItems.length === 0}
              >
                Proceed to Check Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
