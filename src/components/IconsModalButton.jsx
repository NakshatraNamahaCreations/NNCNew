import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function IconsModalButton() {
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter(); // Use Next.js router

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_service: "",
    });

    useEffect(() => {
        const path = router.pathname; // Get the current route
        if (path === "/website-development-company-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "Web Development"
            }));
        } else if (path === "/mobile-app-development-company-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "App Development"
            }));
        } else if (path === "/graphic-design-company-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "Graphic Designing"
            }));
        } else if (path === "/digital-marketing-agency-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "Digital Marketing"
            }));
        } else if (path === "/corporate-video-production-company-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "Corporate Video Production"
            }));
        } else if (path === "/b2b-marketing-agency-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "B2B Marketing Service"
            }));
        } else if (path === "/2d-animation-studio-in-bangalore") {
            setFormData(prev => ({
                ...prev,
                user_service: "2D Animations"
            }));
        }
    }, [router.pathname]); // Using router.pathname instead of location.pathname

    // Animation for popup
    const popupSpring = useSpring({
        opacity: showPopup ? 1 : 0,
        transform: showPopup ? "scale(1)" : "scale(0.8)",
        config: { tension: 250, friction: 20 },
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { user_name, user_phone, user_service } = formData;

        if (!user_name || !user_phone || !user_service) {
            alert("Please enter mandatory fields");
            return;
        }

        try {
            const response = await axios.post("https://api.brevo.com/v3/smtp/email",
                {
                    tag: "mytag",
                    sender: { name: "Nakshatra Namaha Creations", email: "developersnnc@gmail.com" },
                    htmlContent: `
              <html>
                <body>
                  <h1>New Contact Form Submission</h1>
                  <p><strong>Name:</strong> ${formData.user_name}</p>
                  <p><strong>Email:</strong> ${formData.user_email}</p>
                  <p><strong>Phone:</strong> ${formData.user_phone}</p>
                  <p><strong>Service:</strong> ${formData.user_service}</p>
                </body>
              </html>
          `,
                    subject: "New Contact Form Submission",
                    to: [{ email: "info@nakshatranamahacreations.com", name: "Operations NNC" }],
                },
                { headers: { "Content-Type": "application/json", "api-key": "your-api-key" } }
            );

            if (response.status === 201) {
                router.push("/thankyou"); // Use Next.js routing with router.push
                setFormData({ user_name: "", user_email: "", user_phone: "", user_service: "" });
                setShowPopup(false);
            } else {
                alert("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please check the console for details.");
        }
    };

    return (
        <>
            {/* Open Popup Button */}
            <Button
                variant="outline-dark"
                className="btn-talk-banner"
                style={{
                    borderRadius: "50px",
                    padding: "15px 20px",
                    width: "275px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    marginLeft: '40%',
                    fontSize: "40px",
                    boxShadow: "3px 3px 1px 0px rgb(0, 0, 0)",
                }}

                onClick={() => setShowPopup(true)}
            >
                Let's talk
            </Button>

            {/* Popup Form */}
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
                        {/* Close Button */}
                        <Button
                            variant="light"
                            className="close-btn"
                            onClick={() => setShowPopup(false)}
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
                            <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: 'black' }}>
                                Contact Us
                            </h3>
                            {/* Form */}
                            <Form onSubmit={handleSubmit} className="d-flex flex-column" style={{ color: 'black' }}>
                                <FloatingLabel controlId="floatingName" label="Name *" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="user_name"
                                        placeholder="Name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="user_phone"
                                        placeholder="Phone Number"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
                                    <Form.Control
                                        type="email"
                                        name="user_email"
                                        placeholder="Email Address"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                    />
                                </FloatingLabel>

                                {/* <FloatingLabel controlId="floatingSelect" label="Our Services *" className="mb-3"> */}
                                <Form.Select name="user_service" disabled value={formData.user_service} onChange={handleChange} className="mb-3" required>
                                    <option value="">Select a Service</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Corporate Video Production">Corporate Video Production</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Graphic Designing">Graphic Designing</option>
                                    <option value="2D Animations">2D Animations</option>
                                    <option value="B2B Marketing Service">B2B Marketing Service</option>
                                </Form.Select>
                                {/* </FloatingLabel> */}

                                <Button variant="dark" type="submit" style={{ width: "100%" }}>
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
