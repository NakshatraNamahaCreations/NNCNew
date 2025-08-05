"use client";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

function TeamMember({ image, alt, name, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.9)",
    config: { tension: 200, friction: 15 },
  });

  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(10px)",
    config: { tension: 200, friction: 15 },
  });

  return (
    <animated.div
      ref={ref}
      style={{
        marginBottom: "30px",
        textAlign: "center",
        background: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <animated.div style={{ ...imageAnimation }}>
        <Image
          src={image}
          alt={alt}
          width={300} // adjust as needed
          height={300}
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        />
      </animated.div>

      {/* Name */}
      <animated.h5
        style={{
          ...textAnimation,
          fontWeight: "bold",
          letterSpacing: "1px",
          marginTop: "15px",
          marginBottom: "5px",
          fontSize: "18px",
        }}
        className="team-names"
      >
        {name}
      </animated.h5>

      {/* Title */}
      <animated.p
        style={{
          ...textAnimation,
          fontSize: "14px",
          fontWeight: "500",
          marginBottom: "15px",
        }}
        className="team-promotion"
      >
        {title}
      </animated.p>
    </animated.div>
  );
}

export default TeamMember;
