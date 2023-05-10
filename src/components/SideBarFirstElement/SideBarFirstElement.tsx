import { SideBarFirstElementProps } from "./SideBarFirstElement.props";
import styles from "./SideBarFirstElement.module.scss";
import cn from "classnames";
import { RiArrowRightSFill } from "react-icons/ri";

export const SideBarFirstElement = ({
  className,
  name,
  children,
  active,
  setActive,
  ...props
}: SideBarFirstElementProps): JSX.Element => {
  return (
    <div className={cn(styles.container, className)} {...props}>
      <button
        className={cn(styles.title, {
          [styles.title_active]: active,
        })}
        onClick={() => setActive((prev: boolean) => !prev)}
        aria-label="toggle sections"
      >
        <div
          className={cn(styles.title_arrow, {
            [styles.title_arrow_active]: active,
          })}
        >
          <RiArrowRightSFill />
        </div>
        <div className={cn(styles.title_name)}>{name}</div>
      </button>
      <div
        className={cn(styles.content, {
          [styles.content_active]: active,
        })}
      >
        {children}
      </div>
    </div>
  );
};
