


import OurWorksClient from "./OurWorksClient.jsx";


export const metadata = {
  title: "Our Work Showcase on websites, mobile app, animation and more",
  description:
    "Explore our work showcasing expert portfolio in websites, mobile app development, animation, graphic design and more. Quality solutions to your business needs.",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/our-works",
  },
  openGraph: {
    title: "Our Work Showcase on websites, mobile app, animation and more",
    description:
      "Explore our work showcasing expert portfolio in websites, mobile app development, animation, graphic design and more. Quality solutions to your business needs.",
    type: "website",
    url: "https://www.nakshatranamahacreations.com/our-works",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/NNCWebsite_Works_PNG_working.png",
        width: 1200,
        height: 630,
        alt: "Our Works Banner",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work Showcase on websites, mobile app, animation and more",
    description:
      "Explore our work showcasing expert portfolio in websites, mobile app development, animation, graphic design and more. Quality solutions to your business needs.",
    images: [
      "https://www.nakshatranamahacreations.com/media/NNCWebsite_Works_PNG_working.png",
    ],
    site: "@nnc_creations",
    creator: "@nnc_creations",
  },
};


export default function AboutPage() {
  return <OurWorksClient />;
}
