// "use client";

// import { useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import { Button, Card, Form, FloatingLabel, Modal } from "react-bootstrap";
// import { BsX } from "react-icons/bs";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export default function ContactModal({ showPopup, setShowPopup }) {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     user_phone: "",
//     user_service: "",
//     referenceFrom: "modal",
//     city: "Bangalore",
//   });

//   const [formErrors, setFormErrors] = useState({
//     user_name: "",
//     user_email: "",
//     user_phone: "",
//     user_service: "",
//   });

//   const popupSpring = useSpring({
//     opacity: showPopup ? 1 : 0,
//     transform: showPopup ? "scale(1)" : "scale(0.8)",
//     config: { tension: 250, friction: 20 },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "user_phone") {
//       const numericValue = value.replace(/\D/g, "");
//       if (numericValue.length <= 10) {
//         setFormData((prev) => ({ ...prev, [name]: numericValue }));
//         setFormErrors((prev) => ({ ...prev, [name]: "" }));
//       }
//       return;
//     }

//     if (name === "user_name") {
//       const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
//       setFormData((prev) => ({ ...prev, [name]: onlyLetters }));
//       setFormErrors((prev) => ({ ...prev, [name]: "" }));
//       return;
//     }

//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setFormErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { user_name, user_phone, user_service, user_email } = formData;
//     const errors = {};

//     // Name validation
//     const nameRegex = /^[A-Za-z\s]{3,}$/;
//     if (!user_name || !nameRegex.test(user_name.trim())) {
//       errors.user_name = "Please enter a valid name (letters only, min 3 chars).";
//     }

//     // Phone validation
//     const phoneRegex = /^[6-9]\d{9}$/;
//     const repeatedDigitsRegex = /^(\d)\1{9}$/;
//     const invalidPhones = [
//       "0000000000", "1234567890", "0123456789", "9999999999",
//       "8888888888", "7777777777", "6666666666"
//     ];

//     if (
//       !user_phone ||
//       !phoneRegex.test(user_phone) ||
//       repeatedDigitsRegex.test(user_phone) ||
//       invalidPhones.includes(user_phone)
//     ) {
//       errors.user_phone = "Please enter a valid 10-digit mobile number.";
//     }

//     // Email validation
//     if (user_email) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(user_email)) {
//         errors.user_email = "Please enter a valid email address.";
//       }
//     }

