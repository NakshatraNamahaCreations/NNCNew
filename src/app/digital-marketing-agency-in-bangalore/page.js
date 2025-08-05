import DigitalMarketingPage from "./DigitalMarketingPage"

export const metadata = {
  title: "Digital Marketing Agency in Bangalore | SEO, Paid Ads & SMM",
  description:
    "Grow your business with a trusted digital marketing agency in Bangalore. We excel in SEO, paid ads and social media management for your online presence.",
  keywords:
    "Digital Marketing Agency in Bangalore, Digital Marketing Agency Near Me, Digital Marketers in Bangalore, Digital Marketers Near Me, Digital Marketing Company in Bangalore",
  alternates: {
    canonical:
      "https://nakshatranamahacreations.com/digital-marketing-agency-in-bangalore",
  },
  openGraph: {
    title: "Digital Marketing Agency in Bangalore | SEO, Paid Ads & SMM",
    description:
      "Grow your business with a trusted digital marketing agency in Bangalore. We excel in SEO, paid ads and social media management for your online presence.",
    url: "https://nakshatranamahacreations.com/digital-marketing-agency-in-bangalore",
    images: [
      {
        url: "https://nakshatranamahacreations.com/media/Group118.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Bangalore | SEO, Paid Ads & SMM",
    description:
      "Grow your business with a trusted digital marketing agency in Bangalore. We excel in SEO, paid ads and social media management for your online presence.",
    images: ["https://nakshatranamahacreations.com/media/Group118.png"],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};


export default function DigitalMarketing() {
    return <DigitalMarketingPage />;
  }
  