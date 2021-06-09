import React from "react";
import { PhoneColorListItem, PhoneItemContainer } from "./PhoneListItemStyled";

const PhoneListItem = ({ phone, addToCart }) => {
  return (
    <>
      {" "}
      <PhoneItemContainer>
        <div className="itemWraper">
          {" "}
          <h3 className="phoneTitle">{phone.name}</h3>
          <img className="itemImg" src={phone.image} alt={phone.name} />
          <p>Sale: {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}</p>
          {/* <p>{phone.description}</p> */}
          <ul className="itemColorList">
            {phone.colors.map(color => (
              <PhoneColorListItem key={color} color={color} />
            ))}
          </ul>
          <p>
            Цена: <span>{phone.price}</span>
          </p>
          <button type="button" onClick={() => addToCart(phone)}>
            Add to bin
          </button>
        </div>
      </PhoneItemContainer>
    </>
  );
};

export default PhoneListItem;
