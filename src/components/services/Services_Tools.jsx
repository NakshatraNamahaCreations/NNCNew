"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated, useSprings } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const paper = "/media/NNCWebsite_ServicePage_V1_marketingservices.png";
const cartoon = "/media/NNCWebsite_ServicePage_V1_character.png";
const note = "/media/NNCWebsite_ServicePage_V1_TakeWhatyouneed.png";

const services = [
  "Mobile App",
  "Website Development",
  "Corporate Video Production",
  "Digital Marketing",
  "Graphic Design",
  "2D Animation",
  "B2B Marketing Services",
];

export default function Services_Tools() {
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const paragraphAnimation = useSpring({
    opacity: paragraphInView ? 1 : 0,
    config: { tension: 50, friction: 25 },
    delay: 300,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.5)",
    config: { tension: 150, friction: 15 },
  });

  const words = ["Take", "what", "you", "need"];

  const h3Animations = useSprings(
    words.length,
    words.map((_, index) => ({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(20px)",
      config: { tension: 100, friction: 30 },
      delay: index * 300,
    }))
  );

  const paragraphAnimationLeft = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
    delay: 300,
  });

  const listAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(120px)",
    config: { tension: 50, friction: 20 },
    delay: 600,
  });

  const paperAnimation = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
    delay: 200,
  });

  const cartoonAnimation = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
    delay: 400,
  });

  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <div style={{ position: "relative" }}>
              {/* Note Image */}
              <animated.div style={{ ...imageAnimation }}>
                <Image
                  ref={ref}
                  src={note}
                  alt="note-list"
                  width={600}
                  height={400}
                  className="note-img"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  priority
                />
              </animated.div>

              <Row className="row-services-notes">
                <Col>
                  {/* Title + Paragraph */}
                  <div
                    style={{
                      width: "34%",
                      position: "absolute",
                      bottom: "30%",
                      left: "13%",
                    }}
                    className="div-notes-left"
                  >
                    <h3
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        marginBottom: "10%",
                      }}
                      className="h3-notes"
                    >
                      {words.map((word, index) => (
                        <animated.span key={index} style={h3Animations[index]}>
                          {word}{" "}
                        </animated.span>
                      ))}
                    </h3>
                    <animated.p
                      style={{
                        fontSize: "14px",
                        letterSpacing: "1px",
                        ...paragraphAnimationLeft,
                      }}
                      className="para-notes"
                    >
                      We offer a wide range of creative services to help
                      businesses of all sizes to achieve their goal.
                    </animated.p>
                  </div>

                  {/* Paper Image */}
                  <animated.div style={{ ...paperAnimation }}>
                    <Image
                      src={paper}
                      alt="one-paper"
                      width={200}
                      height={200}
                      className="one-paper"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </animated.div>

                  {/* Cartoon Image */}
                  <animated.div
                    style={{
                      position: "absolute",
                      bottom: "-5%",
                      left: "100%",
                      zIndex: "-1",
                      ...cartoonAnimation,
                    }}
                  >
                    <Image
                      src={cartoon}
                      alt="cartoon"
                      width={200}
                      height={200}
                      className="cartoon"
                      style={{ width: "20%", height: "auto", objectFit: "cover" }}
                    />
                  </animated.div>
                </Col>

                {/* Services List */}
                {services.map((service, idx) => (
                  <animated.p
                    key={idx}
                    className={`service-text ${
                      idx === 0
                        ? "mobile-service"
                        : idx === 1
                        ? "webdev-service"
                        : idx === 2
                        ? "corpvdo-service"
                        : idx === 3
                        ? "digitalmarketing-service"
                        : idx === 4
                        ? "graphic-service"
                        : idx === 5
                        ? "twodanimation-service"
                        : "b2bmarketing-service"
                    }`}
                    style={{
                      ...listAnimation,
                      ...(idx === 6
                        ? { position: "absolute", top: "88%", left: "60%" }
                        : {}),
                    }}
                  >
                    {service}
                  </animated.p>
                ))}
              </Row>
            </div>
          </Col>

          {/* Right Paragraphs */}
          <Col sm={6} ref={paragraphRef}>
            <animated.p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                letterSpacing: "1px",
                fontWeight: "300",
                padding: "10px 20px",
                ...paragraphAnimation,
              }}
              className="para-services"
            >
              At Nakshatra Namaha Creations, we specialize in helping brands
              reach new heights with cutting-edge digital solutions. Whether
              you’re looking to build a strong online presence, engage your
              audience, or drive business growth, our team of experts is here to
              create tailored strategies that align with your vision. From web
              development and app design to digital marketing and branding, we
              offer a comprehensive range of services to amplify your brand and
              connect with your customers effectively.
            </animated.p>
            <animated.p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                letterSpacing: "1px",
                fontWeight: "300",
                padding: "10px 20px",
                ...paragraphAnimation,
              }}
              className="para-services"
            >
              Trust Nakshatra Namaha Creations to deliver impactful,
              results-driven digital solutions for your business. Web
              Development company in Bangalore.
            </animated.p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
