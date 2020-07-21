import styled from "styled-components";
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;

  margin: 0 auto;
  
`;

export const Form = styled(Unform)`
  background-color: white;
  padding: 64px;
  margin: 80px auto;

  border-radius: 8px;
  max-width: 730px;
  

  > h1 {
    font-size: 36px;
  }

  > button {
    width: 260px;
    height: 56px;

    background-color: var(--primary-color);
    border-radius: 8px;

    color: white;
    font-weight: bold;
    font-size: 16px;

    border: 0;

    margin-top: 40px;

    transition: background-color 400ms;

    &:hover {
      background-color: #2fb86e;
    }
  }
`;

export const Fieldset = styled.div`
  margin-top: 64px;
  border: 0;
  > legend {
    margin-top: 30px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > h2 {
      font-size: 24px;
    }

    > span {
      font-size: 14px;
      color: var(--title-color);
    }
  }
`;

export const FieldGroup = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    margin-top: 0;
  }
  
`;

export const Field = styled.div`
  flex-direction: column;
  margin-bottom: 24px;
  display: flex;
  flex: 1;

  @media (max-width: 1100px) {
    margin-top: 0;
  }

  &:first-child {
    margin-right: 24px;
  }
  > input {
    background-color: var(--back-color);
    border: 0;

    padding: 16px 24px;
    font-size: 16px;

    border-radius: 8px;
  }
  > select {
    background-color: var(--back-color);
    border: 0;

    padding: 16px 24px;
    font-size: 16px;

    border-radius: 8px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  > label {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 1100px) {
    flex-shrink: 20;
  }

  > li {
    background-color: var(--back-color);
    list-style: none;

    border: 2px solid var(--back-color);
    border-radius: 8px;

    height: 180px;

    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    text-align: center;
    cursor: pointer;

    > span {
      margin-top: 12px;
      flex: 1;

      display: flex;
      align-items: center;
      color: var(--title-color);
    }
  }
  > img,
  span {
    cursor: pointer;
  }
`;
