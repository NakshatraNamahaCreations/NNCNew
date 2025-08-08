// "use client";

// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import { useSpring, animated, useTrail } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";

// const mail = "/media/NNCWebsite_Contact_V2_mailid.png";
// const phone = "/media/NNCWebsite_Contact_V2_phone.png";
// const mysore_map = "/media/NNCWebsite_Contact_V2_Mysurulocation.png";
// const location = "/media/NNCWebsite_Contact_V2_Visitus.png";

// export default function LocationAddress() {
//   // Ensuring the hooks are always called in the same order
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Use Intersection Observer to detect when elements are in view
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

//   // Define spring animations
//   const headingAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     from: { opacity: 0, transform: "translateY(-80px)" },
//     config: { mass: 1, tension: 80, friction: 30, duration: 1500 },
//   });

//   // Trail animations for individual characters
//   const text = "+91 9900566466";
//   const email = "info@nakshatranamahacreations.com";

//   const trail = useTrail(text.length, {
//     opacity: inView ? 1 : 0,
//     transform: inView ? "scale(1)" : "scale(0.6)",
//     from: { opacity: 0, transform: "scale(0.6)" },
//     config: { mass: 1, tension: 130, friction: 12 },
//     delay: 100,
//   });

//   const trailEmail = useTrail(email.length, {
//     opacity: inView ? 1 : 0,
//     transform: inView ? "scale(1)" : "scale(0.6)",
//     from: { opacity: 0, transform: "scale(0.6)" },
//     config: { mass: 1, tension: 130, friction: 12 },
//     delay: 150,
//   });

//   // Zoom effect for icons
//   const iconAnimation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "scale(1)" : "scale(0.6)",
//     from: { opacity: 0, transform: "scale(0.6)" },
//     config: { mass: 1, tension: 130, friction: 12 },
//     delay: 50,
//   });

//   const headingAnimation1 = useSpring({
//     opacity: inView ? 1 : 0,
//     config: { tension: 50, friction: 20 },
//   });

//   // Ensure rendering happens only after component is mounted
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <Container>
//       <div style={{ marginTop: "15%" }}>
//         <Row>
//           <Col
//             className="d-flex flex-column align-items-center"
//             style={{ position: "relative" }}
//           >
//             <Image
//               src={location}
//               alt="location-icon"
//               width={120}
//               height={120}
//               style={{
//                 height: "auto",
//                 objectFit: "cover",
//                 position: "absolute",
//                 left: "150px",
//                 bottom: "-50px",
//               }}
//             />
//             <div ref={ref}>
//               <animated.h2
//                 style={{
//                   ...headingAnimation,
//                   fontSize: "65px",
//                   fontWeight: "900",
//                   letterSpacing: "2px",
//                   marginBottom: "1%",
//                   textAlign: "center",
//                 }}
//               >
//                 Come visit us
//               </animated.h2>
//               <animated.h4
//                 style={{
//                   fontSize: "35px",
//                   fontWeight: "900",
//                   lineHeight: 1.5,
//                   letterSpacing: "2px",
//                   textAlign: "center",
//                   color: "#26A7DC",
//                   ...headingAnimation1,
//                 }}
//               >
//                 Nakshatra Namaha Creations
//               </animated.h4>
//             </div>
//           </Col>
//         </Row>

//         {/* Phone and Email */}
//         <Row>
//           <Col className="d-flex flex-column align-items-center mt-4" ref={ref}>
//             <div className="phone-mail d-flex align-items-center justify-content-between gap-2">
//               <h6
//                 style={{
//                   lineHeight: 1.5,
//                   letterSpacing: "2px",
//                   textAlign: "center",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <animated.div style={iconAnimation}>
//                   <Image
//                     src={phone}
//                     alt="phone-icon"
//                     width={20}
//                     height={20}
//                     style={{
//                       height: "auto",
//                       objectFit: "cover",
//                       margin: "0 2%",
//                     }}
//                   />
//                 </animated.div>
//                 {trail.map((props, index) => (
//                   <animated.span key={index} style={props}>
//                     {text[index]}
//                   </animated.span>
//                 ))}
//               </h6>

