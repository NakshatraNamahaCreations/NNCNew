"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import HoverButtonWork from "@/components/websiteDev/HoverButtonWork";
import { IoIosHeartEmpty } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const img = "/media/corporateVdo/bottom.png";

export default function TwoDAnimationCards() {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#F2FDFF", padding: "10px", zIndex: "1" }}>
      <Container>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "70vh" }}
        >
          {/* Left Column */}
          <Col
            md={5}
            className="d-flex gap-4 position-relative"
            style={{ padding: "10% 0% 10% 0%" }}
          >
            <div className="vdocard-container">
              {/* Image */}
              <Image
                src={img}
                alt="2D Animation"
                className="vdocard-img"
                width={500}
                height={300}
              />

              {/* YouTube Iframe */}
              <iframe
                src="https://www.youtube.com/embed/-P3WA60Shs8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="vdocard-iframe"
              />

              {/* Content */}
              <div className="vdo-card-content px-3 pb-1">
                <p className="fw-bold mb-1">
                  Why is website needed for a business?
                </p>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  If you have a business and don’t have a website, you are
                  probably losing out on opportunities for your business.
                </p>

                <div className="d-flex justify-content-between m-0 p-0">
                  <Link
                    href="https://www.youtube.com/watch?v=-P3WA60Shs8&feature=youtu.be"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#00591B" }}
                  >
                    <Button
                      className="btn-sm border-0"
                      style={{
                        fontSize: "12px",
                        background: "#D8F1DC",
                        color: "#00591B",
                      }}
                    >
                      Link
                    </Button>
                  </Link>
                  <div className="heart-icon-wrapper ms-2">
                    <IoIosHeartEmpty size={18} />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={5}>
            <h2>We Always Deliver More Than Expected</h2>
            <p>
              We conduct thorough testing to ensure the website runs smoothly
              across all devices and browsers.
            </p>
            <div
              className="hover-button-wrapper"
              onClick={() => router.push("/our-works/animation")}
            >
              <HoverButtonWork />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
