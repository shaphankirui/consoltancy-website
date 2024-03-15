import React from 'react';
import { Footer, Header } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ContactBannerOne from '../../contact-banners/contact-banner-one';
import ProjectFullWidthArea from '../../projetcts/project-full-width-area';

const index = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <Breadcrumb title="Our markets" subtitle="Markets" />
      <ProjectFullWidthArea/>
      <ContactBannerOne />
      <Footer />
    </div>
  );
};

export default index;