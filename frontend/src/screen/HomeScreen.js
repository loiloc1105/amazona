import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessingBox from "../components/MessingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector( state => state.productList)
  const { loading , error , product } = productList;

  useEffect(() => {
    dispatch(listProduct())
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessingBox variant="danger">{error}</MessingBox>
      ) : (
        <div className="row center">
          {product.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
