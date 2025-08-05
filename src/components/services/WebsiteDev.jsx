"use client";

import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { useRouter } from "next/navigation";

const website_dev = "/media/NNCWebsite_ServicePage_V1_websitedev.png";

export default function WebsiteDev() {
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

  const paragraphWebsite = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
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

  const combinedButtonAnimation = {
    ...springProps,
    ...buttonAnimation,
  };

  return (
    <Row className="align-items-center website-top-services" ref={ref}>
      {/* Left Image */}
      <Col xs={12} md={6} className="text-center">
        <animated.div style={{ ...imageAnimation, display: "inline-block" }}>
          <Image
            src={website_dev}
            alt="website-development"
            width={600}
            height={400}
            className="img-fluid"
            style={{ maxWidth: "75%", height: "auto" }}
            priority
          />
        </animated.div>
      </Col>

      {/* Right Text Section */}
      <Col xs={12} md={6} className="text-center text-md-start">
        <animated.h4
          style={{
            fontSize: "20px",
            fontWeight: "700",
            padding: "0 20px",
            letterSpacing: "1px",
            ...headingAnimation,
          }}
          className="h4-website"
        >
          Website Development
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
            ...paragraphWebsite,
          }}
          className="para-website"
        >
          As the Website Development Company in Mysore, we develop custom
          websites with user-friendly navigation, optimized for search engines
          and mobile devices to help businesses grow their online presence. Web
          development company in Bangalore.
        </animated.p>

        {/* Explore Button */}
        <animated.div style={combinedButtonAnimation}>
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
              router.push("/website-development-company-in-bangalore")
            }
          >
            Explore
          </Button>
        </animated.div>
      </Col>
    </Row>
  );
}
