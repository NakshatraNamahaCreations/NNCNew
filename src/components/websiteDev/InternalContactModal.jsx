// "use client";

// import { useState, useEffect } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import { Button, Card, Form, FloatingLabel, Modal } from "react-bootstrap";
// import { BsX } from "react-icons/bs";
// import axios from "axios";
// import { useRouter } from "next/navigation"; // Use Next.js router instead of react-router

// export default function InternalContactModal({ showPopup, setShowPopup }) {
//     const router = useRouter(); // Use Next.js router

//     const [formData, setFormData] = useState({
//         user_name: "",
//         user_email: "",
//         user_phone: "",
//         user_service: "",
//     });

//     useEffect(() => {
//         const path = router.pathname; // Use Next.js pathname
//         if (path === "/mobile-app-development-company-in-bangalore") {
//             setFormData(prev => ({
//                 ...prev,
//                 user_service: "App Development"
//             }));
//         } else if (path === "/graphic-design-company-in-bangalore") {
//             setFormData(prev => ({
//                 ...prev,
//                 user_service: "Graphic Designing"
//             }));
//         } else if (path === "/digital-marketing-agency-in-bangalore") {
//             setFormData(prev => ({
//                 ...prev,
//                 user_service: "Digital Marketing"
//             }));
//         } else if (path === "/corporate-video-production-company-in-bangalore") {
//             setFormData(prev => ({
//                 ...prev,
//                 user_service: "Corporate Video Production"
//             }));
//         }
//     }, [router.pathname]);

//     // Animation for popup
//     const popupSpring = useSpring({
//         opacity: showPopup ? 1 : 0,
//         transform: showPopup ? "scale(1)" : "scale(0.8)",
//         config: { tension: 250, friction: 20 },
//     });

//     // Handle Input Change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     // Handle Form Submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { user_name, user_phone, user_service } = formData;

//         if (!user_name || !user_phone || !user_service) {
//             alert("Please enter mandatory fields");
//             return;
//         }

//         try {
//             const response = await axios.post("https://api.brevo.com/v3/smtp/email", {
//                 tag: "mytag",
//                 sender: { name: "Nakshatra Namaha Creations", email: "developersnnc@gmail.com" },
//                 htmlContent: `
//                 <html>
//                   <body>
//                     <h1>New Contact Form Submission</h1>
//                     <p><strong>Name:</strong> ${formData.user_name}</p>
//                     <p><strong>Email:</strong> ${formData.user_email}</p>
//                     <p><strong>Phone:</strong> ${formData.user_phone}</p>
//                     <p><strong>Service:</strong> ${formData.user_service}</p>
//                   </body>
//                 </html>
//                 `,
//                 subject: "New Contact Form Submission",
//                 to: [{ email: "info@nakshatranamahacreations.com", name: "Operations NNC" }],
//             }, {
//                 headers: { "Content-Type": "application/json", "api-key": "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" }
//             });

//             if (response.status === 201) {
//                 router.push("/thankyou"); // Use Next.js router for navigation
//                 setFormData({ user_name: "", user_email: "", user_phone: "", user_service: "" });
//                 setShowPopup(false);
//                 window.location.reload();
//             } else {
//                 alert("Failed to send email. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error sending email:", error);
//             alert("Failed to send email. Please check the console for details.");
//         }
//     };

//     return (
//         <Modal
//             show={showPopup}
//             onHide={() => setShowPopup(false)}
//             centered
//             size="sm"
//         >
//         <animated.div style={{ ...popupSpring, backgroundColor: "" }}>
//                 <Modal.Body className="p-4" style={{ width: '400px', }}>
//                     <Button
//                         variant="light"
//                         className="close-btn "
//                         onClick={() => setShowPopup(false)}
//                         style={{
//                             position: "absolute",
//                             top: "20px",
//                             right: "20px",
//                             background: "none",
//                             border: "none",
//                             fontSize: "20px",
//                             cursor: "pointer",
//                         }}
//                     >
//                         <BsX size={28} />
//                     </Button>

//                     <Card.Body style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
//                         <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: 'black' }}>
//                             Contact Us
//                         </h3>
//                         <Form onSubmit={handleSubmit} className="d-flex flex-column" style={{ color: 'black' }}>
//                             <FloatingLabel controlId="floatingName" label="Name *" className="mb-3">
//                                 <Form.Control
//                                     type="text"
//                                     name="user_name"
//                                     placeholder="Name"
//                                     value={formData.user_name}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </FloatingLabel>

//                             <FloatingLabel controlId="floatingPhone" label="Phone Number *" className="mb-3">
//                                 <Form.Control
//                                     type="text"
//                                     name="user_phone"
//                                     placeholder="Phone Number"
//                                     value={formData.user_phone}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </FloatingLabel>

//                             <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
//                                 <Form.Control
//                                     type="email"
//                                     name="user_email"
//                                     placeholder="Email Address"
//                                     value={formData.user_email}
//                                     onChange={handleChange}
//                                 />
//                             </FloatingLabel>

//                             <Form.Select name="user_service" disabled value={formData.user_service} onChange={handleChange} className="mb-3" required>
//                                 <option value="">Select a Service</option>
//                                 <option value="Web Development">Web Development</option>
//                                 <option value="App Development">App Development</option>
//                                 <option value="Corporate Video Production">Corporate Video Production</option>
//                                 <option value="Digital Marketing">Digital Marketing</option>
//                                 <option value="Graphic Designing">Graphic Designing</option>
//                                 <option value="2D Animations">2D Animations</option>
//                                 <option value="B2B Marketing Service">B2B Marketing Service</option>
//                             </Form.Select>

//                             <Button variant="dark" type="submit" style={{ width: "100%" }}>
//                                 Submit
//                             </Button>
//                         </Form>
//                     </Card.Body>
//                 </Modal.Body>
//             </animated.div>
//         </Modal>
//     );
// }


'use client';

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, Card, Form, FloatingLabel, Modal } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/navigation";  // Using Next.js's router

export default function InternalContactModal({ showPopup, setShowPopup }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        user_service: "",
    });

    // Dynamically set the user_service based on the path
    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/mobile-app-development-company-in-bangalore") {
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
        }
    }, []);

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
                { headers: { "Content-Type": "application/json", "api-key": "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" } }
            );

            if (response.status === 201) {
                router.push("/thankyou"); // Using Next.js router for navigation
                setFormData({ user_name: "", user_email: "", user_phone: "", user_service: "" });
                setShowPopup(false);
                window.location.reload();
            } else {
                alert("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please check the console for details.");
        }
    };

    return (
        <Modal
            show={showPopup}
            onHide={() => setShowPopup(false)}
            centered
            size="lg"            
        >
            <animated.div style={popupSpring} >
                <Modal.Body className="" style={{ width: '400px' }}>
                    <Button
                        variant="light"
                        className="close-btn "
                        onClick={() => setShowPopup(false)}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            background: "none",
                            border: "none",
                            fontSize: "20px",
                            cursor: "pointer",
                        }}
                    >
                        <BsX size={28} />
                    </Button>

                    <Card.Body style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                        <h3 className="text-center mb-3" style={{ fontWeight: "bold", color: 'black' }}>
                            Contact Us
                        </h3>
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

                            <Button variant="dark" type="submit" style={{ width: "100%" }}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Modal.Body>
            </animated.div>
        </Modal>
    );
}
