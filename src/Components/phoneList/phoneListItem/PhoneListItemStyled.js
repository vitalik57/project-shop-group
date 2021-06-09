import styled from "styled-components";

export const PhoneItemContainer = styled.li`
  width: 100%;
  padding: 10px 20px;
  /* background-color: green; */

  .itemWraper {
    border: 3px solid orange;
    border-radius: 14px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .phoneTitle {
    text-align: center;
  }
  .itemImg {
    width: 150px;
    margin-top: 20px;
  }
  .itemColorList {
    display: flex;
    list-style: none;
  }
  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;
export const PhoneColorListItem = styled.li`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 4px;
  border: 1px solid black;

  :not(:last-child) {
    margin-right: 20px;
  }
`;
