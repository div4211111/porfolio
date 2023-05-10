import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.scss";
import { RiTelegramFill, RiGithubFill } from "react-icons/ri";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={cn(styles.social)}>
        <div className={cn(styles.social_item)}>find me in:</div>
        <a href="https://t.me/alexeev_andre" className={cn(styles.social_item)}>
          <RiTelegramFill />
        </a>
      </div>
      <a
        href="https://github.com/div4211111"
        className={cn(styles.social_item, styles.social_item_right)}
      >
        <span>@div4211111</span>
        <RiGithubFill />
      </a>
    </footer>
  );
};
