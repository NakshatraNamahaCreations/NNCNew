// "use client";

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";
// import BacktoHomePage from "@/components/BacktoHomePage";

// const ThankyouPage = () => {
//   return (
//     <Container style={{ padding: "0% 0% 10% 0%" }}>
//       <Row id="thankyou" className="align-items-center">
//         {/* Left Column */}
//         <Col sm={6} className="text-center">
//           <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
//             Thank You for Contacting us!
//           </h2>
//           <p
//             className="fw-semibold"
//             style={{ fontSize: "1.125rem", marginBlock: "2%" }}
//           >
//             Our Team will get in touch with you soon!
//           </p>
//           <div className="d-flex justify-content-center align-items-center">
//             <BacktoHomePage />
//           </div>
//         </Col>

//         {/* Right Column */}
//         <Col sm={6} className="d-flex justify-content-center">
//           <Image
//             src="/media/thankyou.jpg"
//             alt="Thank You"
//             width={500}
//             height={400}
//             style={{
//               width: "100%",
//               maxWidth: "500px",
//               height: "auto",
//               objectFit: "contain",
//             }}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ThankyouPage;


"use client";

import React from "react";
import styles from "@/styles/thankyou.module.css";
import Link from "next/link";

const ThankyouPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.background}>
        <div className={styles.yellowTriangle}></div>
        <div className={styles.greenTriangle}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.checkmark}>✔</div>
        <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
          Thank You for Contacting us!
        </h2>
        <p
          className="fw-semibold"
          style={{ fontSize: "1.125rem", marginBlock: "2%" }}
        >
          Our Team will get in touch with you soon! You can find more
          information on our website and social pages.
        </p>

        <div className={styles.actions}>
          <div className={styles.connect}>
            <h3>Connect With Us</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/Nakshatranamahacreations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/media/NNCWebsite_Contact_V2_facebook.png"
                  alt="facebook-icon"
                  className="zoom-in-image"
                />
              </a>
              <a
                href="https://www.youtube.com/c/NakshatraNamahaCreations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/media/NNCWebsite_Contact_V2_youtube.png"
                  alt="youtube-icon"
                  className="zoom-in-image"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/nakshatra-namaha-creation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/media/NNCWebsite_Contact_V2-06.png"
                  alt="linkedin-icon"
                  className="zoom-in-image"
                />
              </a>
              <a
                href="https://www.instagram.com/nnc.digitalbengaluru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/media/NNCWebsite_Contact_V2_Instagram.png"
                  alt="instagram-icon"
                  className="zoom-in-image"
                />
              </a>
              <a
                href="https://x.com/nncbengaluru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/media/twitter.png"
                  alt="twitter-icon"
                  className="zoom-in-image"
                />
              </a>
            </div>
          </div>

          <div className={styles.website}>
            <h3>Visit Our Website</h3>
            <Link href="/" className={styles.button}>Visit Website</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
