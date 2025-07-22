import React from 'react';

const LMS = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Banner Image */}
        <div className="project-details-image mb-4">
          <img
            src="/img/project/lms-banner.jpg"
            alt="Learning Management System"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        {/* Overview */}
        <div className="projects-details-desc">
          <h3>Learning Management System (LMS)</h3>
          <p>
            Our LMS is a comprehensive digital learning platform for schools, colleges, corporates, and training institutes. It enables easy course creation, learner engagement, assessments, and performance tracking from a centralized dashboard.
          </p>

          {/* Course Management */}
          <div className="features-text">
            <h4>Course & Content Management</h4>
            <p>
              Instructors can create structured modules with videos, PDFs, slides, and quizzes. Lessons can be scheduled or released in a drip format to keep learners on track.
            </p>
            <img
              src="/img/project/lms-course.jpg"
              alt="Course Builder"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Exams */}
          <div className="features-text">
            <h4>Assessments & Exams</h4>
            <p>
              Built-in test engine supports MCQs, short answers, and timed exams. Instant grading, result analytics, and progress tracking boost learner performance.
            </p>
          </div>

          {/* Certifications */}
          <div className="features-text">
            <h4>Certificates & Achievements</h4>
            <p>
              Auto-generate digital certificates on course completion with customizable templates. Maintain a learner’s achievement history and badge rewards.
            </p>
          </div>

          {/* Admin & Reporting */}
          <div className="features-text">
            <h4>Instructor & Admin Dashboards</h4>
            <p>
              Admins get detailed insights on enrollment, engagement, and revenue. Track course completion rates, learner scores, and drop-offs to optimize content delivery.
            </p>
            <img
              src="/img/project/lms-dashboard.jpg"
              alt="LMS Admin Dashboard"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          <p>
            The LMS is scalable and mobile-friendly, supporting both self-paced and instructor-led models. It enhances learning experiences while reducing training costs and administrative workload.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LMS;
