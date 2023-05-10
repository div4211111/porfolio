import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { AboutText } from "@src/components/AboutText/AboutText";
import { withLayout } from "@src/layout/Layout";
import { aboutMeContent } from "@src/config/aboutMeContent";
import Head from "next/head";

function Football() {
  return (
    <div>
      <Head>
        <title>Football</title>
        <meta
          name="description"
          content="Football has been a major part of my life since I was a child. My father instilled in me a love for the sport that has only grown stronger over the years."
        />
      </Head>
      <AboutText text={aboutMeContent.personalInfo.interests.football} />
    </div>
  );
}

export default withLayout(withAboutLayout(Football));
