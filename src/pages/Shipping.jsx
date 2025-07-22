import React from 'react';

const Shipping = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Banner */}
        <div className="project-details-image mb-4">
          <img
            src="/img/project/shipping-banner.jpg"
            alt="Shipping Management"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        {/* Content */}
        <div className="projects-details-desc">
          <h3>Shipping Company Management System</h3>
          <p>
            Our logistics and shipping management platform streamlines operations such as cargo tracking, route optimization, fleet management, and shipment documentation. Designed for shipping agencies and logistics providers to improve visibility and delivery speed.
          </p>

          <div className="features-text">
            <h4>Fleet & Vessel Tracking</h4>
            <p>
              Real-time GPS tracking, maintenance logs, and fuel usage reports. Reduce idle time and improve vessel availability.
            </p>
            <img
              src="/img/project/shipping-tracking.jpg"
              alt="Fleet Tracking"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          <div className="features-text">
            <h4>Cargo Booking & Invoicing</h4>
            <p>
              Customers can book cargo online, generate bills of lading, and receive automated invoices and notifications.
            </p>
          </div>

          <div className="features-text">
            <h4>Route Optimization</h4>
            <p>
              Smart algorithms suggest optimal delivery routes based on traffic, distance, and port conditions—resulting in cost and time savings.
            </p>
          </div>

          <div className="features-text">
            <h4>Customs & Compliance</h4>
            <p>
              Seamless documentation for customs clearance. Integration with port authority APIs for scheduling and compliance.
            </p>
          </div>

          <p>
            Our shipping platform empowers companies with automation, real-time insights, and a unified dashboard—leading to greater customer satisfaction and operational excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
