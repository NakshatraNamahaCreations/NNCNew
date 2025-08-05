import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import HoverButtonWork from "@/components/websiteDev/HoverButtonWork";
const ourworkImg1 = "/media/webdev/ourworkImg1.png"; ``
const ourworkImg2 = "/media/webdev/ourworkImg2.png";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function GarphicdesignCards() {
  const router = useRouter();

  return (
    <div className="mobile-app-wrapper">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={7} className="d-flex gap-3 flex-wrap">
            <div className="mobile-app-card">
              <img src={ourworkImg1} alt="Vijay Home Services" />
              <div className="card-content">
                <p className="fw-bold mb-1">Vijay Home Services</p>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  We have implemented our full creativity for the website of
                  this Interior design company.
                </p>

                <div className="d-flex justify-content-between m-0 p-0">
                  <Button
                    className="btn-sm border-0"
                    style={{
                      fontSize: "12px",
                      background: "#D8F1DC",
                      color: "#00591B",
                    }}
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.vhs1&pcampaignid=web_share"
                      target="__blank"
                      style={{ textDecoration: "none", color: "#00591B" }}
                    >
                      Live
                    </a>
                  </Button>
                  <div className="heart-icon-wrapper ms-2">
                    <IoIosHeartEmpty size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-app-card">
              <img src={ourworkImg2} alt="CND Play" />
              <div className="card-content">
                <p className="fw-bold mb-1">CND Play</p>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  CND PLAY is a rising streaming platform offering a global
                  library of diverse movies.
                </p>

                <div className="d-flex justify-content-between">

                  <Button
                    className="btn-sm border-0"
                    style={{
                      fontSize: "12px",
                      background: "#D8F1DC",
                      color: "#00591B",
                    }}
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.clockndail.clockndail&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#00591B" }}
                    >
                      Live
                    </a>
                  </Button>

                  <div className="heart-icon-wrapper ms-2">
                    <IoIosHeartEmpty size={18} />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Mobile-responsive column for text */}
          <Col md={5} className="mobile-app-text">
            <h2>We Always Deliver More Than Expected</h2>
            <p>
              We conduct thorough testing to ensure the website runs smoothly
              across all devices and browsers.
            </p>
            <div
              className="hover-button-wrapper"
              onClick={() => router.push("/our-works/graphic-design")}
            >
              <HoverButtonWork />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
