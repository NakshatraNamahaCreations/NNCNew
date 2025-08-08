import GraphicDesigning from "./GraphicDesigning.jsx"

export const metadata = {
  title: "Graphic Design Company in Bangalore | Logo, UI UX & More",
  description:
    "Expert Graphic Design Company in Bangalore specializing in logos, UI UX, banners, brochures, posters and other creative designs that enhance your brand identity.",
  keywords:
    "Graphic Design Company in Bangalore, Graphic Design Company Near Me, Graphic Designers in Bangalore, Graphic Designers Near Me, Graphic Designing Service in Bangalore",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/graphic-design-company-in-bangalore",
  },
  openGraph: {
    title: "Graphic Design Company in Bangalore | Logo, UI UX & More",
    description:
      "Expert Graphic Design Company in Bangalore specializing in logos, UI UX, banners, brochures, posters and other creative designs that enhance your brand identity.",
    type: "website", // Changed from "graphic design" to "website" for OG compliance
    url: "https://www.nakshatranamahacreations.com/graphic-design-company-in-bangalore",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/Group117.png",
        width: 1200,
        height: 630,
        alt: "Graphic Design Company",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Company in Bangalore | Logo, UI UX & More",
    description:
      "Expert Graphic Design Company in Bangalore specializing in logos, UI UX, banners, brochures, posters and other creative designs that enhance your brand identity.",
    images: ["https://www.nakshatranamahacreations.com/media/Group117.png"],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};


export default function GraphicDesign() {
    return <GraphicDesigning />;
  }
  