import { SideBarSecondElementProps } from "./SidebarSecondElement.props";
import styles from "./SidebarSecondElement.module.scss";
import cn from "classnames";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiFolder3Fill } from "react-icons/ri";
import { RiMarkdownFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { SideBarSecondElementItems } from "@src/config/sideBarContent";
import { useRouter } from "next/router";

export const SideBarSecondElement = ({
  className,
  name,
  items,
  color,
  ...props
}: SideBarSecondElementProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const threePath = router.pathname.split("/")[3];
  const fourPath = router.pathname.split("/")[4];
  useEffect(() => {
    if (threePath === name) {
      setActive(true);
    }
  }, [threePath, name]);
  const ItemElement = ({
    name: ItemName,
    path,
  }: SideBarSecondElementItems): JSX.Element => {
    return (
      <Link
        href={path}
        className={cn(styles.item, {
          [styles.item_active]: ItemName === fourPath,
        })}
      >
        <div className={cn(styles.item_icon)}>
          <RiMarkdownFill />
        </div>
        <div className={cn(styles.item_name)}>{ItemName}</div>
      </Link>
    );
  };
  return (
    <div className={cn(styles.container, className)} {...props}>
      <button
        className={cn(styles.title)}
        onClick={() => setActive((prev) => !prev)}
        aria-label="toggle folder"
      >
        <div
          className={cn(styles.title_arrow, {
            [styles.title_arrow_active]: active,
          })}
        >
          <RiArrowRightSLine />
        </div>
        <div className={cn(styles.title_icon)}>
          <RiFolder3Fill color={color} />
        </div>
        <div className={cn(styles.title_name)}>{name}</div>
      </button>
      <div
        className={cn(styles.content, {
          [styles.content_active]: active,
        })}
      >
        {items.map((item) => (
          <ItemElement name={item.name} path={item.path} key={item.name} />
        ))}
      </div>
    </div>
  );
};
