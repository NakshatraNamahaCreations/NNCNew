"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function NNC_Company() {
  // Intersection Observer hooks
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

  // Animations
  const headingAnimation = useSpring({
    opacity: headingInView ? 1 : 0,
    transform: headingInView ? "translateX(0)" : "translateX(-100px)",
    config: { tension: 50, friction: 25 },
    reset: false,
    reset: false,
  });

  const paragraphAnimation = useSpring({
    opacity: paragraphInView ? 1 : 0,
    transform: paragraphInView ? "translateY(0%)" : "translateY(100%)",
    config: { tension: 50, friction: 25 },
    delay: 300,
    reset: false,
  });

  const imageAnimation = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? "scale(1)" : "scale(0)",
    config: { tension: 50, friction: 25 },
    delay: 600,
    reset: false,
  });

  return (
    <>
      <div
        style={{
          width: "85%",
          textAlign: "center",
          margin: "5% auto",
        }}
        ref={headingRef}
      >
        <animated.h2
          style={{
            ...headingAnimation,
            fontWeight: "700",
            letterSpacing: "3px",
            lineHeight: "1.5",
            fontSize: "35px",
            textAlign: "center",
          }}
          className="h2-nnc"
        >
          Nakshatra Namaha Creations is a Reliable Website Development Company: As an expert in the field
        </animated.h2>
      </div>

      <Container style={{ marginBlock: "5%" }}>
        <Row>
          <Col sm={4}>
            <animated.div style={{ ...imageAnimation }} ref={imageRef}>
              <Image
                // src="/media/NNCWebsite_About Us Page-03.webp"
                src="/media/gif/Building.gif"
                alt="Building"
                width={500}  // Specify the width of the image
                height={300} // Specify the height of the image
                layout="responsive"  // This ensures the image is responsive
                className="img-building"
              />
            </animated.div>

          </Col>

          <Col sm={8}>
            <div
              style={{
                backgroundColor: "#ECF2FB",
                padding: "10px",
                marginBottom: "20px",
              }}
              ref={paragraphRef}
            >
              <animated.p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  padding: "20px",
                  fontWeight: "400",
                  ...paragraphAnimation,
                }}
                className="para-about-content"
              >
                <b>Our team</b> has been shaping <b>digital experiences,</b> serving over <b>890+ clients</b> across <b>4 countries.</b> As the <b>best mobile app</b> and <b>website development company in Bangalore,</b> we offer a comprehensive range of services to help businesses grow in the online space.
              </animated.p>
            </div>

            <div style={{ backgroundColor: "#ECF2FB", padding: "10px" }}>
              <animated.p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  padding: "20px",
                  fontWeight: "400",
                  ...paragraphAnimation,
                }}
                className="para-about-content"
              >
                We specialize in everything from <b>website design</b> and <b>web applications to mobile app development, providing user-friendly, high-performing solutions</b> that meet your needs. Whether you’re looking to <b>improve your web presence</b> or enhance customer engagement, our expertise ensures that we deliver practical, effective results.
              </animated.p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
