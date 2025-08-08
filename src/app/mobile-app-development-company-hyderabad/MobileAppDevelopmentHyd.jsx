"use client"
import { useEffect, useState } from "react";
const mobileapp = "/media/webdev/webdevhyder.jpg";
import {
  Container,
  Row,
  Col,
  Card,
  FloatingLabel,
  Button,
  Form,
} from "react-bootstrap";
const mobileicon = "/media/Group39.png";
const iosmobile = "/media/iOSMobileAppDevelopment.png";
const andriod = "/media/AndroidMobileAppDevelopment.png";
const flutterapp = "/media/FlutterMobileAppDevelopment.png";
const reactapp = "/media/ReactNativeMobileAppDevelopment.png";
const mobileappdev = "/media/MobileAppDevelopment_Icon.png";
const customobileappdev = "/media/CustomisedMobileAppDevelopment_Icon.png";
const IncreasesCustomerEngagement = "/media/IncreasesCustomerEngagement.png";
const BoostsBrandVisibility = "/media/BoostsBrandVisibility.png";
const SimplifiesCustomerInteraction =
  "/media/SimplifiesCustomerInteraction.png";
const ImprovesSalesandRevenue = "/media/ImprovesSalesandRevenue.png";
const StrengthensCustomerLoyalty = "/media/StrengthensCustomerLoyalty.png";
const SpeedsUpMarketingEfforts = "/media/SpeedsUpMarketingEfforts.png";
const GivesaCompetitiveEdge = "/media/GivesaCompetitiveEdge.png";
const SupportsBusinessGrowth = "/media/SupportsBusinessGrowth.png";
import MobileAppCards from "@/components/mobileApp/MobileAppCards";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";
const bgservicesblue = "/media/bg-services-blue.jpeg";
const bgservicesyellow = "/media/bg-services-yellow.jpeg";
import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const testimonalImages =  "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1=  "/media/NNCWebsite_V3_Testimonials1.png";
import PlanBtn from "@/components/websiteDev/PlanBtn";
import ContactFrom from "@/components/ContactForm";
import Breadcrumbs from "@/components/BreadCrumbs";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
import IconsModal from "@/components/IconsModal";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: " — Rakesh P., Retail Brand Owner",
    text: "Working with this team felt like an extension of our business. The app was delivered on time and runs smoothly",
  },
  {
    image: testimonalImages1,
    name: " — Dr. Meghana S., Healthcare Professional",
    text: "Our clinic now runs more efficiently thanks to the mobile app developed. Great user experience and clean interface.",
  },
  {
    image: testimonalImages,
    name: "— Lakshmi R., EdTech Entrepreneur",
    text: "Their team handled our education app from scratch. The result is a responsive, easy-to-use platform our students love.",
  },
  {
    image: testimonalImages1,
    name: " — Sanjay N., Event Planner",
    text: "I appreciated their professionalism. Everything was well-structured and our feedback was always welcomed.",
  },
];

const faqs = [
  // FAQ List
  {
    question: "Why does my business need a mobile app?",
    answer:
      "A mobile app increases customer engagement, improves sales and makes your services accessible anytime. It also helps build brand loyalty and gives you an edge over competitors.",
  },
  {
    question: "Will my app work on both Android and iOS?",
    answer:
      "Yes, we develop native apps for Android and iOS, as well as cross-platform apps using Flutter and React Native to ensure smooth performance on both platforms.",
  },
  {
    question: "How do you ensure the security of my mobile app?",
    answer:
      "We implement strong security protocols like encryption, authentication and secure APIs to protect user data and prevent unauthorized access.",
  },
  {
    question: "Will you help with app store submission?",
    answer:
      "Yes, we assist in launching your app on Google Play Store and Apple App Store, ensuring it meets all guidelines for approval.",
  },
  {
    question: "How can I track the performance of my app?",
    answer:
      "We integrate analytics tools that help monitor user engagement, downloads, and other key metrics for business insights.",
  },
  {
    question:
      "Can my app integrate with third»party services like payment gateways and CRM systems?",
    answer:
      "Yes, we integrate payment gateways, CRM tools, social media platforms and other APIs for seamless functionality.",
  },
];

