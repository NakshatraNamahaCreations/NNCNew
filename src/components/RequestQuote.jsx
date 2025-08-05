"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function RequestQuote() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    referenceFrom: "website",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
  });

  const popupSpring = useSpring({
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "scale(1)" : "scale(0.8)",
    config: { tension: 250, friction: 20 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user_phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
        setFormErrors((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (name === "user_name") {
      const lettersOnly = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    const { user_name, user_phone, user_service, user_email } = formData;

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!user_name || !nameRegex.test(user_name.trim())) {
      errors.user_name = "Please enter a valid name (only letters, at least 3 characters).";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const repeatedDigitsRegex = /^(\d)\1{9}$/;
    const invalidPhones = [
      "0000000000", "1234567890", "0123456789",
      "9999999999", "8888888888", "7777777777", "6666666666"
    ];

    if (
      !user_phone ||
      !phoneRegex.test(user_phone) ||
      repeatedDigitsRegex.test(user_phone) ||
      invalidPhones.includes(user_phone)
    ) {
      errors.user_phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!user_service) {
      errors.user_service = "Please select a service.";
    }

    if (user_email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user_email)) {
        errors.user_email = "Please enter a valid email address.";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post("https://api.nakshatranamahacreations.in/api/enquiries", {
        name: user_name,
        email: user_email,
        phoneNo: user_phone,
        service: user_service,
        referenceFrom: "website",
        city: "Bangalore",
      });

      if (response.status === 201 || response.status === 200) {
        router.push("/thankyou"); // Next.js navigation
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          user_service: "",
          referenceFrom: "website",
          city: "Bangalore",
        });
        setFormErrors({});
        setShowPopup(false);
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Failed to send enquiry. Please check the console for details.");
    }
  };

  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    opacity: hovered ? 1 : 0.9,
    config: { tension: 300, friction: 20 },
  });

  return (
    <>
      <animated.div style={springProps}>
        <Button
          variant="outline-dark"
          className="popout-animation hover-button btn-talk-banner"
          style={{
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px 10px",
            fontWeight: "500",
            letterSpacing: "1px",
            fontSize: "14px",
            boxShadow: "2px 2px 1px 0px rgb(0, 0, 0)",
            cursor: "pointer",
            backgroundColor: hovered ? "black" : "white",
            color: hovered ? "white" : "black",
            border: "1px solid black",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setShowPopup(true)}
        >
          Request A Quote
        </Button>
      </animated.div>

      {showPopup && (
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
          }}
          onClick={() => setShowPopup(false)}
        >
          <animated.div
            style={{
              ...popupSpring,
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              width: "350px",
              position: "relative",
              zIndex: 1051,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="light"
              className="close-btn"
              onClick={() => {
                setFormData({
                  user_name: "",
                  user_email: "",
                  user_phone: "",
                  user_service: "",
                  referenceFrom: "website",
                  city: "Bangalore",
                });
                setFormErrors({});
                setShowPopup(false);
              }}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              <BsX size={28} />
            </Button>

            <Card.Body>
              <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: "black" }}>
                Contact Us
              </h3>
              <Form onSubmit={handleSubmit} className="d-flex flex-column" style={{ color: "black" }}>
                <FloatingLabel controlId="floatingName" label="Name *" className="mb-1">
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </FloatingLabel>
                {formErrors.user_name && (
                  <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
                    {formErrors.user_name}
                  </div>
                )}

                <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-1 mt-3">
                  <Form.Control
                    type="tel"
                    name="user_phone"
                    placeholder="Phone Number"
                    value={formData.user_phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                  />
                </FloatingLabel>
                {formErrors.user_phone && (
                  <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
                    {formErrors.user_phone}
                  </div>
                )}

                <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-1 mt-3">
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                {formErrors.user_email && (
                  <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
                    {formErrors.user_email}
                  </div>
                )}

                <FloatingLabel controlId="floatingSelect" label="" className="mb-1 mt-3">
                  <Form.Select
                    name="user_service"
                    value={formData.user_service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Corporate Video Production">Corporate Video Production</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="2D Animations">2D Animations</option>
                    <option value="B2B Marketing Service">B2B Marketing Service</option>
                  </Form.Select>
                </FloatingLabel>
                {formErrors.user_service && (
                  <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
                    {formErrors.user_service}
                  </div>
                )}

                <Button variant="dark" type="submit" style={{ width: "100%", marginTop: "20px" }}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </animated.div>
        </div>
      )}
    </>
  );
}
