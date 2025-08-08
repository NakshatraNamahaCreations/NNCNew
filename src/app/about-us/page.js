

// src/app/page.js
import AboutClient from "./AboutClient";

// src/app/page.js
export const metadata = {
  title: "Web Development Company in Bangalore | About Us - NNC",
  description:
    "Discover NNC, a leading web development company in Bangalore delivering innovative, reliable and custom website development to grow your business online.",
  keywords:
    "Web Development Company in Bangalore, Web Development Company Near Me, Web Design Company in Bangalore, Web Design Company Near Me",
  alternates: {
    canonical: "https://www.nakshatranamahacreations.com/about-us",
  },
  openGraph: {
    title: "Web Development Company in Bangalore | About Us - NNC",
    description:
      "Discover NNC, a leading web development company in Bangalore delivering innovative, reliable and custom website development to grow your business online.",
    url: "https://www.nakshatranamahacreations.com/about-us",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/NNCWebsite_About%20Us%20Page-03.webp",
        width: 1200,
        height: 630,
        alt: "About NNC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Bangalore | About Us - NNC",
    description:
      "Discover NNC, a leading web development company in Bangalore delivering innovative, reliable and custom website development to grow your business online.",
    site: "@nnc_creations",
    creator: "@nnc_creations",
    images: [
      "https://www.nakshatranamahacreations.com/media/NNCWebsite_About%20Us%20Page-03.webp",
    ],
  },

};

export default function AboutPage() {
  return <AboutClient />;
}
