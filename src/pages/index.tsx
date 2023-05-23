import { withLayout } from "@src/layout/Layout";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import cn from "classnames";
import dynamic from "next/dynamic";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const DynamicHomeSlider = dynamic(() =>
  import("../components").then((mod) => mod.HomeSlider)
);
const DynamicSnakeGame = dynamic(() =>
  import("../components").then((mod) => mod.SnakeGame)
);
function Home() {
  const [skip, setSkip] = useState<boolean>(false);
  const { t } = useTranslation("hello");
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapper_carousel]: skip,
      })}
    >
      <Head>
        <title>{t("meta title")}</title>
        <meta name="description" content={t("meta description") as string} />
      </Head>
      <div className={styles.container}>
        <div className={styles.information}>
          <div className={styles.uptitle}>{t("hi all")}</div>
          <div className={styles.title}>{t("name")}</div>
          <div className={styles.subtitle}>{t("front-end developer")}</div>
          <div className={cn(styles.description, styles.description_desktop)}>
            {t("complete the game")}
          </div>
          <div className={cn(styles.description, styles.description_mobile)}>
            {t("visit on my GitHub page")}
          </div>
          <div className={cn(styles.description, styles.description_desktop)}>
            {t("you can see")}
          </div>
          <div className={styles.link}>
            <span className={styles.const}>const</span>&nbsp;
            <span className={styles.varname}>gitHubLink</span>&nbsp;=&nbsp;
            <a
              href="https://github.com/div4211111"
              target="_blank"
              className={cn(styles.textlink, styles.textlink_mobile)}
            >
              “https://github.com/div4211111”
            </a>
            <a
              href="https://github.com/div4211111/snake-game-react.git"
              target="_blank"
              className={cn(styles.textlink, styles.textlink_desktop)}
            >
              “https://github.com/div4211111/snake-game-react.git”
            </a>
          </div>
        </div>
        {!skip && (
          <div className={styles.game}>
            <DynamicSnakeGame setSkip={setSkip} />
          </div>
        )}
        {skip && <DynamicHomeSlider className={styles.carousel} />}
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["layout", "hello"])),
    },
  };
};

export default withLayout(Home);
