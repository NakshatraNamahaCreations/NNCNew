"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Filters() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const router = useRouter();

  // Define routes for each filter button
  const filterRoutes = {
    "Mobile app": "/our-works/mobile-app-development",
    Website: "/our-works/website-development",
    "Corporate Video Production": "/our-works/corporate-video-production",
    Animation: "/our-works/animation",
  };

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h5
        className="h5-filters"
        style={{
          marginBottom: "0",
          letterSpacing: "1px",
          fontWeight: "100",
          fontSize: "18px",
        }}
      >
        Filters
      </h5>
      {Object.keys(filterRoutes).map((text, index) => {
        const buttonSpring = useSpring({
          transform: inView ? "scale(1)" : "scale(0.3)",
          opacity: inView ? 1 : 0,
          config: { tension: 80, friction: 12 },
          delay: index * 200,
        });

        return (
          <animated.div key={text} style={buttonSpring}>
            <Button
              variant="outline-dark"
              className="popout-animation hover-button btn-work-size"
              style={{
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "5px 30px",
                fontWeight: "500",
                letterSpacing: "1px",
                fontSize: "14px",
              }}
              onClick={() => router.push(filterRoutes[text])}
            >
              {text}
            </Button>
          </animated.div>
        );
      })}
    </div>
  );
}
