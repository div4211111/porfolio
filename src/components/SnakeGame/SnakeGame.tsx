import { SnakeGameProps } from "./SnakeGame.props";
import styles from "./SnakeGame.module.scss";
import cn from "classnames";
import {
  RxTriangleUp,
  RxTriangleDown,
  RxTriangleLeft,
  RxTriangleRight,
} from "react-icons/rx";
import Image from "next/image";
import { SnakeCanvas } from "../SnakeCanvas/SnakeCanvas";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export const SnakeGame = ({
  className,
  setSkip,
  ...props
}: SnakeGameProps): JSX.Element => {
  const initialFoodCount: number = 10;
  const [foodCount, setFoodCount] = useState<number>(10);
  const { t } = useTranslation("hello");
  return (
    <div className={cn(styles.container, className)} {...props}>
      <div className={cn(styles.bolts)}>
        <div className={cn(styles.bolt)}>
          <Image src={"/bolt.svg"} alt="bolticon" width={5.5} height={4.5} />
        </div>
        <div className={cn(styles.bolt)}>
          {" "}
          <Image src={"/bolt.svg"} alt="bolticon" width={5.5} height={4.5} />
        </div>
      </div>

      <div className={cn(styles.content)}>
        <div className={cn(styles.canvas)}>
          <SnakeCanvas
            initialCount={initialFoodCount}
            foodCount={foodCount}
            setFoodCount={setFoodCount}
          />
        </div>
        <div className={cn(styles.information)}>
          <div className={cn(styles.information_block)}>
            <div className={cn(styles.text)}>{t("use keyboard")}</div>
            <div className={cn(styles.text)}>{t("arrows")}</div>
            <div className={cn(styles.arrow_items)}>
              <div className={cn(styles.arrow_item)}>
                <RxTriangleUp />
              </div>
            </div>
            <div className={cn(styles.arrow_items)}>
              <div className={cn(styles.arrow_item)}>
                <RxTriangleLeft />
              </div>
              <div className={cn(styles.arrow_item)}>
                <RxTriangleDown />
              </div>
              <div className={cn(styles.arrow_item)}>
                <RxTriangleRight />
              </div>
            </div>
          </div>
          <div className={cn(styles.text)}>{t("food left")}</div>
          <div className={cn(styles.apples)}>
            {Array.from(
              { length: initialFoodCount },
              (_, i) => i >= foodCount
            ).map((el, i) => (
              <div
                className={cn(styles.apples_item, {
                  [styles.apples_item_active]: el,
                })}
                key={i}
              ></div>
            ))}
          </div>
          <button
            onClick={() => setSkip(true)}
            className={cn(styles.button)}
            aria-label={t("aria skip") as string}
          >
            {t("skip")}
          </button>
        </div>
      </div>
      <div className={cn(styles.bolts)}>
        <div className={cn(styles.bolt)}>
          {" "}
          <Image src={"/bolt.svg"} alt="bolticon" width={5.5} height={4.5} />
        </div>
        <div className={cn(styles.bolt)}>
          {" "}
          <Image src={"/bolt.svg"} alt="bolticon" width={5.5} height={4.5} />
        </div>
      </div>
    </div>
  );
};
