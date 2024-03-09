import styled from "styled-components";

export const Form = styled.div`
  width: 327px;
  margin: 24px 0 0;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;

  input::placeholder {
    opacity: 0.75;
    font-size: 14px;
    font-weight: 600;
    color: #3d3b48;
  }

  @media screen and (min-width: 768px) {
    width: 420px;
  }
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const StyledInput = styled.input`
  width: 279px;
  margin: 0 0 16px;
  padding: 15px 0 15px 19.4px;
  border-radius: 5px;
  border: solid 1px #dedede;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 460px;
  }
`;

export const Button = styled.button`
  width: 279px;
  margin: 16px 0 8px;
  padding: 15px 45px 15px 44px;
  border-radius: 5px;
  box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);
  background-color: #38cc8b;
  cursor: pointer;

  span {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.73;
    letter-spacing: 1px;
    text-align: center;
    color: #fff;
    white-space: nowrap;
  }

  @media screen and (min-width: 768px) {
    width: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 460px;
  }
`;

export const TermsServices = styled.p`
  width: 249px;
  margin: 8px 15px 0;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.91;
  margin: auto;
  color: #bab7d4;

  .redText {
    color: #ff7979;
  }
`;
