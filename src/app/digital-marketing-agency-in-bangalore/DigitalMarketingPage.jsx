"use client";

import { useEffect, useState } from "react";
const digital = "/media/Group118.png";
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
    name: "- Rajesh Kumar",
    text: "Working with Nakshatra Namaha Creations has been a great experience. Their SEO and marketing strategies have helped increase our website traffic and improve sales. The team is professional, responsive and delivers results as promised.",
  },
  {
    image: testimonalImages1,
    name: "- Vikram Singh",
    text: "Lead generation has always been a challenge for us, but their digital marketing strategies made a huge difference. We are now getting more quality inquiries through paid ads and organic search. The team understands our business goals and delivers great support.",
  },
  {
    image: testimonalImages,
    name: "- Divya Rao",
    text: "Our restaurant’s online presence has improved with their social media management and advertising. More customers are engaging with our posts and reservations have increased. The team is supportive and understands how to attract the right audience.",
  },
  {
    image: testimonalImages1,
    name: "- Akash C",
    text: "Our online presence has significantly improved after partnering with Nakshatra Namaha Creations. Their social media campaigns and content marketing have helped us connect with more clients. Highly recommended for digital marketing services.",
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
    question: "How do you measure the success of digital marketing campaigns?",
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
    question: "How do I get started with your digital marketing services?",
    answer:
      "You can contact us for a free consultation. Our team will understand your business goals, discuss suitable strategies, and create a customized plan to grow your online presence.",
  },
];
const services = [
  {
    img: seo,
    title: "Search Engine Optimization (SEO)",
    points: [
      "Improve website ranking on search engines for higher visibility and organic traffic.",
      "Optimize content, keywords and website structure for better search engine performance.",
      "Boost online presence with link building, technical SEO and local SEO strategies.",
    ],
  },
  {
    img: SocialMediaMarketing,
    title: "Social Media Marketing",
    points: [
      "Create engaging content to build brand awareness and audience interaction.",
      "Manage social media profiles to enhance customer engagement and brand loyalty.",
      "Optimizes apps for smooth performance across multiple Android devices.",
    ],
  },
  {
    img: PaidMarketing,
    title: " Paid Marketing",
    points: [
      "Launch result-driven PPC campaigns for immediate traffic and higher conversions.",
      "Optimize ad spending for better ROI on Google Ads and social media ads.",
      "Target the right audience with precise demographics, interests and location filters.",
    ],
  },
];

