import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { AboutText } from "@src/components/AboutText/AboutText";
import { withLayout } from "@src/layout/Layout";
import { aboutMeContent } from "@src/config/aboutMeContent";
import Head from "next/head";

function PdfTemplated() {
  return (
    <div>
      <Head>
        <title>Pdf templated</title>
        <meta
          name="description"
          content="I worked as part of a team developing a corporate system for working with PDF documents."
        />
      </Head>
      <AboutText text={aboutMeContent.professionalInfo.experience.pdfTemplated} />
    </div>
  );
}

export default withLayout(withAboutLayout(PdfTemplated));
