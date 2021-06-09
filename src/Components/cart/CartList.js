import React from "react";
import CartListItem from "./cartListItem/CartListItem";
const CartList = ({ cart, removeFromCart, removeAllCart }) => {
  return (
    <>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map(product => (
              <CartListItem key={product.id} product={product} removeFromCart={removeFromCart} />
            ))}
          </ul>
          <button onClick={removeAllCart} type="button">
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Корзина пустая</p>
      )}
    </>
  );
};

export default CartList;
