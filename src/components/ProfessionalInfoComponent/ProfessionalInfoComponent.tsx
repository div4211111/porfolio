import styles from "./ProfessionalInfoComponent.module.scss";
import cn from "classnames";
import { SideBarFirstElement, SideBarSecondElement } from "..";
import { ProfessionalInfoData } from "@src/config/sideBarContent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProfessionalInfoComponentProps } from "./ProfessionalInfoComponent.props";

export const ProfessionalInfoComponent = ({
  className,
  ...props
}: ProfessionalInfoComponentProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const secondPath = router.pathname.split("/")[2];

  const getColor = (number: number): string => {
    if (number === 0) return "#E99287";
    if (number === 1) return "#43D9AD";
    if (number === 2) return "#3A49A4";
    return "#607B96";
  };
  useEffect(() => {
    if (secondPath === "professional-info") {
      setActive(true);
    }
  }, [secondPath]);

  return (
    <div className={cn(styles.professional_info, className)} {...props}>
      <SideBarFirstElement
        name="professional-info"
        active={active}
        setActive={setActive}
      >
        {Object.keys(ProfessionalInfoData).map((subject, index) => (
          <SideBarSecondElement
            name={subject}
            items={ProfessionalInfoData[subject]}
            color={getColor(index)}
            key={subject}
          />
        ))}
      </SideBarFirstElement>
    </div>
  );
};
