import BlogDetailsClient from "./BlogDetailsClient.jsx";
import axios from "axios";

const API_BASE_URL = "https://api.nakshatranamahacreations.in";

const toUrlFriendly = (title) => {
  if (!title || typeof title !== "string") return "untitled";
  return title.replace(/\s+/g, "-").toLowerCase();
};

// ✅ Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  try {
    const { title } = params;
    const response = await axios.get(`${API_BASE_URL}/blogs/blog/title/${title}`);
    const blog = response.data.data;

    const blogUrl = `https://www.nakshatranamahacreations.com/blog/${toUrlFriendly(blog.title)}`;
    const bannerImage = blog.bannerImage.startsWith("http")
      ? blog.bannerImage
      : `${API_BASE_URL}/uploads/${blog.bannerImage}`;

    // ✅ JSON-LD Schema Markup
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.title,
      description: blog.metaDescription,
      author: {
        "@type": "Person",
        name: "Nakshatra Namaha Creations",
        url: "https://www.nakshatranamahacreations.com/",
      },
      publisher: {
        "@type": "Organization",
        name: "Nakshatra Namaha Creations",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nakshatranamahacreations.com/media/logo.png",
        },
      },
      datePublished: blog.createdAt,
      dateModified: blog.updatedAt || blog.createdAt,
      image: bannerImage,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": blogUrl,
      },
    };

    return {
      title: blog.metaTitle,
      description: blog.metaDescription,
      alternates: {
        canonical: blogUrl,
      },
      openGraph: {
        title: blog.metaTitle,
        description: blog.metaDescription,
        url: blogUrl,
        images: [
          {
            url: bannerImage,
            width: 1200,
            height: 630,
            alt: blog.metaTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.metaTitle,
        description: blog.metaDescription,
        images: [bannerImage],
      },
      other: {
        "script:ld+json": JSON.stringify(schemaMarkup),
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog not found",
      description: "This blog could not be found.",
    };
  }
}

export default function BlogPage() {
  return <BlogDetailsClient />;
}
