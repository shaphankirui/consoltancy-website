import React from 'react';

function SingleWorkList({order,order_2,icon,title,sm_text,lists,shape }) {
  return (
    <div className="row single-work-list">
      <div className={`col-lg-6 ${order?order:''}`}>
        <div className="text-wrapper">
          <div className="icon-box">
            <img src={`/assets/images/icon/${icon}`} alt=""/>
          </div>
          <h2 className="title">{title}</h2>
          {sm_text && <p>{sm_text}</p>}
          <ul>
            {lists.map((l,i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
      </div>
      <div className={`col-lg-6 ${order_2?order_2:''}`}>
        <div className="img-box clearfix">
          <img src={`/assets/images/shape/${shape}`} alt="shape"/>
        </div>
      </div>
    </div>
  )
}

const SeoWorkProgress = () => {
  return (
    <>
      <div className="seo-work-progress">
        <div className="container">

          <SingleWorkList order="order-lg-2" order_2="order-lg-1" icon="icon12.svg" 
          title="Consultancy Services." sm_text="Gain a competitive edge and chart a course for success with our strategic consulting services." lists={['Strategic Consulting','Financial Advisory, Technology Solutions.']} shape="shape-3.svg" />

          <SingleWorkList icon="icon13.svg" title="Food Markets Services." lists={['Global Ingredient Sourcing','Market Trends Analysis, Brand Development and Marketing.']} shape="shape-4.svg" />

          <SingleWorkList order="order-lg-2" order_2="order-lg-1" icon="icon14.svg" 
          title="Job Finding Services." lists={[' Personalized Career Coaching','Recruitment and Talent Acquisition']} shape="shape-5.svg" />

        </div>
      </div>
    </>
  );
};

export default SeoWorkProgress;