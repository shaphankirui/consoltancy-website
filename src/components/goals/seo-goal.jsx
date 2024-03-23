import React from 'react';

const contents = {
  upper_title:'Marketing Gaol',
  main_title:'Best Market Research Tool for You.',
  sm_text:'Selecting the ideal market research tool is pivotal for optimizing agricultural food product marketing strategies, ensuring informed decision-making, and staying ahead in a competitive market landscape.',
  lists:[
    'In-depth Agricultural Data Analysis',
    'Tailored Features for Agriculture.',
    'Intuitive Interface for Farmers and Marketers.',
  ],
  btn_text:'Request  Consultation'
}
const {upper_title,main_title,btn_text,lists,sm_text} = contents;

const SeoGoal = () => {
  return (
    <>
      <div className="seo-our-goal">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-wrapper">
                <div className="theme-title-one title-underline">
                  <div className="upper-title">{upper_title}</div>
                  <h2 className="main-title">{main_title}</h2>
                </div>
                <p>{sm_text}</p>
                <ul className="list-item">
                  {lists.map((l,i) => <li key={i}>{l}</li>)}
                </ul>
                <a href="contact" className="request-button">{btn_text} 
                <i className="fa fa-angle-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div className="right-shape" data-aos="fade-left"></div>
        </div>
      </div>
    </>
  );
};

export default SeoGoal;