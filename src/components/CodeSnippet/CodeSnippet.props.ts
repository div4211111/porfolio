import { LanguagesType } from "@src/config/codeSnippetData";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CodeSnippetProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: string;
  code: string;
  avatar: string;
  username: string;
  createdAt: string;
  details: Record<LanguagesType, string>;
}
