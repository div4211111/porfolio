import { ProjectType } from "@src/config/projectsData";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  img: string;
  description: string;
  type: ProjectType[];
  linkGitHub: string;
  linkDemo: string;
  index: number;
}
