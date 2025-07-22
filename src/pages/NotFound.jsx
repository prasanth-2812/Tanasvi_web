import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
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
          <h1 className="wow fadeInUp" data-wow-delay=".3s">Page Not Found</h1>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
            </li>
            <li>404</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Error Section Start */}
    <section className="Error-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="error-items">
              <div className="error-image">
                <img src="/img/404.png" alt="img" />
              </div>
              <h2>
                Whoops! This Page got Lost <br /> in converstion
              </h2>
              <Link to="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                Go Back Home
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default NotFound; 