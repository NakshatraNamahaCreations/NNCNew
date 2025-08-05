"use client";

import Image from "next/image";
import { Container } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const industries = [
  { name: "Service Industry", img: "/media/industry/service.webp" },
  { name: "Education Industry", img: "/media/industry/education.webp" },
  { name: "Entertainment", img: "/media/industry/entertainment.webp" },
  { name: "Automobile", img: "/media/industry/automobile.webp" },
  { name: "Finance", img: "/media/industry/finance.webp" },
  { name: "Fitness", img: "/media/industry/fitness.webp" },
  { name: "Health", img: "/media/industry/health.webp" },
  { name: "Hospitality", img: "/media/industry/hospitality.webp" },
  { name: "Real Estate", img: "/media/industry/realEstate.webp" },
  { name: "Logistics", img: "/media/industry/logistics.webp" },
];

const IndustryCard = ({ industry, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const delay = index * 150;
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0px) scale(1)"
      : "translateY(50px) scale(0.9)",
    config: { tension: 200, friction: 20 },
    delay,
  });

  return (
    <div ref={ref} className="industry-card">
      <animated.div style={{ ...animation }}>
        <Image
          src={industry.img}
          alt={industry.name}
          className="industry-Img"
          width={120}
          height={40}
        />
      </animated.div>
    </div>
  );
};

export default function IndustriesServedMobileApp() {
  return (
    <Container className="industry-container">
      {industries.map((industry, index) => (
        <IndustryCard key={index} industry={industry} index={index} />
      ))}
    </Container>
  );
}
