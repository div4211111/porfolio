import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderLinkProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;
  path: string;
  active: boolean;
}
