"use client"

import { useEffect, useState } from "react";
const digital = "/media/DigitalHyd.png";
import { Container, Row, Col, Button } from "react-bootstrap";
const videoproduction = "/media/DigitalMarketingAgencyinBangalore.png";
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
const SocialMediaVideos = "/media/SocialMediaVideos.png";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";

import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import ContactFrom from "@/components/ContactForm";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";
import PlanBtn from "@/components/websiteDev/PlanBtn";
import Breadcrumbs from "@/components/BreadCrumbs";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
import IconsModal from "@/components/IconsModal";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Shalini Mehra – Founder, Edunova",
    text: "Working with Nakshatra Namaha Creations changed how we approached digital. From SEO to social, everything was well planned and executed.",
  },
  {
    image: testimonalImages1,
    name: "- Ramesh Varma – MD, UrbanStyle Living",
    text: "They didn’t just manage ads—they owned the entire funnel. We started seeing ROI within the first 30 days.",
  },
  {
    image: testimonalImages,
    name: "- Ayesha Khan – Marketing Head, Herbal Origins",
    text: "Our Instagram went from static to stunning. The creative team knows how to capture attention and drive action.",
  },
  {
    image: testimonalImages1,
    name: "- Karthik Iyer – CEO, TechGuard Systems",
    text: "Analytics, content, and results—all delivered without fluff. It’s rare to find an agency that gets performance and brand both right.",
  },
];

const faqs = [
              // FAQ List
              {
                question: "Will I get regular updates on my marketing campaign?",
                answer:
                  "Yes, we provide detailed performance reports and insights. Our team keeps you updated on progress and suggests improvements to enhance results.",
              },
              {
                question: "What types of paid advertising do you offer?",
                answer:
                  "We offer Google Ads, Facebook Ads, Instagram promotions, LinkedIn Ads, and YouTube advertising. Our team ensures your ads reach the right audience and generate high-quality leads.",
              },
              {
                question: "Can digital marketing help local businesses grow?",
                answer:
                  "Yes, local businesses can benefit from SEO, Google My Business optimization, social media marketing, and local ads. Our strategies help businesses attract nearby customers and improve their online presence.",
              },
              {
                question:
                  "How do you measure the success of digital marketing campaigns?",
                answer:
                  "We track key performance indicators (KPIs) such as website traffic, search rankings, lead generation, engagement rates, and conversion rates.",
              },
              {
                question:
                  "What services do you provide as a Digital Marketing Agency in Bangalore?",
                answer:
                  "We offer SEO, social media marketing, PPC advertising, content marketing, website optimization, and branding solutions to help businesses grow online.",
              },
              {
                question:
                  "How do I get started with your digital marketing services?",
                answer:
                  "You can contact us for a free consultation. Our team will understand your business goals, discuss suitable strategies, and create a customized plan to grow your online presence.",
              },
            ]


const services = [
  {
    img: seo,
    title: "SEO",
    points: [
      "Boost your website's visibility on search engines and attract relevant organic traffic with proven optimization techniques.",
    ],
  },
  {
    img: SocialMediaMarketing,
    title: "Social Media Marketing",
    points: [
      "Create engaging campaigns and build meaningful communities across platforms like Instagram, Facebook, and LinkedIn.",
    ],
  },
  {
    img: PaidMarketing,
    title: "Paid Marketing",
    points: [
      "Run smart, data-backed ad campaigns on Google, Meta, and other platforms to drive traffic, leads, and sales.",
    ],
  },
];

const processvideo = [
  {
    img: UnderstandingBusinessGoals,
    title: "Understanding Business Goals",
    points: [
      "We begin by listening—understanding your goals, challenges, and target audience to create a clear digital direction.",
    ],
  },
  {
    img: MarketResearchStrategyDevelopment,
    title: "Market Research & Strategy Development",
    points: [
      "Our team dives into industry trends, competitor activity, and audience behavior to craft a strong, actionable marketing roadmap.",
    ],
  },
  {
    img: ContentCreationOptimization,
    title: "Content Creation & Optimization",
    points: [
      "We create content that speaks your brand’s voice—blogs, visuals, social media, or ads—all designed to engage and convert.",
    ],
  },
  {
    img: CampaignExecutionManagement,
    title: "Campaign Execution & Management",
    points: [
      "Every campaign is launched with precision, monitored daily, and fine-tuned to ensure maximum efficiency and ROI.",
    ],
  },
  {
    img: PerformanceAnalysisOptimization,
    title: "Performance Analysis & Optimization",
    points: [
      "We analyze campaign data regularly to identify patterns and opportunities for continuous improvement and better results.",
    ],
  },
  {
    img: ContinuousGrowthScaling,
    title: "Continuous Growth & Scaling",
    points: [
      "Once results start showing, we scale the strategies that work—expanding your reach while maintaining quality.",
    ],
  },
];

