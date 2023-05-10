import { FunctionComponent, useState } from "react";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { ProjectsProps } from "@src/pages/projects";
import { useRouter } from "next/router";
import cn from "classnames";
import { HeaderLink } from "@src/components";
import { PathUrl } from "@src/config/pathUrl";
import { ErrorProps } from "next/error";
import {
  AppContext,
  AppContextProvider,
  IAppContext,
} from "@src/context/app.context";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const firstPath = router.pathname.split("/")[1];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={cn(styles.body_container, {
          [styles.body_container_menu_open]: isOpen,
          [styles.body_container_hello]: firstPath === "",
        })}
      >
        {firstPath !== "" && (
          <Sidebar
            className={cn(styles.sidebar, {
              [styles.sidebar_hidden]: isOpen,
            })}
          />
        )}
        <div className={cn(styles.body, { [styles.body_hidden]: isOpen })}>
          {children}
        </div>
        <div
          className={cn(styles.menu_links, {
            [styles.menu_links_show]: isOpen,
          })}
        >
          <div className={styles.links_item}>
            <HeaderLink
              text="_hello"
              path={PathUrl.hello}
              active={firstPath === ""}
            />
          </div>
          <div className={styles.links_item}>
            {" "}
            <HeaderLink
              text="_about-me"
              path={PathUrl.personalInfo}
              active={firstPath === "about"}
            />
          </div>
          <div className={styles.links_item}>
            {" "}
            <HeaderLink
              text="_projects"
              path={PathUrl.projects}
              active={firstPath === "projects"}
            />
          </div>
          <div className={styles.links_item}>
            {" "}
            <HeaderLink
              text="_contact-me"
              path={PathUrl.contacts}
              active={firstPath === "contacts"}
            />
          </div>
        </div>
      </div>

      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <
  T extends Record<string, unknown> & ProjectsProps & ErrorProps & IAppContext
>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider
        projects={null}
        initialProjects={null}
        setInitialProjects={null}
        setProjects={null}
      >
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
