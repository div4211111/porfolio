import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SnakeGameProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setSkip: (skip: boolean) => void;
}
