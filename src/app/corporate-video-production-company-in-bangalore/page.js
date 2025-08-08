import CoporateVideoProd from "./CoporateVideoProd"

export const metadata = {
  title:
    "Corporate Video Production Company in Bangalore | Corporate Videos",
  description:
    "Corporate Video Production Company in Bangalore specializing in creating corporate video, product demos, social media video, personal branding video and more.",
  keywords:
    "Digital Marketing Agency in Bangalore, Digital Marketing Agency Near Me, Digital Marketers in Bangalore, Digital Marketers Near Me, Digital Marketing Company in Bangalore",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-bangalore",
  },
  openGraph: {
    title:
      "Corporate Video Production Company in Bangalore | Corporate Videos",
    description:
      "Corporate Video Production Company in Bangalore specializing in creating corporate video, product demos, social media video, personal branding video and more",
    url: "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-bangalore",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/BannerImage.png",
        width: 1200,
        height: 630,
        alt: "Corporate Video Production",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Corporate Video Production Company in Bangalore | Corporate Videos",
    description:
      "Corporate Video Production Company in Bangalore specializing in creating corporate video, product demos, social media video, personal branding video and more",
    images: [
      "https://www.nakshatranamahacreations.com/media/BannerImage.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};
 
export default function CoporateVideo() {
    return <CoporateVideoProd />;
  }
  