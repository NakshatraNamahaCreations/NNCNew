import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Container, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import Image from "next/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CareerSearch() {
  // Scroll animation for the image
  const [refImg, inViewImg] = useInView({ triggerOnce: true, threshold: 0.2 });
  const imgSpring = useSpring({
    transform: inViewImg ? "scale(1)" : "scale(0.5)",
    opacity: inViewImg ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  // Scroll animation for the search input
  const [refInput, inViewInput] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const inputSpring = useSpring({
    transform: inViewInput ? "scale(1)" : "scale(0.5)",
    opacity: inViewInput ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div style={{ marginTop: "0%", marginBottom: "2%" }}>
      {/* Image with Scroll animation */}
      <animated.div
        ref={refImg}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          ...imgSpring,
        }}
        className="img-groups"
      >
        <Image
          src="/media/NNCWebsite_CareerPage_PNG_CareerCoverImage.png" // Path to image
          alt="careers-icon"
          layout="intrinsic" // Use intrinsic layout to auto-adjust the aspect ratio
          width={320} // Set the desired width
          height={200} // Set the desired height (will maintain the aspect ratio)
        />
      </animated.div>

      {/* Input Search with Scroll animation */}
      <Container>
        <FloatingLabel
          controlId="floatingSearch"
          className="mb-3"
          style={{ marginTop: "-1%" }}
        >
          <InputGroup as={animated.div} ref={refInput} style={inputSpring}>
            <Form.Control
              type="text"
              placeholder="Come and explore our jobs"
              className="rounded-pill border border-dark input-work"
              style={{ padding: "12px 20px", margin: "0 auto", width: "60%" }}
            />
            <InputGroup.Text
              className="rounded-pill search-icon"
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#000000", width: "30px", height: "30px" }}
                className="search-icon-size"
              />
            </InputGroup.Text>
          </InputGroup>
        </FloatingLabel>
      </Container>
    </div>
  );
}
