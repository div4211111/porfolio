import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CodeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: string;
  code: string;
}
