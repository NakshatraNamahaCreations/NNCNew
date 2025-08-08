"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const BannerImg1 = "/media/b2bmarketing/B2B Marketing image.png";
const BannerImg2 = "/media/b2bmarketing/B2B Marketing Agency in Bangalore.png";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";
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
    name: "- Anand M",
    text: "Working with Nakshatra Namaha Creations has transformed our B2B outreach. Their expertise in lead generation and brand positioning helped us connect with the right clients. We saw a significant increase in inbound leads and engagement. Their data-driven approach made a huge difference in our marketing strategy.",
  },
  {
    image: testimonalImages1,
    name: "- Madura N C",
    text: "Nakshatra Namaha Creations helped us build a strong digital presence in the education sector. Their content marketing and lead generation strategies brought in more student enrollments and institutional partnerships. Their well-structured campaigns ensured better engagement and higher conversions. A great team to work with.",
  },
  {
    image: testimonalImages,
    name: "- Srivatsa P",
    text: "Their marketing solutions helped us boost our brand awareness and attract more B2B clients. With effective content marketing and social media strategies, our engagement levels improved significantly. Their data-driven approach helped us optimize campaigns for better ROI. We highly recommend their services.",
  },
  {
    image: testimonalImages1,
    name: "- Namratha V",
    text: "We needed a focused marketing strategy to reach businesses in the finance sector. Nakshatra Namaha Creations provided a structured approach that increased our credibility and lead conversion. Their expertise in digital marketing and brand positioning made a noticeable impact.",
  },
];

const faqs = [
  // FAQ List
  {
    question: "How does B2B marketing differ from B2C marketing?",
    answer:
      "B2B marketing focuses on building relationships with businesses and decision-makers, whereas B2C targets individual consumers. The sales cycle in B2B is longer, requires strategic planning, and involves multiple stakeholders.",
  },
  {
    question:
      "Can you handle B2B marketing for both startups and large enterprises?",
    answer:
      "Yes, we create scalable marketing strategies that cater to businesses of all sizes. Whether you're a startup looking for brand recognition or an enterprise aiming for market expansion, we deliver results.",
  },
  {
    question: "How do you measure the success of a B2B marketing campaign?",
    answer:
      "We track key performance indicators (KPIs) such as lead conversion rates, website traffic, engagement levels, and return on investment (ROI) to ensure campaign effectiveness.",
  },
  {
    question:
      "What if I already have an in-house marketing team? Can you still help?",
    answer:
      "Yes, we collaborate with in-house teams to enhance their efforts. We provide expert insights, advanced strategies, and execution support to ensure maximum effectiveness.",
  },
  {
    question:
      " Do you provide customized marketing strategies or use a fixed approach?",
    answer:
      "Every business is unique, so we create marketing strategies based on your goals, audience, and industry needs. We adapt our approach to ensure the best possible outcomes.",
  },
  {
    question: "Will B2B marketing work for my niche industry?",
    answer:
      "Yes, every industry has potential business clients. Our team customizes marketing strategies to match your niche, ensuring you connect with the right audience and generate quality leads.",
  },
];
const services = [
  {
    img: service1,
    title: "Strategic Planning",
    points: [
      "Develops data-driven marketing plans to achieve business goals.",
      "Ensures campaigns align with target audience needs for better engagement.",
      "Uses market insights to optimize performance and maximize results.",
    ],
  },
  {
    img: service2,
    title: "Lead Generation",
    points: [
      "Identifies and attracts high-quality business prospects.",
      "Uses digital channels to generate leads effectively.",
      "Improves conversion rates with targeted outreach and engagement strategies.",
    ],
  },
  {
    img: service3,
    title: "Content Marketing",
    points: [
      "Creates valuable content to educate and attract potential clients.",
      "Enhances brand credibility with blogs, articles, and case studies.",
      "Boosts visibility through SEO-optimized content and social media marketing.",
    ],
  },
  {
    img: service4,
    title: "Account-Based Marketing",
    points: [
      "Focuses on high-value accounts for personalized marketing campaigns.",
      "Builds strong business relationships with direct outreach.",
      "Aligns sales and marketing efforts for better conversion rates.",
    ],
  },
  {
    img: service5,
    title: "Brand Positioning",
    points: [
      "Establishes a strong brand identity in the competitive market.",
      "Highlights unique strengths to differentiate from competitors.",
      "Creates a consistent message across all marketing channels.",
    ],
  },
];

