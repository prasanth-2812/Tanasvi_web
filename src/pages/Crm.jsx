import React from "react";

const CRM = () => (
  <section className="project-details-area ptb-100">
    <div className="container">
      <div className="project-details-image">
        <img src="/img/project/crm.jpg" alt="CRM" className="img-fluid rounded mb-4" />
      </div>
      <div className="projects-details-desc">
        <h3>Customer Relationship Management (CRM)</h3>
        <p>CRM for managing leads, customer interactions, and workflow automation.</p>
        <h4>Highlights:</h4>
        <ul>
          <li>Lead capture from web forms & email</li>
          <li>Contact & account management</li>
          <li>Follow-ups, reminders, and email templates</li>
          <li>Pipeline tracking & conversion insights</li>
        </ul>
      </div>
    </div>
  </section>
);

export default CRM;
