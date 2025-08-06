import WhyYourWebsiteNeedsSchemaMarkup from "./WhyYourWebsiteNeedsSchemaMarkup.jsx";

export const metadata = {
  title: "Why Your Website Needs Schema Markup for SEO",
  description:
    "Discover why adding schema markup to your website improves search visibility, boosts click-through rates, and helps search engines understand your content better.",
  keywords:
    "Schema markup benefits, Structured data SEO, How to use schema markup, Improve search results with schema, Website rich snippets",
  alternates: {
    canonical:
      "https://nakshatranamahacreations.com/blog/why-your-website-needs-schema-markup/",
  },
  openGraph: {
    title: "Why Your Website Needs Schema Markup for SEO",
    description:
      "Discover why adding schema markup to your website improves search visibility, boosts click-through rates, and helps search engines understand your content better.",
    url: "https://nakshatranamahacreations.com/blog/why-your-website-needs-schema-markup/",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://nakshatranamahacreations.com/media/nnclogo.png",
        width: 1200,
        height: 630,
        alt: "Why Your Website Needs Schema Markup",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Why Your Website Needs Schema Markup for SEO",
    description:
      "Discover why adding schema markup to your website improves search visibility, boosts click-through rates, and helps search engines understand your content better.",
    images: ["https://nakshatranamahacreations.com/media/nnclogo.png"],
    site: "@nncbengaluru",
  },
};

export default function BlogPage() {
  return <WhyYourWebsiteNeedsSchemaMarkup />;
}
