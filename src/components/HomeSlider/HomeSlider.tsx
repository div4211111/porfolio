import Slider from "react-slick";
import { HomeSliderProps } from "./HomeSlider.props";
import cn from "classnames";
import { codeData } from "@src/config/codeData";
import { Code } from "../Code/Code";
import styles from "./HomeSlider.module.scss";

export const HomeSlider = ({
  className,
  ...props
}: HomeSliderProps): JSX.Element => {
  return (
    <div className={cn(className)} {...props}>
      <Slider
        vertical={true}
        adaptiveHeight={true}
        autoplay={true}
        infinite={true}
        dots={false}
        arrows={false}
        centerMode={true}
        className={styles.carousel_container}
      >
        {codeData.map((snip) => (
          <Code code={snip.code} type={snip.type} key={snip.code} />
        ))}
      </Slider>
    </div>
  );
};
