"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const BannerImg1 = "/media/2DAnimation/2D Animation image.png";
const BannerImg2 = "/media/2DAnimation/2D Animation Studio in Bangalore.png";
const StaticOnePageWebsiteIcon =
  "/media/webdev/Static One Page Website_Icon.png";
const ECommerceWebsite = "/media/webdev/E - Commerce Website.png";
const bgservicesblue = "/media/bg-services-blue.jpeg";
const bgservicesyellow = "/media/bg-services-yellow.jpeg";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";
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
import TwoDAnimationCards from "@/components/twoDAnimations/TwoDAnimationCards";
import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const service1 = "/media/2DAnimation/Explainer Videos.png";
const service2 = "/media/2DAnimation/Character Animation.png";
const service3 = "/media/2DAnimation/Puppet Animation.png";
const service4 = "/media/2DAnimation/Motion Graphics.png";
const service5 = "/media/2DAnimation/Storyboard and Concept Design.png";
const service6 = "/media/2DAnimation/Customized Design.png";

const PostProduction = "/media/2DAnimation/Post-Production.png";
const PreProduction = "/media/2DAnimation/Pre-Production.png";
const Production = "/media/2DAnimation/Production.png";
import Script from "next/script";
import Link from "next/link";

const faqs = [
  // FAQ List
  {
    question: "How can 2D animation help my business grow?",
    answer:
      "2D animation makes complex ideas easy to understand, grabs audience attention, and improves brand recall. It can be used for marketing, product demos, and customer engagement.",
  },
  {
    question: "Can you create animations that match my brand style?",
    answer:
      "Yes, we design characters, backgrounds, and visuals that align with your brand’s identity, colors, and messaging for a consistent look.",
  },
  {
    question: "Do you provide voiceovers and background music?",
    answer:
      "Yes, we offer professional voice overs, background music, and sound effects to enhance the animation and create an immersive experience.",
  },
  {
    question: "How long does it take to complete an animation project?",
    answer:
      "The timeline depends on the complexity, duration, and revisions required. Most projects take a few weeks to complete.",
  },
  {
    question: "Do you create animations for social media marketing?",
    answer:
      "Yes, we design short animations and motion graphics for social media platforms to boost engagement and brand visibility.",
  },
  {
    question: "Do you provide storyboard previews before final animation?",
    answer:
      "Yes, we share a storyboard preview so you can review the animation flow and suggest changes before production begins.",
  },
];

// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Arjun Mehta",
    text: "The animation quality and storytelling exceeded our expectations. The team understood our requirements and delivered exactly what we needed. Their work added great value to our brand communication.",
  },
  {
    image: testimonalImages1,
    name: "- Vikram Rao",
    text: "The motion graphics and character animations helped us connect better with our audience. The team delivered high-quality work on time, making the process smooth and efficient.",
  },
  {
    image: testimonalImages,
    name: "- Sneha Reddy",
    text: "We wanted engaging explainer videos for our business, and the team delivered excellent results. The animations were smooth, visually appealing, and perfect for our marketing campaigns.",
  },
  {
    image: testimonalImages1,
    name: "- Divya Nair",
    text: "The 2D animations created for our educational platform were highly engaging and informative. The attention to detail and creativity made learning more interactive for our students.",
  },
];

const services = [
  {
    img: service1,
    title: "Explainer Videos",
    points: [
      "Develop engaging videos that simplify complex ideas with clear visuals and narration.",
      "Use professional animation techniques to enhance brand messaging and audience connection.",
      "Create impactful videos for marketing, education, and business presentations.",
    ],
  },
  {
    img: service2,
    title: "Character Animation",
    points: [
      "Design and animate unique characters that add personality to stories and branding.",
      "Ensure smooth expressions and movements for a natural and engaging experience.",
      "Bring characters to life with detailed attention to gestures and emotions.",
    ],
  },
  {
    img: service3,
    title: "Puppet Animation",
    points: [
      "Design and animate unique characters that add personality to stories and branding.",
      "Ensure smooth expressions and movements for a natural and engaging experience.",
      "Bring characters to life with detailed attention to gestures and emotions.",
    ],
  },
  {
    img: service4,
    title: "Motion Graphics",
    points: [
      "Use animated text, icons, and effects to create visually appealing marketing and branding content.",
      "Enhance promotional videos, presentations, and advertisements with smooth transitions.",
      "Communicate messages effectively through engaging and professional motion graphics.",
    ],
  },
  {
    img: service5,
    title: "Storyboard and Concept Design",
    points: [
      "Develop detailed storyboards that provide a clear visual roadmap for animation projects.",
      "Plan camera angles, character movements, and scenes for structured storytelling.",
      "Ensure consistency and clarity in the animation process from concept to final execution.",
    ],
  },
  {
    img: service6,
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
    img: PreProduction,
    title: "Pre-Production",
    points: [
      "Plan and develop the script, storyboard and character/background designs for a structured animation flow.",
    ],
  },
  {
    img: Production,
    title: "Production",
    points: [
      "Animate characters and scenes with smooth movements and precise rigging for a seamless experience.",
    ],
  },
  {
    img: PostProduction,
    title: "Post-Production",
    points: [
      "Enhance the animation with compositing, sound design and final rendering for a polished output.",
    ],
  },
];

