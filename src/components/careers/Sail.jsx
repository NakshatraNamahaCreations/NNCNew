"use client";

import Image from "next/image"; // Import the next/image component for optimized image handling

const ComeSailwithus = "/media/gif/Ship.gif";

export default function Sail() {
  return (
    <div style={{ textAlign: "center", overflow: "hidden", margin: "5% 0% 10% 0%" }} className="sail-div">
      {/* Boat Image with Wave Effect */}
      <Image
        src={ComeSailwithus}
        alt="boat"
        className="wave-animation"
        width={900} // Adjusted the width for the image
        height={600} // Adjusted the height for the image
        style={{
          objectFit: "cover",
          width: "70%", // Adjust width to fit the design
          height: "auto", // Ensure the image scales properly
        }}
      />

      {/* Title */}
      <h2
        style={{
          fontWeight: "900",
          fontSize: "55px",
          letterSpacing: "3px",
          marginBottom: "1%",
        }}
        className="comesailwithme"
      >
        Come Sail With Us
      </h2>

      {/* CSS Styles */}
      <style>
        {`
          /* Boat Wave Animation */
          @keyframes waveMotion {
            0% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(-2deg); }
            50% { transform: translateY(0px) rotate(0deg); }
            75% { transform: translateY(10px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          .wave-animation {
            animation: waveMotion 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
