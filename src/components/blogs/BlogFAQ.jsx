'use client';  // Ensure this is a client-side component

import { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image';  // Import Next.js Image component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";
const faqs = '/media/NNCWebsite_V3_FAQ.png'; // Path to image in public directory

export default function BlogFAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [inView, setInView] = useState(false);
  const faqSectionRef = useRef(null);

  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // Animation for the left column (heading and image)
  const leftColumnAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    config: { tension: 180, friction: 25 },
  });

  // Intersection Observer for detecting when the FAQ section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (faqSectionRef.current) {
      observer.observe(faqSectionRef.current);
    }

    return () => {
      if (faqSectionRef.current) {
        observer.unobserve(faqSectionRef.current);
      }
    };
  }, []);

  return (
    <div style={{ marginTop: "5%", marginBottom: "5%" }} ref={faqSectionRef}>
      <Container>
        <Row>
          {/* Left Column with FAQ Heading and Image */}
          <Col sm={4}>
            <animated.h4
              style={{
                ...leftColumnAnimation,
                lineHeight: "1.5",
                fontWeight: "bolder",
                letterSpacing: "2px",
                fontSize: "30px",
              }}
              className="h1-FAQs"
            >
              FREQUENTLY ASKED QUESTION&apos;S
            </animated.h4>
            <animated.div
              style={{
                ...leftColumnAnimation,
                maxWidth: "45%",
                marginLeft: "50px",
                height: "auto",
              }}
            >
              <Image
                src={faqs}
                alt="faq-icon"
                className="img-fluid img-FAQs"
                width={400} // Set appropriate width
                height={300} // Set appropriate height
              />
            </animated.div>
          </Col>

          {/* Right Column with FAQ List */}
          <Col sm={8}>
            {faqData.map((faq, index) => {
              const animationProps = useSpring({
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? "auto" : "0px",
                config: { tension: 180, friction: 25 },
              });

              return (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid #000",
                    paddingBottom: "10px",
                    marginBottom: "10px",
                  }}
                  className="div-bottom-faqs"
                >
                  <Row style={{ padding: "10px 0" }} className="row-faqs">
                    <Col sm={10}>
                      <p
                        style={{
                          letterSpacing: "1px",
                          fontWeight: "600",
                          lineHeight: "1.5",
                          fontSize: "16px",
                        }}
                        className="para-faqs"
                      >
                        {faq.question}
                      </p>
                    </Col>
                    <Col
                      sm={2}
                      onClick={() => toggleContent(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        style={{ color: "#000000", marginLeft: "50%" }}
                        className="plus-icon"
                      />
                    </Col>
                  </Row>

                  {/* Show content with dropdown effect if the current item is active */}
                  {activeIndex === index && (
                    <animated.div style={animationProps}>
                      <Row>
                        <Col sm={12}>
                          <p
                            style={{
                              paddingTop: "10px",
                              letterSpacing: "1px",
                              lineHeight: "1.5",
                              fontSize: "14px",
                            }}
                            className="answer-faq"
                          >
                            {faq.answer}
                          </p>
                        </Col>
                      </Row>
                    </animated.div>
                  )}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
