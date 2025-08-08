import MobileAppPage from "./MobileAppPage.jsx";

export const metadata = {
  title: "Mobile App Development Company in Bangalore | Innovative Apps",
  description:
    "Hire the top mobile app development company in Bangalore to build user-friendly, scalable mobile apps. Get a custom app that boosts your business today!",
  keywords:
    "Mobile App Development Company in Bangalore, Mobile App Development Company Near Me, Mobile App Developers in Bangalore, Mobile App Developers Near Me, Mobile App Designers in Bangalore",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/mobile-app-development-company-in-bangalore",
  },
  openGraph: {
    title: "Mobile App Development Company in Bangalore | Innovative Apps",
    description:
      "Hire the top mobile app development company in Bangalore to build user-friendly, scalable mobile apps. Get a custom app that boosts your business today!",
    type: "website", // Changed from "Mobile App" to "website" for better OG compatibility
    url: "https://www.nakshatranamahacreations.com/mobile-app-development-company-in-bangalore",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/OBJECTS.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company in Bangalore | Innovative Apps",
    description:
      "Hire the top mobile app development company in Bangalore to build user-friendly, scalable mobile apps. Get a custom app that boosts your business today!",
    images: ["https://www.nakshatranamahacreations.com/media/OBJECTS.png"],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};

export default function MobileAppDeveleopment() {
  return <MobileAppPage />;
}
