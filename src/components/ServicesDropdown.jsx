
// 'use client';

// import { useState, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { Container, Row, Col } from 'react-bootstrap';
// import { useSpring, animated } from '@react-spring/web';

// const ServicesDropdown = ({ textColor }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const dropdownAnimation = useSpring({
//     opacity: showDropdown ? 1 : 0,
//     transform: showDropdown ? 'translateY(0%)' : 'translateY(-10%)',
//     config: { tension: 200, friction: 25 },
//   });

//   const handleMouseEnter = () => setShowDropdown(true);
//   const handleMouseLeave = () => setShowDropdown(false);
//   const handleClick = () => setShowDropdown((prev) => !prev);

//   return (
//     <div style={{ position: 'relative' }} ref={dropdownRef}>
//       {/* Services Link */}
//       <ul style={{ margin: '0px', padding: '0px' }}>
//         <li className="navbar__item">
//           <Link
//             href="/services"
//             className="navbar__link service_link"
//             style={{ color: textColor }}
//           >
//             Services
//           </Link>
//         </li>
//         <span
//           onClick={handleClick}
//           onMouseEnter={handleMouseEnter}
//           style={{
//             cursor: 'pointer',
//             display: 'inline-block',
//             marginLeft: '8px',
//           }}
//         >
//           <FontAwesomeIcon icon={faAngleDown} style={{ color: textColor }} />
//         </span>
//       </ul>

//       {/* Dropdown Menu */}
//       {showDropdown && (
//         <animated.div
//           style={{
//             ...dropdownAnimation,
//             backgroundColor: '#F5F5F5',
//             width: '100vw',
//             position: 'fixed',
//             top: '95px',
//             left: 0,
//             zIndex: 1000,
//             padding: '50px',
//           }}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Container>
//             <Row>
//               {/* Website Development */}
//               <Col sm={3} onClick={() => setShowDropdown(false)}>
//                 <Link
//                   href="/website-development-company-in-bangalore"
//                   style={{ textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <div
//                     style={{
//                       borderRight: '1px solid #000',
//                       paddingRight: '15px',
//                     }}
//                   >
//                     <Image
//                       src="/media/WebsiteDevelopment.png"
//                       alt="website-icon"
//                       width={40}
//                       height={40}
//                     />
//                     <h6
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: 'bold',
//                         marginTop: '10px',
//                       }}
//                     >
//                       Website Development
//                     </h6>
//                     <ul
//                       style={{
//                         listStyle: 'none',
//                         margin: 0,
//                         padding: 0,
//                         fontSize: '12px',
//                       }}
//                     >
//                       <li>WordPress Website Development</li>
//                       <li>React JS Website Development</li>
//                       <li>Node JS Website Development</li>
//                       <li>CMS Website Development</li>
//                     </ul>
//                   </div>
//                 </Link>
//               </Col>

//               {/* Mobile App Development */}
//               <Col sm={3} onClick={() => setShowDropdown(false)}>
//                 <Link
//                   href="/mobile-app-development-company-in-bangalore"
//                   style={{ textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <div
//                     style={{
//                       borderRight: '1px solid #000',
//                       paddingRight: '15px',
//                     }}
//                   >
//                     <Image
//                       src="/media/MobileAppDevelopment.png"
//                       alt="mobileapp-icon"
//                       width={40}
//                       height={40}
//                     />
//                     <h6
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: 'bold',
//                         marginTop: '10px',
//                       }}
//                     >
//                       Mobile App Development
//                     </h6>
//                     <ul
//                       style={{
//                         listStyle: 'none',
//                         margin: 0,
//                         padding: 0,
//                         fontSize: '12px',
//                       }}
//                     >
//                       <li>iOS Mobile App Development</li>
//                       <li>Android Mobile App Development</li>
//                       <li>Flutter Mobile App Development</li>
//                       <li>React Native Mobile App Development</li>
//                     </ul>
//                   </div>
//                 </Link>
//               </Col>

