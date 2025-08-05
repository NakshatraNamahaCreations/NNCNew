"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "@/styles/HeroCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: "/media/websiteBengaluru/slidee1.jpg",
      title: "Best Website Development Company in Bangalore",
      desc: "Creating modern, responsive, and high-performing websites that are tailored to your goals. Our in-house team of experts and highly skilled developers bring your vision to life through well-designed sites that are easily navigable and optimized for all devices. We are proud to be trusted by startups to enterprises across industries.",
    },
    {
      image: "/media/websiteBengaluru/slidee2.jpg",
      title: "Leading Static Website Development Company in Bangalore",
      desc: "Our static sites are thoughtfully constructed for speed, security, and simplicity – perfect for organizations that want to be found online. Our static sites are developed with the best practices of SEO and mobile responsiveness. Our static sites perform well with great SEO. We ensure that our code is clean, the design is easy on the eyes, and the visitors are left leaning about your organization.",
    },
    {
      image: "/media/websiteBengaluru/slidee3.jpg",
      title: "Reliable E-Commerce Website Development Company in Bangalore",
      desc: "We create strong e-commerce systems capable of handling payment gateways, product listings, and inventory management letting our customers operate their e-commerce platforms effortlessly. Ensuring a fast and smooth shopping experience is our gold standard for quality assurance and we strive for easy navigation, swift checkout and simple dashboards. With a focus on converting visitors to buyers, we can help you sell more online.",
    },
    {
      image: "/media/websiteBengaluru/slidee4.jpg",
      title: "Hire Website Developers in Bangalore",
      desc: "Our professional website developers and creative thinkers bring technical expertise to every project. We can support projects that are built from scratch or build upon existing web platforms to scale. Our businesses benefit from having a dedicated development resource focused specifically on delivering websites on time, and to a quality standard.",
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    swipe: true,
    draggable: true,
    pauseOnHover: false,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <div className="hero-carousel-wrapper">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div className="carousel-banner-slide">
              {/* Use Next.js Image for optimization */}
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                className="carousel-banner-image"
                width={1920}
                height={800}
                priority={i === 0}
              />
              <div className="black-overlay" />
              <div className="carousel-caption-left">
                {i === 0 ? (
                  <h1>{slide.title}</h1>
                ) : (
                  <h2 className="display-6 fw-bold">{slide.title}</h2>
                )}
                <p>{slide.desc}</p>
                <div className="carousal-buttons">
                  <a href="tel:+919900566466" className="btn call-btn">
                    <span>Call Now</span>
                    <FaPhoneAlt
                      className="bounce-icon"
                      style={{ marginLeft: "8px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Clickable indicators */}
      <div className="custom-indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className={`indicator-dot ${i === activeIndex ? "active" : ""}`}
            style={{ cursor: "pointer" }}
          >
            <div
              className={`progress-bar-fill ${i === activeIndex ? "fill" : ""}`}
            />
          </div>
        ))}
      </div>

      <div className="scroll-explore">SCROLL TO EXPLORE</div>
    </div>
  );
}
