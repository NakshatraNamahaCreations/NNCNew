"use client";
import { useEffect, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
const BannerImg1 = "/media/2DAnimation/2D.png";
const BannerImg2 = "/media/2DAnimation/2D Animation Studio in Bangalore.png";

const StaticOnePageWebsiteIcon =
  "/media/webdev/Static One Page Website_Icon.png";
const ECommerceWebsite = "/media/webdev/E - Commerce Website.png";
const bgservicesblue = "/media/bg-services-blue.jpeg";
const bgservicesyellow = "/media/bg-services-yellow.jpeg";

import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";

import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";

import PlanBtn from "@/components/websiteDev/PlanBtn";
import ContactFrom from "@/components/ContactForm";
import Breadcrumbs from "@/components/BreadCrumbs";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
import IconsModal from "@/components/IconsModal";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";

const service1 = "/media/2DAnimation/Explainer Videos.png";
const service2 = "/media/2DAnimation/Character Animation.png";
const service3 = "/media/2DAnimation/Puppet Animation.png";
const service4 = "/media/2DAnimation/Motion Graphics.png";
const service5 = "/media/2DAnimation/Storyboard and Concept Design.png";
const service6 = "/media/2DAnimation/Customized Design.png";

const PostProduction = "/media/2DAnimation/Post-Production.png";
const PreProduction = "/media/2DAnimation/Pre-Production.png";
const Production = "/media/2DAnimation/Production.png";
import Head from "next/head";
import TwoDAnimationCards from "@/components/twoDAnimations/TwoDAnimationCards";

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Rahul Mehta, Product Manager",
    text: "We needed a clean explainer video for our app launch, and the team delivered beyond expectations. Clear, quick, and spot-on with visuals.",
  },
  {
    image: testimonalImages1,
    name: "- Priya Sharma, Creative Director",
    text: "Their character animation added the emotional layer we were missing in our campaign. It helped us connect with our audience more deeply.",
  },
  {
    image: testimonalImages,
    name: "- Siddharth Jain, Marketing Head",
    text: "Great communication, excellent execution. They understood our brand and delivered professional-quality work on time.",
  },
  {
    image: testimonalImages1,
    name: "- Neha Reddy, Social Media Strategist",
    text: "Working with them was super smooth. The animation was detailed, colorful, and exactly what we wanted for our social media.",
  },
];

const faqs = [
  // FAQ List
  {
    question: "How long does a typical 2D animation project take?",
    answer:
      "Depending on the complexity, it can take anywhere from one to four weeks, including revisions.",
  },
  {
    question: "Can I request voiceovers in different languages?",
    answer:
      "Yes, we offer multilingual voiceover support as part of our post-production services.",
  },
  {
    question: "What formats will I receive after project delivery?",
    answer:
      "We provide MP4, MOV, and other formats as required, optimized for web and mobile use.",
  },
  {
    question: "Do you offer scripts and stryboards too?",
    answer:
      "Absolutely. Our pre-production includes scriptwriting, storyboarding, and visual planning.",
  },
  {
    question: "Is there a minimum duration for animation projects?",
    answer: "We typically handle projects starting from 30 seconds and above.",
  },
  {
    question: "Can animations be used in ads and YouTube videos?",
    answer:
      "Yes, all our animations are optimized for platforms like YouTube, social media, and ad placements.",
  },
];

const services = [
  {
    img: service1,
    title: "Explainer Videos",
    points: [
      "Simplify complex ideas with clean and compelling animated visuals",
      "Focus on storytelling and flow for better viewer retention",
      "Ideal for product demos, services, and onboarding",
    ],
  },
  {
    img: service2,
    title: "Character Animation",
    points: [
      "Expressive characters to add emotion and relatability",
      "Smooth, natural movements for enhanced realism",
      "Used in entertainment, education, and advertising",
    ],
  },
  {
    img: service3,
    title: "Puppet Animation",
    points: [
      "Rigged models for easy animation and flexibility",
      "Efficient process for faster delivery",
      "Perfect for storytelling with dialogue or narration",
    ],
  },
  {
    img: service4,
    title: "Motion Graphics",
    points: [
      "Text, shapes, and icons in motion for data and message-driven content",
      "Useful for presentations, UI walkthroughs, and infographics",
      "Clean design paired with purposeful transitions",
    ],
  },
  {
    img: service5,
    title: "Storyboard and Concept Design",
    points: [
      "Pre-visualization of your entire animation before production begins",
      "Helps in aligning ideas and defining the visual language",
      "Includes character look, scenes, transitions, and more",
    ],
  },
  {
    img: service6,
    title: "Customized Design",
    points: [
      "Each animation style and visual identity is developed from scratch",
      "No templates or generic assets used",
      "Ensures your project stands out and remains memorable",
    ],
  },
];

const processvideo = [
  {
    img: PreProduction,
    title: "Pre-Production",
    points: [
      "Concept finalization, scripting, and storyboarding to lay the groundwork for animation that works with purpose.",
    ],
  },
  {
    img: Production,
    title: "Production",
    points: [
      "Visual asset creation, character rigging, animation, voiceovers, and effects to bring the storyboard to life.",
    ],
  },
  {
    img: PostProduction,
    title: "Post-Production",
    points: [
      "Final edits, sound mixing, transitions, and exporting the animation in multiple formats for your required platforms.",
    ],
  },
];

