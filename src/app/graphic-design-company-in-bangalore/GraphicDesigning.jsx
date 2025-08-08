"use client";

import { useEffect, useState } from "react";
const Group117 = "/media/Group117.png";
import { Container, Row, Col, Button } from "react-bootstrap";
const GraphicDesignCompanyinBangalore = "/media/GraphicDesignCompanyinBangalore.png";
const seo = "/media/seo.png";
const PaidMarketing = "/media/PaidMarketing.png";
const SocialMediaMarketing = "/media/SocialMediaMarketing.png";
const UnderstandingBusinessGoals = "/media/UnderstandingBusinessGoals.png";
const MarketResearchStrategyDevelopment = "/media/MarketResearch&StrategyDevelopment.png";
const ContentCreationOptimization = "/media/ContentCreationOptimization.png";
const CampaignExecutionManagement = "/media/CampaignExecutionManagement.png";
const PerformanceAnalysisOptimization = "/media/PerformanceAnalysisOptimization.png";
const ContinuousGrowthScaling = "/media/ContinuousGrowthScaling.png";
const bgservicesyellow = "/media/YellowPriceCard_DigitalMarketing.png";
const CustomisedGraphicDesignService = "/media/CustomisedGraphicDesignService.png";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";

import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import PlanBtn from "@/components/websiteDev/PlanBtn";

import ContactFrom from "@/components/ContactForm";
const testimonalImages  = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";
import Breadcrumbs from "@/components/BreadCrumbs";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
import IconsModal from "@/components/IconsModal";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";

import GarphicdesignCards from "@/components/graphicDesign/GarphicdesignCards";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";


// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Sanjeev K",
    text: "We needed a fresh and modern logo and the team exceeded our expectations. Their approach was structured and they ensured every element aligned with our brand identity. The final design was impressive and highly effective for our business.",
  },
  {
    image: testimonalImages1,
    name: "- Anlit C",
    text: "We approached them for UI/UX design and they created an intuitive, user-friendly interface. Their creative approach and industry knowledge helped us achieve a professional and modern look. The designs were well-optimized for digital platforms.",
  },
  {
    image: testimonalImages,
    name: "- Narayan Mehata",
    text: "Their designs are professional, unique, and highly effective for marketing. The team took the time to understand our business and delivered creative solutions that enhanced our branding. We highly recommend them for graphic design services.",
  },
  {
    image: testimonalImages1,
    name: "- Karthik C",
    text: "Working with Nakshatra Namaha Creations was a seamless experience. They understood our requirements and created designs that were both professional and engaging. Their expertise in branding and marketing materials added great value to our business.",
  },
];

const services = [
  {
    img: seo,
    title: "Logo Design",
    points: [
      "Unique and memorable logos that represent your brand’s identity.",
      "Simple, professional and versatile designs for better brand recognition.",
      "Designed for websites, business cards and digital platforms.",
    ],
  },
  {
    img: SocialMediaMarketing,
    title: "Brochures & Flyers",
    points: [
      "Informative and well-structured designs for marketing and promotions.",
      "Visually appealing layouts that capture attention and communicate clearly.",
      "High-quality graphics to enhance brand credibility.",
    ],
  },
  {
    img: PaidMarketing,
    title: "Posters Design",
    points: [
      "Eye-catching posters for events, promotions and advertisements.",
      "Engaging visuals that create a lasting impression.",
      "Designed for print and digital use with a professional touch.",
    ],
  },
  {
    img: PaidMarketing,
    title: "Presentation Design",
    points: [
      "Well-structured presentations for business, sales, and corporate meetings.",
      "Professional templates with engaging visuals for better communication.",
      "Clear and impactful slides to support your message.",
    ],
  },
  {
    img: PaidMarketing,
    title: "Web Design or UI/UX",
    points: [
      "User-friendly website designs for a seamless digital experience.",
      "Attractive and functional UI/UX to improve engagement.",
      "Responsive layouts for better performance across devices.",
    ],
  },
  {
    img: PaidMarketing,
    title: "Customized Design",
    points: [
      "Personalized designs to match specific business needs.",
      "High-quality graphics for branding, packaging and marketing materials.",
      "Unique visual elements that enhance brand presence.",
    ],
  },
];

