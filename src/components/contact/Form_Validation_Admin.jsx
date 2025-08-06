"use client"; // Client-side rendering

import { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { animated } from "@react-spring/web";
import { useRouter } from "next/navigation";

const Form_Validation_Admin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const { name, email, phone, service, message: msg } = formData;
    const errors = {};

    // Client-side validation
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!name || !nameRegex.test(name.trim())) {
      errors.name = "Enter a valid name (min 3 letters)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Enter a valid email address";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (!service) {
      errors.service = "Please select a service";
    }

    if (!msg.trim()) {
      errors.message = "Message is required";
    }

    // If there are errors, don't proceed with API request
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Proceed to submit the form data
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name,
          email,
          phoneNo: phone,
          service,
          message: msg,
          referenceFrom: "website",
          city: "Bangalore",
        }
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          referenceFrom: "website",
          city: "Bangalore",
        });
        setFormErrors({});
        setMessage("Form submitted successfully!");
        setTimeout(() => {
          router.push("/thankyou");
        }, 500);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid style={{ padding: 0, marginTop: "10%" }}>
      <animated.div
        className="contact-big-text-div"
        style={{
          padding: "75px",
          color: "white",
          textAlign: "center",
          backgroundColor: "#57A7F5",
        }}
      >
        <Row>
          <Col md={6}>
            <h2
              className="contact-big-text"
              style={{
                fontSize: "65px",
                fontWeight: "900",
                letterSpacing: "3px",
                margin: "10% 5%",
              }}
            >
              Let us know what's on your mind
            </h2>
            <img
              src="/media/gif/Solution.gif"
              alt="communication-img"
              style={{
                width: "70%",
                objectFit: "cover",
                margin: "auto",
                display: "block",
              }}
            />
          </Col>
          <Col md={6}>
            <img
              src="/media/gif/Light.gif"
              alt="bulb-img"
              style={{
                width: "55%",
                marginLeft: "35%",
                marginTop: "40px",
              }}
            />
            <h2
              className="contact-big-text"
              style={{
                fontSize: "65px",
                fontWeight: "900",
                letterSpacing: "3px",
                margin: "10% 5%",
                textAlign: "right",
              }}
            >
              We will come with solutions
            </h2>
          </Col>
        </Row>
      </animated.div>

      <div
        style={{
          backgroundColor: "#F6CD46",
          padding: "50px 45px 100px 45px",
          marginBottom: "20px",
          textAlign: "center",
        }}
        className="contact-form-div"
      >
        <h4 className="fw-bold" style={{ fontSize: "45px", color: "#000" }}>
          We need this! To talk to you
        </h4>
        <h6 style={{ color: "#000", marginBottom: "20px" }}>
          Choose the services below
        </h6>

        <Row>
          <Col sm={5}>
            <Form onSubmit={handleSubmit} className="mt-4">
              <FloatingLabel label="Name" className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!formErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Phone Number" className="mb-3">
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!formErrors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.phone}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Service" className="mb-3">
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  isInvalid={!!formErrors.service}
                >
                  <option value="">Select a Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="Corporate Video Production">
                    Corporate Video Production
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="2D Animations">2D Animations</option>
                  <option value="B2B Marketing Service">
                    B2B Marketing Service
                  </option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formErrors.service}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Message" className="mb-3">
                <Form.Control
                  as="textarea"
                  style={{ height: "120px" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!formErrors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.message}
                </Form.Control.Feedback>
              </FloatingLabel>

              <Button
                variant="outline-dark"
                className="popout-animation hover-button send-btn"
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  borderRadius: "50px",
                  padding: "10px 40px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  fontSize: "25px",
                  boxShadow: "3px 3px 1px 0px rgb(0, 0, 0)",
                  transition: "box-shadow 0.2s ease-in-out",
                }}
              >
                Send{" "}
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="hover-icon"
                />
              </Button>

              {message && <p>{message}</p>}
            </Form>
          </Col>
          <Col sm={7}>
            <img
              src="/media/gif/mic.gif"
              alt="contact"
              style={{
                width: "70%",
                marginTop: "40px",
              }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Form_Validation_Admin;
