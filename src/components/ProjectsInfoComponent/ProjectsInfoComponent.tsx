import { ProjectsInfoComponentProps } from "./ProjectsInfoComponent.props";
import cn from "classnames";
import styles from "./ProjectsInfoComponent.module.scss";
import { SideBarFirstElement } from "../SideBarFirstElement/SideBarFirstElement";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ProjectType, projectTypes } from "@src/config/projectsData";
import { ProjectBadge } from "../ProjectBadge/ProjectBadge";
import { RiCheckFill } from "react-icons/ri";
import { AppContext } from "@src/context/app.context";

export const ProjectsInfoComponent = ({
  className,
  ...props
}: ProjectsInfoComponentProps): JSX.Element => {
  const { initialProjects, setProjects } = useContext(AppContext);
  const [active, setActive] = useState<boolean>(false);
  const [check, setCheck] = useState(
    Object.fromEntries(Object.keys(projectTypes).map((key) => [key, false]))
  );
  const router = useRouter();
  const firstPath = router.pathname.split("/")[1];
  const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCheck((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };
  const ProjectsItem = (type: any) => {
    return (
      <label className={styles.container_checkbox}>
        <input
          className={cn(styles.checkbox)}
          type="checkbox"
          onChange={(e) => checkHandler(e)}
          name={type.type}
          checked={check[type.type]}
        />
        <span className={styles.checkmark} tabIndex={0}>
          <RiCheckFill className={styles.icon} />
        </span>
        <ProjectBadge type={type.type} className={styles.type_icon} />
        <span className={styles.text}> {type.type}</span>
      </label>
    );
  };

  useEffect(() => {
    if (firstPath === "projects") {
      setActive(true);
    }
  }, [firstPath]);
  useEffect(() => {
    const isNotAll = Object.keys(check).some((el) => check[el] === true);
    if (isNotAll === true) {
      const checkedValue = Object.keys(check).filter(
        (el) => check[el] === true
      );

      const result = initialProjects?.filter((item) => {
        return item.type.some((type) => checkedValue.includes(type));
      });
      if (result) {
        setProjects?.(result);
      }
    } else {
      setProjects?.(initialProjects!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  return (
    <div className={cn(styles.container, className)} {...props}>
      <SideBarFirstElement
        name="projects"
        active={active}
        setActive={setActive}
      >
        <div className={styles.content}>
          {Object.keys(ProjectType).map((el) => (
            <ProjectsItem type={ProjectType[el as ProjectType]} key={el} />
          ))}
        </div>
      </SideBarFirstElement>
    </div>
  );
};
