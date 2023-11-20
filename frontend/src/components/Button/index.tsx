import { StyledButton } from "./styles";
import { IButton } from "./types";

export const Button = ({ children, color, onClick }: IButton) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
