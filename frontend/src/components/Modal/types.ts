import { ReactNode } from "react";

export interface IContactModal {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalLabel: string;
}
