import styled from "styled-components";

export const Form = styled.form`
  margin: auto;
  min-width: none;
  max-width: 600px;
  background-color: rgba(255, 228, 196, 0);
  padding: 15px;

  @media (max-width<600px) {
    width: 600px;
  }
`;

export const Header = styled.h1`
  max-width: 100vh;
  text-align: center;
  font-size: large;
  color: rgb(255, 255, 255);
  background-color: rgb(67, 148, 241);
  margin: 0 auto 30px;
  padding: 10px 75px;
  border: 1px solid rgb(38, 97, 165);
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  width: 300px;
  margin: auto;
`;

export const Field = styled.input`
  width: 190px;
  max-width: 190px;
  float: right;
`;

export const WrapperButton = styled.div`
  text-align: center;
  padding: 10px 0;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 30px;
  margin: 50px auto 5px;
  background-color: rgb(175, 179, 175);
  border: 1px solid rgb(126, 128, 126);
  border-radius: 5px;
  color: rgb(10, 10, 10);
  font-size: 15px;

  &:hover {
    background-color: rgba(175, 179, 175, 0.815);
    cursor: pointer;
  }
`;

export const Info = styled.p`
  margin: 0 auto;
  font-size: small;
  text-align: center;
`;
