"use client";

import { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-modal";
import PopupBtn from "./PopupBtn";
import { Button, Card, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function PopupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_service: "",
    referenceFrom: "website",
    city: "Bangalore",
  });

  const [formErrors, setFormErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

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
      errors.user_name = "Please enter a valid name (only letters, min 3 characters).";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const repeatedDigitsRegex = /^(\d)\1{9}$/;
    const invalidPhones = [
      "0000000000",
      "1234567890",
      "0123456789",
      "9999999999",
      "8888888888",
      "7777777777",
      "6666666666",
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
        router.push("/thankyou");
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          user_service: "",
          referenceFrom: "website",
          city: "Bangalore",
        });
        setFormErrors({});
        setModalIsOpen(false);
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Failed to send enquiry. Please check the console for details.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
      setTimeout(() => setFadeIn(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setFadeIn(false);
    setFormData({
      user_name: "",
      user_email: "",
      user_phone: "",
      user_service: "",
      referenceFrom: "website",
      city: "Bangalore",
    });
    setFormErrors({});
    setTimeout(() => setModalIsOpen(false), 300);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Popup Form"
      className={`modal-content ${fadeIn ? "fade-in" : "fade-out"}`}
      overlayClassName="modal-overlay"
    >
      <Card className="popup-card shadow-lg p-4 position-relative">
        <Button variant="light" className="close-btn" onClick={closeModal}>
          <BsX size={28} />
        </Button>

        <Card.Body>
          <h3 className="text-center mb-3" style={{ fontWeight: "bold", fontSize: "26px" }}>
            Contact Us
          </h3>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12}>
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
              </Col>

              <Col xs={12}>
                <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-1 mt-3">
                  <Form.Control
                    type="text"
                    name="user_phone"
                    placeholder="Phone Number"
                    value={formData.user_phone}
                    onChange={handleChange}
                    maxLength={10}
                    required
                  />
                </FloatingLabel>
                {formErrors.user_phone && (
                  <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
                    {formErrors.user_phone}
                  </div>
                )}
              </Col>

              <Col xs={12}>
                <FloatingLabel controlId="floatingEmail" label="Email Address *" className="mb-1 mt-3">
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </FloatingLabel>
                {formErrors.user_email && (
                  <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
                    {formErrors.user_email}
                  </div>
                )}
              </Col>

              <Col xs={12}>
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
              </Col>
            </Row>

            <div className="d-flex justify-content-center mt-4">
              <PopupBtn handleSubmit={handleSubmit} />
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Modal>
  );
}
