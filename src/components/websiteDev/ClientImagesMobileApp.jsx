import { InView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";

const client1  = "/media/clients.png";
const client2  = "/media/clients1.png";
const client3  = "/media/clients2.png";
const client4  = "/media/clients3.png";
const client5  = "/media/clients4.png";
const client6  = "/media/clients5.png";
const client7  = "/media/clients6.png";
const client8  = "/media/clients7.png";
const client9  = "/media/clients8.png";
const client10 = "/media/clients9.png";
const client11 = "/media/clients10.png";
const client12 = "/media/clients11.png";
const client13 = "/media/clients12.png";
const client14 = "/media/clients13.png";
const client15 = "/media/clients14.png";


const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,

];

const AnimatedTitle = ({ inView }) => {
  const titleAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { tension: 150, friction: 30 },
  });

  return (
    <animated.p
      style={{
        lineHeight: "2.0",
        fontWeight: "900",
        letterSpacing: "2px",
        fontSize: "35px",
        textAlign: "left",
        ...titleAnimation,
      }}
      className="h1-client"
    >
    </animated.p>
  );
};

const AnimatedImage = ({ src, inView }) => {
  const imageAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.img
      src={src}
      alt="client"
      className="img-fluid clients-img"
      style={{
        width: "85%",
        height: "auto",
        objectFit: "contain",
        padding: "10px",
        ...imageAnimation,
      }}
    />
  );
};

const ClientImagesMobileApp = () => {
  return (
    <Container className="mt-3 text-center">
      <InView triggerOnce threshold={0.3}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <AnimatedTitle inView={inView} />
          </div>
        )}
      </InView>

      <Row
        className="justify-content-center g-4"
        xs={2}
        sm={3}
        md={4}
        lg={5}
        xl={6}
      >
        {clients.map((client, index) => (
          <InView key={index} triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <Col ref={ref} className="d-flex justify-content-center">
                <AnimatedImage src={client} inView={inView} />
              </Col>
            )}
          </InView>
        ))}
      </Row>
    </Container>
  );
};

export default ClientImagesMobileApp;
