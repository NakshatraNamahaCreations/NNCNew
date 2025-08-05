import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function HoverButtonWork() {
  const [hovered, setHovered] = useState(false);

  // Spring animation for zoom-in effect
  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)", // Zoom in on hover
    opacity: hovered ? 1 : 0.9, // Slight opacity change
    config: { tension: 300, friction: 20 }, // Smooth and quick effect
  });

  return (
    <animated.div style={springProps}>
      <Link href="/our-works" className="removelinkStyle">
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
            width: "200px",
            fontWeight: "500",
            letterSpacing: "2px",
            fontSize: "20px",
            boxShadow: "3px 3px 1px 0px rgb(0, 0, 0)",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Our Works
        </Button>
      </Link>
    </animated.div>
  );
}
