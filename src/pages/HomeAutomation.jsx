import React from 'react';

const HomeAutomation = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Hero Image */}
        <div className="project-details-image mb-4">
          <img
            src="/img/project/home-banner.jpg"
            alt="Home Automation System"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        {/* Overview */}
        <div className="projects-details-desc">
          <h3>Home Automation System</h3>
          <p>
            Our Home Automation solution transforms traditional living spaces into smart, secure, and energy-efficient environments. It provides centralized control over lighting, appliances, security, and environment settings via mobile or voice assistants.
          </p>

          {/* Smart Control */}
          <div className="features-text">
            <h4>Centralized Smart Control</h4>
            <p>
              Control all connected devices through a unified interface. Schedule operations or trigger scenes like “Movie Night” or “Away Mode” for convenience and energy efficiency.
            </p>
            <img
              src="/img/project/home-devices.jpg"
              alt="Smart Control Interface"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Security */}
          <div className="features-text">
            <h4>Enhanced Security & Surveillance</h4>
            <p>
              Integrate CCTV, motion sensors, video doorbells, and alarms. Receive real-time alerts and monitor your home remotely using a smartphone app or smart speaker.
            </p>
          </div>

          {/* Automation & Sensors */}
          <div className="features-text">
            <h4>Automation Through Sensors</h4>
            <p>
              Automate lighting, HVAC, and appliances based on occupancy, ambient light, or temperature. Reduce energy bills and maximize comfort with intelligent presets.
            </p>
            <img
              src="/img/project/home-sensors.jpg"
              alt="Sensors and Automation"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Integration */}
          <div className="features-text">
            <h4>Third-Party Integration</h4>
            <p>
              Compatible with Alexa, Google Home, and Apple HomeKit. Seamlessly integrate with third-party devices and platforms through open APIs and IoT protocols like Zigbee and Z-Wave.
            </p>
          </div>

          <p>
            Our home automation platform is scalable and customizable, ideal for apartments, villas, or commercial properties. It enhances lifestyle convenience, improves security, and saves energy — making everyday living smarter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAutomation;
