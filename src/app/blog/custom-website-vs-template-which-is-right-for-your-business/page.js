
import CustomWebsite from "./CustomWebsite.jsx"

export const metadata = {
  title: "Custom Website vs Template: What’s Best for Your Business?",
  description:
    "Discover the key differences between custom and template websites to choose the right option that fits your business needs, budget, and long-term growth.",
  keywords:
    "custom website, template website, website design options, custom web development, website templates, business website, website cost comparison, website scalability, Nakshatra Namaha Creations",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/blog/custom-website-vs-template-which-is-right-for-your-business/",
  },
  openGraph: {
    title: "Custom Website vs Template: What’s Best for Your Business?",
    description:
      "Discover the key differences between custom and template websites to choose the right option that fits your business needs, budget, and long-term growth.",
    url: "https://www.nakshatranamahacreations.com/blog/custom-website-vs-template-which-is-right-for-your-business/",
    type: "website",
    siteName: "Nakshatra Namaha Creations",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/nnclogo.png",
        width: 1200,
        height: 630,
        alt: "Custom Website vs Template",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Custom Website vs Template: What’s Best for Your Business?",
    description:
      "Discover the key differences between custom and template websites to choose the right option that fits your business needs, budget, and long-term growth.",
    images: ["https://www.nakshatranamahacreations.com/media/nnclogo.png"],
    site: "@nncbengaluru",
  },
};


export default function BlogPage() {
    return <CustomWebsite />;
  }
  