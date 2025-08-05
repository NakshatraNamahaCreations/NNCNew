"use client";

import { useRef } from "react";
import Image from "next/image";
import { useSpring, useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";

const companyData = [
  { src: "/media/tech/nodejs.png", name: "Node Js" },
  { src: "/media/tech/strapi.png", name: "Strapi" },
  { src: "/media/tech/wordpress.png", name: "WordPress" },
  { src: "/media/tech/flutter.png", name: "Flutter" },
  { src: "/media/tech/android.png", name: "Android" },
  { src: "/media/tech/python.png", name: "Python" },
  { src: "/media/tech/mysql.svg", name: "MySQL" },
  { src: "/media/tech/laravel.png", name: "Laravel" },
  { src: "/media/tech/javascript.svg", name: "JavaScript" },
  { src: "/media/tech/java.svg", name: "Java" },
  { src: "/media/tech/cakephp.svg", name: "CakePHP" },
  { src: "/media/tech/django.svg", name: "Django" },
  { src: "/media/tech/express.svg", name: "Express" },
  { src: "/media/tech/linux.svg", name: "Linux" },
];

export default function TechSection() {
  const refHeading = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const headingAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: inView
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 0, transform: "translateY(-30px)" },
    config: { tension: 120, friction: 14 },
    reset: false,
  });

  const trail = useTrail(companyData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: inView
      ? { opacity: 1, transform: "translateY(0px)" }
      : { opacity: 0, transform: "translateY(20px)" },
    config: { mass: 1, tension: 170, friction: 18 },
    delay: 200,
  });

  return (
    <section className="text-center my-5 px-3" ref={ref}>
      <animated.div
        ref={refHeading}
        style={{
          ...headingAnimation,
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 20px",
          border: "1.5px solid #f23f4d",
          borderRadius: "40px",
          backgroundColor: "#fff0f0",
          color: "#f23f4d",
          fontWeight: "600",
          letterSpacing: "2px",
          fontSize: "14px",
          boxShadow: "0 1px 6px rgba(0, 0, 0, 0.08)",
          textTransform: "uppercase",
        }}
        className="tech-stack-tag"
      >
        <FaLaptopCode style={{ marginRight: "8px" }} />
        OUR TECH STACK
      </animated.div>

      <div className="mx-auto">
        <h4
          className="fw-bold my-4 stack-head"
          style={{ textTransform: "uppercase", fontSize: "2.4rem" }}
        >
          Platforms we work with
        </h4>
      </div>

      <Container className="my-5">
        <Row xs={2} sm={2} md={4} className="g-4">
          {trail.map((style, index) => (
            <Col key={index}>
              <animated.div
                className="d-flex align-items-center justify-content-center gap-2 p-3 rounded tech-card"
                style={{
                  ...style,
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Image
                  src={companyData[index].src}
                  alt={`${companyData[index].name} Logo`}
                  width={40}
                  height={40}
                  className="hover-image"
                />
                <span className="fw-semibold fs-6">
                  {companyData[index].name}
                </span>
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
