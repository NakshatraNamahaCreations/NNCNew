
"use client";


import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import axios from "axios";
import BlogSearch from "@/components/blogs/BlogSearch";
import BlogCard from "@/components/blogs/BlogCard";
import Icons from "@/components/Icons";

import ViewAllBtn from "@/components/ourworks/ViewAllBtn";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/BreadCrumbs";

const API_BASE_URL = "https://api.nakshatranamahacreations.in"; // Adjust to your backend URL


// Static blog data
const blogData = [
    {
        id: 1,
        title: "Difference between React and Next.js in 2025",
        description:
            "Learn how investing in mobile app development can help businesses stay competitive in the market and connect with their audience better.",
        date: "March 25, 2025",
        category: "Web App Development",
        link: "/blog/difference-between-react-and-next-js",
        banner: "/media/blogs/react&Nextjs.webp",
    },
    {
        id: 2,
        title: "Top 10 Mobile App Development Companies in Bangalore",
        description:
            "Learn how investing in mobile app development can help businesses stay competitive in the market and connect with their audience better.",
        date: "April 30, 2025",
        category: "Mobile App Development",
        link: "/blog/top10-mobile-app-dev-companies-in-bangalore",
        banner: "/media/blogs/Top10MobileappCompanies.png",
    },
    {
        id: 3,
        title: "Top 5 2D Animation Companies in Bangalore",
        description:
            "Explore the Top 2D animation companies in Bangalore offering creative animation services for various industries. Find the perfect studio for your project needs.",
        date: "April 30, 2025",
        category: "Top 5 2D Animation Companies in Bangalore",
        link: "/blog/top-5-2d-animation-companies-in-bangalore",
        banner: "/media/blogs/1.png",
    },
    {
        id: 4,
        title: "Why Businesses Are Choosing 2D Animation for Marketing",
        description:
            "Discover why businesses are opting for 2D animation in marketing. Learn how it enhances brand identity, engages customers, and simplifies complex messages.",
        date: "April 30, 2025",
        category: "Why Businesses Are Choosing 2D Animation for Marketing",
        link: "/blog/why-businesses-are-choosing-2d-animation-for-marketing",
        banner: "/media/blogs/2.png",
    },
    {
        id: 5,
        title: "Top 5 Benefits of 2D Animation for Businesses",
        description:
            "Discover the top benefits of 2D animation for businesses. Learn how it enhances brand identity, simplifies ideas, and boosts engagement for marketing success.",
        date: "April 30, 2025",
        category: "Top 5 Benefits of 2D Animation for Businesses",
        link: "/blog/top-5-benefits-of-2d-animation-for-businesses",
        banner: "/media/blogs/3.png",
    },
    {
        id: 6,
        title: "Web Development Company vs Web Development Agency",
        description:
            "Learn the difference between a web development company and agency. Find out which one suits your business needs based on focus, services, and scalability.",
        date: "April 30, 2025",
        category: "Web Development Company vs Web Development Agency",
        link: "/blog/web-development-company-vs-web-development-agency",
        banner: "/media/blogs/4.png",
    },
    {
        id: 7,
        title: "Top 10 Web Development Companies in Bangalore",
        description:
            "Discover the top 10 web development companies in Bangalore. Learn about their services, expertise, and how they can help grow your business online.",
        date: "April 30, 2025",
        category: "Top 10 Web Development Companies in Bangalore",
        link: "/blog/top-10-web-development-companies-in-bangalore",
        banner: "/media/blogs/5.png",
    },
    {
        id: 8,
        title: "Website Speed Optimization: Tips to Improve your Website Speed",
        description:
            "Learn effective tips to improve your website speed and enhance performance for a better user experience and improved SEO rankings. Boost your site's speed today!",
        date: "April 30, 2025",
        category: "Tips to Improve your Website Speed",
        link: "/blog/tips-to-improve-your-website-speed",
        banner: "/media/blogs/6.png",
    },
    {
        id: 9,
        title: "Bing Places vs Google Business Profile: Key Differences",
        description:
            "Explore the key differences between Bing Places and Google Business Profile to boost your local SEO and manage your business visibility more effectively.",
        date: "April 30, 2025",
        category: "Bing Places vs. Google Business Profile: Key",
        link: "/blog/bing-places-vs-google-business-profile",
        banner: "/media/blogs/8.png",
    },
    {
        id: 10,
        title: "Local SEO Guide: Boost Your Business Visibility Locally",
        description:
            "Professional website development company in HSR Layout, Bangalore. We build mobile friendly, secure, SEO-friendly websites for all types of businesses.",
        date: "April 30, 2025",
        category: "Local SEO Guide: Boost Your Business Visibility Locally",
        link: "/blog/local-seo-complete-guide/",
        banner: "/media/blogs/7.png",
    },
    {
        id: 11,
        title: "Custom Website vs. Template: Which Is Right for Your Business?",
        description:
            "Discover the key differences between custom and template websites to choose the right option that fits your business needs, budget, and long-term growth.",
        date: "April 30, 2025",
        category: "Custom Website vs Template: What’s Best for Your Business?",
        link: "/blog/custom-website-vs-template-which-is-right-for-your-business",
        banner: "/media/blogs/9.png",
    },
    {
        id: 12,
        title: "Why Your Website Needs Schema Markup for SEO",
        description:
            "Discover why adding schema markup to your website improves search visibility, boosts click-through rates, and helps search engines understand your content better.",
        date: "April 30, 2025",
        category: "Why Your Website Needs Schema Markup for SEO",
        link: "/blog/why-your-website-needs-schema-markup",
        banner: "/media/blogs/10.png",
    },
    {
        id: 13,
        title: "Landing Page vs. Homepage: Key Differences Explained",
        description:
            "Understand the real difference between a landing page and a homepage, when to use each, and how to boost conversions by guiding visitors the right way.",
        date: "April 30, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/landing-page-vs-homepage/",
        banner: "/media/blogs/11.png",
    },
    {
        id: 14,
        title: "Top 10 AWS Services for Mobile App Development 2025",
        description:
            "Explore the top 10 AWS services used in mobile app development. Learn how Amplify, Cognito, Lambda, and more power secure, scalable apps in 2025 and beyond.",
        date: "April 30, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/aws-services-for-mobile-app-development",
        banner: "/media/blogs/12.png",
    },
    {
        id: 15,
        title: "Top Mobile App Ideas for Restaurant and Food Businesses",
        description:
            "Explore best mobile app ideas for restaurants and food businesses, from online ordering to loyalty programs. Boost efficiency and engage more customers today.",
        date: "April 30, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/top-mobile-app-ideas-for-restaurant-food-businesses",
        banner: "/media/blogs/13.png",
    },
    {
        id: 16,
        title: "2D vs. 3D Animation: Which Is Better for Your Business Goals",
        description:
            "2D vs. 3D animation—learn which style works best for your business goals. Compare costs, use cases, visual impact, and marketing benefits.",
        date: "April 30, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/2d-vs-3d-animation-which-is-better-for-your-business-goals",
        banner: "/media/blogs/14.png",
    },
    {
        id: 17,
        title: "5 Ways Animation Can Revamp Your Brand Identity",
        description:
            "Discover how animation boosts brand recall, simplifies messaging, and differentiates your business. See 5 ways it can elevate your brand identity today.",
        date: "July 7, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/animation-for-brand-identity",
        banner: "/media/blogs/15.png",
    },
    {
        id: 18,
        title: "Do I Need a Website or a Web App? Here's How to Decide",
        description:
            "Not sure if you need a website or web app, Learn the differences, real-world use cases, and how to make the right choice for your business or project.",
        date: "July 3, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/do-i-need-a-website-or-web-app",
        banner: "/media/blogs/16.png",
    },
    {
        id: 19,
        title: "10 Ways to Use 2D Animation for Websites to Boost Conversions",
        description:
            "Discover how 2D animation for websites can boost user engagement, explain products better, and drive higher conversions with visual storytelling.",
        date: "July 4, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/2d-animation-for-websites",
        banner: "/media/blogs/17.png",
    },
    {
        id: 20,
        title: "Importance of Responsive Design in Modern Web Development",
        description:
            "Discover how 2D animation for websites can boost user engagement, explain products better, and drive higher conversions with visual storytelling.",
        date: "July 5, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/importance-of-responsive-design-in-modern-web-development",
        banner: "/media/blogs/18.png",
    },
    {
        id: 21,
        title: "How AI is Transforming Digital Marketing in 2025",
        description:
            "Explore how AI is transforming digital marketing in 2025—improving personalization, automating content, and making data-driven strategies a reality.",
        date: "July 10, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/how-ai-is-transforming-digital-marketin-in-2025",
        banner: "/media/blogs/19.png",
    },
    {
        id: 22,
        title: "How AI is Revolutionizing Website Development in 2025",
        description:
            "Discover how AI is revolutionizing website development in 2025—from design and coding to content and SEO. Build smarter, faster, and more dynamic websites.",
        date: "July 15, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/how-ai-is-revolutionizing-website-development-in-2025",
        banner: "/media/blogs/20.jpeg",
    },
    {
        id: 23,
        title: "Graphic Design Trends Every Brand Should Embrace in 2025",
        description:
            "Discover the top graphic design trends in 2025 that are transforming brand visuals. From bold typography to AI-powered design, stay ahead in your industry.",
        date: "July 16, 2025",
        category: "Landing Page vs. Homepage: Key Differences Explained",
        link: "/blog/graphic-design-trends-in-2025",
        banner: "/media/blogs/21.jpeg",
    },
];
const BlogClient = () => {
    const [blogs, setBlogs] = useState([]);
    const [visibleCards, setVisibleCards] = useState(9);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

    const toUrlFriendly = (title) => title.replace(/\s+/g, '-').toLowerCase();
    const router = useRouter();

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/blogs`, {
                // params: {
                //     page: currentPage,
                //     limit: 9,
                // },
            });

            const apiBlogs = response.data.data.map((blog) => ({
                id: blog._id,
                title: blog.title,
                description: blog.description.replace(/<[^>]+>/g, "").slice(0, 150),
                date: new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                }),
                category: blog.metaTitle || "General",
                link: `/blog/${toUrlFriendly(blog.title)}`,
                banner: blog.bannerImage.startsWith("http")
                    ? blog.bannerImage
                    : `${API_BASE_URL}/uploads/${blog.bannerImage}`,
            }));

            const maxApiId = Math.max(...apiBlogs.map((b) => parseInt(b.id, 16) || 0), 0);
            const staticBlogs = blogData.map((blog, index) => ({
                ...blog,
                id: maxApiId + index + 1,
            }));

            const combinedBlogs = [...apiBlogs, ...staticBlogs];
            setBlogs(combinedBlogs);
            setTotalPages(response.data.totalPages || 1);
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
            setError("Failed to load API blogs. Showing static data instead.");
            setBlogs(blogData.slice(0, 9));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [currentPage]);

    const handleViewMore = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        } else {
            setVisibleCards((prev) => Math.min(prev + 9, blogs.length));
        }
    };

    const headingSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)",
        config: { tension: 200, friction: 20 },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBlogCardClick = (link) => {
        router.push(link)
    }

    const breadcrumbPaths = [
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
    ];

    return (
        <div>
            <Breadcrumbs paths={breadcrumbPaths} />

            <div style={{ height: "90vh" }} className="blogBanner d-flex align-items-center justify-content-center px-4">
                <div style={{ marginTop: "15%", marginBottom: "12%", textAlign: "center" }}>
                    <h1
                        style={{
                            fontWeight: "900",
                            fontSize: "65px",
                            letterSpacing: "3px",
                            marginBottom: "1%",
                        }}
                        className="h1-careers"
                    >
                        Learn{" "}
                        <span>
                            <FontAwesomeIcon
                                icon={faCircle}
                                size="xs"
                                style={{ color: "#000000", width: "20px", height: "20px" }}
                                className="h1-about-banner-icon"
                            />
                        </span>{" "}
                        Write{" "}
                        <span>
                            <FontAwesomeIcon
                                icon={faCircle}
                                size="xs"
                                style={{ color: "#000000", width: "20px", height: "20px" }}
                                className="h1-about-banner-icon"
                            />
                        </span>{" "}
                        Share
                    </h1>

                    <BlogSearch />
                </div>
            </div>

            <Container style={{ textAlign: "center" }}>
                <animated.h2
                    ref={ref}
                    style={{
                        fontWeight: "900",
                        fontSize: "28px",
                        letterSpacing: "3px",
                        marginBlock: "6%",
                        ...headingSpring,
                    }}
                    className="blogtext"
                >
                    Discover the latest news, trends and innovative cultural trends brought to you by Nakshatra Namaha Creations.
                </animated.h2>
            </Container>


            <Container>
                {loading ? (
                    <p>Loading blogs...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <Row>
                        {blogs.slice(0, visibleCards).map((card, index) => (
                            <Col sm={4} key={`${card.id}-${index}`}> 
                                <div onClick={() => handleBlogCardClick(card.link)} style={{ cursor: "pointer" }}>
                                    <BlogCard card={card} />
                                </div>
                            </Col>
                        ))}

                    </Row>
                )}

                {(visibleCards < blogs.length || currentPage < totalPages) && (
                    <div style={{ marginTop: "2%" }}>
                        <ViewAllBtn onClick={handleViewMore} />
                    </div>
                )}
            </Container>

            <div style={{ marginTop: "10%" }}>
                <Container>
                    <Icons />
                </Container>
            </div>
        </div>
    );
};

export default BlogClient;
