import Image from "next/image";
import { TCoachesSliderItemProps } from ".";
import Link from "next/link";
import { shimmer, toBase64 } from "@/app/helpers/shimmer";

export const CoachSliderItem = ({ image, title, id }: TCoachesSliderItemProps) => {
  return (
      <Link href={`/coaches/${id}`}>
        <div className="flex flex-col items-center gap-4 font-grotesk text-3xl uppercase text-white">
        <Image
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(600, 300))}`}
              src={image}
              alt={title}
              width={600}
              height={300}
            />
          <p>{title}</p>
        </div>
      </Link>
  );
};
