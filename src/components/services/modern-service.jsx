import React from 'react';

function ServiceBlock({ order, color, tag, title, fade, fade_2, img }) {
  return (
    <div className="row service-block align-items-center">
      <div className={`col-md-6 ${order ? 'order-md-last' : ''}`} data-aos={`fade-${fade}`}>
        <div className="service-info">
          <div className={`tag color-${color}`}>{tag}</div>
          <h2 className="service-title"><a href="#">{title}</a></h2>
          <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
        </div>
      </div>
      <div className={`col-md-6 ${order ? 'order-md-first' : ''}`} data-aos={`fade-${fade_2}`}>
        <div className="img-box">
          <img src={`/assets/images/service/${img}.jpg`} alt="" />
        </div>
      </div>
    </div>
  )
}

const ModernService = () => {
  return (
    <>
      <div className="our-service service-modren pt-150 pb-200">
        <div className="container">
          <div className="theme-title-three text-center mb-200">
            <h2 className="title">Get Yourself a market For your Food Products!.</h2>
            <p>We provide comprehensive market support services, the goal is to help farmers access lucrative markets, increase their competitiveness, and maximize the value of their agricultural products, ultimately leading to improved farm incomes and sustainability.</p>
          </div>

          <ServiceBlock order={true} fade="left" fade_2="right" color="one" tag="Market Analysis & Product Promotion"
            title="Conducting research to identify buyers and developing marketing strategies to promote farmers' products effectively." img="9" />
          <ServiceBlock order={false} fade="right" fade_2="left" color="two" tag="Market Access & Market Intelligence"
            title="Establishing partnerships while providing intelligence to assist farmers in meeting requirements and making informed decisions." img="10" />
          <ServiceBlock order={true} fade="left" fade_2="right" color="three" tag="Value-Added Opportunities & Logistics"
            title="Exploring value-added options while optimizing logistics to increase product value and ensure efficient distribution." img="11" />
          {/* <ServiceBlock order={false} fade="right" fade_2="left" color="four" tag="Marketing"
            title="Social & Online Marketing." img="12" /> */}

        </div>
      </div>
    </>
  );
};

export default ModernService;