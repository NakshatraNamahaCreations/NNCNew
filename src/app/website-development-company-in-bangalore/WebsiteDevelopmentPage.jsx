"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const websitedevBannerImg1 = "/media/webdev/bannerImg.png";
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
import Script from "next/script";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";
import Link from "next/link";

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Rajesh Kumar",
    text: "Nakshatra Namaha Creations transformed my business with a professional and easy-to-use e-commerce website. They made sure the site would function seamlessly, has secure payment integration and mobile responsive. Their support and updates allowed me to scale my online store with ease.",
  },
  {
    image: testimonalImages1,
    name: "- Priya Sharma",
    text: "I needed a site for my healthcare practice and they provided me exactly what I needed. The layout is clean, interface is easy to use and it is designed to maximize patient inquiries. They are truly a Website Development Company in Bangalore and their experience shows.",
  },
  {
    image: testimonalImages,
    name: "- Vikram Shett",
    text: "Being an IT business, I required a website to show off my services. The result was a clean, fast and very functional website that went above and beyond what I needed. I have received great post-launch support.",
  },
  {
    image: testimonalImages1,
    name: "- Ankit Verma",
    text: "My real estate website was outdated, they redesigned and modernized it. My property listings are now well organized and my customers can easily search and filter properties. I highly recommend them!",
  },
];

const services = [
  {
    img: service2,
    title: "Custom Web Development",
    points: [
      "Developing fully tailor made websites to fit business requirements and objectives.",
      "Deliver on high performance, security and user experience.",
      "Create scalable web solutions for future development.",
    ],
  },
  {
    img: service4,
    title: "WordPress Development",
    points: [
      "Develop professional and responsive WordPress websites for businesses.",
      "Develop SEO friendly websites that cover all bases of aesthetic online visibility.",
      "Deliver on easy to manage websites that are customizable.",
    ],
  },
  {
    img: service1,
    title: "E-Commerce Website Development",
    points: [
      "Design features rich online stores allowing customers to experience a better shopping experience.",
      "Integrate payment gateways while still managing stock inventories.",
      "Create mobile friendly and fast loading E-Commerce platforms.",
    ],
  },
  {
    img: service3,
    title: "Landing Page Design",
    points: [
      "Designing high-converting landing pages for optimised lead generation.",
      "Design visually aesthetic and mobile responsive landing pages.",
      "Optimise for speed while also being SEO friendly and engaging for users.",
    ],
  },
  {
    img: service7,
    title: "Static Website Development",
    points: [
      "Create fast-loading and secure static websites for companies.",
      "Strive for a simple, clean, and professional web design.",
      "Ideal for small business and informational websites.",
    ],
  },
  {
    img: service5,
    title: "Dynamic Website Development",
    points: [
      "Build interactive and database driven websites with real-time updates.",
      "Offer business a user-friendly, scalable solution.",
      "Ensure interactions have seamless navigation and an engaging user experience.",
    ],
  },
  {
    img: service8,
    title: "Website Re-Designing",
    points: [
      "Enhance the design and functionality of existing websites.",
      "Optimize websites for SEO, speed and responsiveness.",
      "Modernizing the overall user experience and look.",
    ],
  },
  {
    img: service6,
    title: "CMS Website Development",
    points: [
      "Create easy to manage CMS websites for no-hassle content updates.",
      "Provide easy- to-navigate dashboards for users with no technical background.",
      "Optimize for security, speed and SEO friendly structure.",
    ],
  },
];

