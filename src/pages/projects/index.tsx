import { ProjectCard } from "@src/components";
import { IProjectData, projectData } from "@src/config/projectsData";
import { AppContext } from "@src/context/app.context";
import { withLayout } from "@src/layout/Layout";
import styles from "@src/styles/Projects.module.scss";
import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import cn from "classnames";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Projects({ projects }: ProjectsProps) {
  const {
    setInitialProjects,
    projects: projectsState,
    selectedProject,
  } = useContext(AppContext);
  const { t } = useTranslation("projects");
  useEffect(() => {
    setInitialProjects?.(projects);
  }, [projects, setInitialProjects]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{t("meta title projects")}</title>
        <meta
          name="description"
          content={t("meta description projects") as string}
        />
      </Head>
      <div className={styles.wrapper_header}>
        <div className={styles.wrapper_header_title}>
          <span>{t("title projects")}</span>
          {selectedProject.length > 0
            ? selectedProject.join("; ")
            : t("title projects all")}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects = projectData;

  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale as string, [
        "layout",
        "projects",
      ])),
    },
  };
};

export interface ProjectsProps extends Record<string, unknown> {
  projects: IProjectData[];
}
