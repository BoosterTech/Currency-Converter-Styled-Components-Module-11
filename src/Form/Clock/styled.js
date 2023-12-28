import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: right;
  margin-bottom: 10px;
  font-family: monospace;
  color: ${({ theme }) => theme.color.MineShaft};
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileNarrow}px) {
    text-align: center;
    word-wrap: break-word;
    width: 80%;
    margin: auto;
    margin-bottom: 5px;
  }
`;
