import { useState } from "react";
import styled from "styled-components";
import product1 from "../img/image-product-1.jpg";
import product2 from "../img/image-product-2.jpg";
import product3 from "../img/image-product-3.jpg";
import product4 from "../img/image-product-4.jpg";
import thumb1 from "../img/image-product-1-thumbnail.jpg";
import thumb2 from "../img/image-product-2-thumbnail.jpg";
import thumb3 from "../img/image-product-3-thumbnail.jpg";
import thumb4 from "../img/image-product-4-thumbnail.jpg";

const prodImage = {
  images: [product1, product2, product3, product4],
  thumbnail: [thumb1, thumb2, thumb3, thumb4],
};

const StyledGalery = styled.div`
  & .main-img {
    cursor: pointer;
  }

  & img {
    cursor: pointer;
  }
`;

const ProdGalery = (props) => {
  const [image, setImage] = useState(prodImage.images[0]);

  function changeImage(img) {
    setImage(img);
  }

  return (
    <StyledGalery className="row">
      <div className="main-img col-12">
        <img src={image} alt="Shoes" className="img-fluid" />
      </div>
      {prodImage.thumbnail.map((img, i = 0) => (
        <div className="col-md-3 thumbnail">
          <img
            src={img}
            alt="thumbnail"
            onClick={(prod) => changeImage(prodImage.images[i++])}
          />
          {console.log(i)}
        </div>
      ))}
    </StyledGalery>
  );
};

export default ProdGalery;
