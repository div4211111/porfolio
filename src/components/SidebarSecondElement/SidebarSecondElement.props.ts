import { SideBarSecondElementItems } from "@src/config/sideBarContent";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SideBarSecondElementProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  translatedName: string;
  items: SideBarSecondElementItems[];
  color: string;
}
