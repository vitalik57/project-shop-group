import styled from "styled-components";
export const PhoneListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  /* @media (min-width: 1024px) {
    width: 25%;
  } */
`;
