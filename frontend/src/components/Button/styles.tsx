import styled from "styled-components";
import { IButton } from "./types";

export const StyledButton = styled.button<{ color: IButton["color"] }>`
  display: flex;
  align-items: center;
  background-color: ${({ color }) => {
    if (color) {
      return color;
    } else {
      return "#ddd";
    }
  }};
  color: #fefefe;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1.25rem;
  font-weight: 500;
  font-size: 1rem;
`;
