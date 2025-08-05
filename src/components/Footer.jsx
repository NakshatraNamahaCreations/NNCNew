"use client"; // Needed for Bootstrap interactive components

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import QuickLinks from "@/components/QuickLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <Container style={{ color: "white" , paddingBottom:"100px"}}>
      <Container
        style={{ padding: "50px 0", fontWeight: "600", letterSpacing: "1px" }}
        className="container-footer"
      >
        <Row>
          {/* Quick Links */}
          <Col sm={4} style={{ padding: "0 30px" }} className="col-first">
            <QuickLinks />
            <div>
              <h5
                style={{ color: "white", fontSize: "18px", marginTop: "10%" }}
              >
                Social Media
              </h5>

              <div className="footer-social-icons">
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
          </Col>

          {/* Contact & Services Section */}
          <Col sm={8}>
            <Row>
              {/* Contact Us */}
              <Col
                sm={6}
                style={{ padding: "0 30px" }}
                className="col2-contact"
              >
                <section id="about-section">
                  <h5
                    className="h5-col2"
                    style={{
                      marginBottom: "20px",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      fontSize: "18px",
                    }}
                  >
                    CONTACT US
                  </h5>
                </section>
                <ul
                  className="ul-li-footer2"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  <li
                    style={{ marginBottom: "15px", cursor: "pointer" }}
                    onClick={() => window.open("tel:+919900566466", "_self")}
                  >
                    <FaPhone style={{ marginRight: "10px" }} />
                    +91 9900566466
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="mailto:info@nakshatranamahacreations.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaEnvelope style={{ marginRight: "10px" }} />
                      info@nakshatranamahacreations.com
                    </a>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="https://maps.app.goo.gl/7WjEXPpKFusk5oN67"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span style={{ display: "flex", alignItems: "baseline" }}>
                        <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                        <h6 style={{ fontWeight: "bold" }}>BENGALURU</h6>
                      </span>
                      1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari,
                      6th Stage 1st Block, Channasandra, Bengaluru, Karnataka -
                      560061
                    </a>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="https://maps.app.goo.gl/v4SqickxVKMRoeq57"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span style={{ display: "flex", alignItems: "baseline" }}>
                        <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                        <h6 style={{ fontWeight: "bold" }}>MYSURU</h6>
                      </span>
                      SUSWANI TOWERS, Akkamahadevi Rd, JP Nagar 2nd Stage,
                      C-Block, JP Nagar, Mysuru, Karnataka 570008
                    </a>
                  </li>
                  <li style={{ marginBottom: "20px" }}>
                    <a
                      href="https://maps.app.goo.gl/2cBrAJWUcP4jdsma8"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span style={{ display: "flex", alignItems: "baseline" }}>
                        <FaMapMarkerAlt style={{ marginRight: "10px" }} />
                        <h6 style={{ fontWeight: "bold" }}>HYDERABAD</h6>
                      </span>
                      64/2 RT, Prakashnagar, Begumpet, Hyderabad, Telangana -
                      500016
                    </a>
                  </li>
                </ul>
              </Col>

              {/* Our Services */}
              <Col
                sm={6}
                style={{ padding: "0 30px" }}
                className="col3-contact"
              >
                <h5
                  className="h5-col3"
                  style={{
                    marginBottom: "20px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    fontSize: "18px",
                  }}
                >
                  OUR SERVICES
                </h5>
                <ul
                  className="ul-li-footer3"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  <Link
                    href="/mobile-app-development-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Mobile App Development
                    </li>
                  </Link>
                  <Link
                    href="/website-development-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Website Development
                    </li>
                  </Link>
                  <Link
                    href="/web-development-services-in-bengaluru"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Website Development Bengaluru
                    </li>
                  </Link>
                  <Link
                    href="/corporate-video-production-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>
                      Corporate Video Production
                    </li>
                  </Link>
                  <Link
                    href="/digital-marketing-agency-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>Digital Marketing</li>
                  </Link>
                  <Link
                    href="/graphic-design-company-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>Graphic Designing</li>
                  </Link>
                  <Link
                    href="/2d-animation-studio-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>2D Animation</li>
                  </Link>
                  <Link
                    href="/b2b-marketing-agency-in-bangalore"
                    className="removelinkStyle2"
                  >
                    <li style={{ marginBottom: "25px" }}>B2B Marketing</li>
                  </Link>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
