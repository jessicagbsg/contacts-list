import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  color: string;
  onClick: () => void;
}
