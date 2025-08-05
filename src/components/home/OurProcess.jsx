"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import { InView, useInView } from "react-intersection-observer";

const processSteps = [
  {
    title: "Analyze",
    description:
      "We understand your business needs and study your audience for effective solutions.",
  },
  {
    title: "Plan",
    description:
      "We outline a clear strategy to meet your objectives and deliver results.",
  },
  {
    title: "Design",
    description:
      "We create appealing and user-friendly designs that resonate with your audience.",
  },
  {
    title: "Development",
    description:
      "We transform ideas into functional and reliable digital solutions.",
  },
  {
    title: "Testing",
    description:
      "We thoroughly test to ensure everything works smoothly and efficiently.",
  },
  {
    title: "Launch",
    description:
      "We execute your project with precision to make an impactful start.",
  },
];

const OurProcess = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const headingAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-80px)",
    config: { tension: 80, friction: 40 },
    delay: 200,
    reset: false,
  });

  return (
    <Container className="my-5">
      <Row ref={ref}>
        <animated.h2
          style={{
            ...headingAnimation,
            fontWeight: "900",
            letterSpacing: "2px",
            fontSize: "35px",
            textAlign: "left",
            marginBottom: "3%",
            color: "black",
          }}
        >
          OUR WORK PROCESS
        </animated.h2>

        {processSteps.map((step, index) => (
          <InView key={index} triggerOnce={true} threshold={0.3}>
            {({ inView, ref }) => (
              <Col
                ref={ref}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="d-flex justify-content-center mb-4"
              >
                <animated.div
                  className="creative-card enhanced-card text-center p-4"
                  style={{
                    transform: inView ? "scale(1)" : "scale(0.85)",
                    opacity: inView ? 1 : 0,
                    transition: "transform 0.8s ease, opacity 0.8s ease",
                  }}
                >
                  <div className="creative-badge enhanced-badge">
                    {index + 1}
                  </div>
                  <h5 className="fw-bold mb-3 mt-3">{step.title}</h5>
                  <p
                    className="text-muted px-3 px-md-0"
                    style={{ fontSize: "1rem", lineHeight: "1.5" }}
                  >
                    {step.description}
                  </p>
                </animated.div>
              </Col>
            )}
          </InView>
        ))}
      </Row>
    </Container>
  );
};

export default OurProcess;
