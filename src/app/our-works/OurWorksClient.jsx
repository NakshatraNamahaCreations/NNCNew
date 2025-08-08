"use client";

import Filters from "@/components/ourworks/Filters";
import Search from "@/components/ourworks/Search";
import Content from "@/components/ourworks/Content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useSprings } from "@react-spring/web";
import { Container } from "react-bootstrap";
import Icons from "@/components/Icons";
import Image from "next/image";
import CardsWork from "@/components/ourworks/CardsWork";
import Breadcrumbs from "@/components/BreadCrumbs";
import Script from "next/script";

const cardData = [
  {
    ui_uxdesign: "/media/ourwork/vijayhome.webp",
    logo: "/media/NNCWebsite_Works_MobileApp_PNG_VijayHomeLogo.png",
    title: "Vijaya Home Services",
    description:
      "This was created specifically keeping the client’s requirements. We stood up to their expectations.",
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
      "This was created specifically keeping the client’s requirements. We stood up to their expectations.",
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

const words = [
  { text: "Building", delay: 0 },
  { text: "Our", delay: 200 },
  { text: "Finest Work", delay: 400 },
];

export default function Works_Page() {
  const [startImageAnimation, setStartImageAnimation] = useState(false);
  const [filterData, setFilterData] = useState(cardData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animations = useSprings(
    words.length,
    words.map(({ delay }) => ({
      opacity: h1InView ? 1 : 0,
      transform: h1InView ? "scale(1)" : "scale(0.5)",
      config: { tension: 200, friction: 25 },
      delay,
    }))
  );

  useEffect(() => {
    if (h1InView) {
      setTimeout(() => setStartImageAnimation(true), 1000);
    }
  }, [h1InView]);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const imageAnimation = useSpring({
    opacity: startImageAnimation && imageInView ? 1 : 0,
    transform: startImageAnimation && imageInView ? "scale(1)" : "scale(0.8)",
    from: { opacity: 0, transform: "scale(0.8)" },
    config: { tension: 120, friction: 14 },
  });

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Our Works", link: "/our-works" },
  ];

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
        geo: { "@type": "GeoCoordinates", latitude: 12.264056680993265, longitude: 76.6444222231926 },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nakshatranamahacreations.com/" },
          { "@type": "ListItem", position: 2, name: "Our Works", item: "https://www.nakshatranamahacreations.com/our-works" },
        ],
      },
    ],
  };

  return (
    <>


      <Script type="application/ld+json">{JSON.stringify(schemaMarkup)}</Script>

      <Breadcrumbs paths={breadcrumbPaths} />

      <div style={{ marginTop: "2%", marginBottom: "5%", textAlign: "center" }}>
        <h1
          ref={h1Ref}
          style={{ fontWeight: "900", fontSize: "65px", letterSpacing: "3px", marginBottom: "1%" }}
          className="h1-banner-work"
        >
          {words.map((word, index) => (
            <animated.span key={index} style={animations[index]}>
              {word.text}{" "}
              {index !== words.length - 1 && (
                <FontAwesomeIcon
                  icon={faCircle}
                  size="xs"
                  style={{ color: "#000000", width: "20px", height: "20px" }}
                  className="h1-banner-icon-work"
                />
              )}{" "}
            </animated.span>
          ))}
        </h1>

        <Search cardData={cardData} setFilterData={setFilterData} />
        <Filters />
        <Content />
      </div>

      <CardsWork filterData={filterData} />

      <div
        ref={imageRef}
        style={{ backgroundColor: "#FFEB9C", width: "100%", height: "auto", marginTop: "10%" }}
        className="bottom-banner"
      >
        <animated.div style={imageAnimation}>
          <Image
            src="/media/NNCWebsite_Works_PNG_helpingclients.webp"
            alt="banner1"
            width={1920}
            height={600}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </animated.div>
      </div>

      <div style={{ marginTop: "10%" }}>
        <Container>
          <Icons />
        </Container>
      </div>
    </>
  );
}
