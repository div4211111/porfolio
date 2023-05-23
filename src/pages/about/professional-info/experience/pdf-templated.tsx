import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { AboutText } from "@src/components/AboutText/AboutText";
import { withLayout } from "@src/layout/Layout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function PdfTemplated() {
  const { t } = useTranslation("professional-info");
  return (
    <div>
      <Head>
        <title>{t("meta title pdf template")}</title>
        <meta
          name="description"
          content={t("meta description pdf template") as string}
        />
      </Head>
      <AboutText text={t("pdf template content professional info")} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "layout",
        "professional-info",
      ])),
    },
  };
};
export default withLayout(withAboutLayout(PdfTemplated));