export default function DigitalMarketingHyd() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Digital Marketing Agency in Hyderabad",
      link: "/digital-marketing-agency-hyderabad",
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
      title: "B2B Marketing Company in Hyderabad",
      link: "/b2b-marketing-company-hyderabad",
    },
    {
      title: "Corporate Video Production in Hyderabad",
      link: "/corporate-video-production-company-hyderabad",
    },
    {
      title: "Website Development Company in Hyderabad",
      link: "/website-development-company-in-hyderabad",
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
   
            {/* Breadcrumb & Service & FAQ Schema */}
                    <Script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "LocalBusiness",
                                    "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
                                    name: "Nakshatra Namaha Creations",
                                    image: "https://www.nakshatranamahacreations.com/media/nnclogo.png",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress:
                                            "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
                                        addressLocality: "Bengaluru",
                                        addressRegion: "Karnataka",
                                        postalCode: "560061",
                                        addressCountry: "IN",
                                    },
                                    geo: {
                                        "@type": "GeoCoordinates",
                                        latitude: 12.900525119796741,
                                        longitude: 77.52318771928213,
                                    },
                                    url: "https://www.nakshatranamahacreations.com",
                                    telephone: "+91-9900566466",
                                    email: "info@nakshatranamahacreations.com",
                                    areaServed: "Bangalore",
                                    priceRange: "₹₹",
                                    sameAs: [
                                        "https://www.facebook.com/Nakshatranamahacreations/",
                                        "https://www.instagram.com/nnc.digitalbengaluru/",
                                    ],
                                },
                                {
                                    "@type": "Organization",
                                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                                    name: "Nakshatra Namaha Creations",
                                    url: "https://www.nakshatranamahacreations.com/digital-marketing-agency-hyderabad",
                                    logo: "https://www.nakshatranamahacreations.com/media/nnclogo.png",
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    itemListElement: [
                                        {
                                            "@type": "ListItem",
                                            position: 1,
                                            name: "Home",
                                            item: "https://www.nakshatranamahacreations.com",
                                        },
                                        {
                                            "@type": "ListItem",
                                            position: 2,
                                            name: "Best Digital Marketing Agency in Hyderabad |SEO & Ad Experts",
                                            item: "https://www.nakshatranamahacreations.com/digital-marketing-agency-hyderabad",
                                        },
                                    ],
                                },
                                {
                                    "@type": "FAQPage",
                                    mainEntity: [
                                        {
                                            "@type": "Question",
                                            name: "How do you decide the right digital channels for a brand?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "We analyze your industry, audience, and goals before selecting platforms where your brand can grow most efficiently.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "How long before we start seeing results?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "SEO may take 3-4 months, while paid ads and social media can start showing initial traction in weeks with consistent strategy.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Do you provide content creation as part of your packages?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Yes, we create everything from blog posts and ad creatives to video scripts and social captions—all in-house.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Can I start with a small budget and scale later?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Absolutely. Many clients begin with test budgets and gradually expand based on performance metrics.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Is your team based in Hyderabad or remote?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Our core team is based in Hyderabad, with additional creative and technical support available remotely as needed.",
                                            },
                                        },
                                        {
                                            "@type": "Question",
                                            name: "Will I receive performance reports regularly?",
                                            acceptedAnswer: {
                                                "@type": "Answer",
                                                text: "Yes, we share detailed performance reports weekly or monthly, along with strategic recommendations.",
                                            },
                                        },
                                    ],
                                },
                            ],
                        })}
                    </Script>

        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBlock: "4%" }}>
          <Row className="d-flex justify-content-between align-items-center ">
            <Col sm={7}>
              <div style={{ marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  DIGITAL MARKETING SERVICE{" "}
                </h2>
                <h6>
                  Effective online marketing strategies help businesses reach
                  their target audience and drive growth.
                </h6>
              </div>
              <img
                src={digital}
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
        <div style={{ margin: "auto 5%" }}>
          <Container>
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Best Digital Marketing Agency in Hyderabad
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
                  Building a strong online presence is more than just being
                  active—it’s about creating real connections and measurable
                  impact. Our digital marketing approach in Hyderabad focuses on
                  delivering value through strategy, creativity, and
                  performance. Whether you're launching a new brand or scaling
                  an existing one, we help you attract the right audience and
                  grow consistently. With a team rooted in analytics and
                  creative thinking, we transform ideas into results.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",

                    fontWeight: "400",
                  }}
                >
                  In a city as dynamic as Hyderabad, your brand needs more than
                  generic campaigns to stand out. We blend deep market insights
                  with hands-on execution to craft digital strategies that
                  actually move the needle. From improving search visibility to
                  launching high-converting ad campaigns, every step we take is
                  tied to business growth. At our agency, success isn’t just
                  about impressions or clicks—it’s about creating sustained
                  engagement and driving real-world outcomes.
                </p>
              </Col>
              <Col sm={4}>
                <img
                  src={videoproduction}
                  alt="mobile-icon"
                  style={{ width: "120%", height: "auto", objectFit: "cover" }}
                  className="img-fluid"
                />
              </Col>
            </Row>
            {/*  Our Services on the Mobile App Development Company in Bangalore */}

            <Container style={{ marginTop: "10%" }}>
              <h2
                style={{
                  fontWeight: "700",
                  letterSpacing: "1px",

                  lineHeight: "1.7",
                  textAlign: "center",
                }}
              >
                Our Services on the Digital Marketing Agency in Hyderabad
              </h2>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
              >
                We offer digital marketing services that blend creativity with
                data-driven execution. From visibility to conversions, every
                solution is built to deliver measurable results. Whether it's
                organic reach or paid growth, we help you scale the smart way.
                Our goal is to make your brand relevant, visible, and impactful
                online.
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
        <div style={{ margin: "0% 10%" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
              maxWidth: "700px",
              margin: "5% auto",
            }}
          >
            Our Process on the Digital Marketing Agency in Hyderabad
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
                    marginBottom: "20px",
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

        {/* <div style={{ marginBottom: "5%" }}>
          <MobileAppCards />
        </div> */}

        <div style={{ margin: "auto 10%" }}>
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
            We approach digital marketing with a focus on clarity, strategy, and
            execution. At Nakshatra Namaha Creations, you get more than a
            service—you get a committed team that understands your goals. Every
            project is handled with attention to detail, creativity, and
            long-term vision. We believe in growing brands through smart
            planning and consistent performance.
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
                      Strategic Digital Solutions
                    </p>
                    <p>
                      Customized marketing plans designed to increase brand
                      visibility and engagement.
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
                      SEO & Online Growth
                    </p>
                    <p>
                      Proven techniques to improve search rankings and attract
                      quality website traffic.
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
                      Social Media Impact
                    </p>
                    <p>
                      Engaging content and targeted campaigns to build a strong
                      online presence.
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
                    04
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Paid Advertising Excellence{" "}
                    </p>
                    <p>
                      Well-optimized ad campaigns that drive high returns and
                      customer conversions.
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
                      Regular Performance Tracking
                    </p>
                    <p>
                      Data-driven reports to monitor progress and refine
                      marketing strategies.
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
                    06
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                      Dedicated Support & Consultation
                    </p>
                    <p>
                      A team of experts ready to assist with insights, guidance,
                      and continuous improvement.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* PICK YOUR PLAN */}
        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "1.5%",
              fontSize: "26px",
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
              <div
                style={{ position: "absolute", top: "10%" }}
                className="digitalMarPlanIcon"
              >
                <img
                  src={SocialMediaVideos}
                  className="dbuilding-icon"
                  alt="building-icon"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "51%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <h3 style={{ fontSize: "24px", color: "white", margin: 0 }}>
                  Digital Marketing Services
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

        <div style={{ margin: "5% 10%" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as Digital Marketing in Hyderabad
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
            We’ve worked with brands across diverse sectors, adapting our
            strategies to suit each business goal. From healthcare and real
            estate to education and fashion, our digital marketing experience
            spans multiple domains. We understand industry nuances and apply
            tailored strategies to get results. Whether you’re a startup or
            enterprise, we know how to move the digital needle.
          </p>

          {/* <IndustriesServed /> */}
          <IndustriesServedMobileApp />
        </div>

        <Container style={{ marginTop: "5% auto" }}>
          <h2
            style={{
              fontWeight: "600",
              // marginBottom: "2%",
              textAlign: "center",
            }}
          >
            We work with remarkable brands
          </h2>
        </Container>
        <ClientImagesMobileApp />

        {/* TESTIMONIALS */}
        <Container style={{ margin: "7% auto" }}>
          <TestimonialsSlick testimonials={testimonials} />
        </Container>
        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "25px",
            textAlign: "center",
            // margin: "15% 0%",
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
