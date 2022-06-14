import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import {
  Container,
  FormGroup,
  NumericInput,
  ResetButton,
} from "./converter.styles";
import { toVerbal } from "../utils/numberUtils";

const Converter = ({ children }) => {
  const [store, dispatch] = useReducer(
    (current, update) => ({
      ...current,
      ...update,
    }),
    {}
  );

  const validate = (input) => {
    if (/^[0-9\b]*$/.test(input)) return true;
    return false;
  };

  const convert = () => {
    try {
      dispatch({ error: undefined, result: undefined });
      dispatch({ result: toVerbal(store.input) });
    } catch (e) {
      dispatch({ error: e.message });
    }
  };

  return (
    <>
      <Container>
        <div className="converter">
          <FormGroup>
            <NumericInput
              placeholder="Enter your numbers..."
              type="text"
              value={store.input}
              onChange={(e) =>
                validate(e.target.value) && dispatch({ input: e.target.value })
              }
            />
            <Button
              onClick={convert}
              variant="warning"
              type="button"
              className="m-2"
            >
              Show words
            </Button>
            <ResetButton
              onClick={() => dispatch({ input: "" })}
              variant="outline-secondary"
              type="button"
            >
              Reset text
            </ResetButton>
          </FormGroup>
        </div>
      </Container>
      {children({ result: store.result, error: store.error })}
    </>
  );
};

export default Converter;