//               <h6
//                 style={{
//                   lineHeight: 1.5,
//                   letterSpacing: "2px",
//                   textAlign: "center",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <animated.div style={iconAnimation}>
//                   <Image
//                     src={mail}
//                     alt="mail-icon"
//                     width={20}
//                     height={20}
//                     style={{
//                       height: "auto",
//                       objectFit: "cover",
//                       margin: "0 2%",
//                     }}
//                   />
//                 </animated.div>
//                 {trailEmail.map((props, index) => (
//                   <animated.span key={index} style={props}>
//                     {email[index]}
//                   </animated.span>
//                 ))}
//               </h6>
//             </div>
//           </Col>
//         </Row>

//         {/* Locations and Maps */}
//         <div style={{ marginTop: "10%" }} ref={ref}>
//           <Row className="div-location-maps">
//             <Col sm={6}>
//               <animated.h4
//                 style={{
//                   lineHeight: 1.5,
//                   letterSpacing: "1px",
//                   fontSize: "28px",
//                   fontWeight: "900",
//                   ...headingAnimation1,
//                 }}
//               >
//                 Bengaluru- Corporate Office
//               </animated.h4>
//               <animated.p
//                 style={{
//                   fontSize: "20px",
//                   lineHeight: "1.7",
//                   letterSpacing: "1px",
//                   fontWeight: "500",
//                   padding: "20px 0",
//                   textAlign: "start",
//                   width: "90%",
//                 }}
//               >
//                 1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th
//                 Stage 1st Block, Channasandra, Bengaluru, Karnataka 560098
//               </animated.p>
//             </Col>
//             <Col sm={6}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18..."
//                 width="100%"
//                 height="300"
//                 style={{
//                   border: "1px solid black",
//                   boxShadow: "3px 3px 0px black",
//                   borderRadius: "10px",
//                 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </Col>
//           </Row>
//         </div>
//         {/* Mysore Office */}
//         <div style={{ marginTop: "10%", marginBottom: "10%" }}>
//           <Row className="div-location-maps position-location">
//             <Col sm={6} className="order-sm-1 order-2">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=..."
//                 width="100%"
//                 height="300"
//                 style={{
//                   border: "1px solid black",
//                   boxShadow: "3px 3px 0px black",
//                   borderRadius: "10px",
//                 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </Col>
//             <Col
//               sm={6}
//               className="position-location-address order-sm-2 order-1"
//             >
//               <animated.h4
//                 style={{
//                   lineHeight: 1.5,
//                   letterSpacing: "1px",
//                   fontSize: "28px",
//                   fontWeight: "900",
//                   ...headingAnimation1,
//                 }}
//               >
//                 Mysuru- Branch Office
//               </animated.h4>
//               <animated.p
//                 style={{
//                   fontSize: "20px",
//                   lineHeight: "1.7",
//                   letterSpacing: "1px",
//                   fontWeight: "500",
//                   padding: "20px 0",
//                   width: "90%",
//                 }}
//               >
//                 SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block, JP
//                 Nagar, Mysuru, Karnataka 570008
//               </animated.p>
//             </Col>
//           </Row>
//         </div>

//         <div style={{ marginBlock: "10%" }} ref={ref}>
//           <Row className="div-location-maps">
//             <Col sm={6}>
//               <animated.h4
//                 style={{
//                   lineHeight: 1.5,
//                   letterSpacing: "1px",
//                   fontSize: "28px",
//                   fontWeight: "900",
//                   ...headingAnimation1,
//                 }}
//               >
//                 Hyderabad
//               </animated.h4>
//               <animated.p
//                 style={{
//                   fontSize: "20px",
//                   lineHeight: "1.7",
//                   letterSpacing: "1px",
//                   fontWeight: "500",
//                   padding: "20px 0",
//                   textAlign: "start",
//                   width: "90%",
//                 }}
//               >
//                 1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th
//                 Stage 1st Block, Channasandra, Bengaluru, Karnataka 560098
//               </animated.p>
//             </Col>
//             <Col sm={6}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18..."
//                 width="100%"
//                 height="300"
//                 style={{
//                   border: "1px solid black",
//                   boxShadow: "3px 3px 0px black",
//                   borderRadius: "10px",
//                 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </Container>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useSpring, animated, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const mail = "/media/NNCWebsite_Contact_V2_mailid.png";
const phone = "/media/NNCWebsite_Contact_V2_phone.png";
const location = "/media/NNCWebsite_Contact_V2_Visitus.png";

