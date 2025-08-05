"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useSprings } from "@react-spring/web";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Filters from "@/components/ourworks/Filters";
import Search from "@/components/ourworks/Search";
import Content from "@/components/ourworks/Content";
import Icons from "@/components/Icons";
import CardsWorkWebsite from "@/components/ourworks/CardsWorkWebsite";
import Breadcrumbs from "@/components/BreadCrumbs";
import Head from "next/head";
const workbannerbottom = "/media/NNCWebsite_Works_PNG_helpingclients.webp";
import Script from "next/script";
const words = [
  { text: "Building", delay: 0 },
  { text: "Our", delay: 200 },
  { text: "Finest Work", delay: 400 },
];

const cardData = [
  {
    ui_uxdesign: "/media/ourwork/puranInterior.webp",
    logo: "/media/NNCWebsite_Works_PNG_Puranlogo.png",
    title: "Puran Interiors",
    description:
      "We have implemented our full creativity for the website of this Interior design company.",
    link: "https://puraninteriors.com/",
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

export default function Website() {
  const [startImageAnimation, setStartImageAnimation] = useState(false);
  const [filterData, setFilterData] = useState(cardData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detect when the H1 section is in view
  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animate H1 words one by one
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
      setTimeout(() => {
        setStartImageAnimation(true);
      }, 1000);
    }
  }, [h1InView]);

  // Detect when the banner image section is in view
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
    { name: "Website Development", link: "/our-works/website-development" },
  ];

  return (
    <>
     
        {/* Meta Pixel Code */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2226129677535551');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2226129677535551&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>
  

      <Breadcrumbs paths={breadcrumbPaths} />

      {/* Banner */}
      <div style={{ marginTop: "4%", textAlign: "center" }}>
        <h1
          ref={h1Ref}
          style={{
            fontWeight: "900",
            fontSize: "65px",
            letterSpacing: "3px",
            marginBottom: "1%",
          }}
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

        {/* SEARCH */}
        <Search cardData={cardData} setFilterData={setFilterData} />

        {/* FILTERS */}
        <Filters />
        <Content />
      </div>

      {/* CARDS */}
      <CardsWorkWebsite filterData={filterData} />

      {/* BANNER - Image with Pop-up Effect */}
      <div
        ref={imageRef}
        style={{
          backgroundColor: "#FFEB9C",
          width: "100%",
          height: "auto",
          marginTop: "10%",
        }}
        className="bottom-banner"
      >
        <animated.img
          src={workbannerbottom.src}
          alt="banner1"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            ...imageAnimation,
          }}
        />
      </div>

      {/* ICONS */}
      <div style={{ marginTop: "10%" }}>
        <Container>
          <Icons />
        </Container>
      </div>
    </>
  );
}
