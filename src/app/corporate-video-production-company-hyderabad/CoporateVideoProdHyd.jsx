"use client";

import { useEffect, useState } from "react";
const corporatevideo = "/media/eventvideo.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
const videoproduction = "/media/CorporateVideoProductionCompanyinBangalore.png";
const CorporateVideos = "/media/CorporateVideos.png";
const PodcastsProduction = "/media/PodcastsProduction.png";
const adstv = "/media/Commercial_TVAds.png";
const ProductDemos = "/media/ProductDemos.png";
const DigitalAds = "/media/DigitalAds.png";
const Interviews = "/media/Interviews.png";
const SocialMediaVideos = "/media/SocialMediaVideos.png";
const LiveStreams = "/media/LiveStreams.png";
const DocumentaryVideos = "/media/DocumentaryVideos.png";
const PersonalBrandingVideos = "/media/PersonalBrandingVideos.png";
const EducationalVideos = "/media/EducationalVideos.png";
const RealEstateVideos = "/media/RealEstateVideos.png";
const MusicVideos = "/media/MusicVideos.png";
const AerialVideos = "/media/AerialVideos.png";
const UnderstandingRequirements = "/media/UnderstandingRequirements.png";
const Concept_Scripting = "/media/Concept&Scripting.png";
const PreProductionPlanning = "/media/Pre-ProductionPlanning.png";
const Filming_Production = "/media/Filming&Production.png";
const EditingPostProduction = "/media/EditingPostProduction.png";
const FinalDeliveryDistribution = "/media/FinalDeliveryDistribution.png";
const bgservicesblue = "/media/bg-services-blue.jpeg";
const bgservicesyellow = "/media/bg-services-yellow.jpeg";
const building = "/media/CorporateVideoProductionIcon.png";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";

import CorporateCard from "@/components/corporateVideo/CorporateCard";
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

import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Padma Srinivas",
    text: "The walkthrough video helped us close deals faster. Very professional and on point.",
  },
  {
    image: testimonalImages1,
    name: "- Sumitra N",
    text: "The team understood our idea better than we could explain. Loved the output!",
  },
  {
    image: testimonalImages,
    name: "- Sanjay Kumar",
    text: "Our internal training videos are now so clear and engaging. Great work!",
  },
  {
    image: testimonalImages1,
    name: "- Anoop Reddy",
    text: "From camera angles to edits, my music video was top-tier. Will work with them again.",
  },
];

const faqs = [
  // FAQ List
  {
    question:
      "How long does a typical video project take from start to finish?",
    answer:
      "Timelines vary by complexity but typically range from 2 to 6 weeks.",
  },
  {
    question: "Can we shoot videos at our location or office?",
    answer: "Yes, we can plan and bring the crew to your preferred site.",
  },
  {
    question: "What’s the ideal length for a corporate video?",
    answer: "Most corporate videos perform best between 60–180 seconds.",
  },
  {
    question: "Do you offer voiceover and background music services?",
    answer:
      "Yes, we provide full audio production including VO, music, and SFX.",
  },
  {
    question: "Will we get different format versions for social media use?",
    answer:
      "Absolutely. We deliver in multiple formats—vertical, square, widescreen.",
  },
  {
    question: "Is drone footage included in your packages?",
    answer:
      "Drone footage is optional and can be included depending on the package selected.",
  },
];

