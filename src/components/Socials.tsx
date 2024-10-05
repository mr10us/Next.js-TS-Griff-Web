import Image from "next/image";
import instagramLogoImage from "../../public/instagram.svg";
import facebookLogoImage from "../../public/facebook.svg";
import tiktokLogoImage from "../../public/tiktok.svg";
import Link from "next/link";

export const Socials = () => {
  return (
    <div className="flex h-fit justify-between gap-6 text-lg sm:justify-normal sm:text-xl">
      <Link
        href="https://www.instagram.com/griff_sportclub/"
        target="_blank"
      >
        <Image
          src={instagramLogoImage}
          alt="instagram logo"
          className="w-full max-w-14"
        />
      </Link>
      <Link
        href="https://www.facebook.com/groups/GRIFF.SUMY.SPORT/"
        target="_blank"
      >
        <Image
          src={facebookLogoImage}
          alt="facebook logo"
          className="w-full max-w-14"
        />
      </Link>
      <Link href="https://www.tiktok.com/@griff_sportclub" target="_blank">
        <Image
          src={tiktokLogoImage}
          alt="tiktok logo"
          className="w-full max-w-14"
        />
      </Link>
    </div>
  );
};
