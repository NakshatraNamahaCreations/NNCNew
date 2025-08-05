"use client";

import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { useRouter } from "next/navigation";

const video = "/media/NNCWebsite_ServicePage_V1_corporatevideo.png";

export default function VideoProd() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.7)",
    config: { tension: 50, friction: 20 },
  });

  const headingAnimation = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
    delay: 200,
  });

  const paragraphVideo = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
    delay: 300,
  });

  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

  return (
    <Row
      className="align-items-center website-top-services"
      style={{ marginTop: "0%", marginBottom: "5%" }}
      ref={ref}
    >
      {/* Left Image */}
      <Col xs={12} md={6} className="text-center">
        <animated.div style={{ ...imageAnimation, display: "inline-block" }}>
          <Image
            src={video}
            alt="video-production"
            width={600}
            height={400}
            className="img-fluid"
            style={{ maxWidth: "75%", height: "auto" }}
            priority
          />
        </animated.div>
      </Col>

      {/* Right Content */}
      <Col xs={12} md={6} className="text-center text-md-start">
        <animated.h4
          style={{
            fontSize: "20px",
            fontWeight: "700",
            padding: "0 20px",
            letterSpacing: "1px",
            ...headingAnimation,
          }}
          className="h4-video"
        >
          Corporate Video Production
        </animated.h4>

        <animated.p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            letterSpacing: "1px",
            fontWeight: "300",
            padding: "20px",
            paddingBottom: "4px",
            width: "90%",
            ...paragraphVideo,
          }}
          className="para-video"
        >
          Our Corporate Video Production services help businesses communicate
          their story clearly and professionally, producing engaging videos
          that enhance brand identity and captivate audiences. Web development
          company in Bangalore.
        </animated.p>

        <animated.div style={springProps}>
          <Button
            variant="outline-dark"
            className="popout-animation hover-button btn-service-banner"
            style={{
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
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
            onClick={() =>
              router.push("/corporate-video-production-company-in-bangalore")
            }
          >
            Explore
          </Button>
        </animated.div>
      </Col>
    </Row>
  );
}
