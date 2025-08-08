import BlogClient from "./BlogClient.jsx";

export const metadata = {
    title: "Website & Mobile App Developers | Career Opportunities in Bangalore",
    description: "Explore exciting career opportunities in Bangalore for website developers and mobile app developers. Join our company and grow your technical career today.",
    keywords: "Career Opportunities in Bangalore, Career Opportunities in Mysore, Full Stack Developer, Digital Marketer, Graphic Designer, UI/UX Designer, Website Developer, App Developer",
   
    alternates: {
        canonical: "https://www.nakshatranamahacreations.com/blog",
    },
    
    openGraph: {
      title: "Website & Mobile App Developers | Career Opportunities in Bangalore",
      description: "Explore exciting career opportunities in Bangalore for website developers and mobile app developers. Join our company and grow your technical career today.",
      url: "https://www.nakshatranamahacreations.com/careers",
      image: "https://www.nakshatranamahacreations.com/media/NNCWebsite_CareerPage_PNG_CareerCoverImage.png",
      site_name: "Nakshatra Namaha Creations",
    },
    twitter: {
      card: "summary_large_image",
      title: "Website & Mobile App Developers | Career Opportunities in Bangalore",
      description: "Explore exciting career opportunities in Bangalore for website developers and mobile app developers. Join our company and grow your technical career today.",
      image: "https://www.nakshatranamahacreations.com/media/NNCWebsite_CareerPage_PNG_CareerCoverImage.png",
      site: "@nnc_creations",
      creator: "@nnc_creations",
    },
  };

  export default function BlogPage() {
    return <BlogClient />;
  }
  