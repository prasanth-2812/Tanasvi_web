import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer-section pt-100 footer-bg">
    <div className="container">
      <div className="contact-info-area">
        <div className="contact-info-items wow fadeInUp" data-wow-delay=".7s">
          <div className="icon">
            {/* SVG icon here */}
          </div>
          <div className="content">
            <p>Address</p>
            <h3>
              Sunrise Startup Towers,Madhurawada,
              IT SEZ,Hill No:3,Visakhapatnam-48,
              Andhra Pradesh,India
            </h3>
          </div>
        </div>
        <div className="contact-info-items wow fadeInUp" data-wow-delay=".5s">
          <div className="icon">{/* SVG icon here */}</div>
          <div className="content">
            <p>Send Email</p>
            <h3>
              <a href="mailto:info@tanasvi.com">info@tanasvi.com</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="widget-area style1 footer-bg pb-80">
      <div className="container">
        <div className="footer-layout style1">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="widget footer-widget wow fadeInUp" data-wow-delay=".6s">
                <div className="gt-widget-about">
                  <div className="about-logo">
                    <Link to="/"><h3 className="widget_title">Tanasvi Technologies Pvt Ltd</h3></Link>
                  </div>
                  <p className="about-text"> Empower your business with cutting-edge solutions tailored to your needs. Experience excellence at Tanasvi Technologies.
                  </p>
                  <div className="gt-social style2">
                    <a href="https://www.facebook.com/p/Tanasvi-Technologies-100077635476112/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://in.linkedin.com/company/tanasvi-technologies" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-12">
              <div className="widget widget_nav_menu footer-widget wow fadeInUp" data-wow-delay="1s">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link to="/about"><i className="fa-solid fa-chevrons-right"></i> About</Link></li>
                    <li><Link to="/service"><i className="fa-solid fa-chevrons-right"></i>Our Services</Link></li>
                    <li><Link to="/project"><i className="fa-solid fa-chevrons-right"></i>Our Projects</Link></li>
                    <li><Link to="/team"><i className="fa-solid fa-chevrons-right"></i>Career</Link></li>
                    <li><Link to="/contact"><i className="fa-solid fa-chevrons-right"></i>Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-12">
              <div className="widget widget_nav_menu footer-widget wow fadeInUp" data-wow-delay="1s">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link to="/service"><i className="fa-solid fa-chevrons-right"></i>IT Consultancy</Link></li>
                    <li><Link to="/service"><i className="fa-solid fa-chevrons-right"></i>App Development</Link></li>
                    <li><Link to="/service"><i className="fa-solid fa-chevrons-right"></i>Database Security</Link></li>
                    <li><Link to="/service"><i className="fa-solid fa-chevrons-right"></i>AI and ML</Link></li>
                    <li><Link to="/service"><i className="fa-solid fa-chevrons-right"></i>Cloud Services</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="widget widget_nav_menu footer-widget wow fadeInUp" data-wow-delay="1.6s">
                <h3 className="widget_title">Contact Us</h3>
                <div className="checklist style2">
                  <ul className="ps-0">
                    <li className="text-white"><i className="fa-solid fa-envelope"></i></li>
                    <li className="text-white">info@tanasvi.com</li>
                  </ul>
                  <ul className="ps-0">
                    <li className="text-white"><i className="fa-solid fa-phone"></i></li>
                    <li className="text-white">91-9392562193</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap bg-theme">
      <div className="container">
        <div className="copyright-layout">
          <div className="layout-text wow fadeInUp" data-wow-delay=".3s">
            <p className="copyright">
              <i className="fal fa-copyright"></i> All Copyright 2024 by <Link to="/">Tanasvi Technologies Pvt Ltd</Link>
            </p>
          </div>
          <div className="layout-link wow fadeInUp" data-wow-delay=".6s">
            <div className="link-wrapper">
              <Link to="/contact">Terms &amp; Condition </Link>
              <Link to="/contact">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 