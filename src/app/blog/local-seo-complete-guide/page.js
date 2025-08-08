import LocalSEO from "./LocalSEO.jsx";

export const metadata = {
  title: "Local SEO Guide: Boost Your Business Visibility Locally",
  description:
    "Discover how local SEO helps your business get found by nearby customers and increase sales. Learn simple steps to optimize your local presence.",
  keywords:
    "local SEO, local SEO guide, local SEO for business, local search optimization, Google My Business, local SEO tips, improve local SEO",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/blog/local-seo-complete-guide/",
  },
  openGraph: {
    title: "Local SEO Guide: Boost Your Business Visibility Locally",
    description:
      "Discover how local SEO helps your business get found by nearby customers and increase sales. Learn simple steps to optimize your local presence.",
    url: "https://www.nakshatranamahacreations.com/blog/local-seo-complete-guide/",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/nnclogo.png",
        width: 1200,
        height: 630,
        alt: "Local SEO Guide",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Local SEO Guide: Boost Your Business Visibility Locally",
    description:
      "Discover how local SEO helps your business get found by nearby customers and increase sales. Learn simple steps to optimize your local presence.",
    images: ["https://www.nakshatranamahacreations.com/media/nnclogo.png"],
    site: "@nncbengaluru",
  },
};

export default function BlogPage() {
  return <LocalSEO />;
}
