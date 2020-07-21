import styled from "styled-components";

export const Headers = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    color: var(--title-color);
    font-weight: bold;
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      background-image: url("../assets/arrow-left.svg");

      display: flex;

      width: 20px;
      height: 24px;
    }
  }
`;
