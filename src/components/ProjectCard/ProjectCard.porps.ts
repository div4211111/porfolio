import { LanguagesType } from "@src/config/codeSnippetData";
import { ProjectType } from "@src/config/projectsData";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  img: string;
  description: Record<LanguagesType, string>;
  type: ProjectType[];
  linkGitHub: string;
  linkDemo: string;
  index: number;
}