// Embed map src URLs
const BANGALORE_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1118120189694!2d77.52061287411918!3d12.900531216434365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3faeb14f4ccf%3A0x230f219118d65659!2sNakshatra%20Namaha%20Creations%20%7C%20Best%20Website%20development%20company%20%7C%20Mobile%20app%20development%20company%20%7C%20Mobile%20app%20developers!5e0!3m2!1sen!2sin!4v1754640075916!5m2!1sen!2sin";

const MYSORE_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7668807896566!2d76.6444176!3d12.264048899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6f2a2f997a55%3A0x84ddd6f882fbbf3a!2sNakshatra%20Namaha%20Creations%20%7C%20Best%20Website%20Development%20Company%20in%20Mysore%20%7C%20Best%20Mobile%20App%20Development%20Company%20in%20Mysore!5e0!3m2!1sen!2sin!4v1754640019173!5m2!1sen!2sin";

const HYDERABAD_MAP =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7612.7355828092295!2d78.46998!3d17.442102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cf429c8d33%3A0x354bddb11d7d6989!2sNakshatra%20Namaha%20Creations%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1754640150854!5m2!1sen!2sin";

export default function LocationAddress() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

  const headingAnimation = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0, transform: "translateY(-80px)" },
    config: { mass: 1, tension: 80, friction: 30, duration: 1500 },
  });

  const text = "+91 9900566466";
  const email = "info@nakshatranamahacreations.com";

  const trail = useTrail(text.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.6)",
    from: { opacity: 0, transform: "scale(0.6)" },
    config: { mass: 1, tension: 130, friction: 12 },
    delay: 100,
  });

  const trailEmail = useTrail(email.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.6)",
    from: { opacity: 0, transform: "scale(0.6)" },
    config: { mass: 1, tension: 130, friction: 12 },
    delay: 150,
  });

  const iconAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.6)",
    from: { opacity: 0, transform: "scale(0.6)" },
    config: { mass: 1, tension: 130, friction: 12 },
    delay: 50,
  });

  const headingAnimation1 = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 50, friction: 20 },
  });

  if (!isMounted) return null;

  return (
    <Container>
      <div style={{ marginTop: "15%" }}>
        <Row>
          <Col className="d-flex flex-column align-items-center" style={{ position: "relative" }}>
            <Image
              src={location}
              alt="location-icon"
              width={120}
              height={120}
              style={{
                height: "auto",
                objectFit: "cover",
                position: "absolute",
                left: "150px",
                bottom: "-50px",
              }}
            />
            <div ref={ref}>
              <animated.h2
                style={{
                  ...headingAnimation,
                  fontSize: "65px",
                  fontWeight: "900",
                  letterSpacing: "2px",
                  marginBottom: "1%",
                  textAlign: "center",
                }}
              >
                Come visit us
              </animated.h2>
              <animated.h4
                style={{
                  fontSize: "35px",
                  fontWeight: "900",
                  lineHeight: 1.5,
                  letterSpacing: "2px",
                  textAlign: "center",
                  color: "#26A7DC",
                  ...headingAnimation1,
                }}
              >
                Nakshatra Namaha Creations
              </animated.h4>
            </div>
          </Col>
        </Row>

        {/* Phone and Email */}
        <Row>
          <Col className="d-flex flex-column align-items-center mt-4" ref={ref}>
            <div className="phone-mail d-flex align-items-center justify-content-between gap-2">
              <h6 style={{ lineHeight: 1.5, letterSpacing: "2px", textAlign: "center", display: "flex", alignItems: "center" }}>
                <animated.div style={iconAnimation}>
                  <Image src={phone} alt="phone-icon" width={20} height={20} style={{ height: "auto", objectFit: "cover", margin: "0 2%" }} />
                </animated.div>
                {trail.map((props, i) => (
                  <animated.span key={i} style={props}>
                    {text[i]}
                  </animated.span>
                ))}
              </h6>

              <h6 style={{ lineHeight: 1.5, letterSpacing: "2px", textAlign: "center", display: "flex", alignItems: "center" }}>
                <animated.div style={iconAnimation}>
                  <Image src={mail} alt="mail-icon" width={20} height={20} style={{ height: "auto", objectFit: "cover", margin: "0 2%" }} />
                </animated.div>
                {trailEmail.map((props, i) => (
                  <animated.span key={i} style={props}>
                    {email[i]}
                  </animated.span>
                ))}
              </h6>
            </div>
          </Col>
        </Row>

        {/* Bengaluru */}
        <div style={{ marginTop: "10%" }} ref={ref}>
          <Row className="div-location-maps">
            <Col sm={6}>
              <animated.h4
                style={{
                  lineHeight: 1.5,
                  letterSpacing: "1px",
                  fontSize: "28px",
                  fontWeight: "900",
                  ...headingAnimation1,
                }}
              >
                Bengaluru — Corporate Office
              </animated.h4>
              <animated.p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  letterSpacing: "1px",
                  fontWeight: "500",
                  padding: "20px 0",
                  textAlign: "start",
                  width: "90%",
                }}
              >
                1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka 560098
              </animated.p>
            </Col>
            <Col sm={6}>
              <iframe
                title="Nakshatra Namaha Creations - Bengaluru"
                src={BANGALORE_MAP}
                width="100%"
                height={300}
                style={{ border: "1px solid black", boxShadow: "3px 3px 0px black", borderRadius: "10px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Col>
          </Row>
        </div>

        {/* Mysuru */}
        <div style={{ marginTop: "10%", marginBottom: "10%" }}>
          <Row className="div-location-maps position-location">
            <Col sm={6} className="order-sm-1 order-2">
              <iframe
                title="Nakshatra Namaha Creations - Mysuru"
                src={MYSORE_MAP}
                width="100%"
                height={300}
                style={{ border: "1px solid black", boxShadow: "3px 3px 0px black", borderRadius: "10px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Col>
            <Col sm={6} className="position-location-address order-sm-2 order-1">
              <animated.h4
                style={{
                  lineHeight: 1.5,
                  letterSpacing: "1px",
                  fontSize: "28px",
                  fontWeight: "900",
                  ...headingAnimation1,
                }}
              >
                Mysuru — Branch Office
              </animated.h4>
              <animated.p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  letterSpacing: "1px",
                  fontWeight: "500",
                  padding: "20px 0",
                  width: "90%",
                }}
              >
                SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage, C-Block, JP Nagar, Mysuru, Karnataka 570008
              </animated.p>
            </Col>
          </Row>
        </div>

        {/* Hyderabad */}
        <div style={{ marginBlock: "10%" }} ref={ref}>
          <Row className="div-location-maps">
            <Col sm={6}>
              <animated.h4
                style={{
                  lineHeight: 1.5,
                  letterSpacing: "1px",
                  fontSize: "28px",
                  fontWeight: "900",
                  ...headingAnimation1,
                }}
              >
                Hyderabad
              </animated.h4>
              <animated.p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  letterSpacing: "1px",
                  fontWeight: "500",
                  padding: "20px 0",
                  textAlign: "start",
                  width: "90%",
                }}
              >
              64/2 RT, Prakashnagar, Begumpet, Hyderabad, Telangana - 500016
              </animated.p>
            </Col>
            <Col sm={6}>
              <iframe
                title="Nakshatra Namaha Creations - Hyderabad"
                src={HYDERABAD_MAP}
                width="100%"
                height={300}
                style={{ border: "1px solid black", boxShadow: "3px 3px 0px black", borderRadius: "10px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
