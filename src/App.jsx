import { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/Globals";
import { Form, StyledInput, Button, TermsServices } from "./styles/UI/Form";
import { Header, SeeHow, SevenDayTrial } from "./styles/UI/HeaderNdFree";
import GalaxyButton from "./components/GalaxyButton";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let errorsArray = [];
    if (!firstName.trim()) {
      errorsArray.push("First Name cannot be empty");
    }
    if (!lastName.trim()) {
      errorsArray.push("Last Name cannot be empty");
    }
    if (!email.trim() || !isValidEmail(email)) {
      errorsArray.push("Looks like this is not an email");
    }
    if (!password.trim()) {
      errorsArray.push("Password cannot be empty");
    }

    // Set errors array in state
    setErrors(errorsArray);

    if (errorsArray.length === 0) {
      setSuccess("Successfully registered");
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <SignUpCard>
      <div className="left-column" style={{ margin: "auto" }}>
        <GlobalStyles />
        <div className="informative-content">
          <Header>Learn to code by watching others</Header>
          <SeeHow>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </SeeHow>
        </div>
      </div>
      <div className="second-column">
        <SevenDayTrial>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </SevenDayTrial>
        <Form onSubmit={handleSubmit}>
          <StyledInput
            className="fnInput"
            type="text"
            placeholder="First Name"
            pattern="[A-Za-z]{2,}"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <StyledInput
            className="lnInput"
            type="text"
            placeholder="Last Name"
            pattern="[A-Za-z]{2,}"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <StyledInput
            className="email"
            type="email"
            placeholder="Email Adress"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <StyledInput
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <GalaxyButton type="submit" onClick={handleSubmit}></GalaxyButton>
          <TermsServices>
            By clicking the button, you are agreeing to our{" "}
            <span className="redText">Terms and Services</span>
          </TermsServices>

          {errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))}
          <SuccessMessage>{success}</SuccessMessage>
        </Form>
      </div>
    </SignUpCard>
  );
}

export default App;

const SignUpCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 20px;
  font-weight: bold;
`;
