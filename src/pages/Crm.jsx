import React from 'react';

const CRM = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Banner Image */}
        <div className="project-details-image mb-4">
          <img
            src="/img/project/crm-banner.jpg"
            alt="CRM Project"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        {/* Overview */}
        <div className="projects-details-desc">
          <h3>Customer Relationship Management (CRM) System</h3>
          <p>
            Our CRM solution is a powerful tool that helps businesses manage leads, customer interactions, sales pipelines, and support services efficiently. It is designed to improve customer satisfaction and maximize conversions through automation and insights.
          </p>

          {/* Lead Management */}
          <div className="features-text">
            <h4>Lead & Contact Management</h4>
            <p>
              Easily capture leads from websites, emails, and forms. Assign them to sales reps, track activity history, and manage the entire lifecycle through a visual pipeline.
            </p>
            <img
              src="/img/project/crm-leads.jpg"
              alt="CRM Leads"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Communication */}
          <div className="features-text">
            <h4>Automated Communication & Reminders</h4>
            <p>
              Set up automated follow-ups, email templates, and task reminders. Integration with email, WhatsApp, or SMS ensures timely communication with prospects and clients.
            </p>
          </div>

          {/* Sales Tracking */}
          <div className="features-text">
            <h4>Sales Pipeline & Deals</h4>
            <p>
              Visualize deals by stages, assign probabilities, and forecast revenues. Track performance of sales teams and get alerts on stalled opportunities.
            </p>
            <img
              src="/img/project/crm-pipeline.jpg"
              alt="Sales Pipeline"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Support & Tickets */}
          <div className="features-text">
            <h4>Customer Support & Ticketing</h4>
            <p>
              Built-in ticketing module to handle support queries. Agents can resolve issues, assign priorities, and track resolution timelines, improving service quality.
            </p>
          </div>

          <p>
            Our CRM is fully customizable, cloud-based, and mobile-responsive. It helps sales and support teams collaborate better and provides leadership with valuable insights through dashboards and reports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CRM;
