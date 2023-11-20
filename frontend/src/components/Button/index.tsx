import { StyledButton } from "./styles";
import { IButton } from "./types";

export const Button = ({ children, color, ...rest }: IButton) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};
