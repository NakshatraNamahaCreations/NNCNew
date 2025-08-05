"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image"; // Use Next.js Image component for optimized image rendering
const facebook = "/media/NNCWebsite_Contact_V2_facebook.png";
const youtube = "/media/NNCWebsite_Contact_V2_youtube.png";
const linkedin = "/media/NNCWebsite_Contact_V2-06.png";
const instagram = "/media/NNCWebsite_Contact_V2_Instagram.png";
const twitter = "/media/twitter.png";

export default function Cont_Mail_Media() {
  return (
    <Container style={{ marginTop: "5%" }}>
      {/* Centered Heading */}
      <Row className="text-center" style={{ marginBottom: "2%" }}>
        <Col>
          <h4
            style={{
              fontSize: "35px",
              fontWeight: "600",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
            className="h4-title"
          >
            Mobile No
          </h4>
        </Col>
        <Col>
          <h4
            style={{
              fontSize: "35px",
              fontWeight: "600",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
            className="h4-title"
          >
            Email Address
          </h4>
        </Col>
        <Col>
          <h4
            style={{
              fontSize: "35px",
              fontWeight: "600",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
            className="h4-title"
          >
            Social Media
          </h4>
        </Col>
      </Row>

      {/* Centered Images */}
      <Row className="justify-content-center text-center g-1 g-lg-3">
        <Col xs={4} className="position-relative">
          <div
            className="image-container bg-reduce"
            style={{
              backgroundColor: "#002A3A",
              width: "auto",
              height: "350px",
              padding: "20px",
              borderRadius: "10%",
            }}
          >
            <div className="overlay">
              <h5
                style={{
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontSize: "22px",
                }}
                className="h5-titles"
                onClick={() => window.open("tel:+919900566466", "_self")}
              >
                +91 9900566466
              </h5>
              <p
                style={{ letterSpacing: "1px", fontSize: "14px" }}
                className="para-contents"
              >
                Give us a call and chat directly with our friendly team.
                We&apos;re always happy to answer any questions.
              </p>
            </div>
          </div>
        </Col>

        <Col xs={4} className="position-relative">
          <div
            className="image-container bg-reduce"
            style={{
              backgroundColor: "#002A3A",
              width: "auto",
              height: "350px",
              padding: "20px",
              borderRadius: "10%",
            }}
          >
            <div className="overlay">
              <a
                style={{
                  marginTop: "50px",
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontSize: "22px",
                }}
                className="h5-titles"
                href="mailto:info@nakshatranamahacreations.com"
              >
                info@nakshatranamaha
                <br />
                creations.com
              </a>
              <p
                style={{
                  letterSpacing: "1px",
                  fontSize: "14px",
                  marginTop: "25px",
                }}
                className="para-contents"
              >
                Send us a detailed message. We&apos;ll get back to you as soon
                as possible to discuss your creative project further.
              </p>
            </div>
          </div>
        </Col>

        <Col xs={4} className="position-relative">
          <div
            className="image-container bg-reduce"
            style={{
              backgroundColor: "#002A3A",
              width: "auto",
              height: "350px",
              padding: "20px",
              borderRadius: "10%",
            }}
          >
            <div className="overlay">
              <div className="social-icons ">
                <a href="https://www.facebook.com/Nakshatranamahacreations/">
                  <Image
                    src={facebook}
                    alt="facebook-icon"
                    className="zoom-in-image"
                    width={40} // Adjust the image width
                    height={40} // Adjust the image height
                  />
                </a>
                <a href="https://www.youtube.com/c/NakshatraNamahaCreations">
                  <Image
                    src={youtube}
                    alt="youtube-icon"
                    className="zoom-in-image"
                    width={40} // Adjust the image width
                    height={40} // Adjust the image height
                  />
                </a>
                <a href="https://www.linkedin.com/company/nakshatra-namaha-creation/">
                  <Image
                    src={linkedin}
                    alt="linkedin-icon"
                    className="zoom-in-image"
                    width={40} // Adjust the image width
                    height={40} // Adjust the image height
                  />
                </a>
                <a href="https://www.instagram.com/nnc.digitalbengaluru/">
                  <Image
                    src={instagram}
                    alt="instagram-icon"
                    className="zoom-in-image"
                    width={40} // Adjust the image width
                    height={40} // Adjust the image height
                  />
                </a>
                <a href="https://x.com/nncbengaluru">
                  <Image
                    src={twitter}
                    alt="twitter-icon"
                    className="zoom-in-image"
                    width={40} // Adjust the image width
                    height={40} // Adjust the image height
                  />
                </a>
              </div>
              <p
                style={{ letterSpacing: "1px", fontSize: "14px" }}
                className="para-contents"
              >
                Follow us on Social Media Platforms for a glimpse into our
                creative world, industry insights, and projects.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