//               {/* Graphic Design */}
//               <Col sm={3} onClick={() => setShowDropdown(false)}>
//                 <Link
//                   href="/graphic-design-company-in-bangalore"
//                   style={{ textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <div
//                     style={{
//                       borderRight: '1px solid #000',
//                       paddingRight: '15px',
//                     }}
//                   >
//                     <Image
//                       src="/media/GraphicDesign.png"
//                       alt="graphic-icon"
//                       width={40}
//                       height={40}
//                     />
//                     <h6
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: 'bold',
//                         marginTop: '10px',
//                       }}
//                     >
//                       Graphic Design
//                     </h6>
//                     <ul
//                       style={{
//                         listStyle: 'none',
//                         margin: 0,
//                         padding: 0,
//                         fontSize: '12px',
//                       }}
//                     >
//                       <li>Logo Designing</li>
//                       <li>Website & App UI/UX Designs</li>
//                       <li>Posters and Brochure Designs</li>
//                       <li>Banners and Flex Designs</li>
//                     </ul>
//                   </div>
//                 </Link>
//               </Col>

//               {/* Corporate Video Production */}
//               <Col sm={3} onClick={() => setShowDropdown(false)}>
//                 <Link
//                   href="/corporate-video-production-company-in-bangalore"
//                   style={{ textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <div style={{ paddingRight: '15px' }}>
//                     <Image
//                       src="/media/CorporateVideoProduction.png"
//                       alt="videoproduction-icon"
//                       width={40}
//                       height={40}
//                     />
//                     <h6
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: 'bold',
//                         marginTop: '10px',
//                       }}
//                     >
//                       Corporate Video Production
//                     </h6>
//                   </div>
//                 </Link>
//               </Col>
//             </Row>

//             <Row className="mt-3">
//               {/* 2D Animation */}
//               <Col sm={3} onClick={() => setShowDropdown(false)}>
//                 <Link
//                   href="/2d-animation-studio-in-bangalore"
//                   style={{ textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <div
//                     style={{
//                       borderRight: '1px solid #000',
//                       paddingRight: '15px',
//                     }}
//                   >
//                     <Image
//                       src="/media/2DAnimation.png"
//                       alt="animation2d-icon"
//                       width={40}
//                       height={40}
//                     />
//                     <h6
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: 'bold',
//                         marginTop: '10px',
//                       }}
//                     >
//                       2D Animation
//                     </h6>
//                     <ul
//                       style={{
//                         listStyle: 'none',
//                         margin: 0,
//                         padding: 0,
//                         fontSize: '12px',
//                       }}
//                     >
//                       <li>Explainer Videos</li>
//                       <li>Character Animation</li>
//                       <li>Puppet Animation</li>
//                       <li>Motion Graphics</li>
//                     </ul>
//                   </div>
//                 </Link>
//               </Col>

//               {/* Digital Marketing */}
//               <Col sm={3} onClick={() => setShowDropdown(false)}>
//                 <Link
//                   href="/digital-marketing-agency-in-bangalore"
//                   style={{ textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <div
//                     style={{
//                       borderRight: '1px solid #000',
//                       paddingRight: '15px',
//                     }}
//                   >
//                     <Image
//                       src="/media/DigitalMarketing.png"
//                       alt="digital-icon"
//                       width={40}
//                       height={40}
//                     />
//                     <h6
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: 'bold',
//                         marginTop: '10px',
//                       }}
//                     >
//                       Digital Marketing
//                     </h6>
//                     <ul
//                       style={{
//                         listStyle: 'none',
//                         margin: 0,
//                         padding: 0,
//                         fontSize: '12px',
//                       }}
//                     >
//                       <li>Search Engine Optimisation</li>
//                       <li>Social Media Marketing</li>
//                       <li>Paid Marketing</li>
//                     </ul>
//                   </div>
//                 </Link>
//               </Col>

