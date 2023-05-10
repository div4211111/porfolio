import { withLayout } from "@src/layout/Layout";
import styles from "../styles/Error.module.scss";
import Link from "next/link";
import { PathUrl } from "@src/config/pathUrl";
import { NextPageContext } from "next";
import Head from "next/head";

function Error({ statusCode }: ErrorProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Error</title>
        <meta
          name="description"
          content="An error occurred"
        />
      </Head>
      <div className={styles.subtitle}>{statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}</div>
      <Link href={PathUrl.hello} className={styles.button}>
        Go to Home
      </Link>
    </div>
  );
}
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
export interface ErrorProps extends Record<string, unknown> {
  statusCode: number | undefined
}

export default withLayout(Error);
