import React from 'react';

const Shipping = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Banner Image */}
        <div className="project-details-image mb-4">
          <img
            src="/img/project/shipping-banner.jpg"
            alt="Shipping Company Solutions"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>

        {/* Project Title & Overview */}
        <div className="projects-details-desc">
          <h3>Shipping & Logistics Management Platform</h3>
          <p>
            Our Shipping Company Management System is a robust and scalable logistics solution designed for fleet tracking, cargo handling, route optimization, and seamless global delivery management. It connects warehousing, port handling, and transportation under a single digital platform.
          </p>

          {/* Feature Block 1 */}
          <div className="features-text">
            <h4>Fleet & Cargo Tracking</h4>
            <p>
              Real-time GPS tracking and geofencing ensure visibility of cargo and transport units. Integration with IoT devices enables automated updates on shipment status, temperature control, and estimated delivery.
            </p>
            <img
              src="/img/project/shipping-fleet.jpg"
              alt="Fleet Tracking"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Feature Block 2 */}
          <div className="features-text">
            <h4>Route Optimization & Fuel Efficiency</h4>
            <p>
              AI-based route suggestions help reduce transit time and fuel costs. The system considers traffic, weather, and delivery urgency to automatically suggest optimal paths.
            </p>
          </div>

          {/* Feature Block 3 */}
          <div className="features-text">
            <h4>Warehouse & Port Integration</h4>
            <p>
              Integrated inventory modules manage port-based cargo handling, customs documentation, and storage status. Automated load scheduling avoids manual bottlenecks and delays.
            </p>
            <img
              src="/img/project/warehouse.jpg"
              alt="Warehouse Management"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Feature Block 4 */}
          <div className="features-text">
            <h4>Client Dashboard & Reporting</h4>
            <p>
              Clients get a real-time view of their shipments via a secure dashboard. Features include document uploads, notifications, delivery proofs, performance reports, and compliance logs.
            </p>
          </div>

          {/* Summary */}
          <p>
            This platform is ideal for freight forwarders, e-commerce supply chains, and shipping aggregators. With multilingual support and a mobile app version, logistics can be managed from anywhere in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