//               {/* B2B Marketing */}
//               <Col sm={3} onClick={() => setShowDropdown(false)}>
//                 <Link
//                   href="/b2b-marketing-agency-in-bangalore"
//                   style={{ textDecoration: 'none', color: 'inherit' }}
//                 >
//                   <div
//                     style={{
//                       borderRight: '1px solid #000',
//                       paddingRight: '15px',
//                     }}
//                   >
//                     <Image
//                       src="/media/B2BMarketingServices.png"
//                       alt="b2bservices-icon"
//                       width={40}
//                       height={40}
//                     />
//                     <h6
//                       style={{
//                         fontSize: '14px',
//                         fontWeight: 'bold',
//                         marginTop: '10px',
//                       }}
//                     >
//                       B2B Marketing Services
//                     </h6>
//                   </div>
//                 </Link>
//               </Col>

//               <Col sm={3}></Col>
//             </Row>
//           </Container>
//         </animated.div>
//       )}
//     </div>
//   );
// };

// export default ServicesDropdown;


'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';

// const ServicesDropdown = ({ textColor }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const dropdownAnimation = useSpring({
//     opacity: showDropdown ? 1 : 0,
//     transform: showDropdown ? 'translateY(0%)' : 'translateY(-10%)',
//     config: { tension: 200, friction: 25 },
//   });

//   const handleMouseEnter = () => setShowDropdown(true);
//   const handleMouseLeave = () => setShowDropdown(false);
//   const handleClick = () => setShowDropdown((prev) => !prev);

//   return (
//     <div style={{ position: 'relative' }} ref={dropdownRef}>
//       {/* Services Link */}
//       <ul style={{ margin: '0px', padding: '0px' }}>
//         <li className="navbar__item">
//           <Link
//             href="/services"
//             className="navbar__link service_link"
//             style={{ color: textColor }}
//           >
//             Services
//           </Link>
//         </li>
//         <span
//           onClick={handleClick}
//           onMouseEnter={handleMouseEnter}
//           style={{
//             cursor: 'pointer',
//             display: 'inline-block',
//             marginLeft: '8px',
//           }}
//         >
//           <FontAwesomeIcon icon={faAngleDown} style={{ color: textColor }} />
//         </span>
//       </ul>

//       {/* Dropdown Menu */}
//       {showDropdown && (
//         <animated.div
//           style={{
//             ...dropdownAnimation,
//             backgroundColor: '#fff',
//             width: '100vw',
//             position: 'fixed',
//             top: '95px',
//             left: 0,
//             zIndex: 1000,
//             padding: '50px 10px',
//           }}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Container>
//             <Row>

//               <Col sm={2}>
//                 <Row>
//                   {/* UI/UX Design */}
//                   <Col sm={12} >
//                     <h6 style={{ fontWeight: 'bold' }}>UI/UX Design</h6>
//                     <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                       <li>Wireframing and Prototyping</li>
//                     </ul>
//                   </Col>
//                   {/* Ecommerce Development */}
//                   <Col sm={12} style={{ marginTop: "20px" }}>
//                     <h6 style={{ fontWeight: 'bold' }}>Ecommerce Development</h6>
//                     <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                       <li>WooCommerce Development</li>
//                       <li>Ecommerce Web Development</li>
//                     </ul>
//                   </Col>
//                 </Row>
//               </Col>

//               {/* Web Development */}
//               <Col sm={3} >
//                 <h6 style={{ fontWeight: 'bold' }}>Web Development</h6>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                   <li>Frontend Development</li>
//                   <li>Full Stack Development</li>
//                   <li>Static Website Development</li>
//                   <li>Dynamic Website Development</li>
//                   <li>PHP Web Development</li>
//                   <li>Web Portal Development</li>
//                   <li>WordPress Website Development</li>
//                   <li>React JS Website Development</li>
//                   <li>Node JS Website Development</li>
//                   <li>CMS Website Development</li>
//                 </ul>
//               </Col>

//               {/* Software Development */}

//               <Col sm={3}>
//                 <Row>

//                   <Col sm={12}>

