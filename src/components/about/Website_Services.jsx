"use client";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const graph = "/media/NNCWebsite_AboutUsPage_LeadingCompany.png";

export default function Website_Services() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: listRef, inView: listInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: paragraphRef1, inView: paragraphInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const headingAnimation = useSpring({
    opacity: headingInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    reset: false,
  });

  const paragraphAnimation = useSpring({
    opacity: paragraphInView ? 1 : 0,
    delay: 200,
    config: { tension: 50, friction: 25 },
    reset: false, 
  });

  const listItemAnimation = useSpring({
    opacity: listInView ? 1 : 0,
    delay: 400,
    config: { tension: 50, friction: 25 },
    reset: false, 
  });

  const paragraphAnimation1 = useSpring({
    opacity: paragraphInView1 ? 1 : 0,
    delay: 300,
    config: { tension: 50, friction: 25 },
    reset: false, 
  });

  return (
    <div style={{ marginTop: "0%" }}>
      <Container>
        <animated.div
          style={{
            ...paragraphAnimation1,
            backgroundColor: "#ECF2FB",
            marginBottom: "20px",
            position: "relative",
            width: "100%",
            minHeight: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
          ref={paragraphRef1}
        >
          <Row style={{ padding: "20px 40px" }} className="div-websites">
            {/* Heading */}
            <Col sm={5}>
              <animated.h2
                ref={headingRef}
                style={{
                  ...headingAnimation,
                  lineHeight: "1.7",
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                  fontSize: "35px",
                }}
                className="h1-websiteservices"
              >
                What makes US the Leading Mobile App and Website Development
                Company?
              </animated.h2>
            </Col>

            {/* Paragraph + List */}
            <Col sm={7}>
              <animated.p
                ref={paragraphRef}
                style={{
                  ...paragraphAnimation,
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  fontWeight: "500",
                }}
                className="para-websiteservices"
              >
                At Nakshatra Namaha Creations, we take pride in being the best
                website development company, offering a wide range of web
                services including.
              </animated.p>

              <animated.ul
                ref={listRef}
                style={{
                  ...listItemAnimation,
                  lineHeight: "2.3",
                  letterSpacing: "1px",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
                className="ul-li-websiteservices"
              >
                <li>Website development</li>
                <li>App development</li>
                <li>E-Commerce website development</li>
                <li>WordPress website development</li>
                <li>Flutter App development</li>
                <li>React Native Website Development</li>
                <li>React JS Website Development</li>
              </animated.ul>
            </Col>
          </Row>

          {/* Optimized Image */}
          <div style={{ width: "100%" }}>
          <Image
  src={graph}
  alt="graph-icon"
  width={500} // Specify width
  height={300} // Specify height
  layout="responsive" // Ensures responsiveness
  style={{ width: "100%", height: "auto" }}
  className="img-fluid"
/>

          </div>
        </animated.div>
      </Container>
    </div>
  );
}
