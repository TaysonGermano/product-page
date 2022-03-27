import icon from "../img/icon-cart.svg";
import styled from "styled-components";

const StyledCart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const Cart = () => {
  return (
    <StyledCart>
      <img src={icon} alt="cart" />
    </StyledCart>
  );
};

export default Cart;