const services = [
  {
    img: CorporateVideos,
    title: "Corporate Videos",
    points: [
      "Capture your brand’s values and vision with clarity and impact.",
      "Perfect for boardroom presentations, investor pitches, and internal training.",
      "Designed to build confidence among stakeholders and teams.",
    ],
  },

  {
    img: PodcastsProduction,
    title: "Podcasts Production",
    points: [
      "Professionally recorded audio-visual content to engage niche audiences.",
      "Ideal for subject matter experts, educators, and thought leaders.",
      "Delivered in formats suited for platforms like Spotify, YouTube, and more.",
    ],
  },
  {
    img: adstv,
    title: "Commercial / TV Ads",
    points: [
      "Short-form visual ads with high impact for broadcast or digital use.",
      "Crafted for brand awareness, seasonal promotions, or product launches.",
      "Fast-paced, visually rich, and emotionally engaging.",
    ],
  },
  {
    img: ProductDemos,
    title: "Product Demos",
    points: [
      "Show real-world usage, features, and benefits clearly.",
      "Great for tech, consumer goods, SaaS, and service-oriented offerings.",
      "Builds buyer confidence and reduces sales friction.",
    ],
  },
  {
    img: DigitalAds,
    title: "Digital Ads",
    points: [
      "Optimized for platforms like Instagram, Facebook, YouTube, and Google.",
      "Snappy visuals and copy designed to stop the scroll.",
      "Created with ROI and performance metrics in mind.",
    ],
  },
  {
    img: Interviews,
    title: "Interviews",
    points: [
      "Professional interview setups with clean audio and crisp visuals.",
      "Ideal for founders, team leads, testimonials, or case studies.",
      "Natural, engaging, and contextually filmed to retain authenticity.",
    ],
  },
  {
    img: SocialMediaVideos,
    title: "Social Media Videos",
    points: [
      "Designed for short attention spans and high shareability.",
      "Vertical and square formats tailored for reels and stories.",
      "Includes catchy hooks, captions, and fast editing.",
    ],
  },
  {
    img: LiveStreams,
    title: "Live Streams",
    points: [
      "Multi-camera setups with real-time switching and streaming.",
      "Suitable for webinars, events, launches, and online training.",
      "Includes pre-event testing, overlays, and stream management.",
    ],
  },
  {
    img: DocumentaryVideos,
    title: "Documentary Videos",
    points: [
      "Long-form, story-driven content exploring people, places, or causes.",
      "Emotive visuals supported by narration, interviews, and music.",
      "Suited for brands with a mission, NGO work, or internal culture.",
    ],
  },
  {
    img: PersonalBrandingVideos,
    title: "Personal Branding Videos ",
    points: [
      "Aimed at positioning professionals, influencers, or leaders online.",
      "Includes interviews, behind-the-scenes, and lifestyle edits.",
      "Builds trust and authority across platforms like LinkedIn or YouTube.",
    ],
  },
  {
    img: EducationalVideos,
    title: "Educational Videos",
    points: [
      "Explainers, how-tos, and training content for learners of all levels.",
      "Scripted and structured to aid retention and engagement.",
      "Suitable for e-learning platforms, institutions, and corporate upskilling.",
    ],
  },
  {
    img: RealEstateVideos,
    title: "Real Estate Videos",
    points: [
      "Showcase properties with drone shots, walkthroughs, and voiceovers.",
      "Created for residential, commercial, or luxury spaces.",
      "Helps brokers, developers, and builders attract the right buyers.",
    ],
  },
  {
    img: MusicVideos,
    title: "Music Videos",
    points: [
      "Cinematic edits and performance-focused visuals for artists.",
      "Includes storyboarding, choreography, and advanced effects.",
      "Distributed-ready for YouTube, Spotify, and social channels.",
    ],
  },
  {
    img: AerialVideos,
    title: "Aerial Videos",
    points: [
      "Drone videography capturing breathtaking overhead shots.",
      "Licensed pilots ensure safe and creative angles.",
      "Great for real estate, events, construction, and nature visuals.",
    ],
  },
];

const features = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We take time to understand your brand essence, audience mindset, and project vision, this phase lays the foundation for authentic and meaningful storytelling, we listen, ask the right questions, and map the narrative direction.",
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "We translate ideas into a structured plan—scripts, schedules, casting, and location scouting, our team ensures every aspect is organized for a smooth production experience, you’re involved throughout, so the plan always reflects your voice and intent.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "With crew, cameras, and vision aligned, we begin capturing your story on film, from lighting to direction, every frame is shot with precision and creative intent, we stay agile on set while maintaining professional standards and timelines.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "This is where raw footage becomes a finished story—edited, colored, and enhanced, we add music, motion graphics, and voiceovers to give the film its final tone, you receive polished, platform-ready content that reflects your original vision.",
  },
];

const processvideo = [
  {
    img: UnderstandingRequirements,
    title: "Understanding Requirements",
    points: [
      "We begin by diving into your brand objectives, timelines, and target audience.",
    ],
  },
  {
    img: Concept_Scripting,
    title: "Concept & Scripting",
    points: [
      "Every powerful video starts with a clear concept and a strong script that flows.",
    ],
  },
  {
    img: PreProductionPlanning,
    title: "Pre-Production Planning",
    points: [
      "From logistics to locations, casting, and storyboards—every detail is covered.",
    ],
  },
  {
    img: Filming_Production,
    title: "Filming & Production",
    points: [
      "We bring visuals to life with our team, equipment, and sharp creative direction.",
    ],
  },
  {
    img: EditingPostProduction,
    title: "Editing & Post-Production",
    points: [
      "Refining each frame, adding music, voiceovers, and motion graphics.",
    ],
  },
  {
    img: FinalDeliveryDistribution,
    title: "Final Delivery & Distribution",
    points: [
      "We format the final output for your platforms and ensure it meets your publishing needs.",
    ],
  },
];

