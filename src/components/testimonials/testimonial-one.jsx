import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const contents = {
  upper_title: 'Testimonials',
  main_title: 'Check what’s our client say about us!',
  peoples: [
    '/assets/images/home/2.jpg',
    '/assets/images/home/3.jpg',
    '/assets/images/home/4.jpg',
    '/assets/images/home/5.jpg',
    '/assets/images/home/6.jpg',
    '/assets/images/home/7.jpg',
  ],
  testi_items: [
    {
      desc: 'I cannot thank AgSmart enough for helping me find my dream job! Their personalized approach and attention to detail truly made all the difference. From revamping my resume to providing valuable interview tips, they were with me every step of the way. Thanks to their support, I landed a position that perfectly aligns with my skills and career aspirations. I highly recommend [Service Name] to anyone looking to kickstart their career journey!',
      img: '/assets/images/home/2.jpg',
      name: 'Gilber  Ratemo',
      title: 'Extension Officer'
    },
    {
      desc: 'I had been struggling to find employment for months until I discovered AgSmart. Their job matching algorithm matched me with several suitable job opportunities that I had not even considered before. With their guidance, I refined my resume and aced my interviews. Thanks to [Service Name], I landed a job that not only matches my qualifications but also offers room for growth and advancement. I am incredibly grateful for their support and highly recommend their services to anyone searching for their next career move!',
      img: '/assets/images/home/3.jpg',
      name: 'shaphan Kirui',
      title: 'Developer'
    },
  ]
}

const { main_title, upper_title, peoples, testi_items } = contents;

const TestimonialOne = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className="agn-testimonial">
        <div className="shape-box">
          <img src="/assets/images/shape/4.png" alt="" />
          {peoples.map((img, i) => <img key={i} src={img} alt="" className="people" />)}
          <img src="/assets/images/shape/shape-6.svg" alt="" className="shape-one" />
        </div>
        <img src="/assets/images/shape/shape-66.svg" alt="" className="shape-two" data-aos="fade-left" />
        <div className="container clearfix">
          <div className="main-content">
            <div className="theme-title-one">
              <div className="upper-title">{upper_title}</div>
              <h2 className="main-title">{main_title}</h2>
            </div>

            <Swiper
              className="agn-testimonial-slider"
              loop={sliderLoop}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev'
              }}
            >
              {testi_items.map((item, i) => {
                const { desc, img, name, title } = item;
                return <SwiperSlide key={i}>
                  <div className="item">
                    <p>{desc}</p>
                    <div className="author-info clearfix">
                      <img src={img} alt="" className="author-img" />
                      <div className="name-info">
                        <h6 className="name">{name}</h6>
                        <span>{title}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <div className='swiper-controls d-flex align-items-center'>
                <div className='swiper-prev'><i className='flaticon-back'></i></div>
                <div className='swiper-next'><i className='flaticon-next'></i></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialOne;