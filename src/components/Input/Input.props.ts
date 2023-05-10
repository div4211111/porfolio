import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
