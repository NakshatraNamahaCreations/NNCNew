import { Container, Row, Col, Button } from "react-bootstrap";
import { IoIosHeartEmpty } from "react-icons/io";
import HoverButtonWork from "./HoverButtonWork";
import { useRouter } from "next/navigation";

const ourworkImg1 = "/media/webdev/ourworkImg1.png";
const ourworkImg2 = "/media/webdev/ourworkImg2.png";

export default function WebsiteDevCards() {
  const router = useRouter(); // Using Next.js router for internal navigation

  const handleNavigate = () => {
    router.push("/our-works/website-development"); // Use router.push for internal navigation
  };

  return (
    <div className="mobile-app-wrapper">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={7} className="d-flex gap-3 flex-wrap">
            {/* First Work Card */}
            <div className="mobile-app-card">
              <img src={ourworkImg1} alt="Vijay Home Services" />
              <div className="card-content">
                <p className="fw-bold mb-1">Vijay Home Services</p>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  Developed Vijay Home Services website to optimize visibility and streamline bookings.
                </p>

                <div className="d-flex justify-content-between m-0 p-0">
                  {/* External Link Button */}
                  <Button
                    className="btn-sm border-0"
                    style={{
                      fontSize: "12px",
                      background: "#D8F1DC",
                      color: "#00591B",
                    }}
                  >
                    <a
                      href="https://www.vijayhomeservices.com/"
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

            {/* Second Work Card */}
            <div className="mobile-app-card">
              <img src={ourworkImg2} alt="Make My Documents" />
              <div className="card-content">
                <p className="fw-bold">Make My Documents</p>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  Designed a responsive website for Make My Documents to optimize service delivery.
                </p>

                <div className="d-flex justify-content-between">
                  {/* External Link Button */}
                  <Button
                    className="btn-sm border-0"
                    style={{
                      fontSize: "12px",
                      background: "#D8F1DC",
                      color: "#00591B",
                    }}
                  >
                    <a
                      href="https://www.makemydocuments.com/"
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
            <div className="hover-button-wrapper" onClick={handleNavigate}>
              <HoverButtonWork />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