const processvideo = [
  {
    img: UnderstandingBusinessGoals,
    title: "Creative & Professional Designs",
    points: [
      "We analyze business objectives, target audience and market positioning. Key challenges and opportunities are identified to create a focused marketing approach.",
    ],
  },
  {
    img: MarketResearchStrategyDevelopment,
    title: "Market Research & Strategy Development",
    points: [
      "SEO-friendly content is created to attract and retain users. Websites, social media and ad copies are optimized for better visibility and performance.",
    ],
  },
  {
    img: ContentCreationOptimization,
    title: "Content Creation & Optimization",
    points: [
      "SEO-friendly content is created to attract and retain users. Websites, social media and ad copies are optimized for better visibility and performance.",
    ],
  },
  {
    img: CampaignExecutionManagement,
    title: "Campaign Execution & Management",
    points: [
      "Marketing campaigns are launched across SEO, social media and paid ads. Targeted advertising ensures businesses reach the right audience effectively.",
    ],
  },
  {
    img: PerformanceAnalysisOptimization,
    title: "Performance Analysis & Optimization",
    points: [
      "Analytics tools measure engagement, traffic and conversions. Strategies are refined based on data insights to improve results and maximize ROI.",
    ],
  },
  {
    img: ContinuousGrowthScaling,
    title: "Continuous Growth & Scaling",
    points: [
      "Marketing strategies are updated to adapt to new trends. Expansion into new channels helps sustain long-term digital growth.",
    ],
  },
];


const faqs = [
  {
    question: "Can I request revisions after the design is completed?",
    answer:
      "Yes, we offer revisions based on client feedback to ensure the final design meets your expectations. The number of revisions depends on the project scope.",
  },
  {
    question: "Do you offer UI/UX design services for websites and mobile apps?",
    answer:
      "Yes, we specialize in designing user-friendly interfaces for websites and mobile applications, ensuring a smooth and engaging user experience.",
  },
  {
    question: " Can you handle bulk design projects for marketing campaigns?",
    answer:
      "Yes, we provide design services for bulk marketing materials, including brochures, posters, flyers and digital campaigns for businesses of all sizes.",
  },
  {
    question:
      "Do you offer custom designs based on specific requirements?",
    answer:
      "Yes, every design we create is unique and based on the specific needs of the client, ensuring that it aligns with your brand identity and objectives.",
  },
  {
    question:
      "Will I get full ownership of the designs once they are completed?",
    answer:
      "Yes, once the project is completed and payment is made, you will have full rights to use the designs as per your business needs.",
  },
  {
    question:
      "What if I need urgent design work?",
    answer:
      "We offer express design services for urgent projects, ensuring high-quality work delivered within tight deadlines.",
  },
]



