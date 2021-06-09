import React from "react";
const Laptops = ({ laptops, addToCart }) => {
  return (
    <>
      {" "}
      <ul>
        {laptops.map(laptop => (
          <li key={laptop.id}>
            <h3>{laptop.name}</h3>
            <img src={laptop.image} alt={laptops.name} />
            <p>Sale: {laptop.isSale ? "Действует акционная цена" : "В акции не участвует"}</p>
            <p>{laptop.description}</p>

            <p>
              Цена: <span>{laptop.price}</span>
            </p>
            <button type="button" onClick={addToCart}>
              add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Laptops;
