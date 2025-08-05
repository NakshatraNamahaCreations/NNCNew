"use client"

import { useEffect, useState } from "react";
const Group117 = "/media/webdev/graphic1.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
const GraphicDesignCompanyinBangalore =
  "/media/GraphicDesignCompanyinBangalore.png";
const seo = "/media/seo.png";
const PaidMarketing = "/media/PaidMarketing.png";
const SocialMediaMarketing = "/media/SocialMediaMarketing.png";
const UnderstandingBusinessGoals = "/media/UnderstandingBusinessGoals.png";
const MarketResearchStrategyDevelopment =
  "/media/MarketResearch&StrategyDevelopment.png";
const ContentCreationOptimization = "/media/ContentCreationOptimization.png";
const CampaignExecutionManagement = "/media/CampaignExecutionManagement.png";
const PerformanceAnalysisOptimization =
  "/media/PerformanceAnalysisOptimization.png";
const ContinuousGrowthScaling = "/media/ContinuousGrowthScaling.png";
const bgservicesyellow = "/media/YellowPriceCard_DigitalMarketing.png";
const CustomisedGraphicDesignService =
  "/media/CustomisedGraphicDesignService.png";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";
import Link from "next/link";
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

import Head from "next/head";
import Script from "next/script";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "Suma R. – Director, Clothing Brand",
    text: "They brought our product catalog to life with clean, professional layouts.",
  },
  {
    image: testimonalImages1,
    name: "Teja K. – Founder, Tech Consultancy",
    text: "Our presentations look sharper and more impactful since working with them.",
  },
  {
    image: testimonalImages,
    name: "Farzana P. – Social Media Manager",
    text: "Every visual they delivered for our ad campaign got strong engagement.",
  },
  {
    image: testimonalImages1,
    name: "Manoj V. – Marketing Head, Real Estate Group",
    text: "Their print and web creatives helped us establish a solid brand impression.",
  },
];

