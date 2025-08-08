"use client";

import { Container } from "react-bootstrap";
import Image from "next/image";
import Icons from "@/components/Icons.jsx";
import Services_Tools from "@/components/services/Services_Tools.jsx";
import MobileDev from "@/components/services/MobileDev.jsx";
import DigitalMar from "@/components/services/DigitalMar.jsx";
import WebsiteDev from "@/components/services/WebsiteDev.jsx";
import GraphicDesign from "@/components/services/GraphicDesign.jsx";
import VideoProd from "@/components/services/VideoProd.jsx";
import B2BMar from "@/components/services/B2BMar.jsx";
import Animation2d from "@/components/services/Animation2d.jsx";
import { useInView } from "react-intersection-observer";
import { useSprings, useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import Script from "next/script";
import Breadcrumbs from "@/components/BreadCrumbs.jsx";


export default function Service_Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.nakshatranamahacreations.com/#organization",
                name: "Nakshatra Namaha Creations",
                url: "https://www.nakshatranamahacreations.com",
                logo: "https://www.nakshatranamahacreations.com/media/logo.png",
                sameAs: [],
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://www.nakshatranamahacreations.com/#localbusiness",
                name: "Nakshatra Namaha Creations",
                image: "https://www.nakshatranamahacreations.com/media/logo.png",
                url: "https://www.nakshatranamahacreations.com",
                address: {
                    "@type": "PostalAddress",
                    streetAddress:
                        "1st floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra",
                    addressLocality: "Bangalore",
                    addressRegion: "Karnataka",
                    postalCode: "560061",
                    addressCountry: "IN",
                },
                telephone: "+91-9900566466",
                email: "info@nakshatranamahacreations.com",
                priceRange: "₹",
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 12.900525119796741,
                    longitude: 77.52318771928213,
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://www.nakshatranamahacreations.com",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Services",
                        item: "https://www.nakshatranamahacreations.com/services",
                    },
                ],
            },
            {
                "@type": "Service",
                name: "Website Development",
                provider: {
                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                },
            },
            {
                "@type": "Service",
                name: "Mobile App Development",
                provider: {
                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                },
            },
            {
                "@type": "Service",
                name: "Corporate Video Production",
                provider: {
                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                },
            },
            {
                "@type": "Service",
                name: "Digital Marketing",
                provider: {
                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                },
            },
            {
                "@type": "Service",
                name: "2D Animation",
                provider: {
                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                },
            },
            {
                "@type": "Service",
                name: "Graphic Design",
                provider: {
                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                },
            },
            {
                "@type": "Service",
                name: "B2B Marketing Services",
                provider: {
                    "@id": "https://www.nakshatranamahacreations.com/#organization",
                },
            },
        ],
    };

    const [startImageAnimation, setStartImageAnimation] = useState(false);

    const { ref: h1Ref, inView: h1InView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const words = ["Our", "Services"];

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

    useEffect(() => {
        if (h1InView) {
            setTimeout(() => {
                setStartImageAnimation(true);
            }, 1500);
        }
    }, [h1InView]);

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const imageAnimation = useSpring({
        opacity: startImageAnimation && imageInView ? 1 : 0,
        transform: startImageAnimation && imageInView ? "scale(1)" : "scale(0.8)",
        config: { tension: 100, friction: 20 },
    });

    const breadcrumbPaths = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
    ];

    return (
        <div>

            <Script
                id="services-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />


            <Breadcrumbs paths={breadcrumbPaths} />

            {/* Banner Section */}
            <div className="d-flex align-items-center justify-content-center our-service">
                <div ref={h1Ref} style={{ marginBlock: "8%", textAlign: "center" }}>
                    <h1
                        style={{
                            fontSize: "65px",
                            fontWeight: "900",
                            letterSpacing: "3px",
                            marginBottom: "1%",
                        }}
                        className="h1-banner-services"
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
                        className="h4-banner-services"
                    >
                        We offer a wide range of creative services to help
                    </animated.h4>
                    <animated.h4
                        style={{
                            fontSize: "35px",
                            fontWeight: "100",
                            lineHeight: 1.5,
                            letterSpacing: "2px",
                            ...h4Animation1,
                        }}
                        className="h4-banner-services"
                    >
                        businesses of all sizes achieve their goal.
                    </animated.h4>
                </div>
            </div>

            <Services_Tools />

            <Container style={{ margin: "5% auto" }}>
                <MobileDev />
                <DigitalMar />
                <WebsiteDev />
                <GraphicDesign />
                <VideoProd />
                <B2BMar />
                <Animation2d />
            </Container>

            {/* Banner - Image with Animation */}
            <div
                ref={imageRef}
                style={{
                    backgroundColor: "#F7EDE8",
                    width: "100%",
                    padding: "10% 0%",
                    paddingBottom: "10%",
                    marginTop: "10%",
                }}
                className="bottom-banner"
            >
                <animated.div style={{ ...imageAnimation, width: "100%", position: "relative" }}>
                    <Image
                        src="/media/NNCWebsite_ServicePage_V1_purpose.png"
                        alt="banner1"
                        layout="responsive"
                        width={1200}
                        height={700}
                        style={{ objectFit: "cover" }}
                        priority
                    />

                </animated.div>

            </div>

            <div style={{ marginTop: "5%" }}>
                <Container>
                    <Icons />
                </Container>
            </div>
        </div>
    );
}
