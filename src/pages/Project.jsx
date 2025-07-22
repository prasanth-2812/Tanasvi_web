import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => (
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

    {/* Project Section Start (Clickable with images and links) */}
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title title-area mx-auto mb-20">
          <div className="subtitle d-flex justify-content-center">
            <img src="/img/icon/arrowLeft.svg" alt="icon" />
            <span> OUR PROJECTS </span>
            <img src="/img/icon/arrowRight.svg" alt="icon" />
          </div>
          <h2 className="title text-center">We Delivered Innovative and Customized Solutions</h2>
        </div>
        <div className="service-wrapper mb-0">
          <div className="row">
            {[
              {
                name: "Human Resource Management (HRM)",
                description: "Centralized HR system covering recruitment, payroll, performance, and compliance.",
                image: "/img/project/hrm.jpg",
                link: "/project/hrm"
              },
              {
                name: "Shipping Company Models",
                description: "Logistics management with fleet, cargo, route optimization.",
                image: "/img/project/shipping.jpg",
                link: "/project/Shipping"
              },
              {
                name: "Inventory Models",
                description: "Stock visibility, demand planning, and distribution tracking.",
                image: "/img/project/inventory.jpg",
                link: "/project/inventory"
              },
              {
                name: "Home Automation",
                description: "IoT platform for smart devices, energy saving, and security.",
                image: "/img/project/home.jpg",
                link: "/project/home-automation"
              },
              {
                name: "AI Based Models",
                description: "Custom ML models for NLP, computer vision, and forecasting.",
                image: "/img/project/ai.jpg",
                link: "/project/ai-models"
              },
              {
                name: "Learning Management System (LMS)",
                description: "E-learning with course creation, exams, certification & analytics.",
                image: "/img/project/lms.jpg",
                link: "/project/lms"
              },
              {
                name: "Customer Relationship Management (CRM)",
                description: "Lead capture, client communication, and automation tools.",
                image: "/img/project/crm.jpg",
                link: "/project/crm"
              }
            ].map((project, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`.${index + 3}s`}
                key={project.name}
              >
                <Link to={project.link} className="text-decoration-none">
                  <div className="service-box-items box-shadow p-3" style={{ minHeight: '300px' }}>
                    <div className="icon mb-3">
                      <img
                        src={project.image}
                        alt={`${project.name} icon`}
                        style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </div>
                    <div className="content">
                      <h5>{project.name}</h5>
                      <p style={{ fontSize: '0.9rem' }}>{project.description}</p>
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

export default Project;
