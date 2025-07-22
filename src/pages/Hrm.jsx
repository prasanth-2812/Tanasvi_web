import React from "react";

const HRM = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="breadcrumb-wrapper bg-cover"
        style={{
          backgroundImage: "url('/img/project/hrm-banner.jpg')",
          padding: "120px 0",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1>Human Resource Management System</h1>
          <p>Streamlining HR processes with automation, insights & control</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/img/project/hrm-overview.jpg"
                alt="HRM Overview"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
            <div className="col-lg-6">
              <h2>About the Project</h2>
              <p>
                Our HRM system provides a centralized platform to manage the entire employee lifecycle — from recruitment to retirement. It’s designed to automate daily HR tasks while giving HR teams data-driven insights to support better decision-making.
              </p>
              <ul className="list-unstyled mt-3">
                <li>✔️ Employee Onboarding & Lifecycle</li>
                <li>✔️ Attendance, Leave & Payroll Management</li>
                <li>✔️ Performance Reviews & Goals</li>
                <li>✔️ Document & Policy Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-bg-2 section-padding">
        <div className="container">
          <div className="section-title text-center mb-40">
            <h2>Key Features</h2>
          </div>
          <div className="row">
            {[
              {
                icon: "/img/icons/user-flow.svg",
                title: "Automated Recruitment",
                desc: "End-to-end tracking of job applications, interviews, and onboarding workflows.",
              },
              {
                icon: "/img/icons/calendar-check.svg",
                title: "Leave & Attendance",
                desc: "Fully integrated attendance tracking with biometric or app support.",
              },
              {
                icon: "/img/icons/payroll.svg",
                title: "Payroll & Compliance",
                desc: "Accurate salary calculations with auto-generated payslips & tax reports.",
              },
              {
                icon: "/img/icons/review.svg",
                title: "Performance Reviews",
                desc: "Track OKRs, feedback cycles, and manager evaluations.",
              },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="text-center p-3 box-shadow bg-white rounded">
                  <img src={item.icon} alt={item.title} height="50" className="mb-3" />
                  <h5>{item.title}</h5>
                  <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-4">App Screenshots</h2>
          <div className="row">
            {[1, 2, 3].map((i) => (
              <div className="col-md-4 mb-3" key={i}>
                <img
                  src={`/img/project/hrm-screenshot-${i}.jpg`}
                  alt={`Screenshot ${i}`}
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HRM;
