import React from "react";
import HeaderList from "./headerList/HeaderList";
import { HeaderContainer } from "./headerList/HeaderStyled";
import sprite from "../../icons/header/header.svg";

const Header = () => {
  return (
    <>
          <HeaderContainer>
              <svg className="headerLogo">
                  <use href={sprite +'#icon-home'}/>
              </svg>
              {window.screen.width < 768 ?( <svg className="headerLogo">
                  <use href={sprite + '#icon-list'} />
              </svg>) : <HeaderList />}
             
      
      </HeaderContainer>
    </>
  );
};

export default Header;
