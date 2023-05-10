import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { AboutText } from "@src/components/AboutText/AboutText";
import { withLayout } from "@src/layout/Layout";
import { aboutMeContent } from "@src/config/aboutMeContent";
import Head from "next/head";

function University() {
  return (
    <div>
      <Head>
        <title>University</title>
        <meta
          name="description"
          content="Currently, I am pursuing higher education in the field of web development, and I couldn't be more excited about it."
        />
      </Head>
      <AboutText text={aboutMeContent.personalInfo.education.university} />
    </div>
  );
}

export default withLayout(withAboutLayout(University));
