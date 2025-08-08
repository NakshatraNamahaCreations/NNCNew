"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
const BannerImg1 = "/media/B2BHyd.png";
const BannerImg2 = "/media/b2bmarketing/B2B Marketing Agency in Bangalore.png";
import ContactFrom from "@/components/ContactForm";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";
import Breadcrumbs from "@/components/BreadCrumbs";
import IconsModal from "@/components/IconsModal";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";
import Head from "next/head";
import Script from "next/script";

import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";

const service1 = "/media/b2bmarketing/Strategic Planning.png";
const service2 = "/media/b2bmarketing/Lead Generation.png";
const service3 = "/media/b2bmarketing/Content Marketing.png";
const service4 = "/media/b2bmarketing/Account-Based Marketing.png";
const service5 = "/media/b2bmarketing/Brand Positioning.png";
const ResearchStrategy = "/media/b2bmarketing/Research & Strategy.png";
const LeadGenerationOutreach =
  "/media/b2bmarketing/Lead Generation & Outreach.png";
const ContentBrandPositioning =
  "/media/b2bmarketing/Content & Brand Positioning.png";
const PerformanceTrackingOptimization =
  "/media/b2bmarketing/Performance Tracking & Optimization.png";
import Link from "next/link";


// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Ravi Kumar, Logistics Firm Owner",
    text: "Nakshatra Namaha Creations helped us break into a new market segment with precision targeting and clear messaging. The results exceeded expectations.",
  },
  {
    image: testimonalImages1,
    name: "- Sneha Reddy, SaaS Founder",
    text: "Our campaigns finally had structure and direction. The strategic inputs and execution gave us better leads and faster conversions.",
  },
  {
    image: testimonalImages,
    name: "- Vikram Shetty, Industrial Supplies",
    text: "The team understood our business inside out and delivered a B2B outreach model that actually worked. A dependable partner in every sense.",
  },
  {
    image: testimonalImages1,
    name: "- Aparna Desai, Legal Tech Startup",
    text: "They didn't just run campaigns—they built a growth engine for us. The clarity and transparency they bring to marketing is refreshing.",
  },
];

const faqs = [
  // FAQ List
  {
    question: "How is B2B marketing different from B2C marketing?",
    answer:
      "B2B marketing focuses on building relationships and solving business problems, often involving longer sales cycles and decision-making processes.",
  },
  {
    question: "Do you work with niche industries?",
    answer:
      "Yes, our team has experience working with specialized and technical sectors, crafting custom strategies for each.",
  },
  {
    question: "Can you help with both strategy and execution?",
    answer:
      "Absolutely. We handle the full marketing lifecycle—from planning to implementation and optimization.",
  },
  {
    question: "Is there a minimum engagement period?",
    answer:
      "While one-time projects are welcome, we recommend ongoing engagement for maximum impact and consistent results.",
  },
  {
    question: "Will we get access to campaign reports?",
    answer:
      "Yes, we provide detailed performance tracking and regular reporting to keep you informed.",
  },
  {
    question: "Do you offer services only in Hyderabad?",
    answer:
      "Though based in Hyderabad, we work with clients across India and abroad through online collaboration and dedicated support.",
  },
];
const services = [
  {
    img: service1,
    title: "Strategic Planning",
    points: [
      "Identify core business challenges and market gaps.",
      "Ensures campaigns align with target audience needs for better engagement.",
      "Align marketing efforts with organizational objectives.",
    ],
  },
  {
    img: service2,
    title: "Lead Generation",
    points: [
      "Build qualified lead funnels that focus on value and conversion.",
      "Integrate multi-channel strategies to capture attention.",
      "Nurture prospects through thoughtful touchpoints.",
    ],
  },
  {
    img: service3,
    title: "Content Marketing",
    points: [
      "Craft industry-relevant content that builds authority.",
      "Distribute across appropriate channels for visibility.",
      "Enhance engagement through storytelling and insights.",
    ],
  },
  {
    img: service4,
    title: "Account-Based Marketing",
    points: [
      "Target high-value clients with personalized outreach.",
      "Develop tailored messaging for key stakeholders.",
      "Maximize ROI with focused campaigns and deeper relationships.",
    ],
  },
  {
    img: service5,
    title: "Brand Positioning",
    points: [
      "Define a clear voice that resonates with your audience.",
      "Differentiate through consistent messaging and values.",
      "Strengthen perception through visuals and strategic content.",
    ],
  },
];

const processvideo = [
  {
    img: ResearchStrategy,
    title: "Research & Strategy",
    points: [
      "Each campaign begins with deep market and competitor research. We craft strategy based on real data, ensuring decisions are informed, not assumed.",
    ],
  },
  {
    img: LeadGenerationOutreach,
    title: "Lead Generation & Outreach",
    points: [
      "By identifying the right audience segments, we launch precision-targeted campaigns that spark interest, open conversations, and convert.",
    ],
  },
  {
    img: ContentBrandPositioning,
    title: "Content & Brand Positioning",
    points: [
      "Our content and messaging are created to speak directly to industry pain points, reinforcing brand relevance and increasing engagement.",
    ],
  },
  {
    img: PerformanceTrackingOptimization,
    title: "Performance Tracking & Optimization ",
    points: [
      "With real-time data and regular analysis, we track performance metrics and refine efforts continuously for better outcomes.",
    ],
  },
];

