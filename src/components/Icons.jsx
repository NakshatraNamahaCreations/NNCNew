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
import { Row, Col } from "react-bootstrap";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const smile = "/media/NNCWebsite_V3_CustomersSmilling.webp";
const briefcase = "/media/NNCWebsite_V3_Work.webp";
const folder = "/media/NNCWebsite_V3_ProjectsDone.webp";
// const person = "/media/NNCWebsite_V3_Footer1.webp";
const person = "/media/gif/talk.gif";
const foot = "/media/NNCWebsite_V3_Footer2.webp";
import IconsButton from "./IconsButton";
import ContactModal from "./about/ContactModal";

export default function Icons() {
  const [showPopup, setShowPopup] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const items = [
    {
      image: briefcase,
      alt: "briefcase-icon",
      heading: "8+",
      text: "Years in Work",
    },
    {
      image: folder,
      alt: "folder-icon",
      heading: "500+",
      text: "Project done",
    },
    {
      image: smile,
      alt: "smile-icon",
      heading: "500",
      text: "Happy Clients",
    },
    {
      image: null,
      alt: "",
      heading: (
        <>
          Got <br /> a <br /> Project?
        </>
      ),
      text: "",
    },
  ];

  const trail = useTrail(items.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(1.2)",
    from: { opacity: 0, transform: "scale(1.2)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div ref={ref}>
      <Row
        style={{
          maxWidth: "90%",
          textAlign: "center",
          color: "#000",
          margin: "0% 5%",
          paddingBottom: "12%",
        }}
        className="row-width-icons"
      >
        {trail.map((animation, index) => (
          <Col key={index}>
            <animated.div style={animation}>
              {items[index].image && (
                <Image
                  src={items[index].image}
                  alt={items[index].alt}
                  width={70}
                  height={70}
                />
              )}
              {items[index].heading && (
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    letterSpacing: "1px",
                    fontSize: "50px",
                    textAlign: "center",
                  }}
                  className="h1-icons"
                >
                  {items[index].heading}
                </p>
              )}
              {items[index].text && (
                <p
                  style={{
                    fontWeight: "400",
                    letterSpacing: "1px",
                    fontSize: "14px",
                  }}
                  className="para-icons"
                >
                  {items[index].text}
                </p>
              )}
            </animated.div>
          </Col>
        ))}
      </Row>

      {/* <Row style={{ }} className="div-row">
        <Col sm={6}>
       
        </Col>
      </Row> */}
         <Image
            src={person}
            alt="person"
            width={1200}
            height={300}
            // layout="responsive"
            // style={{width:"100%"}}
            onClick={() => setShowPopup(true)}
          />
        <ContactModal showPopup={showPopup} setShowPopup={setShowPopup} />
    </animated.div>
  );
}
