import { CodeSnippetProps } from "./CodeSnippet.props";
import styles from "./CodeSnippet.module.scss";
import cn from "classnames";
import { RiChatSmile3Line } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Code } from "../Code/Code";
import { useRouter } from "next/router";
import { LanguagesType } from "@src/config/codeSnippetData";
import { useTranslation } from "next-i18next";

export const CodeSnippet = ({
  type,
  code,
  username,
  avatar,
  createdAt,
  className,
  details,
  ...props
}: CodeSnippetProps): JSX.Element => {
  const { locale } = useRouter();
  const { t } = useTranslation("layout");
  const [isOpenedDetails, setIsOpenedDetails] = useState(false);
  return (
    <div className={cn(styles.container, className)} {...props}>
      <div className={cn(styles.container_header)}>
        <div className={cn(styles.header_about)}>
          <div className={cn(styles.header_avatar)}>
            <Image
              src={avatar}
              alt={`${username}-avatar`}
              width={36}
              height={36}
            />
          </div>
          <div className={cn(styles.header_info)}>
            <div className={cn(styles.header_username)}>{username}</div>
            <div className={cn(styles.header_createdAt)}>{createdAt}</div>
          </div>
        </div>
        <div className={cn(styles.header_detail)}>
          <button
            className={cn(styles.detail_button)}
            onClick={() => setIsOpenedDetails(true)}
            aria-label={t("aria details open") as string}
            title={t("aria details open") as string}
          >
            <RiChatSmile3Line />
            {t("details")}
          </button>
        </div>
      </div>
      <Code type={type} code={code} />
      <div
        className={cn(styles.container_details, {
          [styles.container_details_active]: isOpenedDetails,
        })}
      >
        <div className={cn(styles.details_text)}>
          {details[locale as LanguagesType]}
        </div>
        <button
          className={cn(styles.details_icon)}
          onClick={() => setIsOpenedDetails(false)}
          aria-label={t("aria details close") as string}
          title={t("aria details close") as string}
          aria-expanded={isOpenedDetails}
        >
          <RiCloseFill />
        </button>
      </div>
    </div>
  );
};
