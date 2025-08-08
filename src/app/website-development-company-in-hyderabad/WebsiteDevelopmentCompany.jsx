"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const websitedevBannerImg1 = "/media/webdev/webdevhyder.jpg";
const websitedevBannerImg2 = "/media/webdev/bannerImg2.png";

const UnderstandingBusinessGoals =
  "/media/webdev/Understanding Business Needs.png";
const MarketResearchStrategyDevelopment =
  "/media/webdev/Research & Strategy.png";
const Wireframe = "/media/webdev/Wireframing & Prototyping.png";
const UXUI = "/media/webdev/UI_UX Design.png";
const Websitedevelopment = "/media/webdev/Website Development.png";
const contentIntegration = "/media/webdev/Content Integration.png";
const TestingQualityCheck = "/media/webdev/Testing & Quality Check.png";
const DeploymentLaunch = "/media/webdev/Deployment & Launch.png";
const PostLaunchSupport = "/media/webdev/Post-Launch Support.png";
const StaticOnePageWebsiteIcon =
  "/media/webdev/Static One Page Website_Icon.png";
const MultipageWordPressWebsite =
  "/media/webdev/Multipage WordPress Website.png";
const ECommerceWebsite = "/media/webdev/E - Commerce Website.png";

// import bgservicesyellow from "/media/YellowPriceCard_DigitalMarketing.png";
const bgpink = "/media/webdev/group2.png";
const bgYellow = "/media/webdev/group1.png";
const bgblue = "/media/webdev/group3.png";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";

import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
// import PopupBtn from "../PopupBtn";

import PlanBtn from "@/components/websiteDev/PlanBtn";
import ContactFrom from "@/components/ContactForm";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";

import Breadcrumbs from "@/components/BreadCrumbs";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
import IconsModal from "@/components/IconsModal";
import WebsiteDevCards from "@/components/websiteDev/WebsiteDevCards";
const mostPoptag = "/media/webdev/mostPoptag.png";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";

const service1 = "/media/webdev/E-Commerce Website Development.png";
const service2 = "/media/webdev/Custom Web Development.png";
const service3 = "/media/webdev/Landing Page Design.png";
const service4 = "/media/webdev/WordPress Development.png";
const service5 = "/media/webdev/Dynamic Website Development.png";
const service6 = "/media/webdev/CMS Website Development.png";
const service7 = "/media/webdev/Static One Page Website_Icon.png";
const service8 = "/media/webdev/Website Re-Designing.png";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "– Ravi Teja",
    text: "I launched my real estate site with them and saw a 40% increase in inquiries within the first month. Highly recommend",
  },
  {
    image: testimonalImages1,
    name: "– Sangeetha",
    text: "Great team to work with. They made our Shopify store look clean, fast, and responsive.",
  },
  {
    image: testimonalImages,
    name: "– Anil Kumar",
    text: "They delivered our WordPress site on time with all SEO basics in place. We ranked in Google within 2 weeks!",
  },
  {
    image: testimonalImages1,
    name: "– Deepa Raj",
    text: "The support post-launch was amazing. Even after going live, they helped us with updates and fixes",
  },
];

const services = [
  {
    img: service2,
    title: "Custom Web Development",
    points: [
      "Tailored website solutions built from scratch to match your unique business requirements.",
      "Clean, scalable code architecture using the latest technologies (HTML5, CSS3, JS, React, Node).",
      "Performance-optimized, SEO-ready, and responsive across all devices.",
    ],
  },
  {
    img: service4,
    title: "WordPress Development",
    points: [
      "Custom themes and plugins for a fully branded and functional WordPress experience.",
      "Easy-to-manage backend with complete control over content, blogs, and media.",
      "SEO-optimized, fast-loading, and secured WordPress websites.",
    ],
  },
  {
    img: service1,
    title: "E-Commerce Website Development",
    points: [
      "User-friendly storefronts with cart, payment gateway, inventory, and shipping integrations.",
      "Built using platforms like WooCommerce, Shopify, or custom frameworks.",
      "Mobile-optimized designs to improve sales and reduce cart abandonment.",
    ],
  },

  {
    img: service3,
    title: "Landing Page Design",
    points: [
      "High-converting landing pages focused on lead generation or product campaigns.",
      "Optimized for Google Ads, Facebook Ads, and other digital marketing funnels.",
      "Clear CTAs, fast loading, and responsive design for maximum ROI.",
    ],
  },
  {
    img: service7,
    title: "Static Website Development",
    points: [
      "Lightweight, fast, and budget-friendly websites for quick online presence.",
      "Ideal for portfolios, brochures, personal branding, or basic business info.",
      "Minimal maintenance with clean and responsive design layout.",
    ],
  },
  {
    img: service5,
    title: "Dynamic Website Development",
    points: [
      "Interactive websites with database connectivity and real-time content management.",
      "Suitable for businesses that need frequent updates, blog integration, or user portals.",
      "Built using robust technologies like PHP, React, Node.js, or CMS platforms.",
    ],
  },
  {
    img: service8,
    title: "Website Re-Designing",
    points: [
      "Refresh outdated designs with a modern, mobile-friendly and SEO-compliant look.",
      "Improve UI/UX, load speed, and conversion rate through structured redesign.",
      "Migrate smoothly from old platforms while retaining essential data and content.",
    ],
  },
  {
    img: service6,
    title: "CMS Website Development",
    points: [
      "Build sites with CMS platforms like WordPress, Joomla, or custom admin panels.",
      "Easily update content, blogs, and media without coding knowledge.",
      "Flexible, secure, and ideal for content-heavy or frequently updated websites.",
    ],
  },
];

