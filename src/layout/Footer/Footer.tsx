import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.scss";
import { RiTelegramFill, RiGithubFill } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation("layout");
  const [isOpenLang, setIsOpenLang] = useState<boolean>(false);
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={cn(styles.langAndSocial)}>
        <div className={styles.lang}>
          <button
            className={styles.lang_button}
            onClick={() => setIsOpenLang((prev) => !prev)}
            aria-label="Select Lang"
            title="Select Lang"
            aria-expanded={isOpenLang}
          >
            <MdOutlineLanguage />
          </button>
          <div
            className={cn(styles.lang_list, {
              [styles.lang_list_open]: isOpenLang,
            })}
          >
            {router?.locales?.map((locale) => (
              <Link
                className={styles.lang_item}
                key={locale}
                href={router.asPath}
                locale={locale}
                onClick={() => setIsOpenLang(false)}
              >
                {locale}
              </Link>
            ))}
          </div>
        </div>
        <div className={cn(styles.social)}>
          <div className={cn(styles.social_item)}>{t("find me")}</div>
          <a
            href="https://t.me/alexeev_andre"
            target="_blank"
            title="Telegram Link"
            className={cn(styles.social_item)}
          >
            <RiTelegramFill />
          </a>
        </div>
      </div>
      <a
        href="https://github.com/div4211111"
        target="_blank"
        title="Github Link"
        className={cn(styles.social_item, styles.social_item_right)}
      >
        <span>@div4211111</span>
        <RiGithubFill />
      </a>
    </footer>
  );
};
