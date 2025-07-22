import React from 'react';

const HRM = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Banner */}
        <div className="project-details-image mb-4">
          <img
            src="/img/about/hrm1.png"
            alt="HRM System"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        {/* Content */}
        <div className="projects-details-desc">
          <h3>Human Resource Management System (HRM)</h3>
          <p>
            Our HRM system is a centralized platform built to automate key HR processes such as recruitment, payroll, attendance, and performance management. It enhances efficiency, ensures compliance, and provides powerful analytics for HR decision-making.
          </p>

          <div className="features-text">
            <h4>Core Features</h4>
            <p>
              Employee database, department-role mapping, attendance tracking, leave approvals, payroll generation, appraisal cycles, and separation workflows are all integrated.
            </p>
            <img
              src="/img/project/hrm-attendance.jpg"
              alt="Attendance and Leave"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          <div className="features-text">
            <h4>Recruitment & Onboarding</h4>
            <p>
              Post jobs, filter resumes, schedule interviews, and onboard new employees digitally. All communication and updates are streamlined and accessible.
            </p>
          </div>

          <div className="features-text">
            <h4>Payroll & Compliance</h4>
            <p>
              Auto-calculate salaries, TDS, PF, ESI, and deductions. Generate payslips, tax forms, and ensure compliance with labor laws.
            </p>
            <img
              src="/img/project/hrm-payroll.jpg"
              alt="Payroll System"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          <div className="features-text">
            <h4>Performance Reviews</h4>
            <p>
              Track OKRs and KPIs, conduct 360-degree reviews, and visualize performance through dashboards.
            </p>
          </div>

          <p>
            Our HRM platform reduces paperwork, boosts engagement, and transforms HR into a strategic powerhouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRM;
