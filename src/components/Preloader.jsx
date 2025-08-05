"use client";

import { useEffect, useState } from "react";

const Preloader = ({ progress, onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => setFadeOut(true), 400); 
      const finalTimer = setTimeout(() => onComplete(), 1000); 
      return () => {
        clearTimeout(timer);
        clearTimeout(finalTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0d0d0d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Loader Ring and Text */}
      <div style={{ position: "relative", width: 200, height: 200 }}>
        {/* Rotating Text Circle */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            animation: "spinText 6s linear infinite",
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
            />
          </defs>
          <text
            fill="#00d8ff"
            fontSize="12"
            fontFamily="Segoe UI, sans-serif"
            letterSpacing="2px"
          >
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              • NAKSHATRA NAMAHA CREATIONS • NAKSHATRA NAMAHA CREATIONS •
            </textPath>
          </text>
        </svg>

        {/* Spinner Circle */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "6px solid rgba(255, 255, 255, 0.1)",
            borderTop: "6px solid #00d8ff",
            animation: "spinRing 1s linear infinite",
            boxShadow: "0 0 20px #00d8ff, 0 0 60px #00d8ff33",
            position: "absolute",
            top: "30px",
            left: "30px",
          }}
        />

        {/* Center Logo */}
        <img
          src="/media/nnclogo.png"
          alt="Logo"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Loading Percentage - bottom left corner */}
      <div
        style={{
          position: "fixed",
          bottom: "-70px",
          left: "20px",
          zIndex: 9999,
          fontSize: "12rem",
          color: "#343a40",
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "fantasy",
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
        aria-label="Loading progress"
      >
        {progress}%
      </div>

      {/* Spinner Animations */}
      <style>
        {`
          @keyframes spinRing {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes spinText {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
