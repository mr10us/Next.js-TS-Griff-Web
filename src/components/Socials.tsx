import Image from "next/image";
import instagramLogoImage from "../../public/instagram.svg";
import facebookLogoImage from "../../public/facebook.svg";
import tiktokLogoImage from "../../public/tiktok.svg";

export const Socials = () => {
  return (
    <div className="flex gap-6 text-lg sm:text-xl">
      <a className="hover:fill-primary" href="https://www.instagram.com/griff_sportclub/">
        <Image
          src={instagramLogoImage}
          alt="instagram logo"
          className="w-full max-w-14"
        />
      </a>
      <a href="https://www.facebook.com/groups/GRIFF.SUMY.SPORT/">
        <Image
          src={facebookLogoImage}
          alt="facebook logo"
          className="w-full max-w-14"
        />
      </a>
      <a href="https://www.tiktok.com/@griff_sportclub">
        <Image
          src={tiktokLogoImage}
          alt="tiktok logo"
          className="w-full max-w-14"
        />
      </a>
    </div>
  );
};
