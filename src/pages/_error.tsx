import { withLayout } from "@src/layout/Layout";
import styles from "../styles/Error.module.scss";
import Link from "next/link";
import { PathUrl } from "@src/config/pathUrl";
import { GetStaticProps, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Error({ statusCode }: ErrorProps) {
  const { locale } = useRouter();
  const ErorrRu = (statusCode: number | undefined) => {
    return (
      <>
        <Head>
          <title>Ошибка</title>
          <meta name="description" content="Произошла ошибка" />
        </Head>
        <div className={styles.subtitle}>
          {statusCode
            ? `Произошла ошибка ${statusCode} на сервере`
            : "Произошла ошибка не клиенте"}
        </div>
        <Link href={PathUrl.hello} className={styles.button}>
          Перейти на главную
        </Link>
      </>
    );
  };
  const ErorrEn = (statusCode: number | undefined) => {
    return (
      <>
        <Head>
          <title>Error</title>
          <meta name="description" content="An error occurred" />
        </Head>
        <div className={styles.subtitle}>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </div>
        <Link href={PathUrl.hello} className={styles.button}>
          Go to Home
        </Link>
      </>
    );
  };

  return (
    <div className={styles.container}>
      {locale === "en" && ErorrEn(statusCode)}
      {locale === "ru" && ErorrRu(statusCode)}
    </div>
  );
}
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["layout"])),
    },
  };
};

export interface ErrorProps extends Record<string, unknown> {
  statusCode: number | undefined;
}

export default withLayout(Error);
