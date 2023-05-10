import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import cn from "classnames";
import { HeaderLink } from "@src/components";
import { PathUrl } from "@src/config/pathUrl";
import { useRouter } from "next/router";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

export const Header = ({
  className,
  isOpen,
  setIsOpen,
  ...props
}: HeaderProps): JSX.Element => {
  const router = useRouter();
  const firstPath = router.pathname.split("/")[1];

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={cn(styles.name)}>andrew-alexeev</div>
      <button className={cn(styles.icon)}
        aria-label="open menu"
        title="open menu"
        aria-expanded={isOpen}
      >
        {isOpen && (
          <RiCloseFill
            onClick={() => setIsOpen(false)}
            className={styles.icon_svg}
          />
        )}
        {!isOpen && (
          <RiMenuFill
            onClick={() => setIsOpen(true)}
            className={styles.icon_svg}
          />
        )}
      </button>

      <div className={cn(styles.links_container)}>
        <div className={cn(styles.links)}>
          <HeaderLink
            text="_hello"
            path={PathUrl.hello}
            active={firstPath === ""}
          />
          <HeaderLink
            text="_about-me"
            path={PathUrl.personalInfo}
            active={firstPath === "about"}
          />
          <HeaderLink
            text="_projects"
            path={PathUrl.projects}
            active={firstPath === "projects"}
            className={styles.border_right}
          />
        </div>
        <div className={cn(styles.contacts)}>
          <HeaderLink
            text="_contact-me"
            path={PathUrl.contacts}
            active={firstPath === "contacts"}
          />
        </div>
      </div>
    </header>
  );
};
