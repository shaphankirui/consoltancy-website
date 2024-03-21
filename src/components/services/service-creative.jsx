import React from 'react';

function ServiceBlock({ color, num, title, subtitle, icon,order }) {
  return (
    <div className="service-block" style={{ background: color }}>
      <div className="container" >
        <div className="demo-container-1100" >
          <div className="row" >
            <div className={`col-lg-6 ${order?'order-lg-last':''}`} data-aos="fade-left" >
              <div className="service-info" >
                <div className="num">{num}</div>
                <h2 className="service-title"><a href="#">{title}</a></h2>
                <p>{subtitle}</p>
                <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
              </div>
            </div>
            <div className={`col-lg-6 ${order?'order-lg-first':''}`} data-aos="fade-right">
              <div className="img-box">
                <img src={`/assets/images/icon/icon${icon}.svg`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCreative = () => {
  return (
    <>
      <div className="our-service service-creative pt-150">
        <div className="our-history mb-200">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 order-lg-last">
                <div className="text-wrapper">
                  <h2 className="service-title">Providing our trusted services For All.</h2>
                  <p> consultancy service aims to empower farmers with the knowledge and tools necessary to make informed decisions regarding crop selection and management practices, thereby improving farm profitability and sustainability in the long run.</p>
                </div>
              </div>
              <div className="col-lg-5 order-lg-first">
                <div className="img-box">
                  <img src="/assets/images/service/7.jpg" alt="" />
                  <img src="/assets/images/service/8.jpg" alt="" className="bottom-img" data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <ServiceBlock color="#7d4afe" num='01' title="Soil Analysis." subtitle="Conducting soil tests to determine its composition, pH levels, nutrient content, and drainage characteristics. This analysis helps in understanding the suitability of the soil for various crops and suggests appropriate amendments if needed.
        Providing recommendations on soil management practices such as fertilization, irrigation, and soil conservation techniques to optimize crop growth and yield." icon="54" order={true} />

        <ServiceBlock color="#676dff" num='02' title="Climate Assessment & Crop Suitability Analysis" subtitle="Considering the soil and climate data along with the farmer's preferences, market demand, and profitability to recommend suitable crops for cultivation.Identifying potential pest and disease risks based on the crop selection and prevailing environmental conditions." icon="55" />

        <ServiceBlock color="#549cff" num='03' title="Crop Rotation and Diversification" subtitle="Advising farmers on the importance of crop rotation to improve soil fertility, prevent pest buildup, and reduce weed pressure.
Recommending complementary crop combinations or intercropping techniques to maximize land use efficiency and minimize production risks." icon="56" order={true} />

        <ServiceBlock color="#04cce8" num='04' title="Technology Adoption." subtitle="Introducing farmers to innovative agricultural technologies such as precision farming, drip irrigation, and remote sensing for efficient resource utilization and yield optimization.
Providing training and support for the adoption of modern farming practices and equipment to enhance productivity and sustainability." icon="57" />



      </div>
    </>
  );
};

export default ServiceCreative;