
import { ActionAreaCard } from "./ActionAreaCard";

import {
  Slider,
  SliderItem,
  Title,
  TextTitle,
} from "./style";

import { DataTitle, DataCard } from "../static/staticData";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const Index: React.FC = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: -10,
    },
  });

  return (
    <>
      <Title>
        <TextTitle>{DataTitle[0].title}</TextTitle>
      </Title>
      <Slider>
        <SliderItem
          ref={ref}
          className="keen-slider"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {DataCard.map((item: any, index: number) => (
            <div className="keen-slider__slide">
              <ActionAreaCard textCard={item.title} img={item.img} />
            </div>
          ))}
        </SliderItem>
      </Slider>
    </>
  );
};
