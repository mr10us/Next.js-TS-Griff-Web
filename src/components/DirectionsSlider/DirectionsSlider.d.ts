import { StaticImageData } from "next/image";

export type TCoachesSliderItemProps = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}