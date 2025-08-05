"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhone, FaEllipsisH } from "react-icons/fa";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { name: "whatsapp", label: "WhatsApp", icon: <FaWhatsapp size={20} />, action: () => window.open("https://wa.me/919900566466", "_blank") },
    { name: "call", label: "Call", icon: <FaPhone size={20} />, action: () => (window.location.href = "tel:+919900566466") },
    { name: "more", label: "More", icon: <FaEllipsisH size={20} />, action: () => alert("Feature coming soon!") },
  ];

  return (
    <div className="bottom-nav shadow-lg">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`nav-item ${activeTab === tab.name ? "active" : ""}`}
          onClick={() => {
            setActiveTab(tab.name);
            tab.action();
          }}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </div>
      ))}

      <style jsx>{`
        .bottom-nav {
          position: fixed;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          background: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 10px 0;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
          color: gray;
          flex: 1;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-item svg {
          font-size: 24px;
          margin-bottom: 2px;
        }
        .nav-item.active {
          color: #6f42c1;
        }
        .nav-item.active::before {
          content: "";
          position: absolute;
          top: -8px;
          width: 50%;
          height: 3px;
          background: #6f42c1;
          border-radius: 10px;
        }
        @media (min-width: 768px) {
          .bottom-nav {
            display: none; /* Show only on mobile */
          }
        }
      `}</style>
    </div>
  );
}