export default function TwoDAnimationsHyd() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "2D Animation Studio in Hyderabad",
      link: "/2d-animation-studio-hyderabad",
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
    {
      title: "Digital Marketing Agency in Hyderabad",
      link: "/digital-marketing-agency-hyderabad",
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

                {/* Schema Markup */}
                    <Script type="application/ld+json">
                        {`
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
                "url": "https://nakshatranamahacreations.com/2d-animation-studio-hyderabad",
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
                    "name": "2D Animation Studio in Hyderabad | Explainer & Motion Design",
                    "item": "https://nakshatranamahacreations.com/2d-animation-studio-hyderabad"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long does a typical 2D animation project take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Depending on the complexity, it can take anywhere from one to four weeks, including revisions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I request voiceovers in different languages?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we offer multilingual voiceover support as part of our post-production services."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What formats will I receive after project delivery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide MP4, MOV, and other formats as required, optimized for web and mobile use."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer scripts and storyboards too?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Our pre-production includes scriptwriting, storyboarding, and visual planning."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is there a minimum duration for animation projects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We typically handle projects starting from 30 seconds and above."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can animations be used in ads and YouTube videos?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, all our animations are optimized for platforms like YouTube, social media, and ad placements."
                    }
                  }
                ]
              }
            ]
          }
        `}
                    </Script>

        <Breadcrumbs paths={breadcrumbPaths} />

        <Container style={{ marginBottom: "5%", marginTop: "3%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  2D ANIMATION STUDIO SERVICE{" "}
                </h2>
                <h6>
                  Creating engaging 2D animations helps brands communicate
                  effectively and captivate their audience with compelling
                  visual storytelling.
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

        <Container>
          <h1
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "5%",
              textTransform: "uppercase",
            }}
          >
            2D Animation Studio in Hyderabad
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
                Animation breathes life into your ideas, turning static concepts
                into vivid, moving visuals. In Hyderabad’s creative space, 2D
                animation has become an essential tool for businesses to
                communicate more effectively. Whether you're building awareness,
                explaining a process, or launching a campaign, our animations
                are crafted to inform, engage, and leave a lasting impact.
              </p>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
              >
                At our studio, we focus on storytelling with substance. Each
                frame is designed with intention—balancing artistic detail with
                business goals. From concept to delivery, our team ensures that
                your message stands out with clean design, fluid motion, and a
                style that suits your brand. We work across industries, making
                animation not just visually stunning but strategically
                effective.
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
              Our Services on the 2D Animation Studio in Hyderabad
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
              Our 2D animation services are crafted with a focus on clear
              communication, visual appeal, and emotional impact. Every
              animation we create is designed to help businesses connect better
              with their audience and deliver messages effectively.
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
            Our 2D Animation Process: 2D Animation in Hyderabad
          </h2>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              marginBottom: "5%",
              fontWeight: "400",
              alignItems: "centre",
              textAlign: "center",
            }}
          >
            Animation is not just about movement—it’s about method. Our process
            is designed to maintain quality, clarity, and on-time delivery.
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
          <TwoDAnimationCards />
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
            We approach each animation project with a strong mix of creativity,
            planning, and execution. Every visual element is built to
            communicate, connect, and convert.
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
                      Creative and Engaging Animations
                    </p>
                    <p>
                      Animations designed with vibrant visuals and smooth motion
                      to enhance storytelling and audience engagement.
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
                      Character and Background Design
                    </p>
                    <p>
                      Unique character and background designs that align with
                      your brand identity and project needs.
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
                      Project Management
                    </p>
                    <p>
                      A structured workflow to ensure projects are completed on
                      time without compromising quality.
                    </p>
                  </div>
                </div>
              </Col>

              <div className="d-lg-flex justify-content-center my-lg-5 gap-4">
                <Col sm={5}>
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
                        Multiple Revisions
                      </p>
                      <p>
                        Opportunities for feedback and modifications to achieve
                        the best final output.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={5}>
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
                        Support for Various Platforms
                      </p>
                      <p>
                        Animations optimized for digital marketing, social
                        media, presentations, and promotional campaigns.
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
              className="d-flex justify-content-center align-items-center gap-5"
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "50px",
              }}
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
                    top: "54%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    {" "}
                    2D Animation Service
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
                  <p style={{ fontSize: "16px", fontWeight: "500" }}>
                    Starting from
                  </p>
                  <h2
                    style={{
                      fontSize: "30px",
                      fontWeight: "600",
                      lineHeight: 0.4,
                    }}
                  >
                    ₹14,499
                  </h2>{" "}
                  {/* Reduced font size */}
                  <p
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Per minute
                  </p>
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
                  src={bgservicesblue}
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
                    top: "55%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    Dynamic 2D Animation Service
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
                  <h2 style={{ fontSize: "24px", fontWeight: "600" }}>
                    Schedule a Call
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

        <Container style={{ margin: "8% auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as 2D Animation Studio in Hyderabad
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
            From education to entertainment, 2D animation has a place across
            industries. Our team has worked with startups, corporates, agencies,
            and educators to bring ideas to life. The designs are optimized for
            real-world impact, ensuring every industry gets visuals that
            perform.
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
        </Container>
        <ClientImagesMobileApp />
        {/* TESTIMONIALS */}
        <Container style={{ margin: " auto" }}>
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
