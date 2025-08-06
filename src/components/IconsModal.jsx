
"use client";

import { useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import IconsButton from "./IconsButton";

const smile = "/media/NNCWebsite_V3_CustomersSmilling.webp";
const briefcase = "/media/NNCWebsite_V3_Work.webp";
const folder = "/media/NNCWebsite_V3_ProjectsDone.webp";
const person = "/media/gif/talk.gif";

export default function IconsModal() {
  const [showPopup, setShowPopup] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const items = [
    { image: briefcase, heading: "8+", text: "Years in Work" },
    { image: folder, heading: "500+", text: "Project done" },
    { image: smile, heading: "500", text: "Happy Clients" },
  ];

  const trail = useTrail(items.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(1.2)",
    from: { opacity: 0, transform: "scale(1.2)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <Container ref={ref} className="text-center py-5">
      {/* Top icons */}
      <Row className="justify-content-center">
        {trail.map((animation, index) => (
          <Col xs={4} md={3} key={index} className="mb-4">
            <animated.div style={animation}>
              <Image
                src={items[index].image}
                alt={items[index].text}
                width={70}
                height={70}
              />
              <h2 className="fw-bold mt-2" style={{ fontSize: "40px" }}>
                {items[index].heading}
              </h2>
              <p className="text-muted">{items[index].text}</p>
            </animated.div>
          </Col>
        ))}
        <Col md={3}>
          <h2
            className="fw-bold"
            style={{ fontWeight: 600, fontSize: "52px", lineHeight: "1.5" }}
          >
            Got <br /> a <br /> Project?
          </h2>
        </Col>
      </Row>

      {/* Got a Project */}

      {/* Footer Image */}
      <Row className="mt-3 justify-content-center">
            <Col xs={12}  className="text-center">
              <Image
                src={person}
                alt="person"
                fluid
                className="cursor-pointer"
                onClick={() => setShowPopup(true)}
              />
            </Col>
          </Row>

      {/* Modal */}
      <IconsButton showPopup={showPopup} setShowPopup={setShowPopup} />
    </Container>
  );
}
