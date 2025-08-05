import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function PlanBtn({ setShowPopup}) {
  const [hovered, setHovered] = useState(false);

  // Spring animation for zoom-in effect
  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)", 
    opacity: hovered ? 1 : 0.9, 
    config: { tension: 300, friction: 20 }, 
  });

  return (
    <animated.div
      style={springProps} 
    >
      <Button
        variant="light"
        type="submit"
        className="popout-animation hover-button nav-btn-talk"
        style={{
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "2px 20px",
          fontWeight: "500",
          letterSpacing: "1px",
          fontSize: "18px",
          boxShadow: "3px 3px 1px 0px rgb(0, 0, 0)",
          border:'2px soild black'
        }}
        onClick={()=> setShowPopup(true)}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
      >
        Let's talk
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="hover-icon"
        />
      </Button>
    </animated.div>
  );
}