//                     <h6 style={{ fontWeight: 'bold' }}>Software Development</h6>
//                     <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                       <li>CRM Software Development</li>
//                       <li>Enterprise Software Development</li>
//                       <li>Software Product Development</li>
//                       <li>Cloud Application Development</li>
//                       <li>Software Support and Maintenance</li>
//                       <li>Legacy Software Modernization</li>
//                       <li>Software Consulting</li>
//                     </ul>
//                   </Col>
//                   <Col sm={12} style={{ marginTop: "20px" }}>
//                     <h6 style={{ fontWeight: 'bold' }}>2D Animations</h6>
//                     <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                       <li>Explainer Videos</li>
//                       <li>Character Animation</li>
//                       <li>Puppet Animation</li>
//                       <li>Motion Graphics</li>
//                     </ul>
//                   </Col>
//                 </Row>
//               </Col>

//               <Col sm={3} >
//                 <Row>
//                   <Col sm={12}>
//                     <h6 style={{ fontWeight: 'bold' }}>Mobile App Development</h6>
//                     <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                       <li>iOS Mobile App Development</li>
//                       <li>Android Mobile App Development</li>
//                       <li>Flutter Mobile App Development</li>
//                       <li>React Native Mobile App Development</li>
//                     </ul>
//                   </Col>
//                   <Col sm={12} style={{ marginTop: "20px" }}>
//                     <h6 style={{ fontWeight: 'bold' }}>Corporate Video Production</h6>
//                     {/* <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                   <li>iOS Mobile App Development</li>
//                   <li>Android Mobile App Development</li>
//                   <li>Flutter Mobile App Development</li>
//                   <li>React Native Mobile App Development</li>
//                 </ul> */}
//                   </Col>
//                 </Row>
//               </Col>



//               {/* Solutions */}
//               <Col sm={1}>
//                 <Row>
//                   <Col sm={12}>
//                     <h6 style={{ fontWeight: 'bold' }}>Solutions</h6>
//                     <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
//                       <li>Website Performance Optimization</li>
//                       <li>Website Migration Service</li>
//                       <li>Startup Solution</li>
//                       <li>Search Engine Optimisation</li>
//                       <li>Social Media Marketing</li>
//                       <li>Paid Marketing</li>
//                     </ul>
//                   </Col>
//                   <Col sm={12} style={{ marginTop: "20px" }}>
//                     <h6 style={{ fontWeight: 'bold' }}>B2B Marketing</h6>
//                   </Col>
//                 </Row>
//               </Col>
//             </Row>
//           </Container>
//         </animated.div>
//       )}
//     </div>
//   );
// };

// export default ServicesDropdown;

// const ServicesDropdown = ({ textColor }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const dropdownAnimation = useSpring({
//     opacity: showDropdown ? 1 : 0,
//     transform: showDropdown ? 'translateY(0%)' : 'translateY(-10%)',
//     config: { tension: 200, friction: 25 },
//   });

//   const handleMouseEnter = () => setShowDropdown(true);
//   const handleMouseLeave = () => setShowDropdown(false);
//   const handleClick = () => setShowDropdown((prev) => !prev);

//   return (
//     <div style={{ position: 'relative' }} ref={dropdownRef}>
//       {/* Services Link */}
//       <ul style={{ margin: '0px', padding: '0px' }}>
//         <li className="navbar__item">
//           <Link
//             href="/services"
//             className="navbar__link service_link"
//             style={{ color: textColor }}
//           >
//             Services
//           </Link>
//         </li>
//         <span
//           onClick={handleClick}
//           onMouseEnter={handleMouseEnter}
//           style={{
//             cursor: 'pointer',
//             display: 'inline-block',
//             marginLeft: '8px',
//           }}
//         >
//           <FontAwesomeIcon icon={faAngleDown} style={{ color: textColor }} />
//         </span>
//       </ul>

