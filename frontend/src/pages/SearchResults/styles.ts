import styled from "styled-components";
import Headers from "../../components/Header";

export const Body = styled.div`
  ::after {
    content: "";
    position: fixed;
    background: white;
    top: 260px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  /*alinhamento de caixa (pelo lado de fora da caixa) */
  margin: 0 auto;
`;
export const Header = styled(Headers)`
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
      background-image: url("../../assets/arrow-left.svg");

      display: flex;

      width: 20px;
      height: 24px;
    }
  }
`;
export const Main = styled.div`
    margin: 48px;
  > h4 {
    font-weight: normal;
    font-family: Roboto, sans-serif;

    margin-bottom: 32px;
  }
`;

export const Cards = styled.div`
 display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
`;

export const Card = styled.div`
 > img {
    width: 100%;
    height: 150px;

    object-fit: cover;

    border-radius: 8px 8px 0 0;
 }
 > h1 {
    margin-top: 32px;
    font-size: 36px;
    line-height: 41px;
    color: var(--title-color);
 }
 > h3 {
    margin: 24px 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;

    color: var(--primary-color);
 }
 > p {
    font-size: 16px;
    line-height: 26px;

    color: #6C6C80;
 }
`;
