import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { AboutText } from "@src/components/AboutText/AboutText";
import { withLayout } from "@src/layout/Layout";
import { aboutMeContent } from "@src/config/aboutMeContent";
import Head from "next/head";

function Trello() {
  return (
    <div>
      <Head>
        <title>Trello</title>
        <meta
          name="description"
          content="As a junior frontend developer at the startup, I was part of a team of 10 people developing an application similar to Trello."
        />
      </Head>
      <AboutText text={aboutMeContent.professionalInfo.experience.trello} />
    </div>
  );
}

export default withLayout(withAboutLayout(Trello));
