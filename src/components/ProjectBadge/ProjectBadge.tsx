import { ProjectBadgeProps } from "./ProjectBadge.props";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import { SiNestjs, SiNodedotjs, SiPostgresql, SiMongodb, SiRedux, SiVuedotjs } from "react-icons/si";
export const ProjectBadge = ({
  type,
  className,
  ...props
}: ProjectBadgeProps): JSX.Element => {
  const Icons = () => {
    switch (type) {
      case "react":
        return <RiReactjsFill />;
      case "vue":
        return <SiVuedotjs />;
      case "nextjs":
        return <TbBrandNextjs />;
      case "nestjs":
        return <SiNestjs />;
      case "redux":
        return <SiRedux />;
      case "mongodb":
        return <SiMongodb />;
      case "porstgresql":
        return <SiPostgresql />;
      case "nodejs":
        return <SiNodedotjs />;
    }
  };
  return (
    <div className={className} {...props}>
      <Icons />
    </div>
  );
};
