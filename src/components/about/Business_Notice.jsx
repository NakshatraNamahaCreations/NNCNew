// import { useInView } from "react-intersection-observer";
// import { useSpring, animated } from "@react-spring/web";
// import { useRef, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import ContactModal from "./ContactModal";

// const difference = "/media/NNCWebsite_AboutUsPage_Difference.png";
// const glass = "/media/NNCWebsite_AboutUsPage_BusinessNotice.webp";

// export default function Business_Notice() {
//   const [showPopup, setShowPopup] = useState(false);

//   // For the first block (WE MAKE)
//   const { ref: block1Ref, inView: block1InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const block1Animation = useSpring({
//     opacity: block1InView ? 1 : 0,
//     // transform: block1InView ? "translateY(0)" : "translateY(50px)",
//     config: { tension: 120, friction: 14 },
//   });

//   // For the second block (YOUR BUSINESS NOTICE)
//   const { ref: block2Ref, inView: block2InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const block2Animation = useSpring({
//     opacity: block2InView ? 1 : 0,
//     // transform: block2InView ? "translateY(0)" : "translateY(50px)",
//     delay: 300,
//     config: { tension: 120, friction: 14 },
//   });

//   const shakeAnimation = useSpring({
//     loop: { reverse: true },
//     // from: { transform: "translateX(0px)" },
//     // to: { transform: "translateX(10px)" },
//     config: { tension: 300, friction: 10, duration: 500 },
//   });

//   // Observe when the button enters the viewport
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0,
//   });

//   // Initial animation when the button enters the screen
//   const buttonAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "scale(1)" : "scale(0.8)",
//     from: { opacity: 0, transform: "scale(0.8)" },
//     config: { tension: 180, friction: 12 },
//   });

//   // Hover effect animation
//   const [hovered, setHovered] = useState(false);
//   const hoverAnimation = useSpring({
//     backgroundColor: hovered ? "white" : "transparent",
//     color: hovered ? "black" : "white",
//     borderRadius: hovered ? "50px" : "50px",
//     boxShadow: hovered
//       ? "6px 6px 15px rgba(0, 0, 0, 0.3)"
//       : "4px 4px 10px rgba(0, 0, 0, 0.2)",
//     transform: hovered ? "scale(1.1)" : "scale(1)",
//     config: { tension: 150, friction: 10 },
//   });

//   return (
//     <>
//       {/* First Section */}
//       <animated.div
//         ref={block1Ref}
//         style={{
//           ...block1Animation,
//           backgroundColor: "#004960",
//           padding: "35px 75px",
//           color: "white",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//           height: "67%",
//           paddingBottom:"12%"
//         }}
//          className="bg-business-notice"
//       >
//         <h2
//           style={{
//             margin: 0,
//             fontSize: "80px",
//             lineHeight: "1.5",
//             letterSpacing: "2px",
//             marginBottom: "3%",
//           }}
//           className="heading-business"
//         >
//           WE <br /> MAKE
//         </h2>
//         <h4
//           style={{
//             margin: 0,
//             fontSize: "52px",
//             fontWeight: "400",
//             width: "30%",
//             letterSpacing: "1px",
//             lineHeight: "1.3",
//             marginTop: "15%",
//           }}
//            className="h4-business"
//         >
//           Together we can make a
//         </h4>
//       </animated.div>

//       {/* Second Section */}
//       <animated.div
//         ref={block2Ref}
//         style={{
//           ...block2Animation,
//           backgroundColor: "#002A3A",
//           padding: "35px 75px",
//           color: "white",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//           position: "relative",
//         }}
//           className="bg-business-notice"
//       >
//         {/* Glass image */}
// <img
//   src={glass}
//   alt="glass"
//   style={{
//     position: "absolute",
//     top: "-72px",
//     width: "25%",
//     height: "auto",
//   }}
//   className="glass-icon"
// />

//         {/* Main Heading */}
//         <h2
//           style={{
//             margin: 0,
//             fontSize: "80px",
//             marginTop: "7%",
//             lineHeight: "1.5",
//             letterSpacing: "2px",
//           }}
//             className="heading-business1"
//         >
//           YOUR BUSINESS <br /> NOTICE
//         </h2>

//         {/* Sub-heading */}
//         <h4
//           style={{
//             margin: 0,
//             fontSize: "52px",
//             width: "30%",
//             letterSpacing: "2px",
//             lineHeight: "1.5",
//             fontWeight: "bold",
//             position: "relative",
//             marginTop: "-16%",
//           }}
//           className="h4-business1"
//         >
//           difference
//         </h4>

