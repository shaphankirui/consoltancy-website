import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import BrandSlider from "../trusted-pertners/brand-slider";

const contents = {
  main_title: (
    <>
      What’s Our Customer <br />
      Saying.
    </>
  ),
  testimonial_data: [
    {
      desc: "I recently graduated with a degree in agriculture and was unsure of where to start my career. Thankfully, I discovered Ag-Smart solutions and their job finding services. They helped me navigate the job market and connected me with a fantastic opportunity at a leading agricultural company. I am excited to begin this new chapter in my career, and I could not have done it without their assistance. Highly recommended!",
      img: "/assets/images/home/3.jpg",
      name: "David Mutai",
      title: "Recent Agriculture Graduate, Kericho",
    },
    {
      desc: "I have been in the agriculture industry for over two decades, and I thought I knew everything there was to know. However, Ag-Smart solutions proved me wrong. Their consultancy services not only refreshed my existing knowledge but also introduced me to innovative practices that have transformed my farm. Thanks to their guidance, I have increased efficiency, reduced costs, and boosted productivity.",
      img: "/assets/images/home/2.jpg",
      name: "Njeri Maina",
      title: "Experienced Farmer, Nyeri",
    },
    {
      desc: "I cannot recommend Ag-Smart solutions enough! Their consultancy services have been invaluable to my farming operation. With their expert advice and personalized recommendations, I have been able to implement new techniques that have significantly improved my crop yields. Thank you for helping me take my farm to the next level!",
      img: "/assets/images/home/7.jpg",
      name: "Willy Okonyene",
      title: "Farmer, Busia",
    },
    {
      desc: "As a small-scale farmer, finding markets for my produce has always been a challenge. That is why I turned to Ag-Smart solutions for help. Their market finding service connected me with buyers who appreciate the quality of my products, allowing me to expand my customer base and increase my profits. I am grateful for the support and guidance they heve provided along the way!",
      img: "/assets/images/home/2.jpg",
      name: "Maria Marwa",
      title: "Small-scale Farmer, Nyahururu",
    },
  ],
};

const { main_title, testimonial_data } = contents;

const AppsTestimonial = ({
  about_agn,
  ser_creative = false,
  ui_testi = false,
}) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div
        className={`apps-testimonial ${about_agn ? "bg-white" : ""} ${
          ser_creative ? "bg-white mb-150" : ""
        }`}
      >
        {!about_agn && (
          <>
            <div
              className="d-shape"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              D
            </div>
            <div
              className="u-shape"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              U
            </div>
            <img
              src="/assets/images/shape/shape-52.svg"
              alt=""
              className="shape-one"
            />
            <img
              src="/assets/images/shape/shape-53.svg"
              alt=""
              className="shape-two"
            />
            <img
              src="/assets/images/shape/shape-45.svg"
              alt=""
              className="shape-three"
            />
            <img
              src="/assets/images/shape/shape-46.svg"
              alt=""
              className="shape-four"
            />
          </>
        )}
        <div className="container">
          <div className={`theme-title-one ${about_agn ? "" : "upper-bar"}`}>
            <h2 className="main-title">{main_title}</h2>
          </div>
          <div className="customer-slider p-rel">
            <Swiper
              slidesPerView={1}
              loop={sliderLoop}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonial_data.map((item, i) => {
                const { desc, img, name, title } = item;
                return (
                  <SwiperSlide key={i}>
                    <div className="item">
                      <div className="customer-block">
                        <p>{desc}</p>
                        <div className="clearfix">
                          <img src={img} alt="" className="customer-img" />
                          <div className="customer-info">
                            <h5 className="name">{name}</h5>
                            <span>{title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-controls d-flex align-items-center justify-content-center">
              <div className="swiper-prev">
                <i className="flaticon-back"></i>
              </div>
              <div className="swiper-next">
                <i className="flaticon-next"></i>
              </div>
            </div>
          </div>
        </div>

        {!ser_creative && !ui_testi && (
          <div className="trusted-partner">
            <div className="container">
              <BrandSlider />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AppsTestimonial;
