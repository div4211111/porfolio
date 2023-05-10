import { withLayout } from "@src/layout/Layout";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import cn from "classnames";
import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicHomeSlider = dynamic(() =>
  import("../components").then((mod) => mod.HomeSlider)
);
const DynamicSnakeGame = dynamic(() =>
  import("../components").then((mod) => mod.SnakeGame)
);
function Home() {
  const [skip, setSkip] = useState<boolean>(false);
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.wrapper_carousel]: skip,
      })}
    >
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Hi, I'm Andrew Alexeev, FrontEnd Developer. Let's get to know each other?"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.information}>
          <div className={styles.uptitle}>Hi all. I am</div>
          <div className={styles.title}>Andrew Alexeev</div>
          <div className={styles.subtitle}>{"> Front-end developer"}</div>
          <div className={cn(styles.description, styles.description_desktop)}>
            {"// complete the game to continue"}
          </div>
          <div className={cn(styles.description, styles.description_mobile)}>
            {"// visit on my GitHub page"}
          </div>
          <div className={cn(styles.description, styles.description_desktop)}>
            {"// you can also see it on my Github page"}
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

export default withLayout(Home);
