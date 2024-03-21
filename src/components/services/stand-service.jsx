import React from 'react';


function ServiceBlock({ img, title, subtitle }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="service-block" data-aos="fade-up"
        style={{ backgroundImage: `url(/assets/images/service/${img}.jpg)` }}>
        <div className="hover-content">
          <h6 className="title"><a href="#">{title}</a></h6>
          <p>{subtitle}</p>
          <a href="#" className="read-more"><i className="flaticon-next-1"></i></a>
        </div>
      </div>
    </div>
  )
}

const StandService = () => {
  return (
    <>
      <div className="our-service service-standard pt-150 pb-150">
        <div className="container">
          <div className="theme-title-three text-center mb-150">
            <h2 className="title">We can hepl you get a job of Your Dream.</h2>
            <p>Let us help you find the job you have been dreaming of.</p>
          </div>

          <div className="clearfix">
            <div className="row">
              <ServiceBlock img="1" title="Job Matching." subtitle="Utilizing algorithms or human resources expertise to match job seekers with suitable employment opportunities based on skills, experience, and preferences." />
              <ServiceBlock img="2" title="Resume Building." subtitle="Assisting job seekers in crafting compelling resumes and cover letters that effectively showcase their qualifications and experiences to potential employers." />
              <ServiceBlock img="3" title="Interview Preparation." subtitle="Providing guidance and resources to help job seekers prepare for interviews, including mock interviews, tips on presenting oneself professionally, and strategies for answering common interview questions." />
              <ServiceBlock img="4" title="Skill Development." subtitle="Offering training programs, workshops, or online courses to enhance job seekers' skills and qualifications, making them more competitive in the job market." />
              <ServiceBlock img="5" title="Networking Opportunities." subtitle="Facilitating networking events, job fairs, or online communities where job seekers can connect with employers, industry professionals, and peers to explore career opportunities and build professional relationships." />
              <ServiceBlock img="6" title="Career Counseling." subtitle="Providing personalized guidance and support to help job seekers identify their career goals, explore different career paths, and develop actionable plans for achieving their objectives." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandService;