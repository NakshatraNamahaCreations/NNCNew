
"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import BannerForm from "@/components/websiteDev/BannerForm";
import "@/styles/HeroCarousel.css";


export default function HeroBanner() {
  const banner = {
    image: "/media/websiteBengaluru/slide5.jpeg",
    title: "BEST WEB DEVELOPMENT COMPANY IN BANGALORE",
    desc: "We develop high-functioning, easy to use websites designed to fit various business cases. We make sure not only the design is visually creative, but also the coding is powerful and purposeful, resulting in digital experiences that have an impact. We are focused on scaling and performance because we want the brands that we work with to grow in the digital space.",
    showForm: true,
  };

  return (
    <div className="hero-banner-wrapper">
      <div className="carousel-slide">
        <Image
          src={banner.image}
          alt="Banner"
          className="carousel-bg-image"
          fill={false}
          width={1920}
          height={1080}
          priority
        />
        <div className="black-overlay" />

        {/* Left content */}
        <div className="carousel-banner-left">
          <h1>{banner.title}</h1>
          <p>{banner.desc}</p>

          <div className="banner-buttons">
            <a href="tel:+919900566466" className="btn call-btn">
              <span>Call Now</span>
              <FaPhoneAlt
                className="bounce-icon"
                style={{ marginLeft: "8px" }}
              />
            </a>
            <a href="/contact-us" className="btn contact-btn">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right form */}
        {banner.showForm && (
          <div className="carousel-caption-right">
            <BannerForm />
          </div>
        )}
      </div>

      <div className="scroll-explore">SCROLL TO EXPLORE</div>
    </div>
  );
}
