import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 10px 30px;
  color: #fff;
  background-color: #ff7d1b;
  border-radius: 5px;
  width: 100%;
`;

const AddtoCart = (props) => (
  <StyledButton onClick={props.add}>Add to cart</StyledButton>
);

export default AddtoCart;