export default function CoporateVideoProdHyd() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Corporate Video Production Company in Hyderabad",
      link: "/corporate-video-production-company-hyderabad",
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
      title: "Website Development Company in Hyderabad",
      link: "/website-development-company-in-hyderabad",
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
    
        
                    <Script type="application/ld+json">
                        {`
      {
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
            "url": "https://www.nakshatranamahacreations.com/corporate-video-production-company-hyderabad",
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
                "name": "Corporate Video Production Company in Hyderabad",
                "item": "https://www.nakshatranamahacreations.com/corporate-video-production-company-hyderabad"
              }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does a typical video project take from start to finish?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Timelines vary by complexity but typically range from 2 to 6 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we shoot videos at our location or office?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can plan and bring the crew to your preferred site."
                }
              },
              {
                "@type": "Question",
                "name": "What’s the ideal length for a corporate video?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most corporate videos perform best between 60–180 seconds."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer voiceover and background music services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide full audio production including VO, music, and SFX."
                }
              },
              {
                "@type": "Question",
                "name": "Will we get different format versions for social media use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We deliver in multiple formats—vertical, square, widescreen."
                }
              },
              {
                "@type": "Question",
                "name": "Is drone footage included in your packages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Drone footage is optional and can be included depending on the package selected."
                }
              }
            ]
          }
        ]
      }
    `}
                    </Script>
        <Breadcrumbs paths={breadcrumbPaths} />
        <Container style={{ marginBottom: "5%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "6%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  CORPORATE VIDEO PRODUCTION SERVICE
                </h2>
                <h6>
                  Building a strong brand presence starts with engaging and
                  impactful video content that connects with your audience.
                </h6>
              </div>
              <img
                src={corporatevideo}
                alt="mobileapp-icon"
                className="corporate-vdo-img"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
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
                marginBottom: "5%",
                textTransform: "uppercase",
              }}
            >
              Corporate Video Shoot Hyderabad
            </h1>
            <Row className="d-flex justify-content-between align-items-center ">
              <Col sm={8}>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",

                    fontWeight: "400",
                  }}
                >
                  Hyderabad’s evolving business environment demands clear and
                  impactful communication, and video has become an essential
                  medium for achieving that. Across boardrooms and digital
                  platforms, well-executed visuals convey messages with greater
                  clarity and emotional depth than text alone. When used for
                  internal updates or brand outreach, a professionally crafted
                  video leaves a strong and lasting impression. Each frame at
                  our studio is developed with intention, creative precision,
                  and a deep understanding of the message it carries.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  We collaborate closely with brands, startups, institutions,
                  and professionals to bring their ideas into focus. Our shoots
                  are more than technical executions—they're visual narratives
                  crafted with emotion and precision. With a strong eye for
                  aesthetics and a deep understanding of business communication,
                  we deliver high-quality productions that connect and convert.
                </p>
              </Col>
              <Col sm={4}>
                <img
                  src={videoproduction}
                  alt="mobile-icon"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Container style={{ marginTop: "10%" }}>
              <h2
                style={{
                  fontWeight: "700",
                  letterSpacing: "1px",
                  marginBottom: "5%",
                  lineHeight: "1.7",
                  textAlign: "center",
                }}
              >
                Our Video Production Process: Corporate Film Makers in Hyderabad
              </h2>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  fontWeight: "400",
                  marginBottom: "5%",
                }}
              >
                Every video is a journey—from an idea to its final cut. Our
                process is built around clarity, creativity, and consistency.
                From planning to post-production, we ensure each project runs
                smoothly and reflects your goals with precision.
              </p>

              <Row>
                {services.map((service, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    className="d-flex justify-content-left "
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
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginTop: "5%",
                        }}
                      >
                        {service.title}
                      </h3>
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

        <div style={{ marginTop: "2%", marginBottom: "5%" }}>
          {/* <MobileAppCards /> */}
          <CorporateCard />
        </div>

        <Container style={{ margin: "auto" }}>
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
            We believe great videos start with purpose and ends with impact.
            Every project is more than just visuals—it’s a story crafted to
            connect, engage, and inspire. Our team works closely with you at
            every stage to ensure clarity, creativity, and consistency. From
            discovery to delivery, we align our process with your goals.
          </p>
          <Container>
            <Row>
              {features.map((feature, index) => (
                <Col key={index} sm={6} className="mb-4">
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <h2
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: "#006EA6",
                      }}
                    >
                      {feature.number}
                    </h2>
                    <div
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.7",
                        alignSelf: "center",
                      }}
                    >
                      <h2 style={{ fontWeight: "bold", fontSize: "16px" }}>
                        {feature.title}
                      </h2>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>

        {/* Our Video Production Process: */}
        <div style={{ margin: "5% 10%" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Our Video Production Process: Corporate Video Makers in Hyderabad
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
                  <p
                    style={{
                      // fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "5%",
                    }}
                  >
                    {processvideo.title}
                  </p>
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
                  src={bgservicesblue}
                  alt="bg-blue"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                  <img
                    src={building}
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
                    Corporate Video Production
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
                    ₹65,000
                  </h2>{" "}
                  {/* Reduced font size */}
                  {/* <p style={{ fontSize: "16px", marginTop: "20px", fontWeight: "500" }}>Per minute</p> */}
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
                  src={bgservicesyellow}
                  alt="bg-yellow"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div style={{ position: "absolute", top: "15%", left: "5%" }}>
                  <img
                    src={building}
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
                    top: "51%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                    Customised Corporate Video <br /> Production
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

        <div style={{ margin: "5% 10%" }}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Industries We Serve as Corporate Video Production Company in
            Hyderabad
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
            From startups to enterprises, we create videos that make sense for
            your domain. Whether you’re in healthcare, real estate, education,
            retail, tech, or hospitality—we speak your industry’s language. Our
            process is agile enough to adapt, yet focused enough to deliver on
            time. Each project is approached with a fresh perspective, ensuring
            it resonates with your market.
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
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
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
