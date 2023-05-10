import { AboutText } from "@src/components/AboutText/AboutText";
import styles from "./my-bio.module.scss";
import { aboutMeContent } from "@src/config/aboutMeContent";
import { withLayout } from "@src/layout/Layout";
import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  const lines = aboutMeContent.personalInfo.bio.myBio;
  return { props: { lines } };
};
function MyBio() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Biography</title>
        <meta
          name="description"
          content="Hi, I'm Andrew Alexeev! I'm a frontend developer with a real passion for technology. Over the years, I've gained an in-depth understanding of various programming languages, frameworks, and development tools, which has allowed me to deliver high-quality solutions to my clients."
        />
      </Head>
      <AboutText text={aboutMeContent.personalInfo.bio.myBio} />
    </div>
  );
}

export default withLayout(withAboutLayout(MyBio));
