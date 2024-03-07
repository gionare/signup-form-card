import { useState } from "react";
import { GlobalStyles } from "./Globals";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="informative-content">
        <Header>Learn to code by watching others</Header>
        <SeeHow>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </SeeHow>
      </div>
      <Form />
    </>
  );
}

export default App;

const Header = styled.h1`
  width: 327px;
  margin: 0 0 16px;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: -0.29px;
  color: #fff;
`;

const SeeHow = styled.p`
  width: 327px;
  margin: 16px 0 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  color: #fff;
`;

const Form = styled.form`
  width: 327px;
  padding: 24px;
  margin: 24px 0 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
`;
