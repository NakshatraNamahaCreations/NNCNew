// import { Row, Col } from "react-bootstrap";
// import { useTrail, animated } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";  // Importing Next.js Image component

// // Importing images from public/media
// const smile = "/media/NNCWebsite_V3_CustomersSmilling.webp";
// const briefcase = "/media/NNCWebsite_V3_Work.webp";
// const folder = "/media/NNCWebsite_V3_ProjectsDone.webp";
// const person = "/media/NNCWebsite_V3_Footer1.webp";
// const foot = "/media/NNCWebsite_V3_Footer2.webp";
// import IconsButton from "./IconsButton";

// export default function Icons() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const items = [
//     {
//       image: briefcase,
//       alt: "briefcase-icon",
//       heading: "8+",
//       text: "Years in Work",
//     },
//     {
//       image: folder,
//       alt: "folder-icon",
//       heading: "500+",
//       text: "Project done",
//     },
//     {
//       image: smile,
//       alt: "smile-icon",
//       heading: "500",
//       text: "Happy Clients",
//     },
//     {
//       image: null,
//       alt: "",
//       heading: (
//         <>
//           Got <br /> a <br /> Project?
//         </>
//       ),
//       text: "",
//     },
//   ];

//   const trail = useTrail(items.length, {
//     opacity: inView ? 1 : 0,
//     transform: inView ? "scale(1)" : "scale(1.2)",
//     from: { opacity: 0, transform: "scale(1.2)" },
//     config: { tension: 120, friction: 14 },
//   });

//   return (
//     <animated.div ref={ref}>
//       <Row
//         style={{
//           maxWidth: "90%",
//           textAlign: "center",
//           color: "#000",
//           margin: "0% 5%",
//           paddingBottom: "12%",
//         }}
//         className="row-width-icons"
//       >
//         {trail.map((animation, index) => (
//           <Col key={index}>
//             <animated.div style={animation}>
//               {items[index].image && (
//                 <Image
//                   src={items[index].image}
//                   alt={items[index].alt}
//                   width={70}  // Explicitly setting width
//                   height={70} // Explicitly setting height
//                 />
//               )}
//               {items[index].heading && (
//                 <p
//                   style={{
//                     fontWeight: "bold",
//                     marginTop: "10px",
//                     letterSpacing: "1px",
//                     fontSize: "50px",
//                     textAlign: "center",
//                   }}
//                   className="h1-icons"
//                 >
//                   {items[index].heading}
//                 </p>
//               )}
//               {items[index].text && (
//                 <p
//                   style={{ fontWeight: "400", letterSpacing: "1px", fontSize: "14px" }}
//                   className="para-icons"
//                 >
//                   {items[index].text}
//                 </p>
//               )}
//             </animated.div>
//           </Col>
//         ))}
//       </Row>

//       <Row style={{ marginTop: "-140px" }} className="div-row">
//         <Col sm={6}>
//           <Image
//             src={person}
//             alt="person"
//             width={600}  // Explicitly setting width
//             height={400} // Explicitly setting height
//             className="person-voice"
//             style={{ width: "150%", height: "auto" }}
//           />
//         </Col>
//         <Col sm={6}>
//           <div style={{ textAlign: "center", marginTop: "10%" }} className="icons-button-top">
//             <IconsButton />
//             {/* PNG Image Below the Button */}
//             <div style={{ marginBottom: "40px" }} className="img-feet">
//               <Image
//                 src={foot}
//                 alt="arrow"
//                 width={70}  // Explicitly setting width
//                 height={70} // Explicitly setting height
//                 className="img-feet-left"
//                 style={{ marginLeft: "40%" }}
//               />
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </animated.div>
//   );
// }


"use client";

import { useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import ContactModal from "./about/ContactModal";

const smile = "/media/NNCWebsite_V3_CustomersSmilling.webp";
const briefcase = "/media/NNCWebsite_V3_Work.webp";
const folder = "/media/NNCWebsite_V3_ProjectsDone.webp";
const person = "/media/gif/talk.gif";

export default function Icons() {
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
        <Col xs={12} className="text-center">
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
      <ContactModal showPopup={showPopup} setShowPopup={setShowPopup} />
    </Container>
  );
}
