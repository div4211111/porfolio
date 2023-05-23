import styles from "./PersonalInfoComponent.module.scss";
import cn from "classnames";
import { SideBarFirstElement, SideBarSecondElement } from "..";
import { PersonalInfoData } from "@src/config/sideBarContent";
import { PersonalInfoComponentProps } from "./PersonalInfoComponent.props";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const PersonalInfoComponent = ({
  className,
  ...props
}: PersonalInfoComponentProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const secondPath = router.pathname.split("/")[2];
  const { t } = useTranslation("layout");

  const getColor = (number: number): string => {
    if (number === 0) return "#E99287";
    if (number === 1) return "#43D9AD";
    if (number === 2) return "#3A49A4";
    return "#607B96";
  };
  useEffect(() => {
    if (secondPath === "personal-info") {
      setActive(true);
    }
  }, [secondPath]);

  return (
    <div className={cn(styles.personal_info, className)} {...props}>
      <SideBarFirstElement
        name={t("name personal info")}
        active={active}
        setActive={setActive}
      >
        {Object.keys(PersonalInfoData).map((subject, index) => (
          <SideBarSecondElement
            translatedName={t(`${subject} personal info`)}
            name={subject}
            items={PersonalInfoData[subject]}
            color={getColor(index)}
            key={subject}
          />
        ))}
      </SideBarFirstElement>
    </div>
  );
};
