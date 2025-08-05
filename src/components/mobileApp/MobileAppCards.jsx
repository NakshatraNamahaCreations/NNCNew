import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import HoverButtonWork from "@/components/websiteDev/HoverButtonWork"; // Make sure this is correctly imported from your components
import Image from "next/image"; // Using Next.js Image for optimization
const vijayHomeCard = "/media/mobile_app_dev/vijayHome.png"; // Adjusted to use public folder
const CNDPlayCard = "/media/mobile_app_dev/CNDPlay.png"; // Adjusted to use public folder
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link"; 

export default function MobileAppCards() {
  return (
    <div className="mobile-app-wrapper">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={7} className="d-flex gap-3 flex-wrap">
            <div className="mobile-app-card">
              <Image src={vijayHomeCard} alt="Vijay Home Services" width={500} height={300} />
              <div className="card-content">
                <p className="fw-bold mb-1">Vijay Home Services</p>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  We have implemented our full creativity for the website of
                  this Interior design company.
                </p>

                <div className="d-flex justify-content-between m-0 p-0">
                  <Button className="btn-sm border-0 px-4" style={{ fontSize: "12px", background: "#D8F1DC", color: "#00591B" }}>
                    <Link href="https://play.google.com/store/apps/details?id=com.vhs1&pcampaignid=web_share" target="__blank" >
                      
                        Live
                
                    </Link>
                  </Button>
                  <div className="heart-icon-wrapper ms-2">
                    <IoIosHeartEmpty size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-app-card">
              <Image src={CNDPlayCard} alt="CND Play" width={500} height={300} />
              <div className="card-content">
                <p className="fw-bold mb-1">CND Play</p>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>
                  CND PLAY is a rising streaming platform offering a global
                  library of diverse movies.
                </p>

                <div className="d-flex justify-content-between">
                  <Button className="btn-sm border-0 px-4" style={{ fontSize: "12px", background: "#D8F1DC", color: "#00591B" }}>
                    <Link href="https://play.google.com/store/apps/details?id=com.clockndail.clockndail&pcampaignid=web_share" target="__blank">
                        Live
                    </Link>
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
              We conduct thorough testing to ensure the website runs smoothly across all devices and browsers.
            </p>
            <div className="hover-button-wrapper">
              <HoverButtonWork />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
