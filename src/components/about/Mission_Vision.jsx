"use client";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const mission = "/media/NNCWebsite_AboutUsPage_Mission.png";
const vision  = "/media/NNCWebsite_AboutUsPage_Vision.png";

export default function Mission_Vision() {
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const missionAnimation = useSpring({
    opacity: missionInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
  });

  const visionAnimation = useSpring({
    opacity: visionInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    delay: 300,
  });

  return (
    <div style={{ marginTop: "0%" }}>
      <Container>
        <Row>
          {/* Mission Column */}
          <Col sm={6}>
            <animated.div
              ref={missionRef}
              style={{
                ...missionAnimation,
                backgroundColor: "#ECF2FB",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
                width: "100%",
                minHeight: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
              className="div-mission-vision"
            >
              <h5 className="px-lg-3 px-2 fw-bold">Mission</h5>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  padding: "5px 20px",
                  fontWeight: "500",
                }}
                className="para-mission"
              >
                Our mission is to help businesses grow with smart and practical digital services. Whether it’s website development, mobile apps, or digital marketing, we focus on creating simple and effective solutions that meet the business needs. As one of the best website development companies in Bangalore, we are committed to delivering value through honest work, consistent quality, and long-term support to all our clients.
              </p>
              <div style={{ position: "absolute", bottom: "20px", right: "20px" }}>
                <Image
                  src={mission}
                  alt="mission"
                  width={60}
                  height={60}
                  className="img-mission"
                />
              </div>
            </animated.div>
          </Col>

          {/* Vision Column */}
          <Col sm={6}>
            <animated.div
              ref={visionRef}
              style={{
                ...visionAnimation,
                backgroundColor: "#ECF2FB",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
                width: "100%",
                minHeight: "350px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="div-mission-vision"
            >
              <h5 className="px-lg-3 px-2 fw-bold">Vision</h5>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  padding: "5px 20px",
                  fontWeight: "500",
                }}
                className="para-mission"
              >
                To be recognised as the best website development company in Bangalore and a leading mobile app development company known for building meaningful digital experiences. We aim to grow as a trusted name for businesses looking to build their online presence and expand through reliable, creative, and result-oriented digital solutions.
              </p>
              <div style={{ position: "absolute", bottom: "20px", right: "20px" }}>
                <Image
                  src={vision}
                  alt="vision"
                  width={60}
                  height={60}
                  className="img-mission"
                />
              </div>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
