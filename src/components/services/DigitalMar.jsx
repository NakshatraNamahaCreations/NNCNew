"use client";

import { Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const digitalMarketing = "/media/NNCWebsite_ServicePage_V1_digitalmargeting.png";
export default function DigitalMar() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  const paragraphDigital = useSpring({
    opacity: paragraphInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    delay: 300,
  });

  const buttonAnimation = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
    delay: 400,
  });

  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

  const combinedButtonAnimation = {
    ...springProps,
    ...buttonAnimation,
  };

  return (
    <Row
      className="align-items-center digital-position-relative"
      style={{ marginTop: "5%", marginBottom: "2%" }}
      ref={ref}
    >
      <Col xs={12} md={6} className="text-center text-md-start digital-position-text">
        <animated.h4
          style={{
            fontSize: "20px",
            fontWeight: "700",
            padding: "0 20px",
            textAlign: "end",
            letterSpacing: "1px",
            ...headingAnimation,
          }}
          className="h4-digital"
        >
          Digital Marketing
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
            ...paragraphDigital,
          }}
          className="para-digital"
        >
          With Digital Marketing, we boost your business&apos;s online presence
          using SEO, social media and content strategies that drive traffic and
          improve brand visibility in your industry. Web development company in
          Bangalore.
        </animated.p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            maxWidth: "90%",
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
              onClick={() => router.push("/digital-marketing-agency-in-bangalore")}
            >
              Explore
            </Button>
          </animated.div>
        </div>
      </Col>

      <Col xs={12} md={6} className="text-center">
        <animated.div style={{ ...imageAnimation, display: "inline-block" }}>
          <Image
            src={digitalMarketing}
            alt="Digital Marketing"
            width={600}   // ✅ Added explicit width
            height={400}  // ✅ Added explicit height
            className="img-fluid"
            style={{ maxWidth: "75%", height: "auto" }}
            priority
          />
        </animated.div>
      </Col>
    </Row>
  );
}
