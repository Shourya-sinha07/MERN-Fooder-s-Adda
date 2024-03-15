import React, { useEffect, useRef, useState, useCallback } from "react";
import "./style.css";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();
  const options = props.options;
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);

  const calculateFinalPrice = useCallback(() => {
    const optionPrice = options[size] || 0;
    return qty * parseInt(optionPrice);
  }, [options, size, qty]);

  const handleAddtoCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size === size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size
        });
        return
      }
      return
    }
    // console.log(data);
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size
    });
  };

  const finalPrice = calculateFinalPrice();

  useEffect(() => {
    const newFinalPrice = calculateFinalPrice();
    if (newFinalPrice !== finalPrice) {
      setSize(priceRef.current.value);
    }
  }, [qty, size, options, calculateFinalPrice, finalPrice]);

  return (
    <div>
      <div
        className="card mt-4 cardimp"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          className="card-img-top"
          src={props.foodItem.img}
          alt=""
          style={{ height: "140px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select
              name=""
              id=""
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setQty(parseInt(e.target.value))}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name=""
              id=""
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">Rs. {finalPrice}</div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleAddtoCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
