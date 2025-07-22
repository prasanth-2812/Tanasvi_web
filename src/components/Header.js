import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-top-section top-style-3">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope"></i>
              <a href="mailto:info@tanasvi.com" className="link">info@tanasvi.com</a>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume"></i>
              <a href="tel:2086660112">+91-9392562193</a>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <a href="https://www.facebook.com/p/Tanasvi-Technologies-100077635476112/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://in.linkedin.com/company/tanasvi-technologies" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="header-sticky" className="header-3">
      <div className="plane-shape">
        <img src="/img/plane.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="header-left">
              <div className="logo">
                <Link to="/" className="header-logo">
                  <img src="/img/logo.jpg" alt="logo-img" />
                </Link>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown active menu-thumb">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/service">Services</Link>
                      </li>
                      <li>
                        <Link to="/project">Projects</Link>
                      </li>
                      <li>
                        <Link to="/team">Career</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <a href="#0" className="search-trigger search-icon"><i className="fal fa-search"></i></a>
              <div className="header-button">
                <Link to="/contact" className="theme-btn bg-white">
                  <span>
                    get A Quote
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
              <div className="header__hamburger d-lg-none my-auto">
                <div className="sidebar__toggle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 