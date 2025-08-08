"use client";

import { useEffect, useState } from "react";
const mobileapp = "/media/OBJECTS.png";
import {
  Container,
  Row,
  Col,
  Card,
  FloatingLabel,
  Button,
  Form,
} from "react-bootstrap";
const mobileicon = "/media/Group39.png";
const iosmobile = "/media/iOSMobileAppDevelopment.png";
const andriod = "/media/AndroidMobileAppDevelopment.png";
const flutterapp = "/media/FlutterMobileAppDevelopment.png";
const reactapp = "/media/ReactNativeMobileAppDevelopment.png";
const mobileappdev = "/media/MobileAppDevelopment_Icon.png";
const customobileappdev = "/media/CustomisedMobileAppDevelopment_Icon.png";
const IncreasesCustomerEngagement = "/media/IncreasesCustomerEngagement.png";
const BoostsBrandVisibility = "/media/BoostsBrandVisibility.png";
const SimplifiesCustomerInteraction =
  "/media/SimplifiesCustomerInteraction.png";
const ImprovesSalesandRevenue = "/media/ImprovesSalesandRevenue.png";
const StrengthensCustomerLoyalty = "/media/StrengthensCustomerLoyalty.png";
const SpeedsUpMarketingEfforts = "/media/SpeedsUpMarketingEfforts.png";
const GivesaCompetitiveEdge = "/media/GivesaCompetitiveEdge.png";
const SupportsBusinessGrowth = "/media/SupportsBusinessGrowth.png";
import MobileAppCards from "@/components/mobileApp/MobileAppCards";
import IndustriesServedMobileApp from "@/components/IndustriesServedMobileApp";
import ClientImagesMobileApp from "@/components/websiteDev/ClientImagesMobileApp";
const bgservicesblue = "/media/bg-services-blue.jpeg";
const bgservicesyellow = "/media/bg-services-yellow.jpeg";
import { useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const testimonalImages = "/media/NNCWebsite_V3_Testimonials.png";
const testimonalImages1 = "/media/NNCWebsite_V3_Testimonials1.png";

import PlanBtn from "@/components/websiteDev/PlanBtn";
import ContactFrom from "@/components/ContactForm";
import Breadcrumbs from "@/components/BreadCrumbs";
import InternalContactModal from "@/components/websiteDev/InternalContactModal";
import IconsModal from "@/components/IconsModal";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSlick from "@/components/websiteDev/TestimonialsSlick";
import FAQs from "@/components/home/FAQs";
import KeywordsSection from "@/components/KeywordsSection";

const faqs = [
  // FAQ List
  {
    question: "Why does my business need a mobile app?",
    answer:
      "A mobile app increases customer engagement, improves sales and makes your services accessible anytime. It also helps build brand loyalty and gives you an edge over competitors.",
  },
  {
    question: "Will my app work on both Android and iOS?",
    answer:
      "Yes, we develop native apps for Android and iOS, as well as cross-platform apps using Flutter and React Native to ensure smooth performance on both platforms.",
  },
  {
    question: "How do you ensure the security of my mobile app?",
    answer:
      "We implement strong security protocols like encryption, authentication and secure APIs to protect user data and prevent unauthorized access.",
  },
  {
    question: "Will you help with app store submission?",
    answer:
      "Yes, we assist in launching your app on Google Play Store and Apple App Store, ensuring it meets all guidelines for approval.",
  },
  {
    question: "How can I track the performance of my app?",
    answer:
      "We integrate analytics tools that help monitor user engagement, downloads, and other key metrics for business insights.",
  },
  {
    question:
      "Can my app integrate with third-party services like payment gateways and CRM systems?",
    answer:
      "You can contact us by phone, email or on our website, and our team can guide you through the process.",
  },
];
// Testimonial Data
const testimonials = [
  {
    image: testimonalImages,
    name: "- Rahul Mehta",
    text: "Partnering with Nakshatra Namaha Creations for our business was an excellent idea. The mobile app they built has simplified our ordering process and customer interaction immensely. Our sales have been through the roof and customers are thrilled with their shopping experience. Their team was extremely responsive when it came to implementing updates and responding to any questions. I would gladly recommend them to anyone looking for a great mobile app development company!",
  },
  {
    image: testimonalImages1,
    name: "- Vivek Sinha",
    text: "Our logistics startup required an Android and iOS app, and Nakshatra Namaha Creations was above our expectations. The application included features such as real time tracking, automated dispatching, and easy payments to streamline our operations. The development process went very smoothly, and they delivered the project on time. I recommend them to any business in need of mobile app development services in Bangalore.",
  },
  {
    image: testimonalImages,
    name: "- Neha Verma",
    text: "We worked with Nakshatra Namaha Creations to create our hotel booking app and we are very satisfied with the outcome. The app offers real-time availability, instant reservations and hassle-free payment options all of which make it extremely convenient for our customers. Furthermore, they were a professional and supportive team that delivered the project according to our expectations.",
  },
  {
    image: testimonalImages1,
    name: "- Karthik Reddy",
    text: "Nakshatra Namaha Creations built a mobile app for our retail business that has all the features we needed to make online ordering and customer management easy. The app is fast, smooth, and completely matched our business requirements. Nakshatra Namaha Creations provided timely updates and made integration with our inventory system easy.",
  },
];

export default function MobileAppPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
          "https://www.instagram.com/nnc.digitalbengaluru/",
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
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560061",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        image: "https://www.nakshatranamahacreations.com/media/OBJECTS.png",
        url: "https://www.nakshatranamahacreations.com/mobile-app-development-company-in-bangalore",
        telephone: "+91-9900566466",
        email: "info@nakshatranamahacreations.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra",
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
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Mobile App Development",
        },
        author: {
          "@type": "Person",
          name: "Rahul Mehta",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Working with Nakshatra Namaha Creations was a great decision for our business. The mobile app they developed has made order management and customer interactions much easier. Our sales have increased significantly and customers love the smooth shopping experience. Their team was always responsive, ensuring timely updates and improvements. I highly recommend them to anyone looking for a reliable mobile app development company.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Mobile App Development",
        },
        author: {
          "@type": "Person",
          name: "Vivek Sinha",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: `"We needed an Android and iOS app for our logistics startup and Nakshatra Namaha Creations exceeded our expectations. The app provides real-time tracking, automated dispatching and seamless payments, making our operations much more efficient. Their development process was smooth and they delivered the project on time. Highly recommended for businesses looking for mobile app development services in Bangalore": "2025-04-20"`,
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Mobile App Development",
        },
        author: {
          "@type": "Person",
          name: "Neha Verma",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Our hotel booking app was developed by Nakshatra Namaha Creations and we are extremely happy with the results. The app provides real-time availability, instant bookings and smooth payment options, making it very convenient for our customers. Their team was professional, supportive and delivered the project as per our expectations.",
        datePublished: "2025-03-15",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Service",
          name: "Mobile App Development",
        },
        author: {
          "@type": "Person",
          name: "Karthik Reddy",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Nakshatra Namaha Creations developed a feature-rich mobile app for our retail business, making online ordering and customer management effortless. The app is smooth, fast, and perfectly aligned with our business needs. Their team ensured timely updates and seamless integration with our inventory system.",
        datePublished: "2025-05-10",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why does my business need a mobile app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A mobile app increases customer engagement, improves sales and makes your services accessible anytime. It also helps build brand loyalty and gives you an edge over competitors.",
            },
          },
          {
            "@type": "Question",
            name: "Will my app work on both Android and iOS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we develop native apps for Android and iOS, as well as cross-platform apps using Flutter and React Native to ensure smooth performance on both platforms.",
            },
          },
          {
            "@type": "Question",
            name: "How do you ensure the security of my mobile app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement strong security protocols like encryption, authentication and secure APIs to protect user data and prevent unauthorized access.",
            },
          },
          {
            "@type": "Question",
            name: "Will you help with app store submission?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we assist in launching your app on Google Play Store and Apple App Store, ensuring it meets all guidelines for approval.",
            },
          },
          {
            "@type": "Question",
            name: "How can I track the performance of my app?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We integrate analytics tools that help monitor user engagement, downloads, and other key metrics for business insights.",
            },
          },
          {
            "@type": "Question",
            name: "Can my app integrate with third-party services like payment gateways and CRM systems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate payment gateways, CRM tools, social media platforms and other APIs for seamless functionality.",
            },
          },
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
            name: "Website Development Service",
            item: "https://www.nakshatranamahacreations.com/mobile-app-development-company-in-bangalore",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Buttons list
  const buttons = [
    {
      title: "Website Developement in Bangalore",
      link: "/website-development-company-in-bangalore",
    },
    {
      title: "Graphic Designer in Bangalore",
      link: "/graphic-design-company-in-bangalore",
    },
    {
      title: "Digital Marketing Agency in Bangalore",
      link: "/digital-marketing-agency-in-bangalore",
    },
    {
      title: "Corporate Video Production in Bangalore",
      link: "/corporate-video-production-company-in-bangalore",
    },
    {
      title: "2D Animation Service in Bangalore",
      link: "/2d-animation-studio-in-bangalore",
    },
    {
      title: "B2B Marketing Service in Bangalore",
      link: "/b2b-marketing-agency-in-bangalore",
    },
  ];

  // Sequential animation for buttons using useTrail
  const buttonTrail = useTrail(buttons.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    from: { opacity: 0, transform: "scale(0.8)" },
    config: { tension: 200, friction: 12 },
    delay: 200,
  });

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    {
      name: "Mobile App Development Company in Bangalore",
      link: "/mobile-app-development-company-in-bangalore",
    },
  ];

  return (
    <>
      <div>
        {/* <!-- Meta Pixel Code --> */}
        <Script>
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
        </Script>
        <noscript>
          {` <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=2226129677535551&ev=PageView&noscript=1"
          />`}
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}

        <Script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </Script>

        <Breadcrumbs paths={breadcrumbPaths} />

        <Container
          style={{ marginBottom: "7%", marginTop: "3%" }}
          id="mobileApp_page"
        >
          <Row className="d-flex justify-content-between align-items-center gap-2">
            <Col sm={7}>
              <div style={{ marginTop: "2%", marginBottom: "5%" }}>
                <h2 style={{ fontWeight: "600" }}>
                  MOBILE APP DEVELOPMENT COMPANY
                </h2>
                <h6>
                  Building a strong business presence starts with creating
                  innovative and user-friendly mobile applications.
                </h6>
              </div>
              <Image
                src={mobileapp}
                alt="mobileapp-icon"
                className="img-fluid"
                style={{ width: "70%", height: "auto", objectFit: "cover" }}
                width={500} // Add a width and height for image optimization
                height={300}
              />
            </Col>
            <Col sm={4}>
              <ContactFrom />
            </Col>
          </Row>
        </Container>

        {/* COMPANY IN BANGALORE */}
        <div style={{ margin: "0% 5%" }}>
          <Container>
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "1px",
                marginBottom: "5%",
              }}
            >
              Mobile App Development Company in Bangalore
            </h1>

            <Row>
              <Col sm={7}>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Building a good mobile app is not an easy task, it takes
                  experience, creativity, and the ability to understand user
                  needs. As the leading Mobile Development company in Bangalore,
                  we develop apps for Android, iPhone, and iOS platforms, with
                  app performance, interfaces, and functionality being our top
                  priorities. We pump all of our project development with
                  effective, secure, and scalable experiences in mind - to allow
                  businesses to develop in the digital space.
                </p>
                <p
                  style={{
                    lineHeight: "1.7",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: "400",
                  }}
                >
                  Our custom app solutions focus on improving user experience
                  and meeting industry standards. Whether for an e-commerce
                  platform, on-demand service, or enterprise solution, our
                  Mobile App Design Company in Bangalore, India will provide a
                  reliable and easy-to-navigate mobile application. We focus on
                  delivering apps that engage users, drive results, and help
                  grow your business.
                </p>
              </Col>
              <Col sm={5}>
                <Image
                  src={mobileicon}
                  alt="mobile-icon"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  width={400}
                  height={300}
                />
              </Col>
            </Row>

            {/*  Our Services on the Mobile App Development Company in Bangalore */}
            <div style={{ marginTop: "10%" }}>
              <Row>
                <Col sm={4}>
                  <h2
                    style={{
                      fontWeight: "700",
                      letterSpacing: "1px",
                      lineHeight: "1.7",
                    }}
                  >
                    Our Services on the Mobile App Development Company in
                    Bangalore
                  </h2>
                  <p
                    style={{
                      lineHeight: "1.7",
                      fontSize: "16px",
                      letterSpacing: "1px",
                      fontWeight: "400",
                    }}
                  >
                    A Mobile Application Development Company in Bangalore needs
                    to aim for the production of high-quality applications that
                    positively enhance user experience and contribute to
                    business growth. As the demand for mobile solutions
                    continues to grow, businesses requiring mobile applications
                    want to scale with and keep ahead of their competitors.
                    Businesses also want reliable, secure, and rich-feature
                    apps. That said, we want each project to have an end quality
                    experience, while offering our clients ways to connect with
                    users securely with high-performance functions.
                  </p>
                </Col>
                <Col sm={8}>
                  <Row>
                    {[
                      {
                        img: iosmobile,
                        title: "iOS Mobile App Development",
                        points: [
                          "We develop iOS Apps for iPhones and iPads with a focus on optimal performance with a seamless user experience.",
                          "Delivering secure, scalable Applications to meet any business need and compliant with the App Store.",
                          "Incorporating advanced features to increase the functionality and performance of the App.",
                        ],
                      },
                      {
                        img: andriod,
                        title: "Android Mobile App Development",
                        points: [
                          "Designs Android Apps for Smartphones and Tablets with user-friendly interfaces.",
                          "Delivering secure and scalable applications for a growing business in the Digital market.",
                          "Provides mobile Apps that are optimized for more than one Android device to enable performance.",
                        ],
                      },
                      {
                        img: flutterapp,
                        title: "Flutter Mobile App Development",
                        points: [
                          "Developing cross-platform Apps (one codebase) for Android and iOS.",
                          "Provides high-quality Apps with smooth animations and fast performance for a seamless User Experience.",
                          "Provides great speed to deliver reliable and high-quality Apps and improve App standards.",
                        ],
                      },
                      {
                        img: reactapp,
                        title: "React Native Mobile App Development",
                        points: [
                          "Building cross-platform Apps to offer a native-like User Experience for Android and iOS.",
                          "Provides high-performance applications with smooth navigation and engaging UI.",
                          "Provides scalable and flexible App options for Startups and Enterprises.",
                        ],
                      },
                    ].map((app, index) => (
                      <Col
                        sm={6}
                        key={index}
                        className="d-flex justify-content-center"
                      >
                        <div
                          style={{
                            backgroundColor: "white",
                            boxShadow: "1px 1px 5px lightgrey",
                            padding: "20px 20px 0px 20px",
                            borderRadius: "10px",
                            minWidth: "250px",
                            maxWidth: "350px",
                            minHeight: "320px",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "20px",
                          }}
                        >
                          <Image
                            src={app.img}
                            alt={app.title}
                            style={{
                              width: "25%",
                              height: "auto",
                              objectFit: "cover",
                            }}
                            width={100}
                            height={100}
                          />
                          <h3
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              marginTop: "5%",
                            }}
                          >
                            {app.title}
                          </h3>
                          <ul
                            style={{
                              fontSize: "12px",
                              lineHeight: "1.7",
                              textAlign: "left",
                            }}
                          >
                            {app.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        {/* Benefits of Having a Mobile App for Your Business */}
        <div>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
              marginTop: "30px",
            }}
          >
            Benefits of Having a Mobile App for Your Business
          </h2>
          <Container>
            <Row>
              {[
                {
                  img: IncreasesCustomerEngagement,
                  title: "Increases Customer Engagement",
                  text: "Provides instant updates, notifications, and offers to keep customers connected.",
                },
                {
                  img: BoostsBrandVisibility,
                  title: "Increases Brand Visibility",
                  text: "Enhances brand presence with an easily-accessible mobile platform.",
                },
                {
                  img: SimplifiesCustomerInteraction,
                  title: "Simplifies Customer Interaction",
                  text: "Establishes direct contact with the customer with chats, support, and feedback functions.",
                },
                {
                  img: ImprovesSalesandRevenue,
                  title: "Increases Sales and Revenue",
                  text: "Encourages additional purchases by creating a streamlined purchasing process.",
                },
                {
                  img: StrengthensCustomerLoyalty,
                  title: "Strengthens Customer Loyalty",
                  text: "Personalizes discounts, rewards, and exclusives.",
                },
                {
                  img: SpeedsUpMarketingEfforts,
                  title: "Speeds Up Marketing Efforts",
                  text: "Use in-app advertisements for new products and services.",
                },
                {
                  img: GivesaCompetitiveEdge,
                  title: "Gives a Competitive Edge",
                  text: "Optimizes your business with an online mobile presence.",
                },
                {
                  img: SupportsBusinessGrowth,
                  title: "Supports Business Growth",
                  text: "Increasing customer reach through mobile accessibility.",
                },
              ].map((card, index) => (
                <Col
                  key={index}
                  sm={3}
                  className="d-flex justify-content-center"
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      boxShadow: "1px 1px 5px lightgrey",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      margin: "5%",
                      minWidth: "200px",
                      maxWidth: "250px",
                      minHeight: "250px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: "35%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      width={100}
                      height={100}
                    />
                    <p style={{ fontWeight: "bold", marginTop: "5%" }}>
                      {card.title}
                    </p>
                    <p style={{ fontSize: "12px", lineHeight: "1.7" }}>
                      {card.text}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div style={{ marginTop: "3%" }}>
          <MobileAppCards />
        </div>

        <Container
          style={{ minHeight: "70vh", marginBlock: "7%", marginBottom: "4%" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            What can you expect from Nakshatra Namaha Creations?
          </h2>
          <p
            style={{
              lineHeight: "1.7",
              fontSize: "16px",
              letterSpacing: "1px",
              textAlign: "center",
              fontWeight: "400",
              marginBottom: "5%",
            }}
          >
            Choosing the right Mobile App Development Company in Bangalore is
            important for businesses who want to enhance their digital presence.
            Our team provides quality mobile applications with speed, security
            and usability. Each app is built to be engaging, allowing businesses
            to connect with their target audience, streamline processes and
            generate revenue. We have the experience to provide applications
            that are cross-platform, Android and iOS compliant. All apps are
            built following industry standards, are user-friendly (the audience
            must love using it) and can scale and grow as the industry needs
            evolve.
          </p>
          <div>
            <Row>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    01
                  </h2>

                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Customized Mobile Solutions
                    </p>
                    <p>
                      Creates apps that are customized to the business
                      objectives, with fast performance and easy navigation.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    02
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cross-Platform Compatibility
                    </p>
                    <p>
                      Builds apps that will perform well across Android & iOS
                      devices to reach the widest audience.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      marginRight: "10px",
                      fontWeight: "600",
                      color: "#006EA6",
                    }}
                  >
                    03
                  </h2>
                  <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Performance Optimization
                    </p>
                    <p>
                      Makes sure everything loads fast, performs efficiently and
                      is an overall lag-free experience for the user.
                    </p>
                  </div>
                </div>
              </Col>
              <div className="d-lg-flex justify-content-center lg-my-5 gap-4">
                <Col sm={5}>
                  <div style={{ display: "flex" }}>
                    <h2
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: "#006EA6",
                      }}
                    >
                      04
                    </h2>
                    <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        Innovative Features
                      </p>
                      <p>
                        Integrates state-of-the-art features such as artificial
                        intelligence, chatbots, and real-time tracking for
                        better user involvement and engagement.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={5}>
                  <div style={{ display: "flex" }}>
                    <h2
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: "#006EA6",
                      }}
                    >
                      05
                    </h2>
                    <div style={{ fontSize: "14px", lineHeight: "1.7" }}>
                      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                        Timely Project Delivery
                      </p>
                      <p>
                        Follows prescribed steps in a structured manner to
                        ensure all projects are delivered on time without
                        compromising on quality.
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </Container>

        {/* PICK YOUR PLAN */}
        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "1.5%",
              fontSize: "26px",
            }}
          >
            PICK YOUR PLAN
          </h2>

          <Container
            className="d-flex justify-content-between align-items-center mt-5"
            style={{
              gap: "20px",
              flexDirection: "row",
              flexWrap: "wrap",
              maxWidth: "1000px",
            }}
          >
            {/* First Plan Section */}
            <div
              style={{
                flex: "1",
                maxWidth: "400px",
                position: "relative",
                minWidth: "250px",
                marginBottom: "20px",
              }}
            >
              <Image
                src={bgservicesblue}
                alt="bg-blue"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                width={500}
                height={300}
              />
              <div style={{ position: "absolute", top: "10%", left: "10%" }}>
                <Image
                  src={mobileappdev}
                  alt="building-icon"
                  style={{
                    width: "30%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  width={300}
                  height={300}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                  Mobile App Development
                </h3>{" "}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "68%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "16px" }}>Starting from</p>
                <h2 style={{ fontSize: "24px" }}>₹1,49,999</h2>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <PlanBtn setShowPopup={setShowPopup} />
                {showPopup && (
                  <InternalContactModal
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                  />
                )}
              </div>
            </div>

            {/* Second Plan Section */}
            <div
              style={{
                flex: "1",
                maxWidth: "400px",
                position: "relative",
                minWidth: "250px",
                marginBottom: "20px",
              }}
            >
              <Image
                src={bgservicesyellow}
                alt="bg-yellow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                width={500}
                height={300}
              />
              <div style={{ position: "absolute", top: "10%", left: "7%" }}>
                <Image
                  src={customobileappdev}
                  alt="building-icon"
                  style={{
                    width: "25%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  width={300}
                  height={300}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <h3 style={{ fontSize: "20px", color: "white", margin: 0 }}>
                  Customised Mobile App <br /> Development
                </h3>{" "}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                }}
              >
                <h2 style={{ fontSize: "24px" }}>Schedule a Call</h2>{" "}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <PlanBtn setShowPopup={setShowPopup} />
                {showPopup && (
                  <InternalContactModal
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                  />
                )}
              </div>
            </div>
          </Container>
        </div>

        {/* Industries Mobile App Development */}
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{
            textAlign: "center",
            marginTop: "4%",
          }}
        >
          <div style={{ width: "100%" }}>
            <h2 style={{ fontWeight: "600", marginBottom: "2%" }}>
              Industries We Serve as Mobile App Developers in Bangalore
            </h2>
            <p
              style={{
                lineHeight: "1.7",
                fontSize: "16px",
                letterSpacing: "1px",
                fontWeight: "400",
                marginBottom: "5%",
              }}
            >
              As Mobile App Developers in Bangalore, we create reliable and
              efficient mobile applications for a variety of industries. We aim
              to deliver not only user-friendly but also secure and scalable
              solutions which will improve customer engagement and simplify
              business processes. Each app we create is built to either enhance
              user experience or meet industrial standards.
            </p>

            <IndustriesServedMobileApp />
          </div>
        </Container>
        <Container style={{ margin: "10% auto" }}>
          <h2
            style={{
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            WE WORK WITH REMARKABLE BRANDS
          </h2>

          <ClientImagesMobileApp />
        </Container>

        {/* TESTIMONIALS */}
        <Container style={{ margin: "7% auto" }}>
          <TestimonialsSlick testimonials={testimonials} />
        </Container>

        {/* FAQs MOBILE APP */}
        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "60px 20px",
            textAlign: "center",
            margin: "5% 0% 5% 0%",
          }}
        >
          <h2 style={{ fontWeight: "600", marginBottom: "2%" }}>
            Our Other Related Services
          </h2>
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-space gapreduce">
            {buttons.map((button, index) => (
              <div key={index}>
                <Link href={button.link}>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill px-3 py-2"
                    style={{ fontSize: "14px" }}
                  >
                    {button.title}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <FAQs faqs={faqs} />
        <KeywordsSection />

        <div style={{ marginTop: "10%" }}>
          <Container>
            <IconsModal />
          </Container>
        </div>
      </div>
    </>
  );
}
