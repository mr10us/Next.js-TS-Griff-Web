import type { MetadataRoute, Viewport } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Спортивный клуб GRIFF",
    short_name: "GRIFF",
    description:
      "Головна мета GRIF — створити простір, де ви зможете створити тіло своєї мрії, знайти родину спортсменів, які будуть вас мотивувати на шляху.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
