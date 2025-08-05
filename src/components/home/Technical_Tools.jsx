"use client";

import { useSpring, animated } from "@react-spring/web";
import { InView } from "react-intersection-observer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function Technical_Tools() {
  const rightColumnAnimation = useSpring({
    transform: "translateX(0)",
    opacity: 1,
    from: { transform: "translateX(100%)", opacity: 0 },
    config: { tension: 50, friction: 40 },
    delay: 800,
  });

  return (
    <Row className="align-items-center" style={{ paddingBlock: "4%" }}>
      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref }) => (
          <Col
            sm={6}
            ref={ref}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingLeft: "20px",
              flexDirection: "column",
              alignItems: "flex-start",
              color: "black",
            }}
          >
            <animated.h2
              style={{
                lineHeight: "1.5",
                letterSpacing: "1.7px",
                fontSize: "40px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : `translateX(-50%)`,
                transition: `opacity 1.2s ease-in-out, transform 1.2s ease-in-out`,
                animationDelay: `${0.5}s`,
                fontWeight: "900",
              }}
              className="h1-technical-tools"
            >
              Website Developers in Bangalore
            </animated.h2>

            <animated.p
              style={{
                lineHeight: "1.5",
                letterSpacing: "1.7px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : `translateX(-50%)`,
                transition: `opacity 1.2s ease-in-out, transform 1.2s ease-in-out`,
                animationDelay: `${0.5}s`,
              }}
              className="h2-technical-tools"
            >
              With 8+ years of experience and over 565+ Projects delivered, Nakshatra Namaha Creations has become a reputable name as a best website development company in Bangalore. Our focus has always been on creating fast, responsive and user friendly websites. We work closely with our clients to learn their vision & goals and bring their ideas into usable and friendly website.
            </animated.p>
            <animated.p
              style={{
                lineHeight: "1.5",
                letterSpacing: "1.7px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : `translateX(-50%)`,
                transition: `opacity 1.2s ease-in-out, transform 1.2s ease-in-out`,
                animationDelay: `${0.5}s`,
              }}
              className="h2-technical-tools"
            >
              Our strength is in providing custom web development designed to meet the specific requirements of your business. We write every line in the web development life cycle consciously from beginning to end. Whether it is a corporate website, a place to showcase an e-commerce business or a Portfolio place we ensure that the project brings out your character as a business while doing the task of performance and stability.
            </animated.p>
          </Col>
        )}
      </InView>

      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref }) => (
          <Col sm={6} className="d-flex justify-content-center" ref={ref}>
            <animated.div
              style={{
                transform: inView ? "scale(0.8)" : "scale(0)",
                opacity: inView ? 1 : 0,
                transition:
                  "transform 1.5s ease-in-out, opacity 1.5s ease-in-out",
              }}
            >
              <Image
                src="/media/NNCWebsite_V3_BuildWebsites-removebg-preview.webp"
                alt="Tools"
                className="handIcons"
                width={500}
                height={400}
              />
            </animated.div>
          </Col>
        )}
      </InView>
    </Row>
  );
}
