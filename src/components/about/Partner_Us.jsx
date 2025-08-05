"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ContactModal from "./ContactModal";

const partnerimage = "/media/NNCWebsite_V5_Partnerwithus.webp"; // Ensure image is in /public/media

export default function Partner_Us() {
  const [hovered, setHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: listRef, inView: listInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Animations
  const headingAnimation = useSpring({
    opacity: headingInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    reset: false,
  });

  const paragraphAnimation = useSpring({
    opacity: paragraphInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    delay: 300,
    reset: false,
  });

  const imageAnimation = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? "scale(1)" : "scale(0)",
    config: { tension: 50, friction: 25 },
    delay: 900,
  });

  const listAnimation = useSpring({
    opacity: listInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    delay: 1200,
  });

  const listItems = [
    "Innovative Designers",
    "UI/UX Experts",
    "Development Specialists",
    "Web Development Team",
    "App Creators",
    "Animation Experts",
  ];

  const listItemAnimation = (index) =>
    useSpring({
      opacity: listInView ? 1 : 0,
      transform: listInView ? "translateY(0)" : "translateY(100px)",
      config: { tension: 50, friction: 25 },
      delay: index * 300,
    });

  const buttonAnimation = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",

    config: { tension: 300, friction: 20 },
  });

  return (
    <div
      style={{
        backgroundColor: "#002A3A",
        padding: "35px 45px",
        border: "1px solid #ccc",
        marginBottom: "20px",
        color: "white",
      }}
      className="div-partner"
    >
      <Container>
        <Row>
          <Col sm={6}>
            <animated.h2
              ref={headingRef}
              style={{
                ...headingAnimation,
                fontWeight: "600",
                letterSpacing: "2px",
                marginBottom: "30px",
                fontSize: "40px",
              }}
              className="h2-partner"
            >
              Partner with us
            </animated.h2>

            <animated.p
              ref={paragraphRef}
              style={{
                ...paragraphAnimation,
                lineHeight: "1.7",
                letterSpacing: "1.5px",
                fontSize: "16px",
                fontWeight: "400",
              }}
              className="para-partner-contents"
            >
              To explore <b>new possibilities for your business online.</b> Let
              us help you <b>achieve your goals</b> with a strategy that focuses
              on <b>growth and success in the digital world.</b>
            </animated.p>

            <animated.p
              style={{
                ...paragraphAnimation,
                lineHeight: "1.7",
                letterSpacing: "1.5px",
                fontSize: "16px",
                marginTop: "18px",
                fontWeight: "400",
              }}
              className="para-partner-contents"
            >
              As a result, we are a <b>top choice</b> for entrepreneurs seeking
              web design services for numerous reasons:
            </animated.p>

            <animated.ul
              ref={listRef}
              style={{
                ...listAnimation,
                lineHeight: "2.3",
                letterSpacing: "1.5px",
                fontSize: "18px",
                fontWeight: "500",
              }}
              className="ul-li-partner"
            >
              {listItems.map((item, index) => {
                const animation = listItemAnimation(index);
                return (
                  <animated.li key={index} style={animation}>
                    {item}
                  </animated.li>
                );
              })}

              <animated.div style={buttonAnimation}>
                <Button
                  variant="outline-light"
                  className="btn-size-partner"
                  style={{
                    borderRadius: "50px",
                    width: "250px",
                    marginTop: "5%",
                    fontSize: "25px",
                    gap: "10px",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={() => setShowPopup(true)}
                >
                  Let&apos;s talk{" "}
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="hover-icon"
                  />
                </Button>
              </animated.div>
              {/* Importing and using your modal */}
              <ContactModal showPopup={showPopup} setShowPopup={setShowPopup} />
              {/* {showPopup && <ContactModal showPopup={showPopup} setShowPopup={setShowPopup} />} */}
            </animated.ul>
          </Col>

          <Col sm={6}>
            <animated.div style={imageAnimation}>
              <Image
                ref={imageRef}
                src={partnerimage}
                alt="Partner with us"
                width={500} // Specify the width
                height={300} // Specify the height
                layout="responsive" // This makes the image responsive
                style={{ borderRadius: "8px", width: "100%", height: "auto" }}
                className="img-partner"
              />
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