//         {/* Difference image */}
//         <animated.img
//           src={difference}
//           alt="difference"
//           style={{
//             ...shakeAnimation,
//             width: "35%",
//             height: "auto",
//             position: "absolute",
//             right: "60px",
//             top: "15%",
//           }}
//              className="image-business"
//         />

//         {/* Button */}
//         <div style={{ position: "absolute", right: "60px", bottom: "60px" }} className="button-business-btn">
//           <animated.div ref={ref} style={buttonAnimation}>
//             <animated.div
//               style={hoverAnimation}
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//               onClick={() => setShowPopup(true)}
//             >
//               <Button
//                 variant="outline-light"
//                 style={{
//                   borderRadius: "50px",
//                   width: "300px",
//                   transition: "all 0.3s ease-in-out",
//                   fontSize: "35px",
//                   border: "2px solid white",
//                   gap: "10px",
//                   letterSpacing: '1px',
//                   boxShadow: "2px 2px 1px 0px rgb(255, 255, 255)",
//                 }}
//                  className="button-business"
//               >
//                 Let&apos;s talk{" "}
//                 <FontAwesomeIcon
//                   icon={faArrowRightLong}
//                 />
//               </Button>
//             </animated.div>
//           </animated.div>
//         </div>

//         {showPopup && <ContactModal showPopup={showPopup} setShowPopup={setShowPopup} />}
//       </animated.div>
//     </>
//   );
// }

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { Container } from "react-bootstrap";

const difference = "/media/NNCWebsite_AboutUsPage_Difference.png";
const glass = "/media/NNCWebsite_AboutUsPage_BusinessNotice.webp";

