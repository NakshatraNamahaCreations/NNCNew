"use client";

import { useEffect, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
// Import Components
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
import Link from "next/link";
const PodcastsProduction = "/media/PodcastsProduction.png";
const corporatevideo = "/media/BannerImage.png";
const videoproduction = "/media/CorporateVideoProductionCompanyinBangalore.png";
const bgservicesblue = "/media/bg-services-blue.jpeg";
const bgservicesyellow = "/media/bg-services-yellow.jpeg";
const building = "/media/CorporateVideoProductionIcon.png";
const CorporateVideos = "/media/CorporateVideos.png";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";
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
import Script from "next/script";

// Testimonial Data

const testimonials = [
  {
    image: testimonalImages,
    name: "- Mohit Rao",
    text: "The video production team was highly skilled and delivered exactly what we needed. They handled everything efficiently, from planning to execution, ensuring the final output was polished and impactful. Their attention to detail and commitment to quality made a significant difference in our marketing efforts.",
  },
  {
    image: testimonalImages1,
    name: "- Sumitra N",
    text: "Working with Nakshatra Namaha Creations was a smooth and professional experience. The team understood our requirements clearly and delivered a high-quality video that exceeded our expectations. Every step of the process was well-planned, making it easy to collaborate. The final video helped us engage our audience effectively and strengthened our brand presence..",
  },
  {
    image: testimonalImages,
    name: "- Sanjay Kumar",
    text: "The professionalism and quality of work were evident in every stage of production. The final video captured our brand’s essence and delivered a strong impact. The seamless coordination and creative execution made the entire experience highly productive. Looking forward to working with them again.",
  },
  {
    image: testimonalImages1,
    name: "- Uday C",
    text: "Our company needed a corporate video to showcase our services and the team delivered a well-structured and engaging film. The visuals, editing, and storytelling were handled with professionalism, making the video a great asset for our business. We appreciate the effort and creativity that went into the production.",
  },
];

const faqs = [
  {
    question: "What makes your video production services different?",
    answer:
      "We focus on creating visually engaging content that effectively communicates your message. Every video is crafted with a strategic approach to enhance brand impact.",
  },
  {
    question:
      "How does a Corporate Video Production Company in Bangalore help businesses?",
    answer:
      "A professional video production company enhances brand visibility, simplifies complex ideas and creates engaging content for marketing, training and promotions.",
  },
  {
    question: "Do you handle live streaming for corporate events?",
    answer:
      "Yes, we provide high-quality live streaming services for conferences, product launches and webinars.",
  },
  {
    question: "Do you offer voiceovers and subtitles?",
    answer:
      "Yes, we provide professional voiceovers and multilingual subtitles to make videos more accessible.",
  },
  {
    question: "Do you provide animation or motion graphics services?",
    answer:
      "Yes, we offer animations, motion graphics and visual effects to enhance video storytelling and appeal.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out to us with your project details and we will guide you through the next steps.",
  },
];
const services = [
  {
    img: CorporateVideos,
    title: "Corporate Videos",
    points: [
      "Professional videos for businesses to showcase vision, values and achievements.",
      "Ideal for company profiles, internal communication and brand storytelling.",
      "Engages stakeholders with clear messaging and visuals.",
    ],
  },

  {
    img: PodcastsProduction,
    title: "Podcasts Production",
    points: [
      "Studio-quality podcast recordings for business, branding and expert discussions.",
      "Professionally edited with clear audio and engaging storytelling.",
      "Suitable for business talks, interviews and educational content.",
    ],
  },
  {
    img: adstv,
    title: "Commercial / TV Ads",
    points: [
      "Engaging advertisements for television and online platforms.",
      "Promotes brands, products and services with creative storytelling.",
      "High-quality visuals and professional scriptwriting.",
    ],
  },
  {
    img: ProductDemos,
    title: "Product Demos",
    points: [
      "Showcases product features, benefits and usage effectively.",
      "Professional visuals with clear explanations.",
      "Ideal for websites, social media and sales presentations.",
    ],
  },
  {
    img: DigitalAds,
    title: "Digital Ads",
    points: [
      "Engaging video ads designed for online marketing campaigns.",
      "Optimized for platforms like YouTube, Instagram and Facebook.",
      "Drives audience engagement and increases conversions.",
    ],
  },
  {
    img: Interviews,
    title: "Interviews",
    points: [
      "Professional video interviews with business leaders and industry experts.",
      "Well-structured Q&A format for engaging storytelling.",
      "High-quality production with clear audio and visuals.",
    ],
  },
  {
    img: SocialMediaVideos,
    title: "Social Media Videos",
    points: [
      "Short, engaging videos for social media marketing.",
      "Designed to increase brand awareness and audience engagement.",
      "Helps businesses connect with their target audience effectively.",
    ],
  },
  {
    img: LiveStreams,
    title: "Live Streams",
    points: [
      "High-quality live streaming for corporate events, launches and webinars.",
      "Real-time audience interaction with professional audio and video setup.",
      "Ideal for virtual events and product announcements.",
    ],
  },
  {
    img: DocumentaryVideos,
    title: "Documentary Videos",
    points: [
      "Story-driven documentaries showcasing brand stories, achievements and impact.",
      "Professional production with in-depth research and compelling visuals.",
      "Enhances brand authenticity and audience trust.",
    ],
  },
  {
    img: PersonalBrandingVideos,
    title: "Personal Branding Videos ",
    points: [
      "Videos highlighting personal expertise, achievements and brand identity.",
      "Helps professionals establish authority in their industry.",
      "Suitable for social media, websites and business networking.",
    ],
  },
  {
    img: EducationalVideos,
    title: "Educational Videos",
    points: [
      "Informative and engaging videos for training and knowledge-sharing.",
      "Ideal for employee training, e-learning and industry insights.",
      "Clear explanations with professional animations and visuals.",
    ],
  },
  {
    img: RealEstateVideos,
    title: "Real Estate Videos",
    points: [
      "High-quality property walkthroughs and promotional videos.",
      "Highlights property features with professional visuals.",
      "Ideal for real estate listings and marketing campaigns.",
    ],
  },
  {
    img: MusicVideos,
    title: "Music Videos",
    points: [
      "Creative and professionally produced videos for artists and bands.",
      "High-quality cinematography with dynamic storytelling.",
      "Enhances music promotion on digital platforms.",
    ],
  },
  {
    img: AerialVideos,
    title: "Aerial Videos",
    points: [
      "Stunning drone footage for cinematic perspectives.",
      "Ideal for real estate, events and commercial shoots.",
      "Captures high-quality aerial visuals with smooth motion.",
    ],
  },
];

const features = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business, objectives and target audience. A clear strategy is created to align with your goals. Every detail is planned to ensure the video delivers the right message.",
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "This stage includes scripting, storyboarding and organizing shoot logistics. Proper planning helps streamline the production process. A structured approach ensures smooth execution without delays.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "High-quality filming is done using professional equipment and expert direction. Every scene is captured with precision to maintain visual consistency. Lighting, sound and framing are optimized for the best output.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "The raw footage is edited, refined and enhanced with visuals and sound. Color correction, animations and effects are applied for a professional finish. The final video is reviewed and optimized for multiple platforms.",
  },
];

