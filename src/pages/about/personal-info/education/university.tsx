import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { AboutText } from "@src/components/AboutText/AboutText";
import { withLayout } from "@src/layout/Layout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function University() {
  const { t } = useTranslation("personal-info");
  return (
    <div>
      <Head>
        <title>{t("university meta title")}</title>
        <meta
          name="description"
          content={t("university meta description") as string}
        />
      </Head>
      <AboutText text={t("university content personal info")} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "layout",
        "personal-info",
      ])),
    },
  };
};

export default withLayout(withAboutLayout(University));
