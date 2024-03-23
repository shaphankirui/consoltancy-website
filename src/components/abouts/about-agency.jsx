import React from 'react';

const AboutAgency = () => {
  return (
    <div className="about-us-agency agency-style pt-150">
      <div className="container">
        <div className="demo-container-1100">
          <div className="row gutter-80">
            <div className="col-lg-6 order-lg-last" data-aos="fade-left">
              <div className="single-block">
                <h5 className="block-title pb-30">About Us</h5>
                <p>At AgSmart Solutions, we are dedicated to revolutionizing the way farmers interact with the agricultural industry. Our platform offers a comprehensive suite of services tailored to meet the diverse needs of farmers worldwide. Whether you're seeking expert consultancy, searching for new markets to expand your business, or looking for rewarding job opportunities in the agricultural sector, we've got you covered.</p>
                <div className="author-data">
                  <h6 className="name pb-30">Derek Ramsey</h6>
                  <img src="/assets/images/home/sign2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-first" data-aos="fade-right"><div className="img-box">
              <img src="/assets/images/home/10.jpg" alt="" /></div>
            </div>
          </div>
          <div className="row gutter-80">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="single-block">
                <h5 className="block-title pb-30">Our Mission</h5>
                <p>Our mission is simple: to empower farmers and agricultural professionals by providing them with the resources, knowledge, and opportunities they need to thrive in an ever-evolving industry. </p> <br />
                <p>We are committed to fostering sustainable practices, promoting innovation, and enhancing the livelihoods of farmers across the globe.</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="img-box">
                <img src="/assets/images/home/11.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;