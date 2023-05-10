import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  setIsOpen: (active: boolean) => void;
}