//       {/* Dropdown Menu */}
//       {showDropdown && (
//         <animated.div
//           style={{
//             ...dropdownAnimation,
//             backgroundColor: '#fff',
//             width: '100vw',
//             position: 'fixed',
//             top: '95px',
//             left: 0,
//             zIndex: 1000,
//             padding: '50px 10px',
//           }}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Container>
//             <Row>
//               {/* Custom Width Column 1: UI/UX Design & Ecommerce Development */}
//               <div style={{ flex: '1 1 15%', marginBottom: '20px' }}>
//                <Link href="/graphic-design-company-in-bangalore" className='removelinkStyle'> <h6 style={{ fontWeight: 'bold',cursor:"pointer" }}>UI/UX Design</h6></Link>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', cursor: "pointer" }}>
//                   <li>Wireframing and Prototyping</li>
//                 </ul>

//                 <Link href="" className='removelinkStyle'><h6 style={{ fontWeight: 'bold', marginTop: '20px', cursor: "pointer" }}>Ecommerce Development</h6></Link>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', cursor: "pointer" }}>
//                   <li>WooCommerce Development</li>
//                   <li>Ecommerce Web Development</li>
//                 </ul>
//               </div>

//               {/* Custom Width Column 2: Web Development */}
//               <div style={{ flex: '1 1 20%', marginBottom: '20px' }}>
//                 <Link href="/website-development-company-in-bangalore" className='removelinkStyle'><h6 style={{ fontWeight: 'bold', cursor:"pointer" }}>Web Development</h6></Link>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', cursor: "pointer" }}>
//                   <li>Frontend Development</li>
//                   <li>Full Stack Development</li>
//                   <li>Static Website Development</li>
//                   <li>Dynamic Website Development</li>
//                   <li>PHP Web Development</li>
//                   <li>Web Portal Development</li>
//                   <li>WordPress Website Development</li>
//                   <li>React JS Website Development</li>
//                   <li>Node JS Website Development</li>
//                   <li>CMS Website Development</li>
//                 </ul>
//               </div>

//               {/* Custom Width Column 3: Software Development & 2D Animations */}
//               <div style={{ flex: '1 1 25%', marginBottom: '20px',  }}>
//                 <Link href="" className='removelinkStyle'><h6 style={{ fontWeight: 'bold', cursor: "pointer" }}>Software Development</h6></Link>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', cursor: "pointer" }}>
//                   <li>CRM Software Development</li>
//                   <li>Enterprise Software Development</li>
//                   <li>Software Product Development</li>
//                   <li>Cloud Application Development</li>
//                   <li>Software Support and Maintenance</li>
//                   <li>Legacy Software Modernization</li>
//                   <li>Software Consulting</li>
//                 </ul>

//                 <Link href="/2d-animation-studio-in-bangalore" className='removelinkStyle'><h6 style={{ fontWeight: 'bold', marginTop: '20px', cursor: "pointer" }}>2D Animations</h6></Link>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', cursor: "pointer" }}>
//                   <li>Explainer Videos</li>
//                   <li>Character Animation</li>
//                   <li>Puppet Animation</li>
//                   <li>Motion Graphics</li>
//                 </ul>
//               </div>

//               {/* Custom Width Column 4: Mobile App Development & Corporate Video Production */}
//               <div style={{ flex: '1 1 23%', marginBottom: '20px', }}>
//                <Link href="/mobile-app-development-company-in-bangalore" className='removelinkStyle'> <h6 style={{ fontWeight: 'bold' , cursor:"pointer"}}>Mobile App Development</h6></Link>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', cursor: "pointer" }}>
//                   <li>iOS Mobile App Development</li>
//                   <li>Android Mobile App Development</li>
//                   <li>Flutter Mobile App Development</li>
//                   <li>React Native Mobile App Development</li>
//                 </ul>

//                <Link href="/corporate-video-production-company-in-bangalore" className='removelinkStyle'> <h6 style={{ fontWeight: 'bold', marginTop: '20px',cursor:"pointer" }}>Corporate Video Production</h6></Link>
//                 {/* You can add content here if needed */}
//               </div>