//     // Service validation
//     if (!user_service) {
//       errors.user_service = "Please select a service.";
//     }

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     try {
//       const response = await axios.post("https://api.nakshatranamahacreations.in/api/enquiries", {
//         name: user_name,
//         email: user_email,
//         phoneNo: user_phone,
//         service: user_service,
//         referenceFrom: "modal",
//         city: "Bangalore",
//       });

//       if (response.status === 200 || response.status === 201) {
//         setFormData({
//           user_name: "",
//           user_email: "",
//           user_phone: "",
//           user_service: "",
//           referenceFrom: "modal",
//           city: "Bangalore",
//         });
//         setFormErrors({});
//         setShowPopup(false);
//         router.push("/thankyou");
//       } else {
//         alert("Failed to send enquiry. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error sending enquiry:", error);
//       alert("Failed to send enquiry. Please try again later.");
//     }
//   };

//   return (
//     <Modal show={showPopup} onHide={() => setShowPopup(false)} centered size="lg">
//       <animated.div style={popupSpring}>
//         <Modal.Body className="p-4" style={{ width: "100%", maxWidth: "400px", margin: "auto" }}>
//           <Button
//             variant="light"
//             onClick={() => {
//               setFormData({
//                 user_name: "",
//                 user_email: "",
//                 user_phone: "",
//                 user_service: "",
//                 referenceFrom: "modal",
//                 city: "Bangalore",
//               });
//               setFormErrors({});
//               setShowPopup(false);
//             }}
//             style={{
//               position: "absolute",
//               top: "20px",
//               right: "20px",
//               background: "none",
//               border: "none",
//               fontSize: "20px",
//               cursor: "pointer",
//             }}
//           >
//             <BsX size={28} />
//           </Button>

//           <Card.Body style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
//             <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: "black" }}>
//               Contact Us
//             </h3>

//             <Form onSubmit={handleSubmit} className="d-flex flex-column" style={{ color: "black" }}>
//               <FloatingLabel controlId="floatingName" label="Name *" className="mb-1">
//                 <Form.Control
//                   type="text"
//                   name="user_name"
//                   placeholder="Name"
//                   value={formData.user_name}
//                   onChange={handleChange}
//                   required
//                 />
//               </FloatingLabel>
//               {formErrors.user_name && (
//                 <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
//                   {formErrors.user_name}
//                 </div>
//               )}

//               <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-1 mt-3">
//                 <Form.Control
//                   type="text"
//                   name="user_phone"
//                   placeholder="Phone Number"
//                   value={formData.user_phone}
//                   onChange={handleChange}
//                   maxLength={10}
//                   required
//                 />
//               </FloatingLabel>
//               {formErrors.user_phone && (
//                 <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
//                   {formErrors.user_phone}
//                 </div>
//               )}

//               <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-1 mt-3">
//                 <Form.Control
//                   type="email"
//                   name="user_email"
//                   placeholder="Email Address"
//                   value={formData.user_email}
//                   onChange={handleChange}
//                 />
//               </FloatingLabel>
//               {formErrors.user_email && (
//                 <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
//                   {formErrors.user_email}
//                 </div>
//               )}

//               <FloatingLabel controlId="floatingSelect" label="Our Services *" className="mb-1 mt-3">
//                 <Form.Select
//                   name="user_service"
//                   value={formData.user_service}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select a Service</option>
//                   <option value="Web Development">Web Development</option>
//                   <option value="App Development">App Development</option>
//                   <option value="Corporate Video Production">Corporate Video Production</option>
//                   <option value="Digital Marketing">Digital Marketing</option>
//                   <option value="Graphic Designing">Graphic Designing</option>
//                   <option value="2D Animations">2D Animations</option>
//                   <option value="B2B Marketing Service">B2B Marketing Service</option>
//                 </Form.Select>
//               </FloatingLabel>
//               {formErrors.user_service && (
//                 <div style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
//                   {formErrors.user_service}
//                 </div>
//               )}

//               <Button variant="dark" type="submit" style={{ width: "100%", marginTop: "20px" }}>
//                 Submit
//               </Button>
//             </Form>
//           </Card.Body>
//         </Modal.Body>
//       </animated.div>
//     </Modal>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Modal from "react-modal"; // ✅ Import react-modal
import { Button, Card, Row, Col } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";
import PopupBtn from "@/components/home/PopupBtn";

Modal.setAppElement("body"); // ✅ Required for accessibility

export default function IconsButton({ showPopup, setShowPopup }) {
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

  useEffect(() => {
    const currentPath = window.location.pathname; // safer for Next.js client-side
    let service = "";

    if (
      currentPath === "/website-development-company-in-bangalore" ||
      currentPath === "/website-development-company-in-hyderabad"
    ) {
      service = "Web Development";
    } else if (
      currentPath === "/mobile-app-development-company-in-bangalore" ||
      currentPath === "/mobile-app-development-company-hyderabad"
    ) {
      service = "App Development";
    } else if (
      currentPath === "/graphic-design-company-in-bangalore" ||
      currentPath === "/graphic-design-services-hyderabad"
    ) {
      service = "Graphic Designing";
    } else if (
      currentPath === "/digital-marketing-agency-in-bangalore" ||
      currentPath === "/digital-marketing-agency-hyderabad"
    ) {
      service = "Digital Marketing";
    } else if (
      currentPath === "/corporate-video-production-company-in-bangalore" ||
      currentPath === "/corporate-video-production-company-hyderabad"
    ) {
      service = "Corporate Video Production";
    } else if (
      currentPath === "/b2b-marketing-agency-in-bangalore" ||
      currentPath === "/b2b-marketing-company-hyderabad"
    ) {
      service = "B2B Marketing Service";
    } else if (
      currentPath === "/2d-animation-studio-in-bangalore" ||
      currentPath === "/2d-animation-studio-hyderabad"
    ) {
      service = "2D Animations";
    }

    setFormData((prev) => ({
      ...prev,
      user_service: service,
    }));
  }, []);

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
      errors.user_name =
        "Please enter a valid name (only letters, min 3 characters).";
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
      const response = await axios.post(
        "https://api.nakshatranamahacreations.in/api/enquiries",
        {
          name: user_name,
          email: user_email,
          phoneNo: user_phone,
          service: user_service,
          referenceFrom: "website",
          city: "Bangalore",
        }
      );

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
        setShowPopup(false);
      } else {
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Failed to send enquiry. Please check the console for details.");
    }
  };

  return (
    <Modal
      isOpen={showPopup}
      onRequestClose={() => setShowPopup(false)}
      overlayClassName="modal-overlay"
      className="modal-content-custom"
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <Card className="popup-card shadow-lg p-4 position-relative border-0">
        <Button
          variant="light"
          className="close-btn"
          onClick={() => setShowPopup(false)}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <BsX size={28} />
        </Button>

        <Card.Body>
          <h3
            className="text-center mb-3"
            style={{ fontWeight: "bold", fontSize: "26px" }}
          >
            Contact Us
          </h3>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12}>
                <FloatingLabel
                  controlId="floatingName"
                  label="Name *"
                  className="mb-3"
                >
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
                  <div className="text-danger small">
                    {formErrors.user_name}
                  </div>
                )}
              </Col>

              <Col xs={12}>
                <FloatingLabel
                  controlId="floatingPhone"
                  label="Phone Number *"
                  className="mb-3"
                >
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
                  <div className="text-danger small">
                    {formErrors.user_phone}
                  </div>
                )}
              </Col>

              <Col xs={12}>
                <FloatingLabel
                  controlId="floatingEmail"
                  label="Email Address *"
                  className="mb-3"
                >
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
                  <div className="text-danger small">
                    {formErrors.user_email}
                  </div>
                )}
              </Col>

              <Col xs={12}>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Our Services *"
                  className="mb-3"
                >
                  <Form.Select
                    name="user_service"
                    disabled
                    value={formData.user_service}
                    onChange={handleChange}
                    required
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
                </FloatingLabel>
                {formErrors.user_service && (
                  <div className="text-danger small">
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
