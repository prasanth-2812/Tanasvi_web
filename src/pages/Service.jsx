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

    {/* Service Section Start (Clickable with images and links) */}
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title title-area mx-auto mb-20">
          <div className="subtitle d-flex justify-content-center">
            <img src="/img/icon/arrowLeft.svg" alt="icon" />
            <span> OUR SERVICES </span>
            <img src="/img/icon/arrowRight.svg" alt="icon" />
          </div>
          <h2 className="title text-center">We Provide the Best Quality</h2>
        </div>
        <div className="service-wrapper mb-0">
          <div className="row">
            {[
              {
                name: "Database Security",
                description: "Protect your data with advanced encryption, access controls, and monitoring.",
                image: "/img/service/icon/s-icon-1.svg",
                link: "/service/DatabaseSecurity"
              },
              {
                name: "IT Consultancy",
                description: "Expert advice to optimize your IT infrastructure and strategy.",
                image: "/img/service/icon/s-icon-2.svg",
                link: "/service/it-consultancy"
              },
              {
                name: "Cyber Security",
                description: "Comprehensive solutions to safeguard your business from cyber threats.",
                image: "/img/service/icon/s-icon-3.svg",
                link: "/service/cyber-security"
              },
              {
                name: "App Development",
                description: "Custom mobile and web applications tailored to your business needs.",
                image: "/img/service/icon/s-icon-4.svg",
                link: "/service/app-development"
              },
              {
                name: "UI/UX Design",
                description: "Intuitive and engaging designs for seamless user experiences.",
                image: "/img/service/icon/s-icon-10.svg",
                link: "/service/ui-ux-design"
              },
              {
                name: "IT Management",
                description: "End-to-end management of your IT operations and assets.",
                image: "/img/service/icon/s-icon-11.svg",
                link: "/service/it-management"
              },
              {
                name: "Digital Marketing",
                description: "Grow your brand with SEO, social media, and digital campaigns.",
                image: "/img/service/icon/s-icon-12.svg",
                link: "/service/digital-marketing"
              },
              {
                name: "Data Analysis",
                description: "Transform data into actionable insights for better decision-making.",
                image: "/img/service/icon/s-icon-13.svg",
                link: "/service/data-analysis"
              }
            ].map((service, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`.${index + 3}s`}
                key={service.name}
              >
                <Link to={service.link} className="text-decoration-none">
                  <div className="service-box-items box-shadow p-3" style={{ minHeight: '300px' }}>
                    <div className="icon mb-3">
                      <img
                        src={service.image}
                        alt={`${service.name} icon`}
                        style={{ width: '100%', height: '160px', objectFit: 'contain', borderRadius: '8px', background: '#f8f9fa' }}
                      />
                    </div>
                    <div className="content">
                      <h5>{service.name}</h5>
                      <p style={{ fontSize: '0.9rem' }}>{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Service;