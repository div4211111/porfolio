import styles from "./Textarea.module.scss";
import cn from "classnames";
import { TextareaProps } from "./Textarea.props";

export const Textarea = ({
  className,
  value,
  setValue,
  name,
  ...props
}: TextareaProps): JSX.Element => {
  return (
    <textarea
      className={cn(styles.input, className)}
      {...props}
      value={value}
      onChange={(e) => setValue(e)}
      name={name}
    />
  );
};