const processvideo = [
  {
    img: UnderstandingBusinessGoals,
    title: "Understanding Business Needs",
    points: [
      "We consider scope, objectives, audience, and capabilities to determine the best way for us to proceed based on the defined business requirements.",
    ],
  },
  {
    img: MarketResearchStrategyDevelopment,
    title: "Research & Strategy",
    points: [
      "We conduct the market research required, and define a legitimate strategy for design, function, and user experience.",
    ],
  },
  {
    img: Wireframe,
    title: "Wireframing & Prototyping",
    points: [
      "We create wireframes to visualize layout before development starts.",
    ],
  },
  {
    img: UXUI,
    title: "UI/UX Design",
    points: [
      "We create a visually engaging UI, resulting in better user engagement and seamless navigation.",
    ],
  },
  {
    img: Websitedevelopment,
    title: "Website Development",
    points: [
      "We develop a fully functional website using the latest technologies, ensuring the website is responsive and secure.",
    ],
  },
  {
    img: contentIntegration,
    title: "Content Integration",
    points: [
      "We integrate optimized content, images, and media to improve website speed and user engagement.",
    ],
  },
  {
    img: TestingQualityCheck,
    title: "Testing & Quality Check",
    points: [
      "We exhaustively test and quality check the website to ensure functionality across all devices and browsers.",
    ],
  },
  {
    img: DeploymentLaunch,
    title: "Deployment & Launch",
    points: [
      "We deploy the website on our live server where users can access it from anywhere in the world.",
    ],
  },
  {
    img: PostLaunchSupport,
    title: "Post-Launch Support",
    points: [
      "We continue to support, uses, update, and maintain the website, so it runs at optimal performance status forever.",
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

export default function WebsiteDevelopmentPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Nakshatra Namaha Creations",
        url: "https://www.nakshatranamahacreations.com/",
        logo: "https://www.nakshatranamahacreations.com/media/nnclogo.png",
        sameAs: [
          "https://www.facebook.com/Nakshatranamahacreations/",
          "https://www.instagram.com/nnc.digitalbengaluru/",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
          "https://x.com/nncbengaluru",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9900566466",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Kannada"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        image:
          "https://www.nakshatranamahacreations.com/media/webdev/bannerImg.png",
        url: "https://www.nakshatranamahacreations.com/website-development-company-in-bangalore",
        telephone: "+91-9900566466",
        email: "info@nakshatranamahacreations.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.264056680993265,
          longitude: 76.6444222231926,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "19:00",
          },
        ],
        priceRange: "₹₹",
        paymentAccepted: "Cash, Credit Card, Online Payment",
        sameAs: [
          "https://www.facebook.com/nakshatranamahacreations",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
        ],
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "E-Commerce Website",
        },
        author: {
          "@type": "Person",
          name: "Rajesh Kumar",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Nakshatra Namaha Creations transformed my business with a professional and user-friendly e-commerce website. The team ensured smooth functionality, secure payment integration and mobile responsiveness. Their support and timely updates helped me scale my online store effortlessly.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Website Development",
        },
        author: {
          "@type": "Person",
          name: "Priya Sharma",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: `"I needed a website for my healthcare practice and they delivered exactly what I wanted. The design is clean, easy to navigate and optimized for patient inquiries. Their expertise as a Website Development Company in Bangalore truly stands out." : "2025-04-20"`,
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Website Development Service",
        },
        author: {
          "@type": "Person",
          name: "Vikram Shetty",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "As an IT business, I needed a website that showcased my services effectively. They developed a sleek, fast and highly functional website that exceeded my expectations. Their post-launch support has been excellent.",
        datePublished: "2025-03-15",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Real Estate Website Services",
        },
        author: {
          "@type": "Person",
          name: "Ankit Verma",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "My real estate website was outdated and they revamped it with a modern, engaging design. Now, my property listings are well-organized and customers can easily search and filter properties. I highly recommend their services.",
        datePublished: "2025-05-10",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What services do you offer as a Website Development Company in Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide custom website development, e-commerce solutions, WordPress development, Shopify development, static and dynamic websites, landing page design and website re-designing.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer SEO-friendly website development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we develop SEO-friendly websites with optimized structure, fast loading speed and mobile responsiveness for better search engine rankings.",
            },
          },
          {
            "@type": "Question",
            name: "Can you redesign my existing website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we specialize in website re-designing to improve design, speed, functionality and user experience while keeping your brand identity intact.",
            },
          },
          {
            "@type": "Question",
            name: "What platform do you use for website development?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We work with multiple platforms, including WordPress, Shopify, React, Next.js and custom development using Node.js, Express and MongoDB.",
            },
          },
          {
            "@type": "Question",
            name: "Can you integrate a payment gateway into my e-commerce website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate secure payment gateways like Razorpay, PayU, Stripe and PayPal for seamless transactions.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get started with my website development project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Simply reach out to us via call, email, or our website and our team will guide you through the process.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.nakshatranamahacreations.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Website Development Service",
            item: "https://www.nakshatranamahacreations.com/website-development-company-in-bangalore",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Website Development Company in Bangalore",
      link: "/website-development-company-in-bangalore",
    },
  ];

  // Buttons list
  const buttons = [
    {
      title: "Graphic Designer in Bangalore",
      link: "/graphic-design-company-in-bangalore",
    },
    {
      title: "Mobile App Developers in Bangalore",
      link: "/mobile-app-development-company-in-bangalore",
    },
    {
      title: "Digital Marketing Agency in Bangalore",
      link: "/digital-marketing-agency-in-bangalore",
    },
    {
      title: "Corporate Video Production in Bangalore",
      link: "/corporate-video-production-company-in-bangalore",
    },
    {
      title: "2D Animation Service in Bangalore",
      link: "/2d-animation-studio-in-bangalore",
    },
    {
      title: "B2B Marketing Service in Bangalore",
      link: "/b2b-marketing-agency-in-bangalore",
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
          {JSON.stringify(schemaMarkup)}
        </Script>
     

      <div>
        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBottom: "5%", marginTop: "3%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={6}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  WEBSITE DEVELOPMENT COMPANY{" "}
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
                style={{ width: "80%", height: "auto", objectFit: "cover" }}
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
              Best Website Development Company in Bangalore
            </h1>
            <Row className="d-flex justify-content-between align-items-center">
              <Col sm={8}>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  With 8+ years of expertise on website development, we provide
                  solutions that fulfill industry standards while addressing
                  your business needs. Once you enlist us to help you with your
                  project, we take care of all tasks associated with design,
                  development, and deployment. We excel at creating websites
                  that are visually intriguing, while also correctly managed on
                  the backend. Our proficiencies in several different
                  technologies guarantees that everything works proficiently so
                  your business can be successful online.
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
              Our Services on the Website Development Company in Bangalore
            </h2>
            <p
              style={{
                lineHeight: "1.7",
                fontSize: "16px",
                letterSpacing: "1px",

                fontWeight: "400",
              }}
            >
              A solid online presence begins with a professional, user-friendly,
              secure, and high performance website. As a Website Development
              Company in Bangalore, we offer professional web solutions to
              establish a digital presence and help your business gain traffic.
              We specialize in building high-end quality websites that adhere to
              industry standards and business requirements. We design and
              develop world-class websites.
            </p>

            {/*  Our Services on the Mobile App Development Company in Bangalore */}

            <Container style={{ marginTop: "10%" }}>
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

        <Container>
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
            At Nakshatra Namaha Creations, you will receive professional
            service, dependable support and transparency at all stages of the
            project. As a premier Website Development Company in Bangalore, we
            focus on the highest quality designs, reliable functionality and
            delivery of websites that are friendly to navigate and suit your
            business requirements and online reputation.
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
                      We build visually stunning sites that are well designed,
                      easy to navigate and have a user-friendly experience.
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
                      All websites are designed to consider different screen
                      sizes for functionality on all devices!
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
                      All websites are designed using the SEO best practices and
                      methods to help leverage SEO efforts for search engines.
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
                        We optimize websites for faster loading times, reducing
                        bounce rates and improving user engagement.
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
                        We have a robust development process to keep us on track
                        with project timeframes and completion timeline without
                        sacrificing quality.
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
                {/* <div
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
                </div> */}
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
                    Dynamic WordPress Website
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

        <Container style={{ margin: "10% auto", height: "60vh" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as Website Developers in Bangalore
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
            We provide website development solutions to businesses in several
            industries to ensure high quality design, functionality and user
            experience. As skilled website developers in Bangalore we build
            websites that meet industry standards while achieving business
            objectives and brand visibility.
          </p>

          {/* <IndustriesServed /> */}
          <IndustriesServedMobileApp />
        </Container>

        <Container style={{ margin: "10% auto" }}>
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            WE WORK WITH REMARKABLE BRANDS
          </h2>

          <ClientImagesMobileApp />
        </Container>

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
                <Link href={button.link}>
                <Button
                  variant="outline-dark"
                  className="rounded-pill px-3 py-2"
                  style={{ fontSize: "14px" }}
                >
                    {button.title}
                </Button>
                    </Link>
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
