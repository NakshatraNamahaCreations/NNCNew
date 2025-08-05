"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const logoArray1 = [
  "/media/clients.png",
  "/media/clients1.png",
  "/media/clients2.png",
  "/media/clients3.png",
  "/media/clients4.png",
  "/media/clients5.png",
  "/media/clients6.png",
  "/media/clients7.png",
  "/media/clients8.png",
  "/media/clients9.png",
  "/media/clients10.png",
  "/media/clients11.png",
  "/media/clients12.png",
  "/media/clients13.png",
  "/media/clients14.png",
];

const logoArray2 = [
  "/media/clients15.png",
  "/media/clients16.png",
  "/media/clients17.png",
  "/media/clients18.png",
  "/media/clients19.png",
  "/media/clients20.png",
  "/media/clients21.png",
  "/media/clients22.png",
  "/media/clients23.png",
  "/media/clients24.png",
  "/media/clients25.png",
  "/media/clients26.png",
  "/media/clients27.png",
  "/media/clients28.webp",
  "/media/clients29.webp",
  "/media/clients30.webp",
];

const logoArray3 = [
  "/media/clients31.png",
  "/media/clients32.webp",
  "/media/clients33.png",
  "/media/clients34.png",
  "/media/clients35.png",
  "/media/clients36.png",
  "/media/clients37.png",
  "/media/clients38.png",
  "/media/clients39.png",
  "/media/clients40.png",
  "/media/clients41.png",
  "/media/clients43.webp",
  "/media/clients44.webp",
  "/media/clients45.png",
  "/media/clients46.png",
];

const ClientImages = () => {
  return (
    <div style={{ padding: "24px 0px", margin: "10% auto" }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "10px",
          color: "#1f2937",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        Join with us
      </h3>

      <div>
        <h4
          style={{
            fontSize: "26px",
            textAlign: "center",
            color: "#1f2937",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Our Clients
        </h4>
      </div>

      <div style={{ position: "relative", gap: "24px", marginTop: "4%" }}>
        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "40px",
            background: "linear-gradient(to right, #f3f4f6, transparent)",
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "40px",
            background: "linear-gradient(to left, #f3f4f6, transparent)",
            zIndex: 10,
          }}
        />

        {/* Marquee 1 */}
        <Marquee autoFill pauseOnHover style={{ marginBottom: "50px" }}>
          {logoArray1.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`client-${index}`}
              width={80}
              height={80}
              style={{
                margin: "0 16px",
                objectFit: "contain",
              }}
            />
          ))}
        </Marquee>

        {/* Marquee 2 */}
        <Marquee
          autoFill
          pauseOnHover
          direction="right"
          style={{ marginBottom: "50px" }}
        >
          {logoArray2.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`client-${index}`}
              width={80}
              height={80}
              style={{
                margin: "0 16px",
                objectFit: "contain",
              }}
            />
          ))}
        </Marquee>

        {/* Marquee 3 */}
        <Marquee autoFill pauseOnHover>
          {logoArray3.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`client-${index}`}
              width={80}
              height={80}
              style={{
                margin: "0 16px",
                objectFit: "contain",
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientImages;
