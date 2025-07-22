import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => (
  <>
    {/* Search Area Start */}
    <div className="search-wrap">
      <div className="search-inner">
        <i className="fas fa-times search-close" id="search-close"></i>
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input type="search" className="main-search-input" placeholder="Search..." />
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* Breadcrumb Section Start */}
    <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/img/breadcrumb.jpg')" }}>
      <div className="border-shape">
        <img src="/img/element.png" alt="shape-img" />
      </div>
      <div className="line-shape">
        <img src="/img/line-element.png" alt="shape-img" />
      </div>
      <div className="container">
        {/* Breadcrumb content can go here if needed */}
      </div>
    </div>

    {/* Contact Section Start */}
    <section className="contact-section fix section-padding">
      <div className="container">
        <div className="contact-wrapper-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="contact-left-items">
                <div className="contact-info-area-2">
                  <div className="contact-info-items mb-4">
                    <div className="icon">{/* SVG icon here */}</div>
                    <div className="content">
                      <p>Call Us 7/24</p>
                      <h3>
                        <a href="tel:+91-9392562193">+91-9392562193</a>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info-items mb-4">
                    <div className="icon">{/* SVG icon here */}</div>
                    <div className="content">
                      <p>Make a Quote</p>
                      <h3>
                        <a href="mailto:info@tanasvi.com">info@tanasvi.com</a>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info-items border-none">
                    <div className="icon">{/* SVG icon here */}</div>
                    <div className="content">
                      <p>Location</p>
                      <h3>
                        Sunrise Startup Towers,Madhurawada,<br />
                        IT SEZ,Hill No:3,Visakhapatnam-48,<br />
                        Andhra Pradesh,India
                      </h3>
                    </div>
                    <div className="content">
                      <p>For Internship Please Contact</p>
                      <h3>
                        Name: E Nageswara Rao <br />
                        Mobile No:91-8074820261<br />
                        Email: internship-incharge@tanasvi.com
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <h2>Ready to Get Started?</h2>
                <form action="#" id="contact-form" method="POST" className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="form-clt">
                        <span>Your name*</span>
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="form-clt">
                        <span>Your Email*</span>
                        <input type="text" name="email" id="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <span>Write Message*</span>
                        <textarea name="message" id="message" placeholder="Write Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                      <button type="submit" className="theme-btn">
                        Send Message <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
