import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => (
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
      <div className="container"></div>
    </div>

    {/* Service Section Start */}
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title title-area  mx-auto mb-20">
          <div className="subtitle d-flex justify-content-center"> <img src="/img/icon/arrowLeft.svg" alt="icon" /> <span> OUR SERVICES </span><img src="/img/icon/arrowRight.svg" alt="icon" /></div>
          <h2 className="title text-center"> We Provide the Best Quality </h2>
        </div>
        <div className="service-wrapper mb-0">
          <div className="row">
            {/* Repeat for each service box, updating asset paths and links as above */}
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-box-items box-shadow">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-1.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Database Security</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-box-items box-shadow active">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-2.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">IT Consultancy</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="service-box-items box-shadow">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-3.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">Cyber Security</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
              <div className="service-box-items box-shadow">
                <div className="icon">
                  <img src="/img/service/icon/s-icon-4.svg" alt="icon-img" />
                </div>
                <div className="content">
                  <h4>
                    <a href="#">App Development</a>
                  </h4>
                </div>
              </div>
            </div>
            {/* ...other service boxes... */}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Service; 