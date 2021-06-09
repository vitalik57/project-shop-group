import React from "react";
const CartListItem = ({ product, removeFromCart }) => {
  const remove = () => removeFromCart(product.id);
  return (
    <li>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button type="button" onClick={remove}>
        remove
      </button>
    </li>
  );
};

export default CartListItem;
