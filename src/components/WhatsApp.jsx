"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Button } from "react-bootstrap";

export default function WhatsAppButtons() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/919900566466", "_blank");
    }
  };

  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:+919900566466";
    }
  };

  return (
    <div
      className="floating-buttons"
      style={{
        position: "fixed",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* WhatsApp Button */}
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          width: "55px",
          height: "55px",
          backgroundColor: "#25D366",
          color: "#fff",
          border: "none",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
        }}
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp style={{ fontSize: "24px" }} />
      </Button>

      {/* Phone Button */}
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          width: "55px",
          height: "55px",
          backgroundColor: "#28abe5",
          color: "#fff",
          border: "none",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
        }}
        onClick={handlePhoneClick}
      >
        <FaPhone style={{ fontSize: "22px" }} />
      </Button>

      {/* ✅ Style for responsive bottom spacing */}
      <style jsx>{`
        .floating-buttons {
          bottom: 20px;
        }
        @media (max-width: 768px) {
          .floating-buttons {
            bottom: 60px;
          }
        }
      `}</style>
    </div>
  );
}
