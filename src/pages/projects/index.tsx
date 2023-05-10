import { ProjectCard } from "@src/components";
import { IProjectData, projectData } from "@src/config/projectsData";
import { AppContext } from "@src/context/app.context";
import { withLayout } from "@src/layout/Layout";
import styles from "@src/styles/Projects.module.scss";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import cn from "classnames";
import Head from "next/head";

function Projects({ projects }: ProjectsProps) {
  const { setInitialProjects, projects: projectsState } =
    useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    setInitialProjects?.(projects);
  }, [projects, setInitialProjects]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="My projects, different technologies, same result"
        />
      </Head>
      <div className={styles.wrapper_header}>
        <div className={styles.wrapper_header_title}>
          <span>{"// projects / "}</span>
          {router.query.type ? router.query.type : "_all"}
        </div>
      </div>
      <div className={styles.container}>
        <div
          className={cn(styles.container_content, {
            [styles.container_content_empty]:
              projectsState?.length === 0 && projectsState !== null,
          })}
        >
          {projectsState?.map((el, i) => (
            <div className={styles.item} key={el.name}>
              <ProjectCard {...el} index={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withLayout(Projects);

export const getStaticProps: GetStaticProps = async () => {
  const projects = projectData;

  return {
    props: {
      projects,
    },
  };
};

export interface ProjectsProps extends Record<string, unknown> {
  projects: IProjectData[];
}
