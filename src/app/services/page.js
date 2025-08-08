


import ServicesClient from "./ServicesClient.jsx";


export const metadata = {
    title: "Mobile App Developers in Bangalore | Our Services | NNC",
    description:
      "Expert mobile app developers in Bangalore at NNC. Our Services includes Websites Development, Digital Marketing, Mobile Application Development and many more.",
    keywords:
      "Website Developers in Bangalore, Mobile App Developers in Bangalore, Digital Marketing Agency in Bangalore, Graphic Designer in Bangalore, 2D Animation Service in Bangalore, B2B Marketing Service in Bangalore",
    alternates: {
      canonical: "https://www.nakshatranamahacreations.com/services",
    },
    openGraph: {
      title: "Mobile App Developers in Bangalore | Our Services | NNC",
      description:
        "Expert mobile app developers in Bangalore at NNC. Our Services includes Websites Development, Digital Marketing, Mobile Application Development and many more.",
      url: "https://www.nakshatranamahacreations.com/services",
      type: "website",
      siteName: "Nakshatra Namaha Creations",
    },
    twitter: {
      card: "summary",
      title: "Mobile App Developers in Bangalore | Our Services | NNC",
      description:
        "Expert mobile app developers in Bangalore at NNC. Our Services includes Websites Development, Digital Marketing, Mobile Application Development and many more.",
      site: "@nncbengaluru",
      images: [
        "https://www.nakshatranamahacreations.com/media/NNCWebsite_ServicePage_V1_purpose.png",
      ],
    },
  };


export default function AboutPage() {
  return <ServicesClient />;
}