//               {/* Custom Width Column 5: Solutions & B2B Marketing */}
//               <div style={{ flex: '1 1 17%', marginBottom: '20px', }}>
//              <Link href="/digital-marketing-agency-in-bangalore" className='removelinkStyle'>   <h6 style={{ fontWeight: 'bold',cursor:"pointer" }}>Solutions</h6></Link>
//                 <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', cursor: "pointer" }}>
//                   <li>Website Performance Optimization</li>
//                   <li>Website Migration Service</li>
//                   <li>Startup Solution</li>
//                   <li>Search Engine Optimisation</li>
//                   <li>Social Media Marketing</li>
//                   <li>Paid Marketing</li>
//                 </ul>

//              <Link href="/b2b-marketing-agency-in-bangalore" className='removelinkStyle'>   <h6 style={{ fontWeight: 'bold', marginTop: '20px' }}>B2B Marketing</h6></Link>
//                 {/* You can add content here if needed */}
//               </div>
//             </Row>
//           </Container>
//         </animated.div>
//       )}
//     </div>
//   );
// };

// export default ServicesDropdown;




const ServicesDropdown = ({ textColor }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownAnimation = useSpring({
    opacity: showDropdown ? 1 : 0,
    transform: showDropdown ? "translateY(0%)" : "translateY(-10%)",
    config: { tension: 200, friction: 25 },
  });

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleClick = () => setShowDropdown((prev) => !prev);

  // Close dropdown after 1 second
  const handleItemClick = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 1000);
  };

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      {/* Services Link */}
      <ul style={{ margin: "0px", padding: "0px" }}>
        <li className="navbar__item">
          <Link
            href="/services"
            className="navbar__link service_link"
            style={{ color: textColor }}
          >
            Services
          </Link>
        </li>
        <span
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          style={{
            cursor: "pointer",
            display: "inline-block",
            marginLeft: "8px",
          }}
        >
          <FontAwesomeIcon icon={faAngleDown} style={{ color: textColor }} />
        </span>
      </ul>

      {/* Dropdown Menu */}
      {showDropdown && (
        <animated.div
          style={{
            ...dropdownAnimation,
            backgroundColor: "#fff",
            width: "100vw",
            position: "fixed",
            top: "95px",
            left: 0,
            zIndex: 1000,
            padding: "50px 10px",
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Container>
            <Row>
              {/* Column 1: UI/UX Design & Ecommerce Development */}
              <div style={{ flex: "1 1 15%", marginBottom: "20px" }}>
                <Link
                  href="/graphic-design-company-in-bangalore"
                  className="removelinkStyle"
                  onClick={handleItemClick}
                >
                  <h6 style={{ fontWeight: "bold", cursor: "pointer" }}>
                    UI/UX Design
                  </h6>
                </Link>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", cursor: "pointer" }}>
                  <li onClick={handleItemClick}>Wireframing and Prototyping</li>
                </ul>

                <Link href="" className="removelinkStyle" onClick={handleItemClick}>
                  <h6 style={{ fontWeight: "bold", marginTop: "20px", cursor: "pointer" }}>
                    Ecommerce Development
                  </h6>
                </Link>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", cursor: "pointer" }}>
                  <li onClick={handleItemClick}>WooCommerce Development</li>
                  <li onClick={handleItemClick}>Ecommerce Web Development</li>
                </ul>
              </div>

              {/* Column 2: Web Development */}
              <div style={{ flex: "1 1 20%", marginBottom: "20px" }}>
                <Link
                  href="/website-development-company-in-bangalore"
                  className="removelinkStyle"
                  onClick={handleItemClick}
                >
                  <h6 style={{ fontWeight: "bold", cursor: "pointer" }}>Web Development</h6>
                </Link>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", cursor: "pointer" }}>
                  <li onClick={handleItemClick}>Frontend Development</li>
                  <li onClick={handleItemClick}>Full Stack Development</li>
                  <li onClick={handleItemClick}>Static Website Development</li>
                  <li onClick={handleItemClick}>Dynamic Website Development</li>
                  <li onClick={handleItemClick}>PHP Web Development</li>
                  <li onClick={handleItemClick}>Web Portal Development</li>
                  <li onClick={handleItemClick}>WordPress Website Development</li>
                  <li onClick={handleItemClick}>React JS Website Development</li>
                  <li onClick={handleItemClick}>Node JS Website Development</li>
                  <li onClick={handleItemClick}>CMS Website Development</li>
                </ul>
              </div>

              {/* Column 3: Software Development & 2D Animations */}
              <div style={{ flex: "1 1 25%", marginBottom: "20px" }}>
                <Link href="" className="removelinkStyle" onClick={handleItemClick}>
                  <h6 style={{ fontWeight: "bold", cursor: "pointer" }}>Software Development</h6>
                </Link>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", cursor: "pointer" }}>
                  <li onClick={handleItemClick}>CRM Software Development</li>
                  <li onClick={handleItemClick}>Enterprise Software Development</li>
                  <li onClick={handleItemClick}>Software Product Development</li>
                  <li onClick={handleItemClick}>Cloud Application Development</li>
                  <li onClick={handleItemClick}>Software Support and Maintenance</li>
                  <li onClick={handleItemClick}>Legacy Software Modernization</li>
                  <li onClick={handleItemClick}>Software Consulting</li>
                </ul>

                <Link
                  href="/2d-animation-studio-in-bangalore"
                  className="removelinkStyle"
                  onClick={handleItemClick}
                >
                  <h6 style={{ fontWeight: "bold", marginTop: "20px", cursor: "pointer" }}>
                    2D Animations
                  </h6>
                </Link>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", cursor: "pointer" }}>
                  <li onClick={handleItemClick}>Explainer Videos</li>
                  <li onClick={handleItemClick}>Character Animation</li>
                  <li onClick={handleItemClick}>Puppet Animation</li>
                  <li onClick={handleItemClick}>Motion Graphics</li>
                </ul>
              </div>

              {/* Column 4: Mobile App Development & Corporate Video Production */}
              <div style={{ flex: "1 1 23%", marginBottom: "20px" }}>
                <Link
                  href="/mobile-app-development-company-in-bangalore"
                  className="removelinkStyle"
                  onClick={handleItemClick}
                >
                  <h6 style={{ fontWeight: "bold", cursor: "pointer" }}>Mobile App Development</h6>
                </Link>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", cursor: "pointer" }}>
                  <li onClick={handleItemClick}>iOS Mobile App Development</li>
                  <li onClick={handleItemClick}>Android Mobile App Development</li>
                  <li onClick={handleItemClick}>Flutter Mobile App Development</li>
                  <li onClick={handleItemClick}>React Native Mobile App Development</li>
                </ul>

                <Link
                  href="/corporate-video-production-company-in-bangalore"
                  className="removelinkStyle"
                  onClick={handleItemClick}
                >
                  <h6 style={{ fontWeight: "bold", marginTop: "20px", cursor: "pointer" }}>
                    Corporate Video Production
                  </h6>
                </Link>
              </div>

              {/* Column 5: Solutions & B2B Marketing */}
              <div style={{ flex: "1 1 17%", marginBottom: "20px" }}>
                <Link
                  href="/digital-marketing-agency-in-bangalore"
                  className="removelinkStyle"
                  onClick={handleItemClick}
                >
                  <h6 style={{ fontWeight: "bold", cursor: "pointer" }}>Solutions</h6>
                </Link>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", cursor: "pointer" }}>
                  <li onClick={handleItemClick}>Website Performance Optimization</li>
                  <li onClick={handleItemClick}>Website Migration Service</li>
                  <li onClick={handleItemClick}>Startup Solution</li>
                  <li onClick={handleItemClick}>Search Engine Optimisation</li>
                  <li onClick={handleItemClick}>Social Media Marketing</li>
                  <li onClick={handleItemClick}>Paid Marketing</li>
                </ul>

                <Link
                  href="/b2b-marketing-agency-in-bangalore"
                  className="removelinkStyle"
                  onClick={handleItemClick}
                >
                  <h6 style={{ fontWeight: "bold", marginTop: "20px", cursor: "pointer" }}>
                    B2B Marketing
                  </h6>
                </Link>
              </div>
            </Row>
          </Container>
        </animated.div>
      )}
    </div>
  );
};

export default ServicesDropdown;
