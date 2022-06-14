import styled from "styled-components";
import backgroundImage from "../asset/1.jpg";

export const Container = styled.div`
  background: url(${backgroundImage}) fixed;
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResetButton = styled.button`
  background-color: #7c654d;
  border-radius: 3px;
  color: #fff;
  border: none;
  height: 39px;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const FormGroup = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 40px;
`;

export const NumericInput = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  pading: 5px;
  display: block;
  width: 100%;
  height: 35px;
`;
