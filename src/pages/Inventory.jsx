import React from "react";

const Inventory = () => (
  <section className="project-details-area ptb-100">
    <div className="container">
      <div className="project-details-image">
        <img src="/img/project/inventory.jpg" alt="Inventory" className="img-fluid rounded mb-4" />
      </div>
      <div className="projects-details-desc">
        <h3>Inventory Management Model</h3>
        <p>Tracks and manages stock levels, suppliers, and distribution across warehouses.</p>
        <h4>Highlights:</h4>
        <ul>
          <li>Real-time inventory tracking</li>
          <li>Automatic reorder level alerts</li>
          <li>Barcode/RFID integration</li>
          <li>Multi-location warehouse management</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Inventory;
