import styles from "./ContactsInfoComponent.module.scss";
import cn from "classnames";
import { SideBarFirstElement } from "..";
import { useEffect, useState } from "react";
import { ContactsInfoComponentProps } from "./ContactsInfoComponent.props";
import { ConctactsInfoData, IContactsData } from "@src/config/sideBarContent";
import { RiMailLine } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { useRouter } from "next/router";

export const ContactsInfoComponent = ({
  className,
  ...props
}: ContactsInfoComponentProps): JSX.Element => {
  const router = useRouter();
  const firstPath = router.pathname.split("/")[1];
  const [active, setActive] = useState<boolean>(false);
  const ItemElement = ({ name, path, type }: IContactsData): JSX.Element => {
    return (
      <a href={path} className={cn(styles.item)}>
        <div className={cn(styles.item_icon)}>
          {type === "email" && <RiMailLine />}
          {type === "phone" && <RiPhoneFill />}
        </div>
        <div className={cn(styles.item_name)}>{name}</div>
      </a>
    );
  };
  useEffect(() => {
    if (firstPath === "contacts") {
      setActive(true);
    }
  }, [firstPath]);

  return (
    <div className={cn(styles.contacts, className)} {...props}>
      <SideBarFirstElement
        name="contacts"
        active={active}
        setActive={setActive}
      >
        {ConctactsInfoData.map((el) => (
          <ItemElement
            name={el.name}
            path={el.path}
            type={el.type}
            key={el.name}
          />
        ))}
      </SideBarFirstElement>
    </div>
  );
};
