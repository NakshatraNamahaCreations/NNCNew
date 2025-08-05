"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useSprings } from "@react-spring/web";
import { Container } from "react-bootstrap";
import Breadcrumbs from "@/components/BreadCrumbs";
import Filters from "@/components/ourworks/Filters";
import Search from "@/components/ourworks/Search";
import Content from "@/components/ourworks/Content";
import Icons from "@/components/Icons";
import CardsWorkCorporate from "@/components/ourworks/CardsWorkCorporate";

// Images from public folder
const workbannerbottom = "/media/NNCWebsite_Works_PNG_helpingclients.webp";
const VideoCoverCard = "/media/VideoCoverCard.png";
const SrinidhiSignature = "/media/SrinidhiSignature.png";
const SofiaPublicSchool = "/media/SofiaPublicSchool.png";
const FoxgloveInternationalTeaser = "/media/FoxgloveInternationalTeaser.png";
const VijayHomeServices = "/media/VijayHomeServices.png";
const NakshatraNamahaCreationsVideo =
  "/media/NakshatraNamahaCreationsVideo.png";
const FoodVideo = "/media/FoodVideo.png";
const NewEraMachines = "/media/NewEraMachines.png";
const BayleavesNonveg = "/media/BayleavesNonveg.png";
const VishalConvention = "/media/VishalConvention.png";
const VstudiousConcept = "/media/VstudiousConcept.png";
const JVNPSSchool = "/media/JVNPSSchool.png";
const RajathadriRoyalInn = "/media/RajathadriRoyalInn.png";
import Script from "next/script";
const words = [
  { text: "Building", delay: 0 },
  { text: "Our", delay: 200 },
  { text: "Finest Work", delay: 400 },
];

const videoData = [
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/qOSDmQOGfVc",
    imgPics: SrinidhiSignature,
    title: "Srinidhi Signature Inauguration Video",
    description:
      "Experience the spectacular launch of Srinidhi Signature & Foxglove International, a landmark event that redefines excellence and luxury!",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/crQAuL1hQJM",
    imgPics: SofiaPublicSchool,
    title: "Sofia Public School | Video",
    description:
      "Experience the excellence of Sofia Public School, where education meets innovation! This high-quality 2K video ad beautifully showcases the vibrant learning environment.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/6giqFa3FRNs",
    imgPics: FoxgloveInternationalTeaser,
    title: "Foxglove International Teaser",
    description:
      "Get ready for an unforgettable cinematic experience! Presenting the official teaser of Foxglove International, crafted with stunning visuals and immersive storytelling.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/iwgEnqb2RYA",
    imgPics: VijayHomeServices,
    title: "Vijay Home Services | Corporate Ad Film",
    description:
      "Experience top-notch home services with Vijay Home Services! Our Corporate Ad Film showcases our commitment to delivering premium home maintenance solutions with expert professionals",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/x0DSO0Acv7o",
    imgPics: NakshatraNamahaCreationsVideo,
    title: "Nakshatra Namaha Creations | Video",
    description:
      "We specialize in branding, digital marketing, web and app development, graphic design, and video production to help businesses grow and stand out.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/nbuE5Kq8Y-0",
    imgPics: FoodVideo,
    title: "Food Video #The Coffee House",
    description:
      "Join us on a flavorful journey as we explore the delightful treats and aromatic brews at The Coffee House! From rich, handcrafted coffee to delectable bites, this video brings you the perfect café vibes.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/voqUF0hWZ9Q",
    imgPics: NewEraMachines,
    title: "New Era Machines Corporate ad film",
    description:
      "Experience the innovation and excellence of New Era Machines in this corporate ad film, presented in stunning 2K resolution for Photo Bubble by NNC.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/LtUBaj74qGI",
    imgPics: BayleavesNonveg,
    title: "Bayleaves Non Veg Restaurant | Ad Film | Whitefield",
    description:
      "The best restaurant in Bengaluru is Located near Whitefield Hope Farm signal. It's a model-based corporate ad film done for Bay Leaves Restaurant. It's the best restaurant that we have tried.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/ClsvLJ_cnjQ",
    imgPics: VishalConvention,
    title: "Vishal Convention Hall | Uttarahalli Main Road",
    description:
      "Vishal Convention Hall on Uttarahalli Main Road is the ideal destination for weddings, receptions, corporate events, and celebrations.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/BoAUH7o275Q",
    imgPics: VstudiousConcept,
    title: "Vstudios Concept shoot 4k",
    description:
      "This visual masterpiece captures breathtaking moments with cinematic precision, artistic lighting, and a creative vision like never before.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/orxLBVKocdQ",
    imgPics: JVNPSSchool,
    title: "JVNPS School Bidadi | 2022 Corporate video film",
    description:
      "JVNPS was established in 2007, The dream was to provide affordable and quality education to all. Keen and active minds are encouraged to think, analyze, create and express, preparing good citizens and leaders for tomorrow.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/CJ-S5X2sD9M",
    imgPics: RajathadriRoyalInn,
    title: "Rajathadri Royal Inn | Best Restaurant in RR Nagar",
    description:
      "Welcome to Rajathadri Royal Inn! Located near the serene Turahalli forest in Rajarajeshwari Nagar, our hotel and restaurant offer a blissful retreat amidst nature.",
  },
];

const breadcrumbPaths = [
  { name: "Home", link: "/" },
  { name: "Our Works", link: "/our-works" },
  {
    name: "Corporate Video Production",
    link: "/our-works/corporate-video-production",
  },
];

export default function CorporatePage() {
  const [filterData, setFilterData] = useState(videoData);
  const [startImageAnimation, setStartImageAnimation] = useState(false);

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

  return (
    <>
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
      <Breadcrumbs paths={breadcrumbPaths} />

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
                  style={{
                    color: "#000000",
                    width: "20px",
                    height: "20px",
                  }}
                  className="h1-banner-icon-work"
                />
              )}{" "}
            </animated.span>
          ))}
        </h1>

        <Search cardData={videoData} setFilterData={setFilterData} />
        <Filters />
        <Content />
      </div>

      <CardsWorkCorporate filterData={filterData} />

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
          src={workbannerbottom}
          alt="banner"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            ...imageAnimation,
          }}
        />
      </div>

      <div style={{ marginTop: "10%" }}>
        <Container>
          <Icons />
        </Container>
      </div>
    </>
  );
}
