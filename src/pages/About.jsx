import React from 'react';

const About = () => (
  <>
    {/* Search Area Start */}
    <div className="search-wrap">
      <div className="search-inner">
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input className="main-search-input" placeholder="Search..." type="search" />
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* About Section Start */}
    <section className="about-section section-padding fix bg-cover" style={{ backgroundImage: "url('/img/service/service-bg-2.jpg')" }}>
      <div className="container">
        <div className="about-wrapper style-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items" style={{ position: 'relative' }}>
                <div className="circle-shape"><img alt="shape-img" src="/img/about/circle.png" /></div>
                <div className="counter-shape float-bob-y">
                  <div className="icon"><img alt="icon-img" src="/img/about/icon-1.svg" /></div>
                  <div className="content">
                    <h3><span className="count">25</span>Years</h3>
                    <p>Of Experience</p>
                  </div>
                </div>
                <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: "url('/img/about/03.jpg')", width: '100%', height: '350px', backgroundSize: 'cover', borderRadius: '8px' }}></div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <div className="section-title mb-3 mxw-650">
                  <div className="subtitle"><img alt="icon" src="/img/icon/arrowLeft.svg" /> <span>ABOUT TANASVI TECHNOLOGIES PVT LTD </span><img alt="icon" src="/img/icon/arrowRight.svg" /></div>
                  <h2 className="title">We Are Increasing Business Success With <span>Technology</span></h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">Tanasvi Technologies is the best in Product development and IT consultancy firm that provides a wide range of services in various domains of information technology. We have expertise in IT software, data communication, automation, artificial intelligence and natural language processing. We are committed to excellence in research and development, innovation and leadership in computer science and modern mathematics. We also aim to foster universal understanding and communication through our work.</p>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">We believe that information technology is a powerful tool for transforming the world and creating a better future for humanity. We use our knowledge and skills to solve complex problems, create innovative solutions and deliver value to our clients. We work with various sectors and industries, such as education, healthcare, finance, manufacturing, retail, entertainment and more. We offer customized solutions that meet the specific needs and goals of our clients.</p>
              </div>
            </div>
          </div>
          {/* Additional paragraphs below the main row */}
          <div className="row mt-4">
            <div className="col-12">
              <div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">We conduct and participate in various events and activities to acquire and share technical knowledge, computer literature, technical data and best practices from both domestic and international sources. We use this information to enhance our standards and quality of manpower recruitment. We train and develop skilled personnel for developing, marketing and implementing systems, applications, software and related products for both domestic and export markets. We also provide IT services,consultancy, systems design, program implementation and training to our clients.</p>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">Our current career-wise goal is to provide recruitment and placement of all kinds of personnel including managers, professionals, executives, skilled, semi-skilled, un-skilled workers, laborers and other technical personnel in India and abroad. We have a large network of contacts and partners in various countries and regions. We help our clients to find the best talent for their projects and operations. We also help our candidates to find the best opportunities for their careers and growth.</p>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">We are a best IT Technology company that values integrity, professionalism, teamwork, diversity and customer satisfaction. We strive to maintain a high level of ethical standards and social responsibility in our business. We respect the culture, laws and regulations of the countries and regions where we operate. We also care for the environment and the society and contribute to their well-being.</p>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">We invite you to join us in our journey of excellence and innovation. We look forward to working with you and serving you with our best. Thank you for choosing Tanasvi Technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Offer Section Start */}
    <section className="offer-section fix section-bg-2">
      <div className="line-shape"><img alt="shape-img" src="/img/team/line-shape.png" /></div>
      <div className="mask-shape"><img alt="shape-img" src="/img/team/mask-shape.png" /></div>
      <div className="container">
        <div className="section-title title-area mx-auto mb-15">
          <div className="subtitle d-flex justify-content-center"><img alt="icon" src="/img/icon/arrowLeftWhite.svg" /> <span className="text-white"> Our offering </span><img alt="icon" src="/img/icon/arrowRightWhite.svg" /></div>
          <h2 className="title text-center text-white">Enhance And Pioneer Using<br />Technology Trends</h2>
        </div>
        <div className="row">
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="offer-items">
              <div className="shape-top"><img alt="shape-img" src="/img/shape/offer-top.png" /></div>
              <div className="shape-bottom"><img alt="shape-img" src="/img/shape/offer-bottom.png" /></div>
              <div className="icon"><img src="/img/offer/website.svg" alt="Website" /></div>
              <div className="content"><h5>Website</h5></div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="offer-items">
              <div className="shape-top"><img alt="shape-img" src="/img/shape/offer-top.png" /></div>
              <div className="shape-bottom"><img alt="shape-img" src="/img/shape/offer-bottom.png" /></div>
              <div className="icon"><img src="/img/offer/android.svg" alt="Android" /></div>
              <div className="content"><h5>Android</h5></div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="offer-items active">
              <div className="shape-top"><img alt="shape-img" src="/img/shape/offer-top.png" /></div>
              <div className="shape-bottom"><img alt="shape-img" src="/img/shape/offer-bottom.png" /></div>
              <div className="icon"><img src="/img/offer/ios.svg" alt="IOS" /></div>
              <div className="content"><h5>IOS</h5></div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="offer-items">
              <div className="shape-top"><img alt="shape-img" src="/img/shape/offer-top.png" /></div>
              <div className="shape-bottom"><img alt="shape-img" src="/img/shape/offer-bottom.png" /></div>
              <div className="icon"><img src="/img/offer/watch.svg" alt="Watch" /></div>
              <div className="content"><h5>Watch</h5></div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".9s">
            <div className="offer-items">
              <div className="shape-top"><img alt="shape-img" src="/img/shape/offer-top.png" /></div>
              <div className="shape-bottom"><img alt="shape-img" src="/img/shape/offer-bottom.png" /></div>
              <div className="icon"><img src="/img/offer/tv.svg" alt="Tv" /></div>
              <div className="content"><h5>Tv</h5></div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".9s">
            <div className="offer-items">
              <div className="shape-top"><img alt="shape-img" src="/img/shape/offer-top.png" /></div>
              <div className="shape-bottom"><img alt="shape-img" src="/img/shape/offer-bottom.png" /></div>
              <div className="icon"><img src="/img/offer/iot.svg" alt="IOT" /></div>
              <div className="content"><h5>IOT</h5></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