export default function B2BMarketingHyd() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "B2B Marketing Company in Hyderabad",
      link: "/b2b-marketing-company-hyderabad",
    },
  ];

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
        {/* <!-- Meta Pixel Code --> */}
        <Script type="application/ld+json">
          {`{
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
      "url": "https://www.nakshatranamahacreations.com/b2b-marketing-company-hyderabad",
      "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png"
    },
    {
      "@type": "Service",
      "serviceType": "B2B Digital Marketing Services",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "B2B Lead Generation",
      "provider": {
        "@id": "https://www.nakshatranamahacreations.com/#localbusiness"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Account-Based Marketing",
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
          "name": "B2B Marketing Company in Hyderabad",
          "item": "https://www.nakshatranamahacreations.com/b2b-marketing-company-hyderabad"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is B2B marketing different from B2C marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "B2B marketing focuses on building relationships and solving business problems, often involving longer sales cycles and decision-making processes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with niche industries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our team has experience working with specialized and technical sectors, crafting custom strategies for each."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with both strategy and execution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We handle the full marketing lifecycle—from planning to implementation and optimization."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a minimum engagement period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While one-time projects are welcome, we recommend ongoing engagement for maximum impact and consistent results."
          }
        },
        {
          "@type": "Question",
          "name": "Will we get access to campaign reports?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide detailed performance tracking and regular reporting to keep you informed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer services only in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Though based in Hyderabad, we work with clients across India and abroad through online collaboration and dedicated support."
          }
        }
      ]
    }
  ]
}`}
        </Script>

        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBottom: "5%", marginTop: "3%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  B2B MARKETING COMPANY SERVICE
                </h2>
                <h6>
                  Creating impactful marketing strategies helps businesses
                  connect with the right audience and drive growth.
                </h6>
              </div>
              <img
                src={BannerImg1}
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
              B2B Digital Marketing Services Hyderabad
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
                  For businesses aiming to connect with other businesses,
                  traditional marketing doesn’t always cut through. In a market
                  like Hyderabad, where competition is sharp and decisions are
                  driven by logic, trust, and ROI, B2B marketing demands
                  precision and purpose. It’s about offering value before asking
                  for it, and positioning your brand as the solution to their
                  business needs.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  From startups looking to gain traction to established firms
                  seeking deeper reach, our B2B digital strategies are designed
                  to engage decision-makers. Every campaign is crafted with
                  measurable goals, ensuring that visibility translates into
                  real business growth and long-term partnerships. The focus
                  remains on building credibility, relevance, and strong
                  professional relationships.
                </p>
              </Col>
              <Col sm={4}>
                <img
                  src={BannerImg2}
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
              Our Services on the B2B Marketing Agency in Hyderabad
            </h2>
            <p
              style={{
                lineHeight: "1.7",
                fontSize: "16px",
                letterSpacing: "1px",

                fontWeight: "400",
              }}
            >
              Our work is centered around business goals—strengthening presence,
              expanding networks, and driving sustainable growth. We understand
              that B2B marketing isn’t about quick wins but about meaningful
              communication that leads to long-term results.
            </p>

            {/*  Our Services on the Mobile App Development Company in Bangalore */}
            <Container>
              <Row className="d-flex justify-content-center">
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
            Our B2B Marketing Process: B2B Marketing Companies in Hyderabad
          </h2>

          <Row>
            {processvideo.map((processvideo, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={3}
                className="d-flex justify-content-left"
              >
                <Card
                  className="h-100" // Ensures all cards have the same height
                  style={{
                    overflow: "hidden",
                    border: "none",
                  }}
                >
                  <Card.Body className="d-flex flex-column align-items-center">
                    <img
                      src={processvideo.img}
                      alt={processvideo.title}
                      style={{
                        width:
                          processvideo.title === "Content & Brand Positioning"
                            ? "30%"
                            : "50%",
                        height: "auto",
                        objectFit: "cover",
                        marginBottom: "10px",
                      }}
                    />
                    <h6
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "5px",
                        marginBottom: "10px",
                      }}
                    >
                      {processvideo.title}
                    </h6>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "1.7",
                        textAlign: "center",
                        padding: "0 10px",
                        flexGrow: 1, // Ensures the content takes available space in the card
                      }}
                    >
                      {processvideo.points.map((point, i) => (
                        <p key={i}>{point}</p>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* <div style={{ marginBlock: "5%", }}>
          <WebsiteDevCards />
        </div> */}

        <Container style={{ marginBottom: "10%" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            What Can You Expect from Nakshatra Namaha Creations?
          </h2>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              textAlign: "center",
              fontWeight: "400",
              // marginBottom: "5%",
            }}
          >
            We bring a focused and structured approach to every B2B campaign.
            Our strategies are insight-driven, backed by research, and
            fine-tuned to business realities. With every engagement, we
            prioritize collaboration, quality execution, and results that
            actually move the needle.
            <br />
          </p>
        </Container>

        {/* Industries Mobile App Development */}
        <Container style={{ margin: "10% auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as B2B Marketing Agency in Bangalore
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
            We work across diverse sectors, helping brands navigate complex B2B
            ecosystems with clarity and confidence. Our experience spans
            manufacturing, tech, real estate, logistics, and more—ensuring we
            understand your space and speak your language. Whatever your
            vertical, we’re here to amplify your reach and impact.
          </p>

          {/* <IndustriesServed /> */}
          <IndustriesServedMobileApp />
        </Container>
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
            Over the years, we’ve had the privilege of partnering with ambitious
            businesses and forward-thinking brands. Each project brings new
            challenges and fresh ideas—and we thrive in environments that push
            boundaries and deliver real change.
          </p>
        </Container>
        <ClientImagesMobileApp />

        {/* TESTIMONIALS */}
        <Container style={{ margin: "0% auto" }}>
          <TestimonialsSlick testimonials={testimonials} />
        </Container>

        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "25px",
            textAlign: "center",
            margin: "5% 0%",
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
