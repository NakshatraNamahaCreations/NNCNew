"use client";

import { Button } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function AboutCard({ icons, title, subTitle }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  const cardSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(40px)",
    config: { tension: 80, friction: 30 },
  });

  const cardStyle = {
    width: "320px",
    height: "420px",
    margin: "2rem auto",
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
    background: "#ffffff",
    color: "black",
    transition: "transform 0.3s ease",
  };

  const contentStyle = {
    zIndex: 2,
    padding: "2rem",
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  const iconContainerStyle = {
    width: "70px",
    height: "70px",
    margin: "0 auto 1.2rem",
    background: "rgb(42, 170, 228)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
    color: "#fff",
    boxShadow: "0 5px 15px rgba(91, 134, 229, 0.3)",
    transform: "translateY(-30%)",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(8px)",
    background: "rgba(255, 255, 255, 0.4)",
    borderRadius: "20px",
    transform: "translateY(100%)",
    transition: "transform 0.6s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    color: "#000",
  };

  const buttonStyle = {
    padding: "10px 24px",
    borderRadius: "30px",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    border: "none",
    color: "white",
    fontWeight: "500",
    transition: "all 0.3s ease",
  };

  return (
    <animated.div
      ref={ref}
      style={{
        ...cardStyle,
        ...cardSpring,
      }}
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector(".overlay");
        if (overlay) overlay.style.transform = "translateY(0%)";
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector(".overlay");
        if (overlay) overlay.style.transform = "translateY(100%)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {/* Main Content */}
      <div style={contentStyle}>
        <div style={iconContainerStyle}>{icons}</div>
        <h5 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{title}</h5>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.6", margin: "1rem 0" }}>
          {subTitle}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="overlay" style={overlayStyle}>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            fontWeight: "600",
          }}
        >
          Learn More
        </p>
        <Button style={buttonStyle}>Explore</Button>
      </div>
    </animated.div>
  );
}
