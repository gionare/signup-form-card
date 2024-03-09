import styled from "styled-components";

export const Header = styled.h1`
  width: 327px;
  /* margin: 0 0 16px; */
  font-size: 28px;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: -0.29px;
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
  @media screen and (min-width: 1440px) {
    width: 525px;
    margin: 0 0 11px;
    font-size: 50px;
    line-height: 1.1;
    letter-spacing: -0.52px;
    text-align: left;
  }
`;

export const SeeHow = styled.p`
  width: 327px;
  margin: 16px 0 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.63;
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
  @media screen and (min-width: 1440px) {
    width: 525px;
    margin: 11px 45px 0 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.63;
    text-align: left;
    color: #fff;
  }
`;

export const SevenDayTrial = styled.div`
  width: 327px;
  padding: 24px;
  margin: 0 0 24px;
  padding: 18px 66px 18px 67px;
  border-radius: 10px;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: #5e54a4;
  font-size: 15px;
  color: #fff;
  line-height: 1.73;
  letter-spacing: 0.27px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;
