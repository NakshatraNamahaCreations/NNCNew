"use client";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const tourch = "/media/NNCWebsite_AboutUsPage_BrandStandout.webp";
const tourch = "/media/gif/torch.gif";
const lock = "/media/NNCWebsite_AboutUsPage_UnlockBusiness.webp";
const line = "/media/NNCWebsite_AboutUsPage_Whychooseus.png";
const stroke_line = "/media/NNCWebsite_AboutUsPage_Whychooseus_Stroke.png";

export default function Choose_Us() {
  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: imageRef, inView: imageInView } = useInView();
  const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: paragraphRef1, inView: paragraphInView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: rowRef, inView: rowInView } = useInView();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const headingAnimation = useSpring({
    transform: headingInView ? "scale(1)" : "scale(0.8)",
    opacity: headingInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const shakeAnimation = useSpring({
    transform: imageInView ? "translateX(0)" : "translateX(-10px)",
    config: { tension: 180, friction: 10 },
    reset: true,
    reverse: imageInView,
  });

  const paragraphAnimation = useSpring({
    opacity: paragraphInView ? 1 : 0,
    transform: paragraphInView ? "translateY(0)" : "translateY(-30px)",
    delay: 200,
    config: { tension: 50, friction: 25 },
  });

  const paragraphAnimation1 = useSpring({
    opacity: paragraphInView1 ? 1 : 0,
    transform: paragraphInView1 ? "translateY(0)" : "translateY(-30px)",
    delay: 300,
    config: { tension: 50, friction: 25 },
  });

  const col1Animation = useSpring({
    opacity: rowInView ? 1 : 0,
    transform: rowInView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });

  const col2Animation = useSpring({
    opacity: rowInView ? 1 : 0,
    transform: rowInView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });

  const dropAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(-100px)",
    config: { tension: 180, friction: 20 },
  });

  // Number circles data
  const circles = [
    { top: "9%", left: "50%", num: 1 },
    { top: "29%", left: "50%", num: 2 },
    { top: "64%", left: "1%", num: 3 },
    { top: "78%", left: "1%", num: 4 },
  ];

  return (
    <div style={{ marginTop: "12%", textAlign: "center", position: "relative" }} >
      {/* Heading */}
      <animated.h2
        ref={headingRef}
        style={{ ...headingAnimation, lineHeight: "2.0", fontWeight: "900", letterSpacing: "2px", fontSize: "40px" }}
      >
        Why choose us?
      </animated.h2>

      {/* Shake animated line */}
      <animated.div style={{ ...shakeAnimation, width: "18%", margin: "0 auto", marginTop: "-1%" }}>
        <img src={line} alt="line" style={{ width: "100%", height: "auto" }} ref={imageRef} />
      </animated.div>

      <Container>
        <animated.p
          ref={paragraphRef}
          style={{
            ...paragraphAnimation,
            lineHeight: "1.7",
            letterSpacing: "1px",
            fontWeight: "500",
            fontSize: "16px",
            margin: "2% 2%",
          }}
        >
          At Nakshatra Namaha Creations, we focus on delivering meaningful and impactful work
          that truly connects with people. Our dedication to quality, creativity and customer
          satisfaction makes us a trusted choice.
        </animated.p>

        <animated.div ref={paragraphRef1} style={{ ...paragraphAnimation1 }} >
          {/* First Row */}
          <animated.div ref={rowRef}>
            <Row>
              <Col sm={4} style={{ position: "relative", height: "283px", ...col1Animation }}>
                <div
                  style={{
                    textAlign: "left",
                    width: "70%",
                    position: "absolute",
                    right: "0%",
                    top: "25%",
                    zIndex: 2,
                    padding: "20px",
                  }}
                >
                  <h4 style={{ fontSize: "25px", lineHeight: "1.5", fontWeight: 400 }}>
                    We know what it takes to make your
                  </h4>
                  <h4 style={{ color: "#FFA900", fontSize: "25px", fontWeight: "bold", letterSpacing: "2px" }}>
                    BRAND STANDOUT
                  </h4>
                </div>

                {/* Torch Image */}
                <animated.div
                  style={{
                    position: "relative",
                    top: "70px",
                    left: "40px",
                    width: "auto",
                    height: "120%",
                    ...col1Animation,
                  }}
                >
                  <img src={tourch} alt="tourch" style={{ width: "auto", height: "120%" }} />
                </animated.div>
              </Col>

              <Col sm={8}>
                <animated.div
                  style={{
                    ...col2Animation,
                    width: "70%",
                    padding: "15px",
                    margin: "10% 27%",
                    textAlign: "left",
                  }}
                >
                  <p style={{ fontWeight: "bold", margin: "0% 5%", fontSize: "16px" }}>
                    Absolutely catered to the whims of the customer
                  </p>
                  <p style={{ lineHeight: "1.7", margin: "2% 5% 10% 5%", fontSize: "16px" }}>
                    We listen, appreciate and work with you until your idea becomes real. Your satisfaction
                    remains our goal and we ensure that every nuance aligns with what you, our client, desire.
                  </p>
                  <p style={{ fontWeight: "bold", margin: "0% 5%", fontSize: "16px" }}>Attention to Detail</p>
                  <p style={{ lineHeight: "1.7", margin: "2% 5% 10% 5%", fontSize: "16px" }}>
                    We guarantee all the finer details through to the finished product are pursued until perfection.
                    Quality matters to us and we are not afraid to spend the time to get it right.
                  </p>
                </animated.div>
              </Col>
            </Row>
          </animated.div>

          {/* Stroke line */}
          <div ref={ref}>
            <animated.div style={{ ...dropAnimation, position: "absolute", top: "10%", left: "2%", width: "50%" }}>
              <img src={stroke_line} alt="stroke line" style={{ width: "100%", height: "auto" }} />
            </animated.div>
          </div>

          {/* Number Circles */}
          {circles.map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: c.top,
                left: c.left,
                width: "30px",
                height: "30px",
              }}
            >
              <FontAwesomeIcon icon={faCircle} size="lg" style={{ color: "#000", width: "100%", height: "100%" }} />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {c.num}
              </span>
            </div>
          ))}

          {/* Second Row */}
          <Row style={{ marginTop: "-5%" }}>
            <Col sm={8}>
              <div style={{ ...col2Animation, width: "70%", margin: "10% 5%", textAlign: "left" }}>
                <p style={{ fontWeight: "bold", margin: "0% 5%", fontSize: "16px" }}>
                  Keeping Up With Trends and Needs
                </p>
                <p style={{ lineHeight: "1.7", margin: "2% 5% 10% 5%", fontSize: "16px" }}>
                  We are adaptable and always keep track of trends and tastes in the market to ensure our work remains topical.
                </p>
                <p style={{ fontWeight: "bold", margin: "0% 5%", fontSize: "16px" }}>Timely Delivery</p>
                <p style={{ lineHeight: "1.7", margin: "2% 5% 0% 5%", fontSize: "16px" }}>
                  We respect deadlines and ensure promised project completion. Results are delivered with no delay to speak of.
                </p>
              </div>
            </Col>
            <Col
              sm={4}
              style={{
                ...col1Animation,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "absolute",
                left: "50%",
                width: "50%",
              }}
            >
              <div style={{ textAlign: "left", width: "40%" }}>
                <h4 style={{ fontSize: "30px", marginBottom: "20px", fontWeight: "400" }}>
                  We help our clients to <br /> unlock the business <br /> needs
                </h4>
              </div>

              {/* Lock image */}
              <div style={{ position: "relative", width: "55%", height: "auto" }}>
                <img src={lock} alt="lock" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
              </div>
            </Col>
          </Row>
        </animated.div>
      </Container>
    </div>
  );
}