export default function TwoDAnimationPage() {
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
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        image: "https://www.nakshatranamahacreations.com/office-photo.jpg",
        url: "https://www.nakshatranamahacreations.com/",
        telephone: "+91-9900566466",
        email: "info@nakshatranamahacreations.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
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
          name: "2D Animation",
        },
        author: {
          "@type": "Person",
          name: "Arjun Mehta",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "The animation quality and storytelling exceeded our expectations. The team understood our requirements and delivered exactly what we needed. Their work added great value to our brand communication.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "2D Animation",
        },
        author: {
          "@type": "Person",
          name: "Vikram Rao",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "The motion graphics and character animations helped us connect better with our audience. The team delivered high-quality work on time, making the process smooth and efficient.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "2D Animation",
        },
        author: {
          "@type": "Person",
          name: "Sneha Reddy",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "We wanted engaging explainer videos for our business, and the team delivered excellent results. The animations were smooth, visually appealing, and perfect for our marketing campaigns.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "2D Animation",
        },
        author: {
          "@type": "Person",
          name: "Divya Nair",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "The 2D animations created for our educational platform were highly engaging and informative. The attention to detail and creativity made learning more interactive for our students.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can 2D animation help my business grow?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "2D animation makes complex ideas easy to understand, grabs audience attention, and improves brand recall. It can be used for marketing, product demos, and customer engagement.",
            },
          },
          {
            "@type": "Question",
            name: "Can you create animations that match my brand style?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we design characters, backgrounds, and visuals that align with your brand’s identity, colors, and messaging for a consistent look.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide voiceovers and background music?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer professional voice overs, background music, and sound effects to enhance the animation and create an immersive experience.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to complete an animation project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline depends on the complexity, duration, and revisions required. Most projects take a few weeks to complete.",
            },
          },
          {
            "@type": "Question",
            name: "Do you create animations for social media marketing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we design short animations and motion graphics for social media platforms to boost engagement and brand visibility.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide storyboard previews before final animation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we share a storyboard preview so you can review the animation flow and suggest changes before production begins.",
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
            name: "2D Animation Studio in Bangalore | Motion Graphics & Animations",
            item: "https://www.nakshatranamahacreations.com/2d-animation-studio-in-bangalore",
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
      name: "2D Animation Studio in Bangalore",
      link: "/2d-animation-studio-in-bangalore",
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
      title: "Website Development in Bangalore",
      link: "/website-development-company-in-bangalore",
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

        <Container style={{ marginBottom: "5%", marginTop: "3%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  2D ANIMATION STUDIO COMPANY{" "}
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
            2D Animation Studio in Bangalore
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
                Bringing ideas to life with creativity and precision, our 2D
                Animation Studio in Bangalore delivers high-quality animations
                for businesses, brands, and storytellers. Whether it's explainer
                videos, educational content, or engaging marketing animations,
                we ensure smooth motion, vibrant visuals, and compelling
                narratives that connect with the audience. Every project is
                crafted with attention to detail, making complex ideas easy to
                understand and visually appealing.
              </p>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
              >
                With a team of skilled artists and animators, we create
                animations that enhance brand presence and improve audience
                engagement. Our 2D Animation Studio in Bangalore offers
                end-to-end solutions, from concept development to final
                production, ensuring every frame adds value to your message.
                Using advanced tools and industry best practices, we bring
                characters and stories to life in a way that leaves a lasting
                impact.
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
              Our Services on the 2D Animation Studio in Bangalore
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
              Our 2D Animation Studio in Bangalore provides professional
              animation services for businesses, marketing, education and
              entertainment. High-quality animations improve brand
              communication, making content more engaging and visually
              appealing. Every animation is crafted with precision, ensuring
              smooth motion and compelling storytelling. With expertise in
              various animation styles, we create visuals that capture attention
              and deliver clear messages.
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
            Our 2D Animation Process: 2D Animation Company in Bangalore
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
            As a leading 2D Animation Studio in Bangalore, we focus on
            delivering high-quality animations that bring ideas to life. Our
            team works with creativity and precision to develop engaging visual
            content for businesses, brands, and storytellers. We use
            industry-best practices to create animations that communicate
            messages effectively. Here’s what you can expect when working with
            us:
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
            Industries We Serve as 2D Animation Studio in Bangalore
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
            Our 2D Animation Studio in Bangalore provides high-quality animation
            services across various industries, helping businesses communicate
            effectively through engaging visuals. We create animations that
            simplify complex ideas, enhance brand identity, and improve audience
            engagement. Our expertise extends to multiple sectors, ensuring
            customized solutions that meet industry-specific requirements.
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
          <ClientImagesMobileApp />
        </Container>

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
