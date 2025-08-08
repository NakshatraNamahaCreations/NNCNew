import B2BMarketingPage from "./B2BMarketingPage"

export const metadata = {
  title: "B2B Marketing Agency in Bangalore | Drive Business Growth",
  description:
    "Partner with a leading B2B marketing agency in Bangalore to boost your business growth with targeted campaigns, lead generation, and brand awareness solutions.",
  keywords:
    "B2B Marketing Agency in Bangalore, B2B Marketing Agency Near Me, B2B Marketing Company in Bangalore, B2B Marketing Company Near Me, B2B Marketing Service in Bangalore",
  alternates: {
    canonical:
      "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-bangalore",
  },
  openGraph: {
    title: "B2B Marketing Agency in Bangalore | Drive Business Growth",
    description:
      "Partner with a leading B2B marketing agency in Bangalore to boost your business growth with targeted campaigns, lead generation, and brand awareness solutions.",
    url: "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-bangalore",
    images: [
      {
        url: "https://www.nakshatranamahacreations.com/media/b2bmarketing/B2B%20Marketing%20image.png",
        width: 1200,
        height: 630,
        alt: "B2B Marketing Agency",
      },
    ],
    siteName: "Nakshatra Namaha Creations",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Marketing Agency in Bangalore | Drive Business Growth",
    description:
      "Partner with a leading B2B marketing agency in Bangalore to boost your business growth with targeted campaigns, lead generation, and brand awareness solutions.",
    images: [
      "https://www.nakshatranamahacreations.com/media/b2bmarketing/B2B%20Marketing%20image.png",
    ],
    site: "@nncbengaluru",
    creator: "@nncbengaluru",
  },
};


export default function B2BMarketing() {
    return <B2BMarketingPage />;
  }
  