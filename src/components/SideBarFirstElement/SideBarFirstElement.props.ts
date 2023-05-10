import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SideBarFirstElementProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  active: boolean;
  setActive: (el: any) => void;
  children?: ReactNode;
}
