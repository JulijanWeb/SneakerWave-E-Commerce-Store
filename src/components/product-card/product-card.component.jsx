import React from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useState } from "react";
import useCartStore from "../../shop/cart-store.store";

const ProductCard = ({
  imageUrl,
  name,
  price,
  sizes,
  id,
  quantity,
  category,
}) => {
  const { addToCart, updateIfExists, cart } = useCartStore();
  const [cSize, setcSize] = useState();
  const setSelectedSize = useCartStore((state) => state.setSelectedSize);

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setcSize(newSize);
    setSelectedSize(newSize);
  };

  const buttonClick = ({ imageUrl, name, price, id, quantity }) => {
    if (cSize) {
      let pass = false;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          updateIfExists({
            imageUrl,
            name,
            price,
            cSize,
            id,
            quantity,
          });
          pass = true;
        }
      }
      if (pass === false) {
        addToCart({ imageUrl, name, price, cSize, id, quantity });
      }
    }
  };
  return (
    <div className="product-card-container">
      <div className="size-dropdown">
        <select className="dropdown" value={cSize} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          {sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <span className="category">Category: {category?.name}</span>
      </div>
      <Button
        buttonType={cSize ? "" : "disabled"}
        onClick={() => buttonClick({ imageUrl, name, price, id, quantity })}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
