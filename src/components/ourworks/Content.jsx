"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function Content() {
  // Left Image Animation
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const leftSpring = useSpring({
    transform: inViewLeft
      ? "translateX(0px) scale(1)"
      : "translateX(-0px) scale(0.8)",
    opacity: inViewLeft ? 1 : 0,
    config: { tension: 100, friction: 12 },
  });

  // Right Image Animation
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const rightSpring = useSpring({
    transform: inViewRight
      ? "translateX(0px) scale(1)"
      : "translateX(100px) scale(0.8)",
    opacity: inViewRight ? 1 : 0,
    config: { tension: 100, friction: 12 },
  });

  // Text Animation
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const textSpring = useSpring({
    transform: inViewText ? "scale(1)" : "scale(0.5)",
    opacity: inViewText ? 1 : 0,
    config: { tension: 80, friction: 14 },
  });

  return (
    <div style={{ marginBlock: "10%" }}>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Image Animation */}
        <animated.div
          ref={refLeft}
          style={{  maxWidth: "20%", ...leftSpring }}
          // className="content-div"
        >
          <Image
            src="/media/gif/Character1.gif"
            alt="left-cartoon"
            width={300}
            height={300}
            layout="responsive"
            // className="img-leftcartoon"
            // style={{ width: "100%", height: "auto" }}
          />
        </animated.div>

        {/* Text Content Animation */}
        <animated.h3
          ref={refText}
          style={{
            fontWeight: "100",
            fontSize: "24px",
            lineHeight: "1.7",
            letterSpacing: "2px",
            textAlign: "center",
            flex: "2",
            borderBottom: "1px solid black",
            paddingBottom: "15px",
            ...textSpring,
          }}
          className="h3-work-flex-content"
        >
          Every project showcases our commitment <br />
          to creating distinctive <br />
          and meaningful outcomes
        </animated.h3>

        {/* Right Image Animation */}
        <animated.div
          ref={refRight}
          style={{  maxWidth: "20%",  }}
          className="content-div"
        >
          <Image
            src="/media/gif/Charecter2.gif"
            alt="right-cartoon"
            width={200}
            height={200}
            layout="responsive"
            // className="img-rightcartoon"
            // style={{ width: "100%", height: "auto" }}
          />
        </animated.div>
      </Container>
    </div>
  );
}
