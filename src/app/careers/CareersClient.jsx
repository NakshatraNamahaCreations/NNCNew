
"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CareerSearch from "@/components/careers/CareerSearch";
import CurrentJobs from "@/components/careers/CurrentJobs";
import RecruitmentProcess from "@/components/careers/RecruitmentProcess";
import { Container } from "react-bootstrap";
import Icons from "@/components/Icons";
import FunMedia from "@/components/careers/FunMedia";
import Sail from "@/components/careers/Sail";
import Script from "next/script";
import Breadcrumbs from "@/components/BreadCrumbs";
import Image from "next/image";

export default function CareersPage() {
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Nakshatra Namaha Creations",
        "url": "https://www.nakshatranamahacreations.com/",
        "logo": "https://www.nakshatranamahacreations.com/media/nnclogo.png",
        "sameAs": [
          "https://www.facebook.com/Nakshatranamahacreations/",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
          "https://x.com/nncbengaluru"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9900566466",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi", "Kannada"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560061",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Nakshatra Namaha Creations",
        "image": "https://www.nakshatranamahacreations.com/office-photo.jpg",
        "url": "https://www.nakshatranamahacreations.com/",
        "telephone": "+91-9900566466",
        "email": "info@nakshatranamahacreations.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560061",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.264056680993265,
          "longitude": 76.6444222231926
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:30",
            "closes": "19:00"
          }
        ],
        "priceRange": "₹₹",
        "paymentAccepted": "Cash, Credit Card, Online Payment",
        "sameAs": [
          "https://www.facebook.com/nakshatranamahacreations",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.nakshatranamahacreations.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Careers",
            "item": "https://www.nakshatranamahacreations.com/careers"
          }
        ]
      }
    ]
  };

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Careers", link: "/careers" },
  ];

  return (
    <div>


      <script>
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2226129677535551');
fbq('track', 'PageView');`}
      </script>
      <noscript>
        {` <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=2226129677535551&ev=PageView&noscript=1"
          />`}
      </noscript>
      {/* <!-- End Meta Pixel Code --> */}

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Breadcrumbs */}
      <Breadcrumbs paths={breadcrumbPaths} />

      {/* Banner */}
      <div style={{ padding: "2px" }} className="d-flex align-items-center justify-content-center">
        <div style={{ marginTop: "5%", marginBottom: "6%", textAlign: "center" }}>
          <h1 style={{ fontWeight: "900", fontSize: "65px", letterSpacing: "3px", marginBottom: "1%" }} className="h1-careers">
            Jobs that match{" "}
            <span>
              <FontAwesomeIcon icon={faCircle} size="xs" style={{ color: "#000000", width: "20px", height: "20px" }} className="h1-about-banner-icon" />
            </span>{" "}
            your passion
          </h1>
          {/* SEARCH */}
          <CareerSearch />
        </div>
      </div>

      {/* Current Openings */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontWeight: "900", fontSize: "65px", letterSpacing: "3px", marginBottom: "1%", marginTop: "2%" }} className="currentopening">
          Current Openings
        </h2>
        <CurrentJobs />
      </div>

      {/* Learn Our Recruitment Process */}
      <div style={{ textAlign: "center", margin: "5% 10% 1% 10%" }}>
        <h2 style={{ fontWeight: "900", fontSize: "55px", letterSpacing: "3px", marginBottom: "1%" }} className="recruitmentprocess">
          Learn Our Recruitment Process
        </h2>
        <p style={{ lineHeight: "1.9", letterSpacing: "1px", fontWeight: "400", fontSize: "20px" }} className="p-recruitmentprocess">
          The recruitment process begins with submission of CVs, followed by phone screening, assessment and a final interview. At Nakshatra Namaha
          Creations we believe in working together and working hard. With over 8000 happy clients, we are looking for dynamic and creative individuals
          who are willing to dedicate themselves to providing innovative products and services for our clients.
        </p>
      </div>
      <RecruitmentProcess />

      {/* Social Work */}
      <FunMedia />

      {/* Come Sail With Us */}
      <Sail />

      <div style={{ marginTop: "5%" }}>
        <Container>
          <Icons />
        </Container>
      </div>
    </div>
  );
}
