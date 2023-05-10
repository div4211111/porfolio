import { CodeProps } from "./Code.props";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import styles from "./Code.module.scss";
import cn from "classnames";
import { useEffect, useState } from "react";
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("javascript", js);

export const Code = ({
  className,
  code,
  type,
  ...props
}: CodeProps): JSX.Element => {
  const [style, setStyle] = useState({});
  const customStyle = {
    'code[class*="language-"]': {
      color: "#607b96",
      fontFamily: "Fira Code",
      background: "#011221",
    },
  };
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/dracula").then(
      (mod) => setStyle(mod.default)
    );
  }, []);

  return (
    <div className={cn(styles.container_code, className)} {...props}>
      <SyntaxHighlighter
        className={styles.code_block}
        language={type}
        style={{ ...style, ...customStyle }}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
