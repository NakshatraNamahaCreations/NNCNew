"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSprings, useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Script from "next/script"; // Next.js Head component for SEO
import Breadcrumbs from "@/components/BreadCrumbs.jsx";
import Form_Validation_Admin from "@/components/contact/Form_Validation_Admin.jsx";
import Cont_Mail_Media from "@/components/contact/Cont_Mail_Media.jsx";
import Location_Address from "@/components/contact/Location_Address.jsx";

export default function ContactClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Nakshatra Namaha Creations",
        url: "https://www.nakshatranamahacreations.com/",
        logo: "https://www.nakshatranamahacreations.com/media/nnclogo.png",
        sameAs: [
          "https://www.facebook.com/Nakshatranamahacreations/",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
          "https://x.com/nncbengaluru",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9900566466",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Kannada"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        image: "https://www.nakshatranamahacreations.com/office-photo.jpg",
        url: "https://www.nakshatranamahacreations.com/",
        telephone: "+91-9900566466",
        email: "info@nakshatranamahacreations.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.264056680993265,
          longitude: 76.6444222231926,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "19:00",
          },
        ],
        priceRange: "₹₹",
        paymentAccepted: "Cash, Credit Card, Online Payment",
        sameAs: [
          "https://www.facebook.com/nakshatranamahacreations",
          "https://www.linkedin.com/company/nakshatra-namaha-creation/",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.nakshatranamahacreations.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: "https://www.nakshatranamahacreations.com/contact-us",
          },
        ],
      },
    ],
  };

  const { ref: h1Ref, inView: h1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const words = ["Contact", "Us"];

  const h1Animations = useSprings(
    words.length,
    words.map((_, index) => ({
      opacity: h1InView ? 1 : 0,
      transform: h1InView ? "translateY(0px)" : "translateY(20px)",
      config: { tension: 100, friction: 30 },
      delay: index * 300,
    }))
  );

  const h4Animation = useSpring({
    opacity: h1InView ? 1 : 0,
    transform: h1InView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 50, friction: 20 },
    delay: 800,
  });

  const h4Animation1 = useSpring({
    opacity: h1InView ? 1 : 0,
    transform: h1InView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 50, friction: 20 },
    delay: 1000,
  });

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <div>
      {/* Meta Pixel Code */}
      <Script>
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '2226129677535551');fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {` <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2226129677535551&ev=PageView&noscript=1" />`}
      </noscript>
      {/* End Meta Pixel Code */}
      <Script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </Script>

      <Breadcrumbs paths={breadcrumbPaths} />

      {/* Banner */}
      <div className="d-flex align-items-center justify-content-center">
        <div
          ref={h1Ref}
          style={{ marginTop: "10%", marginBottom: "5%", textAlign: "center" }}
        >
          {/* Animated H1 */}
          <h1
            style={{
              fontSize: "65px",
              fontWeight: "900",
              letterSpacing: "3px",
              marginBottom: "1%",
            }}
            className="h1-banner-letstalk"
          >
            {words.map((word, index) => (
              <animated.span key={index} style={h1Animations[index]}>
                {word}{" "}
              </animated.span>
            ))}
          </h1>

          <animated.h4
            style={{
              fontSize: "35px",
              fontWeight: "100",
              lineHeight: 1.5,
              letterSpacing: "2px",
              ...h4Animation,
            }}
            className="h4-lets-banner"
          >
            Let’s connect and craft
          </animated.h4>
          <animated.h4
            style={{
              fontSize: "35px",
              fontWeight: "100",
              lineHeight: 1.5,
              letterSpacing: "2px",
              ...h4Animation1,
            }}
            className="h4-lets-banner"
          >
            new ideas together
          </animated.h4>
        </div>
      </div>

      <Cont_Mail_Media />

      <Form_Validation_Admin />

      <Location_Address />
    </div>
  );
}