const processvideo = [
  {
    img: ResearchStrategy,
    title: "Research & Strategy",
    points: [
      "We analyze market trends, competitors, and audience insights to create a strong marketing plan.",
    ],
  },
  {
    img: LeadGenerationOutreach,
    title: "Lead Generation & Outreach",
    points: [
      "Targeted campaigns attract high-quality leads and connect with key decision-makers.",
    ],
  },
  {
    img: ContentBrandPositioning,
    title: "Content & Brand Positioning",
    points: [
      "Engaging content builds credibility, while strategic branding strengthens market presence.",
    ],
  },
  {
    img: PerformanceTrackingOptimization,
    title: "Performance Tracking & Optimization ",
    points: [
      "Continuous monitoring ensures better campaign results and higher conversions.",
    ],
  },
];

export default function B2BMarketing() {
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
        image: "https://www.nakshatranamahacreations.com/media/OBJECTS.png",
        url: "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-bangalore",
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
          name: "B2B Marketing",
        },
        author: {
          "@type": "Person",
          name: "Anand M",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Working with Nakshatra Namaha Creations has transformed our B2B outreach. Their expertise in lead generation and brand positioning helped us connect with the right clients. We saw a significant increase in inbound leads and engagement. Their data-driven approach made a huge difference in our marketing strategy.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "B2B Services",
        },
        author: {
          "@type": "Person",
          name: "Srivatsa P",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Their marketing solutions helped us boost our brand awareness and attract more B2B clients. With effective content marketing and social media strategies, our engagement levels improved significantly. Their data-driven approach helped us optimize campaigns for better ROI. We highly recommend their services.",
        datePublished: "2025-04-20",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Brand Marketing",
        },
        author: {
          "@type": "Person",
          name: "Madura N C",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Nakshatra Namaha Creations helped us build a strong digital presence in the education sector. Their content marketing and lead generation strategies brought in more student enrollments and institutional partnerships. Their well-structured campaigns ensured better engagement and higher conversions. A great team to work with.",
        datePublished: "2025-03-15",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Brand Marketing",
        },
        author: {
          "@type": "Person",
          name: "Namratha V",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "We needed a focused marketing strategy to reach businesses in the finance sector. Nakshatra Namaha Creations provided a structured approach that increased our credibility and lead conversion. Their expertise in digital marketing and brand positioning made a noticeable impact.",
        datePublished: "2025-05-10",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does B2B marketing differ from B2C marketing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B2B marketing focuses on building relationships with businesses and decision-makers, whereas B2C targets individual consumers. The sales cycle in B2B is longer, requires strategic planning, and involves multiple stakeholders.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle B2B marketing for both startups and large enterprises?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we create scalable marketing strategies that cater to businesses of all sizes. Whether you're a startup looking for brand recognition or an enterprise aiming for market expansion, we deliver results.",
            },
          },
          {
            "@type": "Question",
            name: "How do you measure the success of a B2B marketing campaign?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We track key performance indicators (KPIs) such as lead conversion rates, website traffic, engagement levels, and return on investment (ROI) to ensure campaign effectiveness.",
            },
          },
          {
            "@type": "Question",
            name: "What if I already have an in-house marketing team? Can you still help?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we collaborate with in-house teams to enhance their efforts. We provide expert insights, advanced strategies, and execution support to ensure maximum effectiveness.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide customized marketing strategies or use a fixed approach?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every business is unique, so we create marketing strategies based on your goals, audience, and industry needs. We adapt our approach to ensure the best possible outcomes.",
            },
          },
          {
            "@type": "Question",
            name: "Will B2B marketing work for my niche industry?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, every industry has potential business clients. Our team customizes marketing strategies to match your niche, ensuring you connect with the right audience and generate quality leads.",
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
            name: "B2B Marketing Agency in Bangalore",
            item: "https://www.nakshatranamahacreations.com/b2b-marketing-agency-in-bangalore",
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
      name: "B2B Marketing Agency in Bangalore",
      link: "/b2b-marketing-agency-in-bangalore",
    },
  ];

  const buttons = [
    {
      title: "Website Developement in Bangalore",
      link: "/website-development-company-in-bangalore",
    },
    {
      title: "Graphic Designer in Bangalore",
      link: "/graphic-design-company-in-bangalore",
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
      title: "Mobile App Developers in Bangalore",
      link: "/mobile-app-development-company-in-bangalore",
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

        <Container style={{ marginBottom: "5%", marginTop: "3%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>B2B MARKETING COMPANY</h2>
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
              B2B Marketing Agency in Bangalore
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
                  A B2B Marketing Agency in Bangalore helps businesses connect
                  with the right audience and grow through effective marketing
                  strategies. Strong planning and research ensure that companies
                  reach decision-makers who need their products or services.
                  Clear messaging and digital campaigns improve visibility,
                  making it easier for businesses to gain trust and increase
                  sales.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Successful marketing requires the right mix of lead
                  generation, content marketing, and brand positioning. A
                  well-planned approach ensures businesses attract quality leads
                  and convert them into long-term clients. Account-based
                  marketing focuses on high-value prospects, while strategic
                  planning aligns marketing efforts with business goals.
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
              Our Services on the B2B Marketing Agency in Bangalore
            </h2>
            <p
              style={{
                lineHeight: "1.7",
                fontSize: "16px",
                letterSpacing: "1px",

                fontWeight: "400",
              }}
            >
              A B2B Marketing Agency in Bangalore helps businesses connect with
              the right audience by implementing result-oriented marketing
              strategies. Companies need a structured approach to attract
              decision-makers, build trust, and convert prospects into long-term
              clients. Our expert solutions ensure businesses improve lead
              generation, strengthen brand positioning, and maximize engagement
              across digital and offline channels. With a focus on data-driven
              insights and targeted outreach, we help businesses achieve
              measurable growth and stay ahead in a competitive market.
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
            Our B2B Marketing Process: B2B Marketing Companies in Bangalore
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
            What can you expect from Nakshatra Namaha Creations?
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
            As a B2B Marketing Agency in Bangalore, we focus on helping
            businesses connect with the right audience through effective
            marketing strategies. Our approach ensures that companies improve
            their brand visibility, attract quality leads, and convert prospects
            into long-term clients. With a structured plan and market-driven
            insights, we create impactful campaigns that deliver measurable
            results.
            <br />
          </p>

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
            Our services include lead generation, content marketing,
            account-based marketing, and strategic brand positioning. We analyze
            industry trends, identify target audiences, and execute marketing
            campaigns that align with business goals. Every strategy is designed
            to enhance engagement, build trust and increase conversions.
          </p>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            You can expect expert guidance, data-driven solutions, and a
            marketing approach that strengthens your business presence. We focus
            on delivering consistent results by optimizing campaigns, tracking
            performance, and refining strategies to ensure long-term growth in a
            competitive market.
          </p>
          {/* <div>
            <Row>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2 style={{ marginRight: "10px", fontWeight: "600", color: "#006EA6" }}>01</h2>

                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px", }}>
                      Professional and Modern Designs
                    </p>
                    <p>
                      We create visually appealing websites with clean layouts and intuitive navigation for a better user experience.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2 style={{ marginRight: "10px", fontWeight: "600", color: "#006EA6" }}>02</h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px", }}>
                      Mobile-Friendly and Responsive Websites
                    </p>
                    <p>
                      Every website is optimized for different screen sizes, ensuring smooth performance on all devices.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2 style={{ marginRight: "10px", fontWeight: "600", color: "#006EA6" }}>03</h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px", }}>
                      SEO-Optimized Development
                    </p>
                    <p>
                      Our websites are built with SEO best practices to help improve search engine rankings and visibility.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="d-flex justify-content-center my-5 gap-4">
              <Col sm={5}>
                <div style={{ display: "flex" }}>
                  <h2 style={{ marginRight: "10px", fontWeight: "600", color: "#006EA6" }}>04</h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px", }}> Fast Loading Speed</p>
                    <p>
                      We optimize websites for faster loading times, reducing bounce rates and improving user engagement.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={5}>
                <div style={{ display: "flex" }}>
                  <h2 style={{ marginRight: "10px", fontWeight: "600", color: "#006EA6" }}>05</h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontWeight: "bold", fontSize: "16px", }}>On-Time Project Delivery</p>
                    <p>
                      We follow a structured development process to ensure timely delivery without compromising quality.
                    </p>
                  </div>
                </div>
              </Col>
            </div>
          </div> */}
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
            We help businesses across various industries grow their brand,
            generate leads, and improve customer engagement. Our expertise in
            B2B marketing ensures that companies connect with the right audience
            and achieve measurable results. By using data-driven strategies and
            multi-channel marketing, we support businesses in building a strong
            market presence.
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
