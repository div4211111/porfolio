import styles from "./ProjectCard.module.scss";
import cn from "classnames";
import { ProjectCardProps } from "./ProjectCard.porps";
import Image from "next/image";
import { RiGithubFill } from "react-icons/ri";
import { ProjectBadge } from "../ProjectBadge/ProjectBadge";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { LanguagesType } from "@src/config/codeSnippetData";

export const ProjectCard = ({
  name,
  img,
  description,
  linkDemo,
  linkGitHub,
  type,
  index,
  className,
  ...props
}: ProjectCardProps): JSX.Element => {
  const { locale } = useRouter();
  const { t } = useTranslation("projects");
  return (
    <div className={cn(styles.container, className)} {...props}>
      <div className={cn(styles.header)}>
        <div className={cn(styles.header_title)}>
          {t("title project card")} {index}
        </div>
        <div className={cn(styles.name)}>{"//"}</div>
        <div className={cn(styles.name)}>{name}</div>
      </div>
      <div className={cn(styles.content)}>
        <div className={cn(styles.content_img)}>
          <Image
            src={img}
            alt={name + "img"}
            width={500}
            height={500}
            className={cn(styles.content_img_image)}
          />
          <div className={cn(styles.content_img_types)}>
            {type.map((el) => (
              <ProjectBadge
                type={el}
                className={styles.content_img_types_icon}
                key={el}
              />
            ))}
          </div>
        </div>
        <div className={cn(styles.content_info)}>
          <div className={cn(styles.content_desc)}>
            {description[locale as LanguagesType]}
          </div>
          <div className={cn(styles.content_links)}>
            {linkDemo !== "" && (
              <a
                href={linkDemo}
                target="_blank"
                className={cn(styles.content_links_demo)}
              >
                view-project
              </a>
            )}
            <a
              href={linkGitHub}
              target="_blank"
              title={t("title github link") as string}
              className={cn(styles.content_links_github)}
            >
              <RiGithubFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