export default function MobileAppDevelopmentHyd() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Buttons list
  const buttons = [
    {
      title: "Website Development Company in Hyderabad",
      link: "/website-development-company-in-hyderabad",
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

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Mobile App Development Company in Hyderabad",
      link: "/mobile-app-development-company-hyderabad",
    },
  ];

  return (
    <>
      <div>
 
            {/* JSON-LD Structured Data */}
          <Script type="application/ld+json">{`
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
              "url": "https://www.nakshatranamahacreations.com/mobile-app-development-company-hyderabad",
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
                  "name": "Mobile App Development Company in Hyderabad",
                  "item": "https://www.nakshatranamahacreations.com/mobile-app-development-company-hyderabad"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to build a mobile app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on the app’s complexity. Simple apps may take 4–6 weeks, while advanced apps could take a few months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I build for both Android and iOS at once?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, using cross-platform frameworks like Flutter or React Native allows you to launch on both platforms faster."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I get support after the app is launched?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide maintenance and support to fix bugs, update content, or scale features post-launch."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will you help in publishing the app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We assist with App Store and Google Play submission, ensuring all guidelines are met."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the app secured and data-protected?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We follow security protocols including data encryption, authentication layers, and secure APIs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can the app be integrated with my existing website or backend?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we build APIs and ensure compatibility with your current systems for smooth integration."
                  }
                }
              ]
            }
          ]
        }
      `}</Script>
    

        <Breadcrumbs paths={breadcrumbPaths} />

        <Container
          style={{ marginBottom: "7%", marginTop: "3%" }}
          id="mobileApp_page"
        >
          <Row className="d-flex justify-content-between align-items-center gap-2">
            <Col sm={7}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  Mobile App Development Company in Hyderabad
                </h2>
                <h6>
                  Building a strong business presence starts with creating
                  innovative and user-friendly mobile applications.
                </h6>
              </div>
              <img
                src={mobileapp}
                alt="mobileapp-icon"
                className="img-fluid"
                style={{ width: "70%", height: "auto", objectFit: "cover" }}
              />
            </Col>
            <Col sm={4}>
              <ContactFrom />
            </Col>
          </Row>
        </Container>

        {/* COMPANY IN BANGALORE */}
        <div style={{ margin: "0% 5%" }}>
          <Container>
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "1px",
                marginBottom: "5%",
              }}
            >
              Mobile App Development Company in Hyderabad
            </h1>

            <Row>
              <Col sm={7}>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  A strong mobile presence is now essential for businesses that
                  want to stay connected with their audience. Whether you're
                  launching a new idea or scaling an existing service, mobile
                  apps offer the flexibility and reach modern users expect. The
                  right app can drive engagement, simplify operations, and open
                  up new channels of revenue.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Our mobile app development approach focuses on building apps
                  that are fast, intuitive, and user-focused. From concept to
                  launch, we prioritize real business needs over trends. We
                  bring together clean design, stable coding practices, and
                  smart integrations to help businesses deliver standout digital
                  experiences across Android, iOS, and hybrid platforms.
                </p>
              </Col>
              <Col sm={5}>
                <img
                  src={mobileicon}
                  alt="mobile-icon"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Col>
            </Row>

            {/*  Our Services on the Mobile App Development Company in Bangalore */}

            <div style={{ marginTop: "10%" }}>
              <Row>
                <Col sm={4}>
                  <h2
                    style={{
                      fontWeight: "700",
                      letterSpacing: "1px",
                      // marginBottom: "10% 0%",
                      lineHeight: "1.7",
                    }}
                  >
                    Our Services on the Mobile App Development Company in
                    Hyderabad
                  </h2>
                  <p
                    style={{
                      lineHeight: "1.7",
                      fontSize: "16px",
                      letterSpacing: "1px",
                      fontWeight: "400",
                    }}
                  >
                    We build apps that don’t just work—they connect, perform,
                    and grow with your business. With experience across diverse
                    industries and frameworks, our mobile development services
                    are structured to meet the needs of today’s market. Here's
                    what we offer:
                  </p>
                </Col>
                <Col sm={8}>
                  <Row>
                    {[
                      {
                        img: iosmobile,
                        title: "iOS Mobile App Development",
                        points: [
                          "Native apps built using Swift and Xcode for smooth performance and App Store compliance",
                          "Focused on privacy, security, and user-centric design",
                          "Seamless integration with Apple services like Wallet, Siri, and HealthKit",
                        ],
                      },
                      {
                        img: andriod,
                        title: "Android Mobile App Development",
                        points: [
                          "Built with Kotlin and Java, tailored for a wide range of Android devices.",
                          "Google Play-ready applications that pass compatibility tests",
                          "Optimized layouts and responsive UI for different screen sizes",
                        ],
                      },
                      {
                        img: flutterapp,
                        title: "Flutter Mobile App Development",
                        points: [
                          "One codebase for both Android and iOS, saving time and cost",
                          "Rich UI with widget-based architecture for dynamic app interfaces",
                          "Strong performance thanks to Dart and native compilation",
                        ],
                      },
                      {
                        img: reactapp,
                        title: "React Native Mobile App Development",
                        points: [
                          "Code once, run anywhere apps with native-like performance",
                          "Integration with native modules for camera, GPS, and push notifications",
                          "Ideal for MVPs and fast deployment cycles.",
                        ],
                      },
                    ].map((app, index) => (
                      <Col
                        sm={6}
                        key={index}
                        className="d-flex justify-content-center"
                      >
                        <div
                          style={{
                            backgroundColor: "white",
                            boxShadow: "1px 1px 5px lightgrey",
                            padding: "20px 20px 0px 20px",
                            borderRadius: "10px",
                            minWidth: "250px",
                            maxWidth: "350px",
                            minHeight: "320px",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src={app.img}
                            alt={app.title}
                            style={{
                              width: "25%",
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
                            {app.title}
                          </h3>
                          <ul
                            style={{
                              fontSize: "12px",
                              lineHeight: "1.7",
                              textAlign: "left",
                            }}
                          >
                            {app.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        {/* Benefits of Having a Mobile App for Your Business */}
        <div>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Benefits of Having a Mobile App for Your Business
          </h2>
          <Container>
            <Row>
              {[
                // Array of objects for reusability
                {
                  img: IncreasesCustomerEngagement,
                  title: "Increases Customer Engagement",
                  text: "A well-designed app provides a direct, interactive way to engage your audience regularly.",
                },
                {
                  img: BoostsBrandVisibility,
                  title: "Boosts Brand Visibility",
                  text: "Staying present on customers’ phones increases awareness and recall of your brand.",
                },
                {
                  img: SimplifiesCustomerInteraction,
                  title: "Simplifies Customer Interaction",
                  text: "From bookings to support, everything becomes easier and faster with a mobile interface.",
                },
                {
                  img: ImprovesSalesandRevenue,
                  title: "Improves Sales and Revenue",
                  text: "Push notifications, in-app purchases, and simplified checkouts drive conversions.",
                },
                {
                  img: StrengthensCustomerLoyalty,
                  title: "Strengthens Customer Loyalty",
                  text: "Loyalty programs and personalized content encourage repeat usage and trust.",
                },
                {
                  img: SpeedsUpMarketingEfforts,
                  title: "Speeds Up Marketing Efforts",
                  text: "Apps allow instant updates, promotional banners, and integrated campaigns at your fingertips.",
                },
                {
                  img: GivesaCompetitiveEdge,
                  title: "Gives a Competitive Edge",
                  text: "Many businesses still lack mobile-first solutions, giving you the advantage to stand out.",
                },
                {
                  img: SupportsBusinessGrowth,
                  title: "Supports Business Growth",
                  text: "Scalable mobile infrastructure helps expand your reach without rebuilding systems.",
                },
              ].map((card, index) => (
                <Col
                  key={index}
                  sm={3}
                  className="d-flex justify-content-center"
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      boxShadow: "1px 1px 5px lightgrey",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      margin: "5%",
                      minWidth: "200px",
                      maxWidth: "250px",
                      minHeight: "250px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: "35%",
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
                      {card.title}
                    </p>
                    <p style={{ fontSize: "12px", lineHeight: "1.7" }}>
                      {card.text}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div style={{ marginTop: "3%" }}>
          <MobileAppCards />
        </div>

        <Container
          style={{ minHeight: "70vh", marginBlock: "7%", marginBottom: "4%" }}
        >
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
            Every app we build is shaped around real business needs and
            long-term success. We work closely with our clients from planning to
            launch, focusing on collaboration and transparent communication. You
            can expect a team that understands functionality, values design, and
            delivers with purpose.
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
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Customized Mobile Solutions
                    </p>
                    <p>
                      We build apps that match your business needs, not
                      off-the-shelf code.
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
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cross-Platform Compatibility
                    </p>
                    <p>
                      Apps that perform across Android, iOS, and hybrid
                      ecosystems.
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
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Performance Optimization
                    </p>
                    <p>
                      Fast-loading apps with minimal crashes and smooth user
                      experiences.
                    </p>
                  </div>
                </div>
              </Col>
              <div className="d-lg-flex justify-content-center lg-my-5 gap-4">
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
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        Innovative Features
                      </p>
                      <p>
                        We explore ideas beyond the basics—voice input,
                        payments, geofencing, and more.
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
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        Timely Project Delivery
                      </p>
                      <p>We stick to milestones and respect your timelines.</p>
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
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "1.5%",
              fontSize: "26px",
            }}
          >
            PICK YOUR PLAN
          </h2>

          <Container
            className="d-flex justify-content-between align-items-center mt-5"
            style={{
              gap: "20px",
              flexDirection: "row",
              flexWrap: "wrap",
              maxWidth: "1000px",
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
              <div style={{ position: "absolute", top: "10%", left: "10%" }}>
                <img
                  src={mobileappdev}
                  alt="building-icon"
                  style={{
                    width: "30%",
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
                  Mobile App Development
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
                <h2 style={{ fontSize: "24px" }}>₹1,49,999</h2>{" "}
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
                src={bgservicesyellow}
                alt="bg-yellow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <div style={{ position: "absolute", top: "10%", left: "7%" }}>
                <img
                  src={customobileappdev}
                  alt="building-icon"
                  style={{
                    width: "25%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                  Customised Mobile App <br /> Development
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
                <h2 style={{ fontSize: "24px" }}>Schedule a Call</h2>{" "}
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
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{
            // height: "100vh",
            textAlign: "center",
            marginTop: "4%",
          }}
        >
          <div style={{ width: "100%" }}>
            <h2
              style={{
                fontWeight: "600",
                marginBottom: "2%",
              }}
            >
              Industries We Serve as Mobile App Development company in Hyderabad
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
              We have developed mobile apps for businesses across retail,
              healthcare, education, and service-based industries. From utility
              apps to complex e-commerce and booking platforms, our experience
              allows us to align with specific market needs. No matter the
              domain, we build with clarity and future-readiness.
            </p>

            {/* <IndustriesServed /> */}
            <IndustriesServedMobileApp />
          </div>
        </Container>

        <div style={{ marginTop: "8%" }}>
          <Container>
            <h2
              style={{
                fontWeight: "600",

                alignItems: "center",
                textAlign: "center",
              }}
            >
              We work with remarkable brands
            </h2>
          </Container>
        </div>
        <ClientImagesMobileApp />

        {/* TESTIMONIALS */}
        <Container style={{ margin: "7% auto" }}>
          <TestimonialsSlick testimonials={testimonials} />
        </Container>

        {/* FAQs MOBILE APP */}

        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "60px 20px",
            textAlign: "center",
            margin: "5% 0% 5% 0%",
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
            {/* <Icons /> */}

            <IconsModal />
          </Container>
        </div>
      </div>
    </>
  );
}
