"use client";

import { Col, Row, Card, Badge } from "react-bootstrap";
import Link from "next/link";

const KeywordsSection = () => {
  const keywordData = [
    {
      city: "Bangalore",
      keywords: [
        { text: "Website Development Company in Bangalore", link: "/website-development-company-in-bangalore" },
        { text: "Mobile App Development Company in Bangalore", link: "/mobile-app-development-company-in-bangalore" },
        { text: "Graphic Design Company in Bangalore", link: "/graphic-design-company-in-bangalore" },
        { text: "Corporate Video Production Company in Bangalore", link: "/corporate-video-production-company-in-bangalore" },
        { text: "Digital Marketing Agency in Bangalore", link: "/digital-marketing-agency-in-bangalore" },
        { text: "B2B Marketing Agency in Bangalore", link: "/b2b-marketing-agency-in-bangalore" },
      ],
    },
    {
      city: "Hyderabad",
      keywords: [
        { text: "Website Development Company in Hyderabad", link: "/website-development-company-in-hyderabad" },
        { text: "Mobile App Development Company in Hyderabad", link: "/mobile-app-development-company-hyderabad" },
        { text: "Graphic Design Company in Hyderabad", link: "/graphic-design-services-hyderabad" },
        { text: "2D Animation Studio in Hyderabad", link: "/2d-animation-studio-hyderabad" },
        { text: "Digital Marketing Agency in Hyderabad", link: "/digital-marketing-agency-hyderabad" },
        { text: "Corporate Video Production Company in Hyderabad", link: "/corporate-video-production-company-hyderabad" },
        { text: "B2B Marketing Company in Hyderabad", link: "/b2b-marketing-company-hyderabad" },
      ],
    },
    {
      city: "Mysore",
      keywords: [
        { text: "Website Development Company in Mysore", link: "/website-development-company-in-mysore" },
        { text: "Mobile App Development Company in Mysore", link: "/mobile-app-development-company-in-mysore" },
        { text: "Graphic Design Company in Mysore", link: "/graphic-design-company-in-mysore" },
        { text: "Corporate Video Production Company in Mysore", link: "/corporate-video-production-company-in-mysore" },
        { text: "Digital Marketing Agency in Mysore", link: "/digital-marketing-agency-in-mysore" },
        { text: "B2B Marketing Agency in Mysore", link: "/b2b-marketing-agency-in-mysore" },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "#fefefe", padding: "40px 0" }}>
      <Row className="g-4">
        {keywordData.map((cityData, idx) => (
          <Col lg={4} md={12} sm={12} key={idx}>
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Body>
                <h5 className="fw-bold text-center mb-3 text-primary">
                  {cityData.city}
                </h5>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                >
                  {cityData.keywords.map((item, index) => (
                    <Link key={index} href={item.link} passHref legacyBehavior>
                      <Badge
                        bg="light"
                        text="dark"
                        className="px-3 py-2 border rounded-pill keyword-badge"
                        style={{
                          fontSize: "0.75rem",
                          cursor: "pointer",
                          backgroundColor: "#f8f9fa",
                          transition: "all 0.2s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor = "#e9ecef")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor = "#f8f9fa")
                        }
                      >
                        {item.text}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default KeywordsSection;
