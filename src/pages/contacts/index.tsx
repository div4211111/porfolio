import { ContactsForm } from "@src/components";
import { codeContacts } from "@src/config/codeContacts";
import { withLayout } from "@src/layout/Layout";
import styles from "@src/styles/Contacts.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { IContactsForm } from "@src/types/contactFrom.interface";
import Head from "next/head";

SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("javascript", js);

function Contacts() {
  const [form, setForm] = useState<IContactsForm>({
    name: "",
    email: "",
    message: "",
  });
  const [style, setStyle] = useState({});

  const customStyle = {
    'code[class*="language-"]': {
      color: "#607b96",
      fontFamily: "Fira Code",
      background: "transparent",
    },
  };
  const router = useRouter();
  const pathFirst = router.pathname.split("/")[1];
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/dracula").then(
      (mod) => setStyle(mod.default)
    );
  }, []);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Contacts</title>
        <meta
          name="description"
          content="My contacts. Email me: alexeevandre@gmail.com"
        />
      </Head>
      <div className={styles.wrapper_header}>
        <div className={styles.wrapper_header_left}>
          <div className={styles.wrapper_header_title}>
            <span>{"// "}</span>
            {pathFirst}
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.wrapper_body}>
        <div className={styles.container}>
          <div className={styles.container_content}>
            <ContactsForm form={form} setForm={setForm} />
          </div>
        </div>
        <div className={styles.code}>
          <div className={styles.code_container}>
            <SyntaxHighlighter
              className={styles.code_block}
              language={"typescript"}
              style={{ ...style, ...customStyle }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {codeContacts(form.name, form.email, form.message)}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Contacts);
