"use client";

import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import Script from "next/script";

import { FaFileCode, FaUsers, FaTrophy } from "react-icons/fa";
import { AiFillAndroid, AiFillNotification } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { SlGraph } from "react-icons/sl";

import OurProcess from "@/components/home/OurProcess";
import ClientImages from "@/components/home/ClientImages";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import About from "@/components/home/About";
import Our_Service from "@/components/home/Our_Service";
import AboutCard from "@/components/home/AboutCard";
import Technical_Tools from "@/components/home/Technical_Tools";
import NewTestimonial from "@/components/home/NewTestimonial";
// import Our_Blog from "@/components/home/Our_Blog";
import FAQs from "@/components/home/FAQs";
import Icons from "@/components/Icons";
import PopupForm from "@/components/home/PopupForm";
import TechSection from "@/components/home/TechSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import KeywordsSection from "@/components/KeywordsSection";
import Link from "next/link";

const faqs = [
  // FAQ List
  {
    question: "What types of websites do you develop?",
    answer:
      "We develop static, dynamic, e-commerce, portfolio and custom web applications based on your business requirements.",
  },
  {
    question: "Can you help with Google Ads and Facebook Ads?",
    answer:
      "Yes, we create and manage Google Ads, Facebook Ads and Instagram campaigns to maximize your brand visibility.",
  },
  {
    question: "Do you offer website maintenance and support?",
    answer:
      "Yes, we provide website maintenance, security updates, bug fixes and performance optimization.",
  },
  {
    question: "Can you produce corporate videos and advertisements?",
    answer:
      "Yes, we offer scriptwriting, video shooting, editing, motion graphics and voice-over services for corporate promotions.",
  },
  {
    question: "Will I own the source code and rights to my project?",
    answer:
      "Yes, once the project is completed and full payment is made, you will have full ownership of the source code and intellectual property.",
  },
];
const ourworkData = [
  {
    ui_uxdesign: "/media/ourwork/vijayhome.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG_VijayHomeLogo.png",
    title: "Vijaya Home Services",
    description:
      "This was created spcifically keeping the client’s requirments. We stood upto their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.vhs1&pcampaignid=web_share",
  },
  {
    ui_uxdesign: "/media/ourwork/puranInterior.webp",
    logo: "/media/NNCWebsite_Works_PNG_Puranlogo.png",
    title: "Puran Interiors",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://puraninteriors.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/cdn.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG-06.png",
    title: "CND Play",
    description:
      "CND PLAY is an emerging streaming platform dedicated to providing a vast library of movies to audiences worldwide.",
    link: "https://play.google.com/store/apps/details?id=com.clockndail.clockndail&hl=en_IN",
  },
  {
    ui_uxdesign: "/media/ourwork/aadhya.webp",
    logo: "/media/NNCAadiyalogo.png",
    title: "Aadhya Instruments",
    description:
      "We have designed a simple and minimalist website for this project.",
    link: "https://aadhyainstruments.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/vijayhomeweb.webp",
    logo: "/media/NNCVijayHomeServicesLogo.png",
    title: "Vijay Home Services",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://www.vijayhomeservices.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/proleverage.webp",

    logo: "/media/NNCWebsite_Works_MobileApp_PNG_Proleveragelogo.png",
    title: "Pro Leverage",
    description:
      "This was created spcifically keeping the client’s requirments. We stood upto their expectations.",
    link: "https://play.google.com/store/apps/details?id=com.ecom_gyan.pro_leverage&pcampaignid=web_share",
  },
  {
    ui_uxdesign: "/media/ourwork/sarang.webp",
    logo: "/media/NNCSarangCreationsLogo.png",
    title: "Sarang Creations",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://sarangcreations.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/rrPrecision.webp",
    logo: "/media/NNCPrecisionLogo.png",
    title: "RR Precision",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://rr-precision.com/",
  },

  {
    ui_uxdesign: "/media/ourwork/nesra.webp",
    logo: "/media/NesaraAyurvedaLogo.png",
    title: "Nesara Ayurveda",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://nesaraayurveda.com/",
  },
  {
    ui_uxdesign: "/media/ourwork/mmd.webp",
    logo: "/media/Mydocumentslogo.png",
    title: "Make my documents",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://www.makemydocuments.com/",
  },
];

