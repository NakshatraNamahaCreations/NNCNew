"use client";

import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useSprings } from "@react-spring/web";
import Breadcrumbs from "@/components/BreadCrumbs";
import Filters from "@/components/ourworks/Filters";
import Search from "@/components/ourworks/Search";
import Content from "@/components/ourworks/Content";
import Icons from "@/components/Icons";
import CardsWorkAnimation from "@/components/ourworks/CardsWorkAnimation";

// Images from public folder
const workbannerbottom = "/media/NNCWebsite_Works_PNG_helpingclients.webp";
const VideoCoverCard = "/media/VideoCoverCard.png";
const Ournewyearvideo = "/media/Ournewyearvideo.png";
const MysoreSanthe = "/media/MysoreSanthe.png";
const VijayHomeServices1 = "/media/VijayHomeServices1.png";
const StoriesinKannada = "/media/StoriesinKannada.png";
const AnimationJewelry = "/media/AnimationJewelry.png";
const animationforbusiness = "/media/animationforbusiness.png";
const Animationforservices1 = "/media/Animationforservices1.png";
const StoryofPeter = "/media/StoryofPeter.png";
const AnimatedShowreel = "/media/AnimatedShowreel.png";
const Whyiswebsiteneeded = "/media/Whyiswebsiteneeded.png";
const ValentineDaystoryvideo = "/media/ValentineDaystoryvideo.png";
import Script from "next/script";

const words = [
  { text: "Building", delay: 0 },
  { text: "Our", delay: 200 },
  { text: "Finest Work", delay: 400 },
];

const videoData = [
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/JHd3ocRFiw4",
    imgPics: Ournewyearvideo,
    title: "Our new year video",
    description:
      "Dynamic New Year 2024 animation showcasing our expertise in character animation and festive storytelling. A perfect blend of creativity and seamless transitions.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtube.com/shorts/KL1vKSyKfJ4?feature=share",
    imgPics: MysoreSanthe,
    title: "Mysuru Santhe | Carnival | Mysore Fair #carnival",
    description:
      "Experience the vibrant Mysuru Santhe, a grand carnival filled with cultural performances, shopping, delicious local food, and exciting rides!",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/1VLsrRRNFMI",
    imgPics: VijayHomeServices1,
    title: "Vijay Home Services | 2d character animation -40 Seconds",
    description:
      "Watch this engaging 2D character animation that showcases how Vijay Home Services delivers exceptional solutions for all your home needs, from cleaning to maintenance and beyond!",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/uqdD1QNNpmQ",
    imgPics: StoriesinKannada,
    title: "Stories in Kannada | Moral",
    description:
      "Ramana's arrogance led him to face unexpected challenges! Listen to this intriguing Kannada story and discover how ego impacts our lives.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/myIwLhPQEr0",
    imgPics: AnimationJewelry,
    title: "2D Animation for Business | Handmade Jewelry Business",
    description:
      "A 2D animation promotional video is the perfect way to captivate your audience, showcase your craftsmanship and boost sales!",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/G5QmqH8jwEA",
    imgPics: animationforbusiness,
    title: "2D Animation for Business – Nakshatra Namaha Creations",
    description:
      "At Nakshatra Namaha Creations, we bring your business to life with stunning 2D animations that captivate your audience and drive engagement.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/5g__K9Kw3DY",
    imgPics: Animationforservices1,
    title: "2D Animation Video for services",
    description:
      "Watch this engaging 2D animation video that highlights our expertise in crafting innovative digital experiences tailored to your needs.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/HuB3Cau6yg0",
    imgPics: StoryofPeter,
    title: "Story of Peter | How he was successful with his business",
    description:
      "Living in the digital world, a website is crucial for any business. If you have a business and don’t have a website, you are probably losing out on opportunities for your business.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/TlKqlXo6ux4",
    imgPics: AnimatedShowreel,
    title: "2021 Animated showreel | Nakshatra Namaha Creations",
    description:
      "A One-stop solution offering major services like Corporate Ad Film making, Animation, Website development, Social Media Promotions, Mobile app development and other services",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/-P3WA60Shs8",
    imgPics: Whyiswebsiteneeded,
    title: "Why is website needed for a business?",
    description:
      "If you have a business and don’t have a website, you are probably losing out on opportunities for your business. A website can be used to accomplish many different marketing strategies to help your business grow.",
  },
  {
    imgSrc: VideoCoverCard,
    videoUrl: "https://youtu.be/XaThfPkZXjU",
    imgPics: ValentineDaystoryvideo,
    title: "Valentine Day Story Video | Nakshatra Namaha Creations",
    description:
      "Experience a beautifully crafted Valentine's Day Animation that captures the essence of romance, connection, and togetherness.",
  },
];

const breadcrumbPaths = [
  { name: "Home", link: "/" },
  { name: "Our Works", link: "/our-works" },
  { name: "Animation", link: "/our-works/animation" },
];

export default function AnimationPage() {
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
      setTimeout(() => {
        setStartImageAnimation(true);
      }, 1000);
    }
  }, [h1InView]);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const imageAnimation = useSpring({
    opacity: startImageAnimation && imageInView ? 1 : 0,
    transform:
      startImageAnimation && imageInView ? "scale(1)" : "scale(0.8)",
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

      <CardsWorkAnimation filterData={filterData} />

      {/* Banner Image */}
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

      {/* Icons */}
      <div style={{ marginTop: "10%" }}>
        <Container>
          <Icons />
        </Container>
      </div>
    </>
  );
}