const services = [
  {
    img: seo,
    title: "Visual Branding Design",
    points: [
      "Brand marks, typography, and identity systems",
      "Clear and consistent visual language",
      "Designed for versatility across platforms",
    ],
  },
  {
    img: SocialMediaMarketing,
    title: "Print Design Assets",
    points: [
      "High-quality brochures, flyers, and mailers",
      "Built to inform, engage, and persuade",
      "Designed with grid precision and readability",
    ],
  },
  {
    img: PaidMarketing,
    title: "Campaign Posters & Ads",
    points: [
      "Creative visuals for outdoor and digital campaigns",
      "Designed to attract, inform, and inspire action",
      "Ideal for promotions, events, or announcements",
    ],
  },
  {
    img: PaidMarketing,
    title: "Presentation Design & Business Decks",
    points: [
      "Clean, branded templates and pitch decks",
      "Data visualizations, icons, and layout systems",
      "Crafted for clarity and impact in boardrooms",
    ],
  },
  {
    img: PaidMarketing,
    title: "UI Design for Web & Mobile",
    points: [
      "Interfaces that look great and work smoothly",
      "Responsive layouts and user flow consistency",
      "Designed in Figma, Adobe XD, or your preferred tool",
    ],
  },
  {
    img: PaidMarketing,
    title: "Specialized Creative Design",
    points: [
      "Packaging, event backdrops, social media graphics",
      "Bespoke graphics for campaigns and brand material",
      "Delivered in formats ready for use or production",
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

export default function GraphicDesignServicesHyd() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Graphic Design Services in Hyderabad",
      link: "/graphic-design-services-hyderabad",
    },
  ];

  const buttons = [
    {
      title: "Mobile App Development Company in Hyderabad",
      link: "/mobile-app-development-company-hyderabad",
    },
    {
      title: "Website Development Company in Hyderabad",
      link: "/website-development-company-in-hyderabad",
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
      <div>


                            {/* JSON-LD Schema */}
                    <Script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
              "name": "Nakshatra Namaha Creations",
              "image": "https://nakshatranamahacreations.com/media/nnclogo.png",
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
              "url": "https://nakshatranamahacreations.com/graphic-design-services-hyderabad",
              "logo": "https://nakshatranamahacreations.com/media/nnclogo.png"
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
                  "name": "Graphic Design Services in Hyderabad",
                  "item": "https://nakshatranamahacreations.com/graphic-design-services-hyderabad"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What type of files will I receive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All final designs are shared in high-quality formats (PDF, PNG, JPEG), with source files upon request."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you handle ongoing design work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer monthly retainers and design packs for businesses that need frequent visuals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you work with startups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We help startups build visual identity from the ground up with strategic support."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How are revisions handled?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Each plan includes up to 2–3 revision cycles. We refine until you’re confident with the result."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will the designs match my brand style?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We align every creative to your existing brand guidelines or help define new ones if needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How soon can I get my design delivered?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Turnaround times vary based on complexity, but most projects are delivered within 3–7 working days."
                  }
                }
              ]
            }
          ]
        }
      `}</Script>

        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBlock: "4%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "0%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  GRAPHIC DESIGN COMPANY SERVICE{" "}
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
              Professional Graphic Designers in Hyderabad
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
                  A powerful visual presence gives your brand a distinct voice
                  in a crowded market. In Hyderabad, where competition spans
                  industries, strong design plays a vital role in setting you
                  apart. From logos to layouts, every visual element influences
                  how your audience sees and remembers you. That’s why we
                  approach design with clarity, purpose, and creativity. Our
                  team ensures every output is aligned with your brand goals..
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Whether it’s a brochure for a new product or UI design for a
                  mobile app, the visuals we create are made to engage and
                  perform. We focus on both function and aesthetics, building
                  assets that look great and work well across mediums. Every
                  design is crafted with attention to detail, consistency, and
                  relevance. We help businesses create lasting impressions and
                  visual identities that evolve with them. With us, design
                  becomes your brand’s strongest communicator.
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
                Our Services as a Visual Design Agency in Hyderabad
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
                Design is more than decoration—it’s strategy. We create
                purposeful, engaging visuals for every medium, tailored to your
                business goals and user behavior.
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
            Our Design Process: Graphic Design Agency in Hyderabad
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
            We approach every design project with a strategic mindset and
            creative vision. From initial brainstorming and research to delivery
            and feedback cycles, our process keeps your brand goals at the
            center. We combine visuals with purpose to create designs that
            communicate and convert.
          </p>

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
            What You Get from Nakshatra Namaha Creations
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
            We don’t just make designs—we help your business look better, sell
            more, and communicate clearly. Every element we create is built to
            match your audience’s needs and your market’s expectations.
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
                      Visually Strong, Functional Designs
                    </p>
                    <p>
                      We develop visuals that are aesthetically aligned and
                      practically effective.
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
                      Tailor-Fit Brand Assets
                    </p>
                    <p>
                      Each graphic is produced to match your brand structure and
                      marketing objectives.
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
                      Design Experts with Industry Knowledge
                    </p>
                    <p>
                      Our team understands trends, platforms, and formats that
                      matter.
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
                      Timely Output with Consistency
                    </p>
                    <p>
                      We respect project timelines and maintain high creative
                      standards throughout.
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
          <Container>
            <p style={{ fontSize: "16px" }}>
              Whether you need one-time graphics or ongoing visual support, we
              offer flexible packages to suit your business size and campaign
              needs. Choose a monthly or project-based plan that works for you.
            </p>
          </Container>

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
            Industries We Serve as Graphic Design Experts in Hyderabad
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
            We create designs for businesses across various industries, from
            health and tech to real estate and education. Our industry exposure
            allows us to adapt styles, formats, and tone for every audience.
            Whether it’s a retail poster or a SaaS UI mockup, we’ve done it all.
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
            We Work with Trusted Brands
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
            Our work is trusted by startups, agencies, and growing brands across
            Hyderabad. Each project is handled with creativity, commitment, and
            consistency—no matter the scale or sector.
          </p>

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

        {/* FAQs DIGITAL MARKETING */}

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
