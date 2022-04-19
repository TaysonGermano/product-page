import icon from "../img/icon-cart.svg";
import styled from "styled-components";
// context to import

const StyledCart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;

  .dialog {
    position: absolute;
    width: 350px;
    top: 50px;
    left: -12em;
    display: none;
    background-color: #fff;
    padding: 10px;
    font-size: 13px;

    & h3 {
      font-size: 16px;
      padding: 10px 0px;
      border-bottom: solid #444444 1px;
      margin-bottom: 15px;
    }
  }

  &:hover .dialog {
    display: block;
  }
`;

const Products = (props) => (
  <div className="row">
    <div className="col-3">
      <img src={props.thumb} alt="product" />
    </div>
    <div className="col-6">
      <div className="title">Title{props.title}</div>
      <div className="prod-details">
        $150.00{props.price} x 2{props.qty} <b>$300.00{props.total}</b>
      </div>
    </div>
    <div className="col-3">Delete</div>
  </div>
);

const Cart = () => {
  return (
    <StyledCart>
      <img src={icon} alt="cart" />
      <div className="dialog">
        <h3>Cart</h3>
        <Products />
      </div>
    </StyledCart>
  );
};

export default Cart;
