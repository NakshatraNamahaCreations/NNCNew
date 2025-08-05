
// "use client";

// import { useSpring, animated } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";
// import { Container, Form, FloatingLabel, InputGroup } from "react-bootstrap";
// import Image from "next/image";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function BlogSearch() {
//   // Scroll animation for the image
//   const [refImg, inViewImg] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const imgSpring = useSpring({
//     transform: inViewImg ? "scale(1)" : "scale(0.5)",
//     opacity: inViewImg ? 1 : 0,
//     config: { tension: 120, friction: 14 },
//   });

//   // Scroll animation for the search input
//   const [refInput, inViewInput] = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });
//   const inputSpring = useSpring({
//     transform: inViewInput ? "scale(1)" : "scale(0.5)",
//     opacity: inViewInput ? 1 : 0,
//     config: { tension: 120, friction: 14 },
//   });

//   return (
//     <div style={{ marginTop: "5%", marginBottom: "2%" }}>
//       {/* Image is now using Next.js Image component */}
//       <animated.div ref={refImg} style={imgSpring}>
//         <Image
//           src="/media/blogs/blogbanner.webp"
//           alt="careers-icon"
//           width={500}
//           height={300}
//           objectFit="cover"
//         />
//       </animated.div>
//       <Container>
//         <FloatingLabel
//           controlId="floatingSearch"
//           className="mb-3"
//           style={{ marginTop: "-1%" }}
//         >
//           <InputGroup as={animated.div} ref={refInput} style={inputSpring}>
//             <Form.Control
//               type="text"
//               placeholder="Come and explore our jobs"
//               className="rounded-pill border border-dark input-work"
//               style={{ padding: "20px", margin: "0 10%" }}
//             />
//             <InputGroup.Text
//               className="rounded-pill search-icon"
//               style={{
//                 background: "transparent",
//                 border: "none",
//                 position: "absolute",
//                 right: "12%",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//               }}
//             >
//               <FontAwesomeIcon
//                 icon={faMagnifyingGlass}
//                 style={{ color: "#000000", width: "30px", height: "30px" }}
//                 className="search-icon-size"
//               />
//             </InputGroup.Text>
//           </InputGroup>
//         </FloatingLabel>
//       </Container>
//     </div>
//   );
// }


"use client";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Container, Form, FloatingLabel, InputGroup, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogSearch() {
  const [refImg, inViewImg] = useInView({ triggerOnce: true, threshold: 0.2 });
  const imgSpring = useSpring({
    transform: inViewImg ? "scale(1)" : "scale(0.5)",
    opacity: inViewImg ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  const [refInput, inViewInput] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const inputSpring = useSpring({
    transform: inViewInput ? "scale(1)" : "scale(0.5)",
    opacity: inViewInput ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} lg={6}>
            <animated.div ref={refImg} style={imgSpring}>
              <div style={{ }}>
                <Image
                  // src="/media/blogs/blogbanner.webp"
                  src="/media/gif/blogImg.gif"
                  alt="careers-icon"
                  width={400}
                  height={400}
                  style={{
                
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </animated.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} >
            <FloatingLabel controlId="floatingSearch" className="mb-3">
              <animated.div ref={refInput} style={inputSpring}>
                <InputGroup className="position-relative">
                  <Form.Control
                    type="text"
                    placeholder="Come and explore our jobs"
                    className="rounded-pill border-dark input-work"
                    style={{
                      padding: "15px 55px 15px 20px",
                      fontSize: "1rem",
                    }}
                  />
                  <InputGroup.Text
                    className="rounded-pill search-icon"
                    style={{
                      background: "transparent",
                      border: "none",
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "#000000", width: "24px", height: "24px" }}
                    />
                  </InputGroup.Text>
                </InputGroup>
              </animated.div>
            </FloatingLabel>
          </Col>
        </Row>
      </Container>

      {/* Responsive tweaks */}
      <style jsx>{`
        @media (max-width: 576px) {
          .input-work {
            font-size: 0.9rem;
            padding: 14px 50px 14px 16px !important;
          }

          .search-icon > :global(svg) {
            width: 20px !important;
            height: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
