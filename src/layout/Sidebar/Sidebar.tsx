import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiTerminalBoxFill } from "react-icons/ri";
import { RiUser4Fill } from "react-icons/ri";
import { PathUrl } from "@src/config/pathUrl";
import {
  ContactsInfoComponent,
  PersonalInfoComponent,
  ProfessionalInfoComponent,
  ProjectsInfoComponent,
} from "@src/components";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const router = useRouter();
  const firstPath = router.pathname.split("/")[1];
  const secondPath = router.pathname.split("/")[2];
  if (firstPath === "") {
    return <aside className={cn(styles.sidebar, className)} {...props}></aside>;
  }
  return (
    <aside className={cn(styles.sidebar, className)} {...props}>
      {firstPath === "about" && (
        <div className={cn(styles.personal_info_icons)}>
          <Link
            href={PathUrl.professionalInfo}
            className={cn(styles.icon_link, {
              [styles.icon_link_active]: secondPath === "professional-info",
            })}
          >
            <RiTerminalBoxFill width={24} height={24} />
          </Link>
          <Link
            href={PathUrl.personalInfo}
            className={cn(styles.icon_link, {
              [styles.icon_link_active]: secondPath === "personal-info",
            })}
          >
            <RiUser4Fill width={24} height={24} />
          </Link>
        </div>
      )}

      <div className={cn(styles.content_container)}>
        <div className={styles.content_subcontainer}>
          <div className={cn(styles.content, styles.content_mobile)}>
            {firstPath === "about" && <PersonalInfoComponent />}
            {firstPath === "about" && <ProfessionalInfoComponent />}
            {firstPath !== "projects" && <ContactsInfoComponent />}
            {firstPath === "projects" && <ProjectsInfoComponent />}
          </div>
          <div className={cn(styles.content, styles.content_desktop)}>
            {secondPath === "personal-info" && <PersonalInfoComponent />}
            {secondPath === "professional-info" && (
              <ProfessionalInfoComponent />
            )}
            {firstPath !== "projects" && <ContactsInfoComponent />}
            {firstPath === "projects" && <ProjectsInfoComponent />}
          </div>
        </div>
      </div>
    </aside>
  );
};
