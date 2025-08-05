"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import BacktoHomePage from "@/components/BacktoHomePage";

const ThankyouPage = () => {
  return (
    <Container style={{ padding: "0% 0% 10% 0%" }}>
      <Row id="thankyou" className="align-items-center">
        {/* Left Column */}
        <Col sm={6} className="text-center">
          <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
            Thank You for Contacting us!
          </h2>
          <p
            className="fw-semibold"
            style={{ fontSize: "1.125rem", marginBlock: "2%" }}
          >
            Our Team will get in touch with you soon!
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <BacktoHomePage />
          </div>
        </Col>

        {/* Right Column */}
        <Col sm={6} className="d-flex justify-content-center">
          <Image
            src="/media/thankyou.jpg"
            alt="Thank You"
            width={500}
            height={400}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ThankyouPage;
