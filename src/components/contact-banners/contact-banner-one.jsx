import Link from 'next/link';
import React from 'react';

const ContactBannerOne = () => {
  return (
    <div className="agn-contact-banner">
      <div className="container">
        <h2 className="title">Do you have any Food products that you want us to find you a market? <br />Contact us.</h2>
        <Link href="/contact">
          <a className="contact-button line-button-one">Contact Us</a>
        </Link>
      </div>
    </div>
  );
};

export default ContactBannerOne;