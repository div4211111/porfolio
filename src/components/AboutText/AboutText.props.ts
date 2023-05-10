import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AboutTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;
}
