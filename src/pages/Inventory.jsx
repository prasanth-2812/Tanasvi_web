import React from 'react';

const Inventory = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Banner */}
        <div className="project-details-image mb-4">
          <img
            src="/img/project/inventory-banner.jpg"
            alt="Inventory Management System"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        {/* Overview */}
        <div className="projects-details-desc">
          <h3>Inventory Management System</h3>
          <p>
            Our Inventory Management System provides real-time visibility, control, and optimization of stock and supplies across warehouses, stores, and supply chains. It helps reduce carrying costs, eliminate stockouts, and enhance operational efficiency.
          </p>

          {/* Stock Control */}
          <div className="features-text">
            <h4>Real-Time Stock Monitoring</h4>
            <p>
              Track inventory levels dynamically with barcode/RFID scanning, auto-updates, and alerts for reorder thresholds. The system supports FIFO, LIFO, and batch tracking.
            </p>
            <img
              src="/img/project/inventory-stock.jpg"
              alt="Stock Control"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Demand Planning */}
          <div className="features-text">
            <h4>Demand Forecasting & Planning</h4>
            <p>
              Predict stock requirements based on sales trends, seasons, and supplier lead times. Minimize overstocking and understocking with intelligent procurement planning.
            </p>
          </div>

          {/* Multi-Location Support */}
          <div className="features-text">
            <h4>Multi-Warehouse & Location Tracking</h4>
            <p>
              Manage inventory across multiple warehouses or outlets. The system syncs stock transfers, receipts, and issues in real-time while supporting location-level reporting.
            </p>
            <img
              src="/img/project/inventory-locations.jpg"
              alt="Warehouse Map"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Reporting */}
          <div className="features-text">
            <h4>Reports & Analytics</h4>
            <p>
              Export inventory audits, valuation reports, movement history, and reorder trends in Excel or PDF. Interactive dashboards help visualize slow-moving or high-turnover items.
            </p>
          </div>

          {/* Closing Note */}
          <p>
            Whether you're running a retail chain, manufacturing unit, or e-commerce platform, our Inventory Management System ensures streamlined stock operations, lowers wastage, and maximizes profit margins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
