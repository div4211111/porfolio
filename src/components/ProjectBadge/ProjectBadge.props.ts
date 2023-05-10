import { ProjectType } from "@src/config/projectsData";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectBadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: ProjectType;
}