const processvideo = [
  {
    img: UnderstandingBusinessGoals,
    title: "Understanding Business Goals",
    points: [
      "We analyze business objectives, target audience and market positioning. Key challenges and opportunities are identified to create a focused marketing approach.",
    ],
  },
  {
    img: MarketResearchStrategyDevelopment,
    title: "Market Research & Strategy Development",
    points: [
      "Competitor analysis and keyword research help in understanding industry trends. A customized marketing strategy is developed to maximize brand reach and engagement.",
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

export default function DigitalMarketingPage() {
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
          "https://www.linkedin.com/company/nakshatranamahacreations",
        ],
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "digital marketing Service",
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
          "Working with Nakshatra Namaha Creations has been a great experience. Their SEO and marketing strategies have helped increase our website traffic and improve sales. The team is professional, responsive and delivers results as promised.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "digital marketing Service",
        },
        author: {
          "@type": "Person",
          name: "Vikram Singh",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Lead generation has always been a challenge for us, but their digital marketing strategies made a huge difference. We are now getting more quality inquiries through paid ads and organic search. The team understands our business goals and delivers great support.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "digital marketing Service",
        },
        author: {
          "@type": "Person",
          name: "Divya Rao",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Our restaurant’s online presence has improved with their social media management and advertising. More customers are engaging with our posts and reservations have increased. The team is supportive and understands how to attract the right audience.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "digital marketing Service",
        },
        author: {
          "@type": "Person",
          name: "Akash C",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Our online presence has significantly improved after partnering with Nakshatra Namaha Creations. Their social media campaigns and content marketing have helped us connect with more clients. Highly recommended for digital marketing services.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will I get regular updates on my marketing campaign?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide detailed performance reports and insights. Our team keeps you updated on progress and suggests improvements to enhance results.",
            },
          },
          {
            "@type": "Question",
            name: "What types of paid advertising do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer Google Ads, Facebook Ads, Instagram promotions, LinkedIn Ads, and YouTube advertising. Our team ensures your ads reach the right audience and generate high-quality leads.",
            },
          },
          {
            "@type": "Question",
            name: "Can digital marketing help local businesses grow?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, local businesses can benefit from SEO, Google My Business optimization, social media marketing, and local ads. Our strategies help businesses attract nearby customers and improve their online presence.",
            },
          },
          {
            "@type": "Question",
            name: "How do you measure the success of digital marketing campaigns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We track key performance indicators (KPIs) such as website traffic, search rankings, lead generation, engagement rates, and conversion rates.",
            },
          },
          {
            "@type": "Question",
            name: "What services do you provide as a Digital Marketing Agency in Bangalore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer SEO, social media marketing, PPC advertising, content marketing, website optimization, and branding solutions to help businesses grow online.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get started with your digital marketing services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can contact us for a free consultation. Our team will understand your business goals, discuss suitable strategies, and create a customized plan to grow your online presence.",
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
            name: "Digital Marketing Agency in Bangalore",
            item: "https://www.nakshatranamahacreations.com/digital-marketing-agency-in-bangalore",
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
      name: "Digital Marketing Agency in Bangalore",
      link: "/digital-marketing-agency-in-bangalore",
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
      title: "Website Developement in Bangalore",
      link: "/website-development-company-in-bangalore",
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
          <Row className="d-flex justify-content-between align-items-center ">
            <Col sm={7}>
              <div style={{ marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  DIGITAL MARKETING COMPANY{" "}
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
              Digital Marketing Agency in Bangalore
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
                  A Digital Marketing Agency in Bangalore helps businesses grow
                  online with smart strategies and creative solutions. Strong
                  online presence is key to reaching the right audience,
                  increasing brand awareness and driving more sales. Our team
                  focuses on search engine optimization (SEO), social media
                  marketing (SMM) and paid marketing to bring measurable
                  results. With data-driven insights, we ensure businesses stay
                  ahead in the competitive digital space. Finding a Digital
                  Marketing Agency Near Me that understands business needs can
                  make all the difference. Effective marketing campaigns,
                  engaging content and targeted advertising help brands connect
                  with potential customers. Expertise in search engine
                  optimization and performance marketing ensures higher rankings
                  and better conversions. Every strategy is planned to improve
                  visibility, attract more traffic and grow revenue.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",

                    fontWeight: "400",
                  }}
                >
                  We understand the power of visuals in communication and focus
                  on delivering professional videos that leave a lasting
                  impression. Our expertise covers corporate films, brand
                  stories, event coverage and product demos, helping businesses
                  build a strong digital presence. With a structured approach
                  and attention to detail, we ensure smooth execution at every
                  stage. As a trusted Corporate Video Production Company in
                  Bnagalore, we bring ideas to life with engaging storytelling
                  and visual excellence.
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
                Our Services on the Digital Marketing Agency in Bangalore
              </h2>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
              >
                A Digital Marketing Agency in Bangalore plays a crucial role in
                helping businesses stay ahead by using smart strategies to
                enhance visibility, attract the right audience and drive growth.
                Whether it’s ranking higher on search engines, engaging
                customers on social media, or running paid campaigns that
                deliver results, every marketing effort contributes to business
                success. With data-driven insights and proven techniques, our
                services are designed to maximize impact and help brands
                dominate their industry.
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
            Our Services on the Digital Marketing Agency in Bangalore
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
            As a trusted Digital Marketing Agency in Bangalore, we provide
            comprehensive digital marketing solutions that help businesses
            expand their reach and grow online. Our team focuses on strategic
            planning, data-driven decision-making and innovative marketing
            techniques to ensure long-term success. Every campaign is designed
            to enhance brand awareness, improve customer engagement and generate
            more conversions. With a deep understanding of market trends and
            consumer behavior, we create marketing strategies that deliver
            measurable results.
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
                      A team of experts ready to assist with insights, guidance
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
            Industries We Serve as Corporate Video Production Company in
            Bangalore
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
            Every industry has unique marketing needs and we provide customized
            digital marketing solutions to help businesses reach their target
            audience effectively. As a leading Digital Marketing Agency in
            Bangalore, we work with diverse industries, ensuring brands enhance
            their online presence, engage with customers and drive revenue
            growth. Our expertise in SEO, social media and paid advertising
            allows businesses across various sectors to achieve measurable
            success.
          </p>

          <IndustriesServedMobileApp />
        </div>

        <div style={{ margin: "5% 10%" }}>
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            We work with remarkable brands
          </h2>
          <ClientImagesMobileApp />
        </div>

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
