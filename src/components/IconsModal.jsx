

import { Row, Col } from "react-bootstrap";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

// Importing images from public directory
const smile = "/media/NNCWebsite_V3_CustomersSmilling.png";
const briefcase = "/media/NNCWebsite_V3_Work.png";
const folder = "/media/NNCWebsite_V3_ProjectsDone.png";
const person = "/media/NNCWebsite_V3_Footer1.png";
const foot = "/media/NNCWebsite_V3_Footer2.png";
import IconsModalButton from "./IconsModalButton";

export default function IconsModal() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const router = useRouter(); // Use Next.js useRouter for routing

  const items = [
    {
      image: briefcase,
      alt: "briefcase-icon",
      heading: "8+",
      text: "Years in Work",
    },
    {
      image: folder,
      alt: "folder-icon",
      heading: "500+",
      text: "Project done",
    },
    {
      image: smile,
      alt: "smile-icon",
      heading: "500",
      text: "Happy Clients",
    },
    {
      image: null,
      alt: "",
      heading: (
        <>
          Got <br /> a <br /> Project?
        </>
      ),
      text: "",
    },
  ];

  const trail = useTrail(items.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(1.2)",
    from: { opacity: 0, transform: "scale(1.2)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div ref={ref}>
      <Row
        style={{
          maxWidth: "90%",
          textAlign: "center",
          color: "#000",
          margin: "0% 5%",
          paddingBottom: "12%",
        }}
        className="row-width-icons"
      >
        {trail.map((animation, index) => (
          <Col key={index}>
            <animated.div style={animation}>
              {items[index].image && (
                <img
                  src={items[index].image}
                  alt={items[index].alt}
                  style={{ width: "70px", height: "70px" }} // Set fixed width and height
                  className="image-icon"
                />
              )}
              {items[index].heading && (
                <p
                  style={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    letterSpacing: "1px",
                    fontSize: "50px",
                    textAlign: "center",
                  }}
                  className="h1-icons"
                >
                  {items[index].heading}
                </p>
              )}
              {items[index].text && (
                <p
                  style={{ fontWeight: "400", letterSpacing: "1px", fontSize: "14px" }}
                  className="para-icons"
                >
                  {items[index].text}
                </p>
              )}
            </animated.div>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: "-50px" }} className="div-row">
        <Col sm={6}>
          <img
            src={person}
            alt="person"
            style={{ width: "150%", height: "auto" }} // Ensure height is auto for responsive design
            className="person-voice"
          />
        </Col>
        <Col sm={6}>
          <div style={{ textAlign: "center", marginTop: "15%" }} className="icons-button-top">
            <IconsModalButton />

            {/* PNG Image Below the Button */}
            <div style={{ marginBottom: "40px" }} className="img-feet">
              <img
                src={foot}
                alt="arrow"
                style={{
                  width: "70px",
                  height: "auto", // Maintain aspect ratio
                  marginLeft: "40%",
                }}
                className="img-feet-left"
              />
            </div>
          </div>
        </Col>
      </Row>
    </animated.div>
  );
}
