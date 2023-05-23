import { AboutText } from "@src/components/AboutText/AboutText";
import styles from "./my-bio.module.scss";
import { withLayout } from "@src/layout/Layout";
import { withAboutLayout } from "@src/aboutLayout/AboutLayout";
import { GetStaticProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function MyBio() {
  const { t } = useTranslation("personal-info");
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{t("my bio meta title")}</title>
        <meta
          name="description"
          content={t("my bio meta description") as string}
        />
      </Head>
      <AboutText text={t("my bio content personal info")} />
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

export default withLayout(withAboutLayout(MyBio));
