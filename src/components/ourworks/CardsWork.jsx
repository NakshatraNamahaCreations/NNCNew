"use client";

import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import ViewAllBtn from "./ViewAllBtn";
import "@/styles/StyleWorks.css";

export default function CardsWork({ filterData }) {
  const [visibleCards, setVisibleCards] = useState(4);

  // Function to handle "View More" button click
  const handleViewMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, filterData.length));
  };

  return (
    <Container>
      <Row>
        {filterData.slice(0, visibleCards).map((card, rowIndex) => (
          <Col
            sm={5}
            className="mx-auto position-relative"
            style={{ marginBottom: "8%" }}
            key={rowIndex}
          >
            <Link href={card.link} target="_blank" passHref>
              <div className="our-app-card">
                <Image
                  src={card.ui_uxdesign}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-100"
                  style={{ objectFit: "cover" }}
                />
                <div className="our-card-content">
                  <div className="lg-mb-4">
                    <p className="fw-bold">{card.title}</p>
                    <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                      {card.description}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between m-0 p-0">
                   
                      <Button
                        className="btn-sm border-0 px-4"
                        style={{
                          fontSize: "12px",
                          background: "#D8F1DC",
                          color: "#00591B",
                        }}
                      >
                        Live
                      </Button>
                   
                    <div className="heart-icon-wrapper ms-2">
                      <IoIosHeartEmpty size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>

      {/* View More Button */}
      {visibleCards < filterData.length && (
        <ViewAllBtn onClick={handleViewMore} />
      )}
    </Container>
  );
}