export default function Business_Notice() {
  const [showPopup, setShowPopup] = useState(false);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  // For the first block (WE MAKE)
  const { ref: block1Ref, inView: block1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const block1Animation = useSpring({
    opacity: block1InView ? 1 : 0,
    // transform: block1InView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 120, friction: 14 },
  });

  // For the second block (YOUR BUSINESS NOTICE)
  const { ref: block2Ref, inView: block2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const block2Animation = useSpring({
    opacity: block2InView ? 1 : 0,
    // transform: block2InView ? "translateY(0)" : "translateY(50px)",
    delay: 300,
    config: { tension: 120, friction: 14 },
  });

  const shakeAnimation = useSpring({
    loop: { reverse: true },
    // from: { transform: "translateX(0px)" },
    // to: { transform: "translateX(10px)" },
    config: { tension: 300, friction: 10, duration: 500 },
  });

  // Observe when the button enters the viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = [leftEyeRef.current, rightEyeRef.current];
      eyes.forEach((eye) => {
        if (!eye) return;
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const x = Math.cos(angle) * 6; // control movement range
        const y = Math.sin(angle) * 6;
        eye.style.transform = `translate(${x}px, ${y}px)`; // Corrected here
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initial animation when the button enters the screen
  const buttonAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    from: { opacity: 0, transform: "scale(0.8)" },
    config: { tension: 180, friction: 12 },
  });

  // Hover effect animation
  const [hovered, setHovered] = useState(false);
  const hoverAnimation = useSpring({
    backgroundColor: hovered ? "white" : "transparent",
    color: hovered ? "black" : "white",
    borderRadius: hovered ? "50px" : "50px",
    boxShadow: hovered
      ? "6px 6px 15px rgba(0, 0, 0, 0.3)"
      : "4px 4px 10px rgba(0, 0, 0, 0.2)",
    transform: hovered ? "scale(1.1)" : "scale(1)",
    config: { tension: 150, friction: 10 },
  });

  return (
    <div style={{ backgroundColor: "#004960" }}>
      <div style={{ width: "100%", maxWidth: "1400px", margin: "auto" }}>
        {/* First Section */}
        <animated.div
          ref={block1Ref}
          style={{
            ...block1Animation,
            backgroundColor: "#004960",
            padding: "35px 75px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "67%",
            paddingBottom: "12%",
          }}
          className="bg-business-notice"
        >
          <h2
            style={{
              margin: 0,
              fontSize: "80px",
              lineHeight: "1.5",
              letterSpacing: "2px",
              marginBottom: "3%",
            }}
            className="heading-business"
          >
            WE <br /> MAKE
          </h2>
          <h4
            style={{
              margin: 0,
              fontSize: "52px",
              fontWeight: "400",
              width: "30%",
              letterSpacing: "1px",
              lineHeight: "1.3",
              marginTop: "15%",
            }}
            className="h4-business"
          >
            Together we can make a
          </h4>
        </animated.div>

        {/* Second Section */}
        <animated.div
          ref={block2Ref}
          style={{
            ...block2Animation,
            backgroundColor: "#002A3A",
            padding: "35px 75px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
          className="bg-business-notice"
        >
          {/* Glasses container */}
          <div
            style={{
              position: "absolute",
              top: "-72px",
              left: "75px",
              width: "300px",
              height: "100px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="eyes"
          >
            {/* Left Eye Lens */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "-10px",
                zIndex: 2,
              }}
              className="lens-left"
            >
              {/* <div
                ref={leftEyeRef}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#002B3A",
                }}
                className="eye-left"
              ></div> */}

                 <img
                ref={leftEyeRef}
                src="media/gif/eye.png"
                style={{
                  width: "30px",
                  height: "auto",
                  // borderRadius: "50%",
                  // backgroundColor: "#002B3A",
                }}
              />
            </div>

            {/* Middle Bridge */}
            {/* <div
              style={{
                position: "absolute",
                top: "35px", 
                left: "50px",
                width: "180px", // Width of the bridge
                height: "15px", // Height of the bridge
                backgroundColor: "#fff", // Color of the bridge (same as the lens color)
                borderRadius: "50%", // To make it rounded, adjust the curvature
                transform: "rotate(180deg)", // Slight rotation for a curved look
                zIndex: 1, // Ensure it's in front of the lenses
              }}
              className="middle-bridge"
            ></div> */}
            {/* Middle Bridge */}
            <div
              style={{
                position: "absolute",
                top: "35px",
                left: "50px",
                width: "180px",
                height: "20px", // match image height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="middle-bridge-box"
            >
              <img
                src="/media/gif/curve.png"
                alt="curve"
                style={{
                  width: "180px",
                  height: "200px",
                  transform: "rotate(-5deg)",
                }}
                className="middle-bridge"
              />
            </div>

            {/* Right Eye Lens */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "50px",
                zIndex: 2,
              }}
              className="lens-right"
            >
              {/* <div
                ref={rightEyeRef}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#002B3A",
                }}
                className="eye-right"
              ></div> */}

              <img
                ref={rightEyeRef}
                src="media/gif/eye.png"
                style={{
                  width: "30px",
                           height: "auto",
                  // borderRadius: "50%",
                  // backgroundColor: "#002B3A",
                }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <h2
            style={{
              margin: 0,
              fontSize: "80px",
              marginTop: "7%",
              lineHeight: "1.5",
              letterSpacing: "2px",
            }}
            className="heading-business1"
          >
            YOUR BUSINESS <br /> NOTICE
          </h2>

          {/* Sub-heading */}
          <h4
            style={{
              margin: 0,
              fontSize: "52px",
              width: "30%",
              letterSpacing: "2px",
              lineHeight: "1.5",
              fontWeight: "bold",
              position: "relative",
              marginTop: "-16%",
            }}
            className="h4-business1"
          >
            difference
          </h4>

          {/* Difference image */}
          <animated.img
            src={difference}
            alt="difference"
            style={{
              ...shakeAnimation,
              width: "35%",
              height: "auto",
              position: "absolute",
              right: "60px",
              top: "15%",
            }}
            className="image-business"
          />

          {/* Button */}
          <div
            style={{ position: "absolute", right: "60px", bottom: "60px" }}
            className="button-business-btn"
          >
            <animated.div ref={ref} style={buttonAnimation}>
              <animated.div
                style={hoverAnimation}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setShowPopup(true)}
              >
                <Button
                  variant="outline-light"
                  style={{
                    borderRadius: "50px",
                    width: "300px",
                    transition: "all 0.3s ease-in-out",
                    fontSize: "35px",
                    border: "2px solid white",
                    gap: "10px",
                    letterSpacing: "1px",
                    boxShadow: "2px 2px 1px 0px rgb(255, 255, 255)",
                  }}
                  className="button-business"
                >
                  Let&apos;s talk <FontAwesomeIcon icon={faArrowRightLong} />
                </Button>
              </animated.div>
            </animated.div>
          </div>

          {showPopup && (
            <ContactModal showPopup={showPopup} setShowPopup={setShowPopup} />
          )}
        </animated.div>
      </div>
    </div>
  );
}
