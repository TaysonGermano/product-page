import styled from "styled-components";
import image from "../img/image-avatar.png";

const StyledAvatar = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid #f87f25;
  border-radius: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => props.url};
  cursor: pointer;
`;

const Avatar = (props) => {
  return <StyledAvatar url={`url(${image})`} />;
};

export default Avatar;
