import { HeaderLinkProps } from "./HeaderLink.props";
import styles from "./HeaderLink.module.scss";

import cn from "classnames";
import Link from "next/link";
export const HeaderLink = ({
  className,
  text,
  path,
  active = false,
  ...props
}: HeaderLinkProps): JSX.Element => {
  return (
    <div
      className={cn(styles.header_link, className, {
        [styles.header_link_active]: active,
      })}
      {...props}
    >
      <Link href={path}>{text}</Link>
    </div>
  );
};
