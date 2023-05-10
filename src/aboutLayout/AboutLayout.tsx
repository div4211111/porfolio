import { FunctionComponent } from "react";
import styles from "./AboutLayout.module.scss";
import { AboutLayoutProps } from "./AboutLayout.props";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { codeSnippetDate } from "@src/config/codeSnippetData";
import { CodeSnippet } from "@src/components";

const AboutLayout = ({ children }: AboutLayoutProps): JSX.Element => {
  const router = useRouter();
  const pathFour = router.pathname.split("/")[4];
  const pathThree = router.pathname.split("/")[3];
  const pathTwo = router.pathname.split("/")[2];

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_header}>
        <div className={styles.wrapper_header_left}>
          <div className={styles.wrapper_header_title}>
            <span className={styles.header_desktop}>
              {pathFour === undefined ? pathTwo : pathFour}
            </span>
            <span className={styles.header_mobile}>
              {pathThree && pathFour && `// ${pathThree} / ${pathFour}`}
              {pathFour === undefined ? pathTwo : pathFour}
            </span>

            {pathFour && (
              <button
                className={styles.wrapper_header_title_button}
                onClick={() =>
                  router.push(router.pathname.split("/").slice(0, -2).join("/"))
                }
                aria-label="go to folder"
                title="go to folder"
              >

                <RiCloseFill
                  className={styles.wrapper_header_title_svg}
                />
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
            <div className={styles.code_snippet_title}>
              {"// Code snippet showcase:"}
            </div>
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
