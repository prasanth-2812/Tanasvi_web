import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => (
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
          <h1 className="wow fadeInUp" data-wow-delay=".3s">Faq</h1>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
            </li>
            <li>Faq</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Faq Section Start */}
    <section className="faq-section-2 fix section-padding">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="faq-image">
                <img src="/img/faq/faq-2.png" alt="faq-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content style2">
                <div className="section-title mb-40 mxw-650">
                  <div className="subtitle"> <img src="/img/icon/arrowLeft.svg" alt="icon" /> <span> See Our Faqs </span><img src="/img/icon/arrowRight.svg" alt="icon" /></div>
                  <h2 className="title"> Keep Your Business Safe & <br /> Ensure High Availability </h2>
                </div>
                <div className="faq-accordion mt-4 mt-md-0">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                          How long should a business plan be?
                        </button>
                      </h5>
                      <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                      <h5 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                          What is included in your services?
                        </button>
                      </h5>
                      <div id="faq2" className="accordion-collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                          What type of company is measured?
                        </button>
                      </h5>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Faq;