const processvideo = [
  {
    img: UnderstandingBusinessGoals,
    title: "Understanding Business Needs",
    points: [
      "We begin by identifying your brand goals, target audience, and business objectives. This sets the foundation for a website that aligns with your vision.",
    ],
  },
  {
    img: MarketResearchStrategyDevelopment,
    title: "Research & Strategy",
    points: [
      "Competitor analysis, market trends, and technical planning help us craft a solid strategy. This ensures your website stands out and performs effectively.",
    ],
  },
  {
    img: Wireframe,
    title: "Wireframing & Prototyping",
    points: [
      "We design a structural layout of the website to visualize user flow and functionality. Prototypes give a clear idea of how the final site will work.",
    ],
  },
  {
    img: UXUI,
    title: "UI/UX Design",
    points: [
      "Our designers create a clean, intuitive interface focused on user engagement. The result is a visually appealing and mobile-friendly experience.",
    ],
  },
  {
    img: Websitedevelopment,
    title: "Website Development",
    points: [
      "Our developers bring the design to life using modern technologies like React, Node, and WordPress. The build is optimized for speed, security, and scalability.",
    ],
  },
  {
    img: contentIntegration,
    title: "Content Integration",
    points: [
      "We add and format your website content—text, images, videos, and graphics. Every section is placed to enhance readability and SEO.",
    ],
  },
  {
    img: TestingQualityCheck,
    title: "Testing & Quality Check",
    points: [
      "Comprehensive testing is done across devices, browsers, and screen sizes. We fix bugs, optimize speed, and ensure every feature works flawlessly.",
    ],
  },
  {
    img: DeploymentLaunch,
    title: "Deployment & Launch",
    points: [
      "After approval, we deploy your website on a live server with full setup. DNS, SSL, and hosting are configured for a smooth launch.",
    ],
  },
  {
    img: PostLaunchSupport,
    title: "Post-Launch Support",
    points: [
      "We provide continuous support for updates, backups, and performance monitoring. Our team is available for any changes or enhancements post-launch.",
    ],
  },
];

const faqs = [
  // FAQ List
  {
    question:
      "What services do you offer as a Website Development Company in Bangalore?",
    answer:
      "We offer custom website development, eCommerce solutions, WordPress development, Shopify development, static and dynamic websites, landing page design, and website re-design.",
  },
  {
    question: "Do you offer SEO-friendly website development?",
    answer:
      "Yes, we design SEO-friendly websites with a structured layout, optimized loading speed, and mobile responsiveness to improve your ranking with search engines.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we can make your website re-design with improvements to design, speed, functionality, and experience, while keeping your brand identity.",
  },
  {
    question: "What platform do you use for website development?",
    answer:
      "We work with Wordpress, Shopify, React, Next.js and can use custom development with Node.js, Express and MongoDB.",
  },
  {
    question: "Can you integrate a payment gateway into my e-commerce website?",
    answer:
      "Yes, we can integrate secure payment gateways such as Razorpay, PayU, Stripe, and Paypal to ensure a secure transaction experience.",
  },
  {
    question: "How do I get started with my website development project?",
    answer:
      "You can contact us by phone, email or on our website, and our team can guide you through the process.",
  },
];

export default function WebsiteDevelopmentCompany() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Website Development Company in Hyderabad",
      link: "/website-development-company-in-hyderabad",
    },
  ];

  // Buttons list
  const buttons = [
    {
      title: "Mobile App Development Company in Hyderabad",
      link: "/mobile-app-development-company-hyderabad",
    },
    {
      title: "Graphic Design Services in Hyderabad",
      link: "/graphic-design-services-hyderabad",
    },
    {
      title: "2D Animation Studio in Hyderabad",
      link: "/2d-animation-studio-hyderabad",
    },
    {
      title: "Digital Marketing Agency in Hyderabad",
      link: "/digital-marketing-agency-hyderabad",
    },
    {
      title: "Corporate Video Production in Hyderabad",
      link: "/corporate-video-production-company-hyderabad",
    },
    {
      title: "B2B Marketing Company in Hyderabad",
      link: "/b2b-marketing-company-hyderabad",
    },
  ];

  // Sequential animation for buttons using useTrail
  const buttonTrail = useTrail(buttons.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    from: { opacity: 0, transform: "scale(0.8)" },
    config: { tension: 200, friction: 12 },
    delay: 200,
  });

  return (
    <>

                {/* Schema Markup */}
                <Script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
                                "name": "Nakshatra Namaha Creations",
                                "image": "https://www.nakshatranamahacreations.com/media/nnclogo.png",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
                                    "addressLocality": "Bengaluru",
                                    "addressRegion": "Karnataka",
                                    "postalCode": "560061",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 12.900525119796741,
                                    "longitude": 77.52318771928213
                                },
                                "url": "https://www.nakshatranamahacreations.com",
                                "telephone": "+91-9900566466",
                                "email": "info@nakshatranamahacreations.com",
                                "areaServed": "Bangalore",
                                "priceRange": "₹₹",
                                "sameAs": [
                                    "https://www.facebook.com/Nakshatranamahacreations/",
                                    "https://www.instagram.com/nnc.digitalbengaluru/"
                                ]
                            },
                            {
                                "@type": "Organization",
                                "@id": "https://www.nakshatranamahacreations.com/#organization",
                                "name": "Nakshatra Namaha Creations",
                                "url": "https://www.nakshatranamahacreations.com/website-development-company-in-hyderabad",
                                "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
                            },
                            {
                                "@type": "Service",
                                "serviceType": "WordPress Website Development",
                                "provider": {
                                    "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
                                }
                            },
                            {
                                "@type": "Service",
                                "serviceType": "E-Commerce Website Development",
                                "provider": {
                                    "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
                                }
                            },
                            {
                                "@type": "Service",
                                "serviceType": "Static Website Development",
                                "provider": {
                                    "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
                                }
                            },
                            {
                                "@type": "Service",
                                "serviceType": "Dynamic Website Development",
                                "provider": {
                                    "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://www.nakshatranamahacreations.com"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Website Development Company in Hyderabad | NNC",
                                        "item": "https://www.nakshatranamahacreations.com/website-development-company-in-hyderabad"
                                    }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to build a website?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "On average, basic sites take 7–10 days, while complex websites may take up to 4 weeks."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Will my website be mobile-friendly and responsive?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, we ensure your website looks great and functions perfectly on all screen sizes."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you provide domain registration and hosting services?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely. We help you register your domain and host your site securely."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I make updates to my site after it’s launched?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, you’ll be able to update text, images, and content via the CMS or admin panel."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is SEO included in your website development service?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "We include basic on-page SEO like meta tags, page speed, and mobile optimization."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What if I need help after the website is live?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "We offer 30 days of free support and paid maintenance options for ongoing help."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </Script>

      <div>
        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBottom: "5%", marginTop: "3%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={6}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  WEBSITE DEVELOPMENT COMPANY SERVICE{" "}
                </h2>
                <h6>
                  Building a strong online presence starts with a well-designed
                  and functional website.
                </h6>
              </div>
              <img
                src={websitedevBannerImg1}
                alt="mobileapp-icon"
                className="img-fluid"
                style={{
                  width: "80%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </Col>
            <Col sm={4}>
              <ContactFrom />
            </Col>
          </Row>
        </Container>

        {/* COMPANY IN BANGALORE */}
        <div style={{ paddingTop: "5%" }}>
          <Container>
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "1px",
                marginBottom: "5%",
                textTransform: "uppercase",
              }}
            >
              Best Website Development Company in Hyderabad
            </h1>
            <Row>
              <Col sm={8}>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  A strong online presence starts with a well-built website. As
                  a trusted website development company in Hyderabad, we design
                  responsive, scalable websites that help businesses grow. From
                  UI/UX to performance, our team delivers solutions that work
                  seamlessly across all devices.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Hyderabad's competitive market demands more than just an
                  online presence. Our development approach focuses on building
                  conversion-driven websites with fast load times, mobile
                  responsiveness, and SEO readiness. Whether you need a
                  one-pager or a complex e-commerce platform, we provide digital
                  solutions that deliver real business impact.
                </p>
              </Col>
              <Col sm={4}>
                <img
                  src={websitedevBannerImg2}
                  alt="mobile-icon"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Col>
            </Row>
            <h2
              style={{
                fontWeight: "600",
                letterSpacing: "1px",
                marginTop: "10%",
                marginBottom: "3%",
                textTransform: "uppercase",
              }}
            >
              Our Service as a Website Development Company in Hyderabad
            </h2>

            {/*  Our Services on the Mobile App Development Company in Bangalore */}

            <Container style={{ marginTop: "5%" }}>
              <Row>
                {services.map((service, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    className="d-flex justify-content-left"
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        boxShadow: "1px 1px 5px lightgrey",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "100%",
                        minHeight: "320px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "left",
                        marginBottom: "20px",
                      }}
                    >
                      <img
                        src={service.img}
                        alt={service.title}
                        style={{
                          width: "30%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <h6
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginTop: "5%",
                        }}
                      >
                        {service.title}
                      </h6>
                      <ul
                        style={{
                          fontSize: "12px",
                          lineHeight: "1.7",
                          textAlign: "left",
                          paddingLeft: "15px",
                        }}
                      >
                        {service.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </div>

        {/* Our Video Production Process: */}
        <div style={{ margin: "5% 10% 0% 10%" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "3%",
              fontSize: "30px",
              maxWidth: "700px",
              marginInline: "auto",
            }}
          >
            Our Website Development Process: Innovative Web Solutions
          </h2>

          <Row>
            {processvideo.map((processvideo, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={4}
                className="d-flex justify-content-left"
              >
                <div
                  style={{
                    padding: "20px",
                    width: "100%",
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "left",
                    // marginBottom: "20px",
                  }}
                >
                  <img
                    src={processvideo.img}
                    alt={processvideo.title}
                    style={{
                      width: "30%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "5%",
                    }}
                  >
                    {processvideo.title}
                  </h6>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.7",
                      textAlign: "left",
                      paddingLeft: "15px",
                    }}
                  >
                    {processvideo.points.map((point, i) => (
                      <p key={i}>{point}</p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ marginBottom: "5%" }}>
          <WebsiteDevCards />
        </div>

        <Container style={{ margin: "5% auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            What can you expect from Nakshatra Namaha Creations?
          </h2>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              textAlign: "center",
              fontWeight: "400",
              marginBottom: "5%",
            }}
          >
            At Nakshatra Namaha Creations, you can expect professional service,
            dependable support, and clear communication at every stage of the
            project. As a trusted Website Development Company in Hyderabad, our
            team is committed to delivering responsive, secure, and
            user-friendly websites that match your business goals and boost your
            digital presence.
          </p>
          <div>
            <Row>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    01
                  </h2>

                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Professional and Modern Designs
                    </p>
                    <p>
                      We build visually polished websites with structured
                      layouts and a user-first approach tailored to Hyderabad’s
                      growing business landscape.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    02
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Mobile-Friendly and Responsive Websites
                    </p>
                    <p>
                      Our websites adapt seamlessly to mobile, tablet, and
                      desktop devices — offering an optimal experience for
                      Hyderabad’s diverse digital audience.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    03
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      SEO-Optimized Development
                    </p>
                    <p>
                      We follow local SEO strategies and coding standards to
                      help Hyderabad-based businesses rank better on search
                      engines and attract regional traffic.
                    </p>
                  </div>
                </div>
              </Col>

              <div className="d-lg-flex justify-content-center my-lg-5 gap-4">
                <Col sm={4}>
                  <div style={{ display: "flex" }}>
                    <h2
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: "#006EA6",
                      }}
                    >
                      04
                    </h2>
                    <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                      <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                        {" "}
                        Fast Loading Speed
                      </p>
                      <p>
                        Performance is key — our websites are optimized for
                        speed, helping reduce bounce rates and improve
                        conversion across Hyderabad's competitive markets.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div style={{ display: "flex" }}>
                    <h2
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: "#006EA6",
                      }}
                    >
                      05
                    </h2>
                    <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                      <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                        On-Time Project Delivery
                      </p>
                      <p>
                        We maintain clear timelines and use an organized
                        development workflow to ensure your Hyderabad business
                        website launches right on schedule.
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </Container>

        {/* PICK YOUR PLAN */}

        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Container>
            <h2
              style={{
                fontWeight: "600",
                // marginBottom: "1.5%",
                fontSize: "26px",
                margin: 0,
              }}
            >
              PICK YOUR PLAN
            </h2>

            <div
              className="d-flex justify-content-between align-items-center "
              style={{ gap: "20px", flexDirection: "row", flexWrap: "wrap" }}
            >
              {/* First Plan Section */}
              <div
                style={{
                  flex: "1",
                  maxWidth: "400px",
                  position: "relative",
                  minWidth: "250px",
                  marginBottom: "20px",
                }}
                className="plan1"
              >
                <img
                  src={bgYellow}
                  alt="bg-blue"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                  <img
                    src={StaticOnePageWebsiteIcon}
                    alt="building-icon"
                    style={{
                      width: "35%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "52%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    Static One Page Website
                  </h3>{" "}
                  {/* Single line text */}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>Starting from</p>
                  <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                    ₹14,499
                  </h2>{" "}
                  {/* Reduced font size */}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <PlanBtn setShowPopup={setShowPopup} />
                  {showPopup && (
                    <InternalContactModal
                      showPopup={showPopup}
                      setShowPopup={setShowPopup}
                    />
                  )}
                </div>
              </div>

              {/* Second Plan Section */}
              <div
                style={{
                  flex: "1",
                  maxWidth: "400px",
                  position: "relative",
                  minWidth: "250px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={bgblue}
                  alt="bg-yellow"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <img
                  src={mostPoptag}
                  style={{
                    position: "absolute",
                    top: "1%",
                    right: "-6%",
                    width: "36%",
                  }}
                />
                <div style={{ position: "absolute", top: "16%", left: "5%" }}>
                  <img
                    src={MultipageWordPressWebsite}
                    alt="building-icon"
                    style={{
                      width: "35%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    Multipage WordPress Website
                  </h3>{" "}
                  {/* Single line text */}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "68%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>Starting from</p>
                  <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                    ₹24,999
                  </h2>{" "}
                  {/* Reduced font size */}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <PlanBtn setShowPopup={setShowPopup} />
                  {showPopup && (
                    <InternalContactModal
                      showPopup={showPopup}
                      setShowPopup={setShowPopup}
                    />
                  )}
                </div>
              </div>

              {/* Third Plan Section */}
              <div
                style={{
                  flex: "1",
                  maxWidth: "400px",
                  position: "relative",
                  minWidth: "250px",
                  marginBottom: "20px",
                }}
                className="plan3"
              >
                <img
                  src={bgpink}
                  alt="bg-yellow"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                  <img
                    src={ECommerceWebsite}
                    alt="building-icon"
                    style={{
                      width: "35%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "52%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    E - Commerce Website
                  </h3>{" "}
                  {/* Single line text */}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "16px" }}>Starting from</p>
                  <h2 style={{ fontSize: "30px", fontWeight: "600" }}>
                    ₹45,999
                  </h2>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <PlanBtn setShowPopup={setShowPopup} />
                  {showPopup && (
                    <InternalContactModal
                      showPopup={showPopup}
                      setShowPopup={setShowPopup}
                    />
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Industries Mobile App Development */}

        <Container style={{ margin: "8% auto", height: "30vh" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as Website Development Company in Hyderabad
          </h2>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              textAlign: "center",
              fontWeight: "400",
              marginBottom: "5%",
            }}
          >
            We offer web development services tailored to diverse business
            sectors. With experience spanning various domains, we create custom
            websites that align with your specific goals and workflows. Whether
            the focus is on generating leads, driving online sales, or enhancing
            user engagement, we’ve built solutions that deliver measurable
            impact.
          </p>

  
          <IndustriesServedMobileApp />
        </Container>

        <div style={{ margin: "10% auto" }}>
          <Container>
            <h2
              style={{
                fontWeight: "600",
                marginBottom: "2%",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              We work with remarkable brands
            </h2>
          </Container>

          <ClientImagesMobileApp />
        </div>

        {/* TESTIMONIALS */}
        <Container style={{ margin: "7% auto" }}>
          <TestimonialsSlick testimonials={testimonials} />
        </Container>

        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "25px",
            textAlign: "center",
            margin: "5% 0%",
            // height: "40vh"
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            {" "}
            Our Other Related Services
          </h2>
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-space gapreduce">
            {buttons.map((button, index) => (
              <div key={index}>
                <Button
                  variant="outline-dark"
                  className="rounded-pill px-3 py-2"
                  style={{ fontSize: "14px" }}
                >
                  <Link href={button.link}>{button.title}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <FAQs faqs={faqs} />
        <KeywordsSection />

        <div style={{ marginTop: "10%" }}>
          <Container>
            <IconsModal />
          </Container>
        </div>
      </div>
    </>
  );
}
