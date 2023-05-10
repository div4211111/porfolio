import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { AboutText } from "@src/components/AboutText/AboutText";
import { withLayout } from "@src/layout/Layout";
import Head from "next/head";

function PersonalInfo() {
  return (
    <div>
      <Head>
        <title>Personal info</title>
        <meta
          name="description"
          content="My personal information, very personal, but I will share it with you."
        />
      </Head>
      <AboutText
        text={`To see all the information about [personal-info], arranged in folders, is a great way to stay organized and easily access the information you need.`}
      />
    </div>
  );
}

export default withLayout(withAboutLayout(PersonalInfo));
