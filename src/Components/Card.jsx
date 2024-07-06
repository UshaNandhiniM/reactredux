import "../index.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} from "../Redux/productsSlice";

const Card = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const totalPrice = products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
  const totalQuantity = products.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  );

  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-md-12">
          {products.map((product, index) => (
            <div key={index}>
              <div className="card mb-5 bg-bg-body-tertiary shadow overflow-auto">
                <div className="row g-0">
                  <div className="col-md-3">
                    <div className="img-box text-center">
                      <img
                        src={product.images[0]}
                        className="img-fluid rounded mt-5"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <h3 className="card-title fs-1">{product.title}</h3>
                      <h5 className="card-title fs-2">{product.brand}</h5>
                      <p className="card-text fs-3 lead">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="card-body d-flex flex-wrap justify-content-around align-items-center mt-5">
                      <button
                        className="btn btn-outline-success btn-md-lg fs-1"
                        onClick={() => dispatch(incrementQuantity(product.id))}
                      >
                        +
                      </button>
                      <p className="fs-1 border border-info p-1 m-1 rounded-1">
                        {product.quantity || 1}
                      </p>
                      <button
                        className="btn btn-outline-success btn-lg fs-1"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        -
                      </button>
                      <span className="fs-2 p-3">${product.price}.00</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-end m-5">
                      <button
                        className="btn btn-danger fs-2"
                        onClick={() => dispatch(removeProduct(product.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <hr className="ms-2" />
                      <div className="d-flex justify-content-between align-content-center flex-wrap">
                        <h3 className="text-muted">SHIPPING:</h3>
                        <h3>FREE</h3>
                      </div>
                      <div className="d-flex justify-content-between align-content-center flex-wrap">
                        <h3 className="text-muted">SUBTOTAL:</h3>
                        <h3>${product.price * (product.quantity || 1)}.00</h3>
                      </div>
                      <hr className="ms-2"></hr>
                      <div className="d-flex justify-content-between align-content-center flex-wrap">
                        <h3 className="fs-2">TOTAL:</h3>
                        <h3>${totalPrice}.00</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;