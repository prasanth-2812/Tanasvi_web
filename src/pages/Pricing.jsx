import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => (
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
        <div className="page-heading">
          <h1 className="wow fadeInUp" data-wow-delay=".3s">Pricing</h1>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
            </li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Pricing Section Start */}
    <section className="pricing-section fix section-padding">
      <div className="container">
        <div className="pricing-wrapper">
          <div className="section-title title-area  mx-auto mb-50">
            <div className="subtitle d-flex justify-content-center"> <img src="/img/icon/arrowLeft.svg" alt="icon" /> <span> FLEXIBLE PRICING PLAN </span><img src="/img/icon/arrowRight.svg" alt="icon" /></div>
            <h2 className="title text-center"> We’ve Offered the best <br /> pricing for you </h2>
          </div>
          <div className="tab-content">
            <div id="monthly" className="tab-pane fade show active" role="tabpanel">
              <div className="row">
                {/* Basic Plan */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                  <div className="pricing-items">
                    <div className="tag"><h6>Basic Plan</h6></div>
                    <div className="pricing-header">
                      <h2>$149</h2>
                      <span>Par month</span>
                      <p>Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et</p>
                    </div>
                    <ul className="pricing-list style3">
                      <li><i className="fa-solid fa-check"></i>Branding and design Identity</li>
                      <li><i className="fa-solid fa-check"></i>Web site Marketing Solutions</li>
                      <li><i className="fa-solid fa-check"></i>Free 15 GB Linux Hosting</li>
                      <li><i className="fa-solid fa-check"></i>24/7 system Monitoring</li>
                      <li><i className="fa-solid fa-check"></i>unlimited Download Data</li>
                    </ul>
                    <div className="pricing-button">
                      <p>Up to 10 users + 1.99 per user</p>
                      <Link to="/contact" className="pricing-btn mt-4">
                        choose Plan <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Most Popular */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                  <div className="pricing-items active">
                    <div className="tag"><h6>Most Popular</h6></div>
                    <div className="pricing-header">
                      <h2>$179</h2>
                      <span>Par month</span>
                      <p>Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et</p>
                    </div>
                    <ul className="pricing-list">
                      <li><i className="fa-solid fa-check"></i>Branding and design Identity</li>
                      <li><i className="fa-solid fa-check"></i>Web site Marketing Solutions</li>
                      <li><i className="fa-solid fa-check"></i>Free 15 GB Linux Hosting</li>
                      <li><i className="fa-solid fa-check"></i>24/7 system Monitoring</li>
                      <li><i className="fa-solid fa-check"></i>unlimited Download Data</li>
                    </ul>
                    <div className="pricing-button">
                      <p>Up to 10 users + 1.99 per user</p>
                      <Link to="/contact" className="pricing-btn mt-4">
                        choose Plan <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Premium */}
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                  <div className="pricing-items">
                    <div className="tag"><h6>Premium</h6></div>
                    <div className="pricing-header">
                      <h2>$199</h2>
                      <span>Par month</span>
                      <p>Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et</p>
                    </div>
                    <ul className="pricing-list style3">
                      <li><i className="fa-solid fa-check"></i>Branding and design Identity</li>
                      <li><i className="fa-solid fa-check"></i>Web site Marketing Solutions</li>
                      <li><i className="fa-solid fa-check"></i>Free 15 GB Linux Hosting</li>
                      <li><i className="fa-solid fa-check"></i>24/7 system Monitoring</li>
                      <li><i className="fa-solid fa-check"></i>unlimited Download Data</li>
                    </ul>
                    <div className="pricing-button">
                      <p>Up to 10 users + 1.99 per user</p>
                      <Link to="/contact" className="pricing-btn mt-4">
                        choose Plan <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Yearly tab omitted for brevity, can be added similarly if needed */}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Pricing; 