import { InputProps } from "./Input.props";
import styles from "./Input.module.scss";
import cn from "classnames";

export const Input = ({
  className,
  value,
  setValue,
  name,
  ...props
}: InputProps): JSX.Element => {
  return (
    <input
      className={cn(styles.input, className)}
      {...props}
      value={value}
      onChange={(e) => setValue(e)}
      name={name}
    />
  );
};
