import LandingPagesvsHomepages from "./LandingPagesvsHomepages.jsx";

export const metadata = {
  title: "Landing Page vs. Homepage: Key Differences Explained",
  description:
    "Understand the real difference between a landing page and a homepage, when to use each, and how to boost conversions by guiding visitors the right way.",
  keywords:
    "landing page vs homepage, difference between landing page and homepage, homepage vs landing page SEO, when to use landing page, homepage purpose, landing page conversion",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/blog/landing-page-vs-homepage",
  },
  openGraph: {
    title: "Landing Page vs. Homepage: Key Differences Explained",
    description:
      "Understand the real difference between a landing page and a homepage, when to use each, and how to boost conversions by guiding visitors the right way.",
    url: "https://www.nakshatranamahacreations.com/blog/landing-page-vs-homepage",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/logo.png",
        width: 1200,
        height: 630,
        alt: "Landing Page vs Homepage",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Landing Page vs. Homepage: Key Differences Explained",
    description:
      "Understand the real difference between a landing page and a homepage, when to use each, and how to boost conversions by guiding visitors the right way.",
    images: ["https://www.nakshatranamahacreations.com/media/logo.png"],
    site: "@nncbengaluru",
  },
};

export default function BlogPage() {
  return <LandingPagesvsHomepages />;
}
