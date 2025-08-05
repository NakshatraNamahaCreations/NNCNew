"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image"; // Import Next.js Image component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const instragram = "/media/NNCWebsite_Career_Page_PNG_Instagram.png";
const play = "/media/NNCWebsite_CareerPage_PNG_Play.png";

// Image Data Array
const images = [
  { src: "/media/NNCWebsite_CareerPage_PNG_Insta1.png", alt: "laugh-instagram" },
  { src: "/media/NNCWebsite_CareerPage_PNG_Insta2.png", alt: "comedy-instagram" },
  { src: "/media/NNCWebsite_CareerPage_PNG_Insta3.png", alt: "work-instagram" },
  { src: "/media/NNCWebsite_CareerPage_PNG_Insta4.png", alt: "team-instagram" },
  { src: "/media/NNCWebsite_CareerPage_PNG_Insta5.png", alt: "office-instagram" },
];

export default function FunMedia() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "5%" }}>
        <Image
          src={instragram}
          alt="instagram"
          width={120} // Adjusted to use Next.js Image component with width and height
          height={120} // Adjusted to use Next.js Image component with width and height
          style={{ objectFit: "cover" }}
        />
        <h2
          style={{
            fontWeight: "900",
            fontSize: "50px",
            letterSpacing: "3px",
            marginBottom: "1%",
          }}
          className="h1-funatwork"
        >
          Fun at work
        </h2>
        <h5 style={{ fontSize: "40px", letterSpacing: "2px", fontWeight: "100" }} className="nncdigital">
          nnc.digitalbengaluru
        </h5>

        {/* Image Gallery */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 0px 30px 0px",
            gap: "20px",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-container ${hoveredIndex === index ? "zoom-in" : ""}`}
              style={{
                position: "relative",
                backgroundImage: 'url("/media/work-card.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "20%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                className={hoveredIndex === index ? "zoom-in-img" : ""}
                width={100} // Adjust image width for proper scaling
                height={100} // Adjust image height for proper scaling
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s ease-in-out",
                }}
              />

              {/* Play Icon Positioned at Center */}
              <Image
                src={play}
                alt="play-icon"
                width={50} // Adjust the size of the play icon
                height={50} // Adjust the size of the play icon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "35%",
                  height: "auto",
                  opacity: 0.9,
                  zIndex: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .zoom-in-img {
            transform: scale(1.1);
          }

          .zoom-in {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
}
