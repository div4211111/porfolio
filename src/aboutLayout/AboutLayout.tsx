import { FunctionComponent } from "react";
import styles from "./AboutLayout.module.scss";
import { AboutLayoutProps } from "./AboutLayout.props";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { codeSnippetDate } from "@src/config/codeSnippetData";
import { CodeSnippet } from "@src/components";
import { useTranslation } from "next-i18next";

const AboutLayout = ({ children }: AboutLayoutProps): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation("layout");
  const pathTwo = router.pathname.split("/")[2];
  const pathThree = router.pathname.split("/")[3];
  const pathFour = router.pathname.split("/")[4];

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_header}>
        <div className={styles.wrapper_header_left}>
          <div className={styles.wrapper_header_title}>
            <span className={styles.header_desktop}>
              {pathFour === undefined
                ? t(`${pathTwo} path`)
                : t(`${pathFour} path`)}
            </span>
            <span className={styles.header_mobile}>
              {pathThree &&
                pathFour &&
                `// ${t(`${pathThree} path`)} / ${t(`${pathFour} path`)}`}
            </span>

            {pathFour && (
              <button
                className={styles.wrapper_header_title_button}
                onClick={() =>
                  router.push(router.pathname.split("/").slice(0, -2).join("/"))
                }
                aria-label={t("aria go to folder") as string}
                title={t("aria go to folder") as string}
              >
                <RiCloseFill className={styles.wrapper_header_title_svg} />
              </button>
            )}
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.wrapper_body}>
        <div className={styles.body}>
          <div className={styles.body_content}>{children}</div>
        </div>

        <div className={styles.code_snippet}>
          <div className={styles.code_snippet_content}>
            <div className={styles.code_snippet_title}>{t("show snippet")}</div>
            {codeSnippetDate.map((snip) => (
              <CodeSnippet {...snip} key={snip.code} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const withAboutLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withAboutLayoutComponent(props: T): JSX.Element {
    return (
      <AboutLayout>
        <Component {...props} />
      </AboutLayout>
    );
  };
};