const processvideo = [
  {
    img: UnderstandingRequirements,
    title: "Understanding Requirements",
    points: [
      "We discuss your objectives, target audience and key messages to create a clear production plan.",
    ],
  },
  {
    img: Concept_Scripting,
    title: "Concept & Scripting",
    points: [
      "A compelling script and storyboard are developed to align with the brand’s vision and goals.",
    ],
  },
  {
    img: PreProductionPlanning,
    title: "Pre-Production Planning",
    points: [
      "Locations, equipment and schedules are finalized to ensure smooth video production.",
    ],
  },
  {
    img: Filming_Production,
    title: "Filming & Production",
    points: [
      "High-quality filming is conducted with professional cameras, lighting and audio setup.",
    ],
  },
  {
    img: EditingPostProduction,
    title: "Editing & Post-Production",
    points: [
      "Footage is refined with advanced editing, visual effects and sound enhancements for a polished look.",
    ],
  },
  {
    img: FinalDeliveryDistribution,
    title: "Final Delivery & Distribution",
    points: [
      "The completed video is optimized for various platforms and delivered in the required formats.",
    ],
  },
];

export default function CoporateVideoProd() {
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
          Longitude: 76.6444222231926,
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
          name: "Corporate Video Production",
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
          name: "Corporate Video Production",
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
        reviewBody:
          "We approached them for UI/UX design and they created an intuitive, user-friendly interface. Their creative approach and industry knowledge helped us achieve a professional and modern look. The designs were well-optimized for digital platforms.",
        datePublished: "2025-04-20",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Corporate Video Production",
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
          name: "Corporate Video Production",
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
            name: "What makes your video production services different?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on creating visually engaging content that effectively communicates your message. Every video is crafted with a strategic approach to enhance brand impact.",
            },
          },
          {
            "@type": "Question",
            name: "How does a Corporate Video Production Company in Bangalore help businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A professional video production company enhances brand visibility, simplifies complex ideas and creates engaging content for marketing, training and promotions.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle live streaming for corporate events?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide high-quality live streaming services for conferences, product launches and webinars.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer voiceovers and subtitles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide professional voiceovers and multilingual subtitles to make videos more accessible.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide animation or motion graphics services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer animations, motion graphics and visual effects to enhance video storytelling and appeal.",
            },
          },
          {
            "@type": "Question",
            name: "How do we get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Reach out to us with your project details and we will guide you through the next steps.",
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
            name: "Corporate Video Production Company in Bangalore | Corporate Videos",
            item: "https://www.nakshatranamahacreations.com/corporate-video-production-company-in-bangalore",
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
      name: "Corporate Video Production Company in Bangalore",
      link: "/corporate-video-production-company-in-bangalore",
    },
  ];

  // Buttons list
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
      title: "Mobile App Developers in Bangalore",
      link: "/mobile-app-development-company-in-bangalore",
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
        <Container style={{ marginBottom: "5%" }}>
          <Row className="d-flex justify-content-between align-items-center gap-5">
            <Col sm={7}>
              <div style={{ marginTop: "6%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  CORPORATE VIDEO PRODUCTION COMPANY
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
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
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
              Corporate Video Production Company in Bangalore
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
                  We create engaging videos that showcase your brand, products
                  and services with clarity and impact. Our team specializes in
                  scripting, filming and editing high-quality videos that
                  connect with your audience. Whether it’s a promotional video,
                  corporate presentation or training module, we ensure a
                  seamless production process. Every video is designed to
                  enhance your brand’s credibility and reach.
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
                  Bangalore, we bring ideas to life with engaging storytelling
                  and visual excellence.
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
                Our Video Production Process: Corporate Film Makers in Bangalore
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
                A Corporate Video Production Company in Bangalore plays a vital
                role in helping businesses communicate their message
                effectively. High-quality videos create a strong impact, enhance
                brand presence and engage audiences across digital and
                traditional platforms. Our services cover a wide range of
                corporate, commercial and digital video solutions, delivering
                engaging and result-oriented content for businesses of all
                sizes.
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
            A well-planned video production process ensures high-quality results
            that align with your brand’s vision. From idea development to final
            edits, every stage is handled with precision and expertise. As a
            Corporate Video Production Company in Bangalore, we focus on
            delivering engaging visuals that communicate your message
            effectively.
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
            Our Video Production Process: Corporate Video Makers in Bangalore
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
            We create professional corporate videos in Bangalore for businesses
            across various industries, helping them communicate effectively with
            their audience. Our expertise ensures that each video aligns with
            industry-specific goals, whether for branding, marketing, training,
            or customer engagement. Corporate films, promotional content and
            training videos are produced with high-quality visuals and engaging
            storytelling to meet industry demands.
          </p>

          {/* <IndustriesServed /> */}
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
          {/* <ClientImages /> */}
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
