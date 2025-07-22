import React from 'react';

const Team = () => (
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

    {/* Team Section Start */}
    <section className="team-section-4 section-padding">
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Coming Soon</h1>
      </div>
    </section>
  </>
);

export default Team; 