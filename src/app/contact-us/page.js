

// src/app/page.js
import ContactClient from "./ContactClient.jsx";

export const metadata = {
    title: "Digital Marketing Company in Bangalore | Contact Us",
    description:
      "Get in touch with Nakshatra Namaha Creations, a leading digital marketing company in Bangalore. Let us discuss your business project and grow your business.",
    keywords:
      "Digital Marketing Company in Bangalore, Digital Marketing Company Near Me, Website Development Company in Bangalore, Mobile App Development Company in Bangalore",
    canonical: "https://www.nakshatranamahacreations.com/contact-us",
    openGraph: {
      title: "Digital Marketing Company in Bangalore | Contact Us",
      description:
        "Get in touch with Nakshatra Namaha Creations, a leading digital marketing company in Bangalore. Let us discuss your business project and grow your business.",
      type: "website",
      url: "https://www.nakshatranamahacreations.com/contact-us",
      image: "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
      site_name: "Nakshatra Namaha Creations",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "Digital Marketing Company in Bangalore | Contact Us",
      description:
        "Get in touch with Nakshatra Namaha Creations, a leading digital marketing company in Bangalore. Let us discuss your business project and grow your business.",
      image: "https://www.nakshatranamahacreations.com/media/NNCWebsite_ContactV2_Needthis.png",
      site: "@nnc_creations",
      creator: "@nnc_creations",
    },
 
  };
  
export default function ContactPage() {
  return <ContactClient />;
}