const cardData = [
  {
    icons: <AiFillAndroid size={30} className="text-white" />,
    title: "Mobile App Development",
    link: "/mobile-app-development-company-in-bangalore",
    subTitle:
      "We specialize in Mobile App Development, designing and developing user-friendly mobile applications that work seamlessly across platforms.",
  },
  {
    icons: <FaFileCode size={30} className="text-white" />,
    title: "Website Designing",
    link: "/website-development-company-in-bangalore",
    subTitle:
      "We specialize in Website Development, creating seamless, high-performing, and visually engaging websites that enhance user experience.",
  },
  {
    icons: <AiFillNotification size={30} className="text-white" />,
    title: "Digital Marketing",
    link: "/digital-marketing-agency-in-bangalore",
    subTitle:
      "We specialize in Digital Marketing, helping businesses grow their online presence through strategic campaigns, SEO, and social media.",
  },
  {
    icons: <BsCartCheckFill size={30} className="text-white" />,
    title: "2D Animation",
    link: "/2d-animation-studio-in-bangalore",
    subTitle:
      "We specialize in 2D Animation, bringing stories to life with engaging visuals and smooth motion.",
  },
  {
    icons: <MdRocketLaunch size={30} className="text-white" />,
    title: "Corporate Video Production",
    link: "/corporate-video-production-company-in-bangalore",
    subTitle:
      "We specialize in Corporate Video Production, creating compelling visuals that showcase your brand’s story, values, and achievements.",
  },
  {
    icons: <MdRocketLaunch size={30} className="text-white" />,
    title: "Graphic Design",
    link: "/graphic-design-company-in-bangalore",
    subTitle:
      "We craft impactful graphic designs—from logos to social media creatives—that bring your brand’s vision to life with clarity, creativity, and purpose.",
  },
  {
    icons: <MdRocketLaunch size={30} className="text-white" />,
    title: "Digital Marketing",
    subTitle:
      "We offer digital marketing services to boost brand visibility, generate leads, and drive online conversions.",
    link: "/digital-marketing-agency-in-bangalore",
  },
  {
    icons: <SlGraph size={30} className="text-white" />,
    title: "B2B Marketing",
    link: "/b2b-marketing-agency-in-bangalore",
    subTitle:
      "We specialize in B2B marketing that drives qualified leads and builds strong business relationships through strategic campaigns, content, and data-driven insights.",
  },
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [blogRef, blogInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const router = useRouter();

  useEffect(() => {
    if (blogInView) setShowPopup(true);
  }, [blogInView]);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.nakshatranamahacreations.com/#organization",
            name: "Nakshatra Namaha Creations",
            url: "https://www.nakshatranamahacreations.com",
            logo: "https://www.nakshatranamahacreations.com/media/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9900566466",
              contactType: "Customer Support",
              areaServed: "IN",
              availableLanguage: ["English", "Kannada"],
            },
            sameAs: [],
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.nakshatranamahacreations.com/#services",
            serviceType: [
              "Website Development",
              "Mobile App Development",
              "Digital Marketing",
              "2D Animation",
              "Corporate Video Production",
              "Graphic Design",
              "B2B Marketing Services",
            ],
            provider: {
              "@type": "Organization",
              name: "Nakshatra Namaha Creations",
              url: "https://www.nakshatranamahacreations.com",
            },
            areaServed: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
            },
            description:
              "Nakshatra Namaha Creations is best website developers in Bangalore, specializes in creating custom, user-friendly and responsive websites for your online presence.",
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
            name: "Nakshatra Namaha Creations",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560061",
              addressCountry: "IN",
            },
            telephone: "+91-9900566466",
            url: "https://www.nakshatranamahacreations.com",
            priceRange: "₹₹",
            openingHours: "Mo-Sa 09:30-18:30",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "4.9",
            },
          }),
        }}
      />

      {showPopup && <PopupForm />}

      <div>
        <HeroCarousel />

        {/* ABOUT US */}
        <div id="about">
          <About />
        </div>

        <div
          style={{
            paddingBottom: "10%",
            backgroundColor: "#002A3A",
            color: "white",
            padding: "10px",
            marginTop: "-2%",
          }}
        >
          <Container>
            <h2 className="text-center mb-4">GRAB OUR SERVICES</h2>
            <Row>
              {cardData.map((card, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  // onClick={() => router.push(card.link)}
                >
                  <Link href={card.link} className="removelinkStyle">
                    <AboutCard {...card} />
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div style={{ margin: "6% 0%" }}>
          <h2
            style={{
              lineHeight: "2.0",
              fontWeight: "600",
              letterSpacing: "1px",
              fontSize: "30px",
              textAlign: "center",
            }}
            className="h1-grab"
          >
            OUR WORK
          </h2>
          <Our_Service cardData={ourworkData} />
        </div>

        {/* TECH TOOLS & PROCESS */}
        <Container>
          <Technical_Tools />
          <OurProcess />
        </Container>

        {/* INDUSTRIES WE SERVE */}
        <div style={{ marginBlock: "10%" }}>
          <Container className="text-center">
            <h2 className="mb-3" style={{fontWeight:600}}>Industries We Serve</h2>
            <p>
              We partner with businesses across industries to build digital
              solutions that drive growth.
            </p>
            <IndustriesServedMobileApp />
          </Container>
        </div>

        <TechSection />
        <ClientImages />
        <NewTestimonial />
        <Container>
          {/* <Our_Blog /> */}
          <div style={{ padding: "5% 0%" }} ref={blogRef}></div>
          <FAQs faqs={faqs} />
          <KeywordsSection />
          <div style={{ padding: "4% 0 0 0" }}>
            <Icons />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
