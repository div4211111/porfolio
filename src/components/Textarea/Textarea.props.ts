import { ChangeEvent, DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextareaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  value: string;
  setValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
}
