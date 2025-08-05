"use client";

import { Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const marketing = "/media/NNCWebsite_ServicePage_V1_B2B.png";
export default function B2BMar() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const headingAnimation = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
  });

  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.7)",
    config: { tension: 50, friction: 20 },
    delay: 200,
  });

  const paragraphB2B = useSpring({
    opacity: paragraphInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    delay: 300,
  });

  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

  const buttonAnimation = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
    delay: 400,
  });

  const combinedButtonAnimation = { ...springProps, ...buttonAnimation };

  return (
    <Row className="align-items-center digital-position-relative" ref={ref}>
      <Col xs={12} md={6} className="text-center text-md-start digital-position-text1">
        <animated.h4
          style={{
            fontSize: "20px",
            fontWeight: "700",
            padding: "0 20px",
            textAlign: "end",
            letterSpacing: "1px",
            ...headingAnimation,
          }}
          className="h4-b2b"
        >
          B2B Marketing
        </animated.h4>

        <animated.p
          ref={paragraphRef}
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            letterSpacing: "1px",
            fontWeight: "300",
            padding: "20px",
            paddingBottom: "4px",
            textAlign: "end",
            width: "90%",
            marginLeft: "10%",
            ...paragraphB2B,
          }}
          className="para-b2b"
        >
          We offer B2B Marketing Services that focus on building strong business
          relationships, generating leads and increasing growth through
          effective communication and outreach strategies. Web development
          company in Bangalore.
        </animated.p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "90%",
            marginLeft: "5%",
          }}
        >
          <animated.div style={combinedButtonAnimation}>
            <Button
              variant="outline-dark"
              className="popout-animation hover-button btn-service-banner"
              style={{
                borderRadius: "50px",
                padding: "5px 10px",
                fontWeight: "500",
                letterSpacing: "1px",
                fontSize: "14px",
                boxShadow: "2px 2px 1px 0px rgb(0, 0, 0)",
                cursor: "pointer",
                backgroundColor: hovered ? "black" : "white",
                color: hovered ? "white" : "black",
                border: "1px solid black",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => router.push("/b2b-marketing-agency-in-bangalore")}
            >
              Explore
            </Button>
          </animated.div>
        </div>
      </Col>

      <Col xs={12} md={6} className="text-center">
        <animated.div style={{ ...imageAnimation, display: "inline-block" }}>
          <Image
            src={marketing}
            alt="b2b-marketing"
            width={600}
            height={400}
            className="img-fluid"
            style={{ maxWidth: "75%", height: "auto" }}
          />
        </animated.div>
      </Col>
    </Row>
  );
}
