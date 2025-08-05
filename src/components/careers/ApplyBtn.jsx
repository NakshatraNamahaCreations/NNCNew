// components/ApplyBtn.js
"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ApplyBtn({ onClick }) {
  const [hovered, setHovered] = useState(false);

  // Spring animation for zoom-in effect
  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={springProps}>
      <Button
        variant="outline-dark"
        onClick={onClick}
        className="popout-animation hover-button nav-btn-talk applybtn"
        style={{
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "5px 30px",
          fontWeight: "500",
          letterSpacing: "1px",
          fontSize: "20px",
          boxShadow: "3px 3px 1px 0px rgb(0, 0, 0)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Apply{" "}
        <FontAwesomeIcon
          icon={faArrowUp}
          className="applybtn-icon"
        />
      </Button>
    </animated.div>
  );
}
