import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  text-align: right;
  margin-bottom: 10px;
  font-family: monospace;
  color: ${({ theme }) => theme.color.MineShaft};
`;
