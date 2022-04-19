import styled from "styled-components";
import { useState, useEffect } from "react";
import AddtoCart from "./AddtoCart";
import { Alert } from "bootstrap";

const data = {
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
  price: 150,
};

const StyledDetails = styled.div`
  & .subheading {
    color: #ff7d1b;
    font-size: 20px;
    text-transform: uppercase;
  }

  & .heading {
    font-size: 40px;
  }

  & .price {
    font-size: 30px;
    font-weight: bold;
  }

  & .label {
    padding: 5px;
    color: #ff7d1b;
    background-color: #feefe3;
    display: inline-block;
    margin-left: 10px;
  }

  & .blured {
    color: #f7f8fd;
    text-decoration: line-through;
  }

  & .increase-decrease,
  .input {
    padding: 10px;
    background-color: #f7f8fd;
    color: #ff7d1b;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }

  & input {
    text-align: center;
    color: #000;
    width: 100px;
    background-color: #f7f8fd;
    border: none;
    font-weight: bold;
  }
`;

const ProdDetails = () => {
  const [quantity, setQuantity] = useState(0);

  const [moreInfo, setmoreInfo] = useState({
    title: "",
    qty: 0,
    total: 0,
  });

  const changeQty = (e) => {
    setQuantity(e.target.value);
  };

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  const addToCart = () => {
    console.log(moreInfo);
  };

  useEffect(() => {
    setmoreInfo({
      title: data.name,
      qty: quantity,
      total: data.price * quantity,
    });
  }, [quantity]);

  return (
    <StyledDetails className="row">
      <div className="col-12">
        <h3 className="subheading">Sneaker Company</h3>
        <h2 className="heading">{data.name}</h2>
        <p className="description">{data.description}</p>
        <div className="price">
          ${data.price} <span className="label">50%</span>
        </div>
      </div>
      <div className="col-md-6 d-flex">
        <div className="increase-decrease" onClick={increment}>
          +
        </div>
        <input name="quantity" onChange={changeQty} value={quantity} />
        <div className="increase-decrease" onClick={decrement}>
          -
        </div>
      </div>
      <div className="col-md-6">
        <AddtoCart add={addToCart} />
      </div>
    </StyledDetails>
  );
};

export default ProdDetails;
