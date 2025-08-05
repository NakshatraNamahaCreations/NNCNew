"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles//StickyCarousal.module.css";

const StickyCarousal = () => {
  const servicesList = [
    {
      title: "Kick-Off Meeting",
      description:
        "Nakshatra Namaha Creations’s Web Development Services in Bangalore begin with a detailed Kick-Off Meeting to align goals and vision. Choose the Best Web Development Company in Bangalore for top results.",
    },
    {
      title: "Structure Planning (UX)",
      description:
        "Nakshatra Namaha Creations offers Web Development Services in Bangalore, focusing on Structure Planning (UX). As a top Web Designing Company and Website Development Agency in Bangalore, we ensure seamless user experiences.",
    },
    {
      title: "Design (UI)",
      description:
        "Nakshatra Namaha Creations offers expert Web Development Services in Bangalore with UI Design, making us the Best Web Development Company and top Web Designing Company in Bangalore for custom websites.",
    },
    {
      title: "Development",
      description:
        "Nakshatra Namaha Creations offers top-notch Web Development Services in Bangalore. As a leading Website Development Agency in Bangalore, we deliver responsive designs backed by the Best Web Development Company in Bangalore.",
    },
    {
      title: "Content Creation",
      description:
        "Nakshatra Namaha Creations offers Web Development Services in Bangalore with engaging content and design, making us the Best Web Development Company and a trusted Website Development Agency in Bangalore.",
    },
    {
      title: "SEO Implementations",
      description:
        "As a top Web Designing Company in Bangalore and a leading Website Development Agency in Bangalore, we implement SEO strategies to boost your site’s visibility, making us the Best Web Development Company in Bangalore.",
    },
    {
      title: "Launch & Deployment",
      description:
        "Nakshatra Namaha Creations offers expert web development services in Bangalore, ensuring smooth website launch and deployment. As a leading web designing and best web development company, we provide end-to-end solutions for a successful launch.",
    },
    {
      title: "Performance Monitoring & Maintenance",
      description:
        "Nakshatra Namaha Creations offers Web Development Services in Bangalore, including performance monitoring and maintenance, ensuring smooth, secure, and top-performing websites.",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #28ABE5, #28ABE5)",
        padding: "40px 0",
        position: "relative",
        color: "#fff",
      }}
    >
      <Container fluid>
        <Row>
          <Col md={4} className={styles.detailsCol}>
            <h3
              style={{
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "1.2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              OUR WEB DEVELOPMENT SERVICES IN Bangalore PROVIDES
            </h3>
          </Col>

          <Col md={7} className={styles.desktopImagesCol}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {servicesList.map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderLeft: "2px solid #fff",
                    paddingLeft: "16px",
                  }}
                >
                  <h5
                    style={{
                      marginBottom: "10px",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                    }}
                  >
                    0{index + 1}. {item.title}
                  </h5>
                  <p
                    style={{
                      marginBottom: "16px",
                      fontSize: "18px",
                      color: "#fff",
                      lineHeight: "1.7",
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StickyCarousal;
