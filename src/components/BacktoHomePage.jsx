"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function BacktoHomePage() {
  const [hovered, setHovered] = useState(false);

  // Spring animation for zoom-in effect
  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={springProps}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Button
          variant="outline-dark"
          className="popout-animation hover-button btn-talk-banner1"
          style={{
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "10px 20px",
            fontWeight: "500",
            letterSpacing: "2px",
            fontSize: "20px",
            boxShadow: "3px 3px 1px 0px rgb(0, 0, 0)",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Back to Home Page
        </Button>
      </Link>
    </animated.div>
  );
}
