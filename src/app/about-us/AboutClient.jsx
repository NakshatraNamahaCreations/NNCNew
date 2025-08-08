"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Icons from '@/components/Icons';
import Breadcrumbs from '@/components/BreadCrumbs';
import NNC_Company from "@/components/about/NNC_Company.jsx";
import Partner_Us from "@/components/about/Partner_Us.jsx";
import Mission_Vision from "@/components/about/Mission_Vision.jsx";
import Website_Services from "@/components/about/Website_Services.jsx";
import Choose_Us from "@/components/about/Choose_Us.jsx";
import Business_Notice from "@/components/about/Business_Notice.jsx";
import Teams from "@/components/about/Teams.jsx";
import Script from "next/script";

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      'name': 'Nakshatra Namaha Creations',
      'url': 'https://www.nakshatranamahacreations.com/',
      'logo': 'https://www.nakshatranamahacreations.com/media/nnclogo.png',
      'sameAs': [
        'https://www.facebook.com/Nakshatranamahacreations/',
        'https://www.linkedin.com/company/nakshatra-namaha-creation/',
        'https://x.com/nncbengaluru',
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9900566466',
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['English', 'Hindi', 'Kannada'],
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'postalCode': '560061',
        'addressCountry': 'IN',
      },
    },
    {
      '@type': 'LocalBusiness',
      'name': 'Nakshatra Namaha Creations',
      'image': 'https://www.nakshatranamahacreations.com/office-photo.jpg',
      'url': 'https://www.nakshatranamahacreations.com/',
      'telephone': '+91-9900566466',
      'email': 'info@nakshatranamahacreations.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1st floor, Darshan Plazza, Dwaraka Nagar, Banashankari, 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'postalCode': '560061',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 12.264056680993265,
        'longitude': 76.6444222231926,
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '09:30',
          'closes': '19:00',
        },
      ],
      'priceRange': '₹₹',
      'paymentAccepted': 'Cash, Credit Card, Online Payment',
      'sameAs': [
        'https://www.facebook.com/nakshatranamahacreations',
        'https://www.linkedin.com/company/nakshatra-namaha-creation/',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.nakshatranamahacreations.com/',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'About Us',
          'item': 'https://www.nakshatranamahacreations.com/about-us',
        },
      ],
    },
  ],
};

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const words = [
    { text: 'Innovate', delay: 0 },
    { text: 'Build', delay: 200 },
    { text: 'Transform', delay: 400 },
  ];

  const animations = words.map(({ delay }) =>
    useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'scale(1)' : 'scale(0.5)',
      config: { tension: 200, friction: 20 },
      delay,
    })
  );

  const breadcrumbPaths = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us' },
  ];

  return (
    <div>
      {/* Meta Pixel Code */}
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
        {`<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=2226129677535551&ev=PageView&noscript=1"
          />`}
      </noscript>
      {/* End Meta Pixel Code */}

      <Script type="application/ld+json">{JSON.stringify(schemaMarkup)}</Script>

      <Breadcrumbs paths={breadcrumbPaths} />

      {/* NAVBAR MENU LIST */}
      <div className="d-flex align-items-center justify-content-center mt-4">
        <div
          ref={ref}
          style={{ marginBottom: '4%', textAlign: 'center' }}
          className="div-aboutbanner"
        >
          <h1
            style={{
              fontWeight: '900',
              fontSize: '65px',
              letterSpacing: '3px',
              marginBottom: '1%',
            }}
            className="h1-about"
          >
            {words.map((word, index) => (
              <animated.span key={index} style={animations[index]}>
                {word.text}{' '}
                {index !== words.length - 1 && (
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xs"
                    style={{ color: '#000000', width: '20px', height: '20px' }}
                    className="h1-about-banner-icon"
                  />
                )}{' '}
              </animated.span>
            ))}
          </h1>

          <animated.h4
            style={{
              ...useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                delay: 600,
              }),
              letterSpacing: '2px',
              fontSize: '35px',
              fontWeight: '100',
              lineHeight: '1.5',
            }}
            className="h4-about"
          >
            Cutting-edge web solutions to tackle your
          </animated.h4>
          <div style={{ position: 'relative' }}>
            <animated.h4
              style={{
                ...useSpring({
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                  delay: 800,
                }),
                padding: '0px 2px',
                letterSpacing: '2px',
                fontSize: '35px',
                fontWeight: '100',
                lineHeight: '1.5',
              }}
              className="h4-about"
            >
              most <span className="text-decoration-line-through">complex</span>{' '}
              business challenges!
            </animated.h4>

            <div className="difficlutText">
              <animated.h4
                style={{
                  ...useSpring({
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                    delay: 1200,
                  }),
                }}
                className="h4-difficult"
              >
                difficult
              </animated.h4>
            </div>
          </div>
        </div>
      </div>

      <NNC_Company />

      {/* Partner with us */}
      <Partner_Us />

      {/* MISSION & VISION */}
      <Mission_Vision />

      <Website_Services />

      {/* Why choose us? */}
      <Choose_Us />

      {/* WE MAKE YOUR BUSINESS NOTICE */}
      <Business_Notice />

      {/* OUR TEAMS */}
      <Teams />


      {/* ICONS */}
      <div style={{ padding: '4% 0% 0% 0%' }}>
        <Container>
          <Icons />
        </Container>
      </div>
    </div>
  );
}