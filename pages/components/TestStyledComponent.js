import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";
import Dialog from "./Dialog";

const TestStyledComponent = () => {
  const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
  `;

  const ButtonGroup = styled.div`
    & + & {
      margin-top: 10rem;
    }
  `;

  return (
    <div>
      <ThemeProvider
        theme={{
          palette: {
            blue: "#228be6",
            gray: "#495057",
            pink: "#FFEE72",
          },
        }}
      >
        <>
          testStyledComponent
          <AppBlock>
            <ButtonGroup>
              <Button size="large">BUTTON</Button>
              <Button>BUTTON</Button>
              <Button size="small">BUTTON</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="gray" size="large">
                BUTTON
              </Button>
              <Button color="gray">BUTTON</Button>
              <Button color="gray" size="small">
                BUTTON
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="pink" size="large">
                BUTTON
              </Button>
              <Button color="pink">BUTTON</Button>
              <Button color="pink" size="small" outline fullWidth>
                BUTTON
              </Button>
            </ButtonGroup>
          </AppBlock>
        </>
      </ThemeProvider>
    </div>
  );
};

export default TestStyledComponent;
