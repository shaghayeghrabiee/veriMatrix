import React from "react";
import { Alert } from "react-bootstrap";
import { ResultStyle } from "./mainPage.styles";
import Converter from "../components/converter";

const MainPage = () => {
  return (
    <Converter>
      {({ result, error }) => (
        <>
          {!error && <ResultStyle>{result}</ResultStyle>}
          {error && <Alert variant="danger">{error}</Alert>}
        </>
      )}
    </Converter>
  );
};
export default MainPage;
