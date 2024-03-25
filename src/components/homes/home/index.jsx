// import React, { useEffect } from 'react';
// import { Footer, Header } from '../../../layout';
// import BannerOne from '../../theme-banners/banner-one';
// import AboutOne from '../../abouts/about-one';
// import WhatWeDoOne from '../../what-we-do/what-we-do-1';
// import CounterOne from '../../counters/counter-one';
// import GalleryOne from '../../galleries/gallery-one';
// import PricingOne from '../../pricings/pricing-one';
// import TestimonialOne from '../../testimonials/testimonial-one';
// import BlogOne from '../../blogs/blog-one';
// import ContactBannerOne from '../../contact-banners/contact-banner-one';

// const HomeMain = () => {
//   return (
//     <div className="main-page-wrapper">
//       <Header />
//       <BannerOne />
//       <WhatWeDoOne />
//       <AboutOne />
//       <CounterOne />
//       <GalleryOne />
//       <PricingOne />
//       <TestimonialOne />
//       <BlogOne />
//       <ContactBannerOne />
//       <Footer />
//     </div>
//   );
// };

// export default HomeMain;

import React from 'react';
import { Footer, HeaderTwo } from '../../../layout';
import SeoPricing from '../../pricings/seo-pricing';
import TestimonialOne from '../../testimonials/testimonial-one';
import WhatWeDoTwo from '../../what-we-do/what-we-do-2';
import SeoContactBanner from '../../contact-banners/seo-contact-banner';
import SeoGoal from '../../goals/seo-goal';
import ServiceSeo from '../../services/service-seo';
import BannerTwo from '../../theme-banners/banner-two';
import SeoWorkProgress from '../../work-progress/seo-work-progress';

const HomeTwoMain = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTwo/>
      <BannerTwo/>
      <WhatWeDoTwo/>
      <SeoGoal/>
      <ServiceSeo/>
      <SeoWorkProgress/>
      {/* <SeoPricing/> */}
      <TestimonialOne/>
      <SeoContactBanner/>
      <Footer/>
    </div>
  );
};

export default HomeTwoMain;