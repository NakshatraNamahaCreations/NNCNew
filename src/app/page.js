// src/app/page.js
import HomeClient from "./HomeClient";

// src/app/page.js
export const metadata = {
  title: "Nakshatra Namaha Creations | Website Developers in Bangalore",
  description:
    "Nakshatra Namaha Creations is best website developers in Bangalore, specializes in creating custom, user-friendly and responsive websites for your online presence.",
  keywords:
    "Website Developers in Bangalore, Mobile App Developers in Bangalore, Digital Marketing Agency in Bangalore, 2D Animation Service in Bangalore, Graphic Designers in Bangalore, Corporate Video Production in Bangalore",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/",
  },
  openGraph: {
    title: "Website Developers in Bangalore | Custom Web Development",
    description:
      "Expert website developers in Bangalore creating user-friendly, SEO-friendly and high-performance custom websites to grow your business online effectively.",
    url: "https://www.nakshatranamahacreations.com/",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/NNCWebsite_V3_BuildWebsites-removebg-preview.webp",
        width: 800,
        height: 600,
        alt: "Nakshatra Namaha Creations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
    title: "Website Developers in Bangalore | Custom Web Development",
    description:
      "Expert website developers in Bangalore creating user-friendly, SEO-friendly and high-performance custom websites to grow your business online effectively.",
    images: [
      "https://www.nakshatranamahacreations.com/media/NNCWebsite_V3_BuildWebsites-removebg-preview.webp",
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
