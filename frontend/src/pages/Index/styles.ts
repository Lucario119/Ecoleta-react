import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Containers = styled.div`
  background-color: #0e0a14ef;

  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 400ms;

`;

export const Contents = styled.div`
  color: white;

  width: 420px;
`;
export const Headers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 48px;

  > a {
    background: url("../../assets/x.svg");

    width: 20px;
    height: 20px;

    display: flex;

    font-size: 0.01px;
  }
  > h1 {
    color: white;

    font-size: 36px;
    line-height: 42px;
  }
`;
export const Form = styled(Unform)`
  >label {
    font-size: 14px;
    line-height: 16px;

    display: block;
    margin-bottom: 8px;
  }

`;
export const SearchField = styled.div`
  display: flex;

  >input {
    flex: 1;

    background-color: var(--back-color);

    border-radius: 8px 0 0 8px;
    border: 0;

    padding: 16px 24px;
    color: #6c6c80;
  }
  >button {
    width: 72px;
    height: 72px;

    background-color: var(--primary-color);

    border: 0;
    border-radius: 0 8px 8px 0;

    &:hover {
      background-color: #2fb85e;
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  background: url("../../assets/home-background.svg") no-repeat;
  background-position: 35vw bottom;

  @media (max-width: 1100px) {
    background-position-x: 70vw;
  }
`;
export const Content = styled.div`
  width: 90%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.div`
  margin-top: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    display: flex;

    color: var(--title-color);
    font-weight: 700;

    > span {
      margin-right: 16px;
      display: flex;

      background-image: url("../../assets/log-in.svg");

      width: 20px;
      height: 20px;
    }

    @media (max-width: 1100px) {
      position: absolute;
      bottom: 48px;

      left: 50px;
      transform: translateX(-50%);
    }
  }
`;

export const Main = styled.div`
  max-width: 560px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {
    align-items: center;
  }

  > h1 {
    font-size: 54px;
    color: var(--title-color);
  }

  > p {
    font-size: 24px;
    line-height: 38px;
    margin-top: 24px;
  }

  > a {
    width: 100%;
    max-width: 360px;
    height: 72px;

    border-radius: 8px;

    display: flex;
    align-items: center;

    margin-top: 40px;

    background-color: var(--primary-color);

    transition: 400ms;

    font-weight: bold;

    &:hover {
      background-color: var(--primary-color);
    }
    > span {
      width: 72px;
      height: 72px;

      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

      background-color: rgba(0, 0, 0, 0.08);

      display: flex;
      align-items: center;
      justify-content: center;

      ::after {
        content: "";
        background-image: url("../../assets/search.svg");

        width: 20px;
        height: 20px;
      }
    }

    > strong {
      flex: 1;
      color: white;
      text-align: center;
    }
  }
`;
