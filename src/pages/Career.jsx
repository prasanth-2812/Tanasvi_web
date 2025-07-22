import React from 'react';

const Career = () => (
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

    {/* Career Section Start */}
    <section className="career-section fix section-padding">
      <div className="container">
        <div className="section-title title-area mx-auto mb-20">
          <div className="subtitle d-flex justify-content-center">
            <img src="/img/icon/arrowLeft.svg" alt="icon" />
            <span> CAREER AT TANASVI </span>
            <img src="/img/icon/arrowRight.svg" alt="icon" />
          </div>
          <h2 className="title text-center"> Join Our Team & Build Your Future </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-4">
              <p>
                At Tanasvi Technologies, we are always looking for passionate, innovative, and dedicated individuals to join our team.
                Whether you're a fresher or an experienced professional, we offer challenging opportunities in various fields of technology.
              </p>
              <p>
                To apply, email your updated resume to <a href="mailto:careers@tanasvi.com">careers@tanasvi.com</a> or fill out the form below.
              </p>
            </div>

            <form className="career-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Phone Number" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Position Applying For" required />
                </div>
                <div className="col-12 mb-3">
                  <textarea className="form-control" rows="4" placeholder="Message (optional)"></textarea>
                </div>
                <div className="col-12 mb-3">
                  <input type="file" className="form-control" required />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">Submit Application</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Career;
