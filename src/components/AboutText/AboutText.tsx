import styles from "./AboutText.module.scss";
import cn from "classnames";
import { AboutTextProps } from "./AboutText.props";
import { useEffect, useRef, useState } from "react";
import { useSize } from "@src/hooks/useSize";

export const AboutText = ({
  className,
  text,
  ...props
}: AboutTextProps): JSX.Element => {
  const [rows, setRows] = useState<number[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const size = useSize(textRef);

  const NumberItem = ({ num }: { num: number }) => {
    return (
      <div className={cn(styles.number_row)}>
        <div className={cn(styles.number_item)}>{num}</div>
        <div className={cn(styles.number_item)}>
          {num === 1 && "/**"}
          {num == rows.length && "/*"}
          {num !== rows.length && num !== 1 && "*"}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (size && textRef.current !== null) {
      const divLineHeight = parseInt(
        window.getComputedStyle(textRef.current).lineHeight
      );
      const count = size?.height / divLineHeight;
      setRows(Array.from({ length: count - 1 + 3 }, (_, i) => 1 + i));
    }
  }, [size]);

  return (
    <div className={cn(styles.container, className)} {...props}>
      <div className={cn(styles.numbers)}>
        {rows.map((el) => (
          <NumberItem num={el} key={el} />
        ))}
      </div>
      <div className={cn(styles.text)} ref={textRef}>
        {text}
      </div>
    </div>
  );
};
