import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
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

    {/* Hero Section Start */}
    <section className="hero-section fix hero-3">
      <div className="bottom-shape">
        <img src="/img/hero/bottom-shape.png" alt="shape-img" />
      </div>
      <div className="array-button">
        <button className="array-prev"><i className="fal fa-arrow-right"></i></button>
        <button className="array-next"><i className="fal fa-arrow-left"></i></button>
      </div>
      <div className="swiper hero-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider-image bg-cover" style={{ backgroundImage: "url('/img/hero/hero-2.jpg')" }}>
              <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                <img src="/img/hero/mask-shape-2.png" alt="shape-img" />
              </div>
              <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                <img src="/img/hero/border-shape.png" alt="shape-img" />
              </div>
              <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                <img src="/img/choose/circle.png" alt="shape-img" />
              </div>
              <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                <img src="/img/frame.png" alt="shape-img" />
              </div>
            </div>
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-8">
                  <div className="hero-content">
                    <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">best it company</h5>
                    <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                      Innovative Solutions at <br />Tanasvi Technologies
                    </h1>
                    <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                      At Tanasvi Technologies, we believe IT is more than just tools – it's the invisible magic that transforms businesses,<br />
                      empowers people, and shapes a brighter digital tomorrow.
                    </p>
                    <div className="hero-button">
                      <Link to="/about" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn hover-white">
                        Explore More
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <Link to="/contact" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                        Contact Us
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat for other slides as needed, updating image paths */}
        </div>
      </div>
    </section>

    {/* About Section Start */}
    <section className="about-section section-padding fix bg-cover" style={{ backgroundImage: "url('/img/service/service-bg-2.jpg')" }}>
      <div className="container">
        <div className="about-wrapper style-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="circle-shape">
                  <img src="/img/about/circle.png" alt="shape-img" />
                </div>
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3><span className="count">25</span>Years</h3>
                    <p>Of Experience</p>
                  </div>
                </div>
                <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: "url('/img/about/03.jpg')" }}></div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <div className="section-title mb-3 mxw-650">
                  <div className="subtitle"><img src="/img/icon/arrowLeft.svg" alt="icon" /> <span>ABOUT TANASVI TECHNOLOGIES PVT LTD </span><img src="/img/icon/arrowRight.svg" alt="icon" /></div>
                  <h2 className="title">We Are Increasing Business Success With <span>Technology</span></h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">Tanasvi Technologies is the best in Product development and IT consultancy firm that provides a wide range of services in various domains of information technology. We have expertise in IT software, data communication, automation, artificial intelligence and natural language processing. We are committed to excellence in research and development, innovation and leadership in computer science and modern mathematics. We also aim to foster universal understanding and communication through our work.</p>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">We believe that information technology is a powerful tool for transforming the world and creating a better future for humanity. We use our knowledge and skills to solve complex problems, create innovative solutions and deliver value to our clients. We work with various sectors and industries, such as education, healthcare, finance, manufacturing, retail, entertainment and more. We offer customized solutions that meet the specific needs and goals of our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service Section Start */}
    <section className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: "url('/img/service/service-bg-3.jpg')" }}>
      <div className="container">
        <div className="row d-flex align-items-end justify-content-between mb-20">
          <div className="col-xl-7">
            <div className="section-title mxw-650">
              <div className="subtitle"> <img src="/img/icon/arrowLeft.svg" alt="icon" /> <span> What We Do </span><img src="/img/icon/arrowRight.svg" alt="icon" /></div>
              <h2 className="title"> We Solve IT Problems With Technology</h2>
            </div>
          </div>
          <div className="col-xl-5 d-flex align-items-end justify-content-end">
            <div className="btn-wrapper" data-wow-delay=".9s">
              <Link to="/service" className="theme-btn"> See all Services <i className="fa-solid fa-arrow-right-long"></i> </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-card-items">
              <div className="service-image">
                <img src="/img/service/02.png" alt="service-img" />
              </div>
              <div className="icon-2">
                <img src="/img/service/icon/s-icon-1.svg" alt="img" />
              </div>
              <div className="service-content">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-1.svg" alt="img" />
                </div>
                <h4>
                  <a href="#">Cross-Platform (Hybrid) Desktop and Mobile Apps</a>
                </h4>
                <p>
                  Experience seamless desktop and mobile applications that work across platforms, providing a unified user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-card-items">
              <div className="service-image">
                <img src="/img/service/03.jpg" alt="service-img" />
              </div>
              <div className="icon-2">
                <img src="/img/service/icon/s-icon-2.svg" alt="img" />
              </div>
              <div className="service-content">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-2.svg" alt="img" />
                </div>
                <h4>
                  <a href="#">Application Maintenance & Support Services</a>
                </h4>
                <p>
                  Ensure your applications run smoothly with our reliable maintenance and support services, keeping your software up-to-date and hassle-free.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-card-items">
              <div className="service-image">
                <img src="/img/service/04.jpg" alt="service-img" />
              </div>
              <div className="icon-2">
                <img src="/img/service/icon/s-icon-4.svg" alt="img" />
              </div>
              <div className="service-content">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-5.svg" alt="img" />
                </div>
                <h4>
                  <a href="#">Mobile Apps Development Services</a>
                </h4>
                <p>
                  Turn your ideas into reality with our user-friendly and innovative mobile app development for iOS, Android, and cross-platform solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="service-card-items">
              <div className="service-image">
                <img src="/img/service/05.jpg" alt="service-img" />
              </div>
              <div className="icon-2">
                <img src="/img/service/icon/s-icon-3.svg" alt="img" />
              </div>
              <div className="service-content">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-3.svg" alt="img" />
                </div>
                <h4>
                  <a href="#">Cloud Application Development Services</a>
                </h4>
                <p>
                  Leverage the power of the cloud with our scalable and secure application development services tailored to your business needs.
                  <br />
                </p>
              </div>
            </div>
          </div>
                  </div>
        <div className="cta-banner-2 section-padding">
          <div className="container">
            <div className="cta-wrapper-2 border-radius">
              <h3>
                Stay Connected With <br /> Cutting Edge IT
              </h3>
              <div className="author-icon">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="content">
                      <span>Call Us Now</span>
                  <h4>
                        <a href="tel:91-9392562193">91-9392562193</a>
                  </h4>
                </div>
              </div>
              <Link to="/contact" className="theme-btn bg-white">
                get A Quote
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Add more sections here as needed for full homepage content */}
  </>
);

export default Home;