export default function GraphicDesigning() {
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
        image: "https://www.nakshatranamahacreations.com/media/Group117.png",
        url: "https://www.nakshatranamahacreations.com/graphic-design-company-in-bangalore",
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
          name: "Graphic Design Service",
        },
        author: {
          "@type": "Person",
          name: "Sanjeev K",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "We needed a fresh and modern logo and the team exceeded our expectations. Their approach was structured and they ensured every element aligned with our brand identity. The final design was impressive and highly effective for our business.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Graphic Design Service",
        },
        author: {
          "@type": "Person",
          name: "Anlit C",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: `"We approached them for UI/UX design and they created an intuitive, user-friendly interface. Their creative approach and industry knowledge helped us achieve a professional and modern look. The designs were well-optimized for digital platforms.": "2025-04-20"`,
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Graphic Design Service",
        },
        author: {
          "@type": "Person",
          name: "Narayan Mehata",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Their designs are professional, unique, and highly effective for marketing. The team took the time to understand our business and delivered creative solutions that enhanced our branding. We highly recommend them for graphic design services.",
        datePublished: "2025-03-15",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Graphic Design Service",
        },
        author: {
          "@type": "Person",
          name: "Karthik C",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Working with Nakshatra Namaha Creations was a seamless experience. They understood our requirements and created designs that were both professional and engaging. Their expertise in branding and marketing materials added great value to our business.",
        datePublished: "2025-05-10",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why does my business need a mobile app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A mobile app increases customer engagement, improves sales and makes your services accessible anytime. It also helps build brand loyalty and gives you an edge over competitors.",
            },
          },
          {
            "@type": "Question",
            name: "Will my app work on both Android and iOS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we develop native apps for Android and iOS, as well as cross-platform apps using Flutter and React Native to ensure smooth performance on both platforms.",
            },
          },
          {
            "@type": "Question",
            name: "How do you ensure the security of my mobile app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement strong security protocols like encryption, authentication and secure APIs to protect user data and prevent unauthorized access.",
            },
          },
          {
            "@type": "Question",
            name: "Will you help with app store submission?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we assist in launching your app on Google Play Store and Apple App Store, ensuring it meets all guidelines for approval.",
            },
          },
          {
            "@type": "Question",
            name: "How can I track the performance of my app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We integrate analytics tools that help monitor user engagement, downloads, and other key metrics for business insights.",
            },
          },
          {
            "@type": "Question",
            name: "Can my app integrate with third-party services like payment gateways and CRM systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate payment gateways, CRM tools, social media platforms and other APIs for seamless functionality.",
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
            item: "https://www.nakshatranamahacreations.com/mobile-app-development-company-in-bangalore",
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
      name: "Graphic Design Company in Bangalore",
      link: "/graphic-design-company-in-bangalore",
    },
  ];

  const buttons = [
    {
      title: "Website Developement in Bangalore",
      link: "/website-development-company-in-bangalore",
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
      <div>
     {/* <!-- Meta Pixel Code --> */}
          <Script>
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2226129677535551');
fbq('track', 'PageView');`}
          </Script>
          <noscript>
            {` <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=2226129677535551&ev=PageView&noscript=1"
          />`}
          </noscript>
          {/* <!-- End Meta Pixel Code --> */}

          <Script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </Script>

        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBlock: "4%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "0%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  GRAPHIC DESIGN COMPANY{" "}
                </h2>
                <h6>
                  Effective design is the foundation of strong branding and
                  helps businesses connect with their audience on a deeper
                  level.
                </h6>
              </div>
              <img
                src={Group117}
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
              Graphic Design Company in Bangalore
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
                  A strong brand identity starts with great design and a Graphic
                  Design Company in Bangalore plays a key role in making
                  businesses stand out. Whether it's a logo, brochure, social
                  media creatives, or marketing materials, high-quality visuals
                  help create a lasting impression. Our team focuses on
                  delivering designs that are simple, effective and aligned with
                  your business goals. Every project is handled with creativity
                  and attention to detail to ensure the best results.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Looking for a Graphic Design Company Near Me that understands
                  your needs? We offer a wide range of services, including
                  branding, packaging, UI/UX design and digital graphics. Our
                  expert designers bring ideas to life with professional layouts
                  and engaging visuals. With a deep understanding of market
                  trends, we ensure that every design enhances your brand
                  presence. Let’s create visuals that connect with your audience
                  and drive results.
                </p>
              </Col>
              <Col sm={4}>
                <img
                  src={GraphicDesignCompanyinBangalore}
                  alt="mobile-icon"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Col>
            </Row>

            {/*  Our Services on the Mobile App Development Company in Bangalore */}

            <Container style={{ marginTop: "10%" }}>
              <h2
                style={{
                  fontWeight: "700",
                  letterSpacing: "1px",
                  marginBottom: "2%",
                  lineHeight: "1.7",
                  textAlign: "center",
                }}
              >
                Our Services on the Digital Marketing Agency in Bangalore
              </h2>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  marginBottom: "5%",
                  fontWeight: "400",
                }}
              >
                Professional design plays a vital role in shaping a brand’s
                identity and creating a strong market presence. As a Graphic
                Design Company in Bangalore, we specialize in crafting creative
                and visually appealing designs that help businesses stand out.
                With a focus on quality, innovation and usability, we ensure
                that our designs enhance brand recognition and customer
                engagement. Whether you need promotional graphics or digital
                assets, our team delivers high-quality solutions that align with
                your business goals.
              </p>

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
              marginBottom: "2%",
              maxWidth: "800px",
              margin: "5% auto",
            }}
          >
            Our Graphic Designing Process: Graphic Designers in Bangalore
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
          <GarphicdesignCards />
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
            At Nakshatra Namaha Creations, we create high-quality designs that
            strengthen your brand identity. Our Graphic Designers in Bangalore
            ensure every project is creative, professional and visually
            engaging. We focus on delivering unique and impactful visuals that
            align with your business goals. Every design is crafted with
            precision to enhance brand presence and customer engagement. With a
            commitment to quality, we provide solutions that make your brand
            stand out.
          </p>
          <div>
            <Row className="d-flex justify-content-center ">
              <Col sm={6}>
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
                      Creative & Professional Designs
                    </p>
                    <p>
                      We create visually appealing and brand-focused designs
                      that leave a lasting impression.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
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
                      Custom Design Solutions
                    </p>
                    <p>
                      Every design is crafted to match your business needs and
                      marketing goals.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
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
                      Experienced Design Team
                    </p>
                    <p>
                      Our skilled designers use industry best practices to
                      create impactful and high-quality visuals.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
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
                      On-Time Delivery
                    </p>
                    <p>
                      Projects are completed within deadlines without
                      compromising on quality and precision.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        {/* PICK YOUR PLAN */}
        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "20px", // Reduced padding for compactness
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "1.5%",
              fontSize: "26px", // Reduced font size for compactness
            }}
          >
            PICK YOUR PLAN
          </h2>

          {/* Image Container - Reduced Spacing */}
          <Container
            className="d-flex justify-content-center align-Items-center "
            style={{ gap: "140px" }}
          >
            <div
              style={{
                flex: "1",
                maxWidth: "600px",
                position: "relative",
                minWidth: "250px",
              }}
            >
              <img
                src={bgservicesyellow}
                alt="bg-blue"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <div style={{ position: "absolute", top: "10%", left: "10%" }}>
                <img
                  src={CustomisedGraphicDesignService}
                  alt="building-icon"
                  style={{
                    width: "30%", // Smaller icon size
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
                <h3 style={{ fontSize: "24px", color: "white", margin: 0 }}>
                  Customised Graphic Design
                </h3>{" "}
                {/* Single line text */}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                }}
              >
                <h2 style={{ fontSize: "20px" }}>Schedule a Call</h2>{" "}
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
          </Container>
        </div>

        {/* Industries Mobile App Development */}

        <Container style={{ margin: "5% auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as Graphic Design Company in Bangalore
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
            Strong visuals play a key role in every industry, helping businesses
            connect with their audience. As a Graphic Design Company in
            Bangalore, we provide creative solutions that enhance brand identity
            across various sectors. Our team designs marketing materials,
            digital assets and branding elements that align with industry trends
            and business goals.
          </p>

          {/* <IndustriesServed /> */}
          <IndustriesServedMobileApp />
        </Container>

        <Container style={{ margin: "5% auto" }}>
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            We work with remarkable brands
          </h2>
          {/* <ClientImages /> */}
          <ClientImagesMobileApp />
        </Container>

        {/* TESTIMONIALS */}
        <Container style={{ margin: "5% auto" }}>
          <TestimonialsSlick testimonials={testimonials} />
        </Container>

        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "25px",
            textAlign: "center",
            margin: "0% 0%",
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
