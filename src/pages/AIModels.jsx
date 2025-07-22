import React from 'react';

const AIModels = () => {
  return (
    <div className="project-details-area ptb-100">
      <div className="container">
        {/* Banner Image */}
        <div className="project-details-image mb-4">
          <img
            src="/img/project/ai-banner.jpg"
            alt="AI Based Models"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        {/* Overview */}
        <div className="projects-details-desc">
          <h3>AI-Based Intelligent Models</h3>
          <p>
            Our AI-based models are crafted to solve complex business challenges using machine learning, deep learning, and natural language processing. They are tailored for tasks like classification, prediction, sentiment analysis, image recognition, and forecasting.
          </p>

          {/* NLP Section */}
          <div className="features-text">
            <h4>Natural Language Processing (NLP)</h4>
            <p>
              From chatbots to sentiment detection, our NLP models extract meaning from human language using tools like spaCy, BERT, and custom-trained LSTMs. They can be deployed in customer service, feedback monitoring, and document summarization.
            </p>
            <img
              src="/img/project/ai-nlp.jpg"
              alt="NLP Model"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Vision Section */}
          <div className="features-text">
            <h4>Computer Vision & Image Processing</h4>
            <p>
              We develop image classification, object detection, and facial recognition models using TensorFlow and OpenCV. These are ideal for surveillance, medical imaging, and quality assurance in manufacturing.
            </p>
          </div>

          {/* Forecasting Section */}
          <div className="features-text">
            <h4>Forecasting & Analytics</h4>
            <p>
              Our time-series forecasting models help predict sales, demand, or financial trends using ARIMA, LSTM, and Prophet. They provide insights to support data-driven decision-making.
            </p>
            <img
              src="/img/project/ai-forecast.jpg"
              alt="Forecasting Graph"
              style={{ width: '100%', borderRadius: '6px', margin: '20px 0' }}
            />
          </div>

          {/* Customization */}
          <div className="features-text">
            <h4>Custom AI Model Deployment</h4>
            <p>
              All models can be containerized with Docker, served via REST APIs, and integrated with your existing applications or platforms. We also offer MLOps for versioning and performance tracking.
            </p>
          </div>

          <p>
            With expertise across domains, we empower businesses to harness the power of AI to automate processes, improve accuracy, and unlock new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIModels;
